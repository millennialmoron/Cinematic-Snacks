import styles from "../../styles/Extras.module.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCheescakeChoices } from "../../redux/cartSlice";

export default function Cheesecake({
  cheesecakeToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const cheesecake = [
    "Original*",
    "Chocolate*",
    "Cherry Topping*",
    "Caramel Apple Topping*",
    "Oreo",
    "Berry Topping*",
    "Reese's Peanut Butter Cup",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    cheesecakeToMain(newPrice);
  }

  const handleChange = (e, cheesecake, i) => {
    const checked = e.target.checked;
    const chosen = {
      cheesecakeId: Math.round(i * Math.random() * 1000),
      text: cheesecake,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 13;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 13);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    cheesecakeToMain(price);
  };

  function unclick(cheesecake) {
    return choices.filter((choice) => choice.text !== cheesecake);
  }

  function handleChoicesUpdate(currentChoices) {
    let choiceText = currentChoices;
    const textArray = choiceText.map((item) => {
      return item.text;
    });
    let newChoices = {
      _id: currentItem,
      choices: textArray,
    };
    // console.log("newChoices: " + newChoices);
    dispatch(updateCheesecakeChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your cheesecake.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} cheesecake selection with this meal.
            Additional selections will be charged at $13 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred cheesecakes are available in a vegan-friendly option. Call
        for additional details regarding what we use to keep our
        vegan/gluten-free options clean of cross-contaminates and deliciously
        healthy. Please be patient as these options may take longer to prepare
        and deliver.
      </p>
      <div className={styles.choices}>
        {cheesecake.map((cheesecake, i) => (
          <div className={styles.option} key={i} onClick={() => handleClick(e)}>
            <input
              type="checkbox"
              id={cheesecake}
              name={cheesecake}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, cheesecake, i)}
            />
            <label htmlFor={cheesecake}>{cheesecake}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
