import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateIceCreamChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function IceCream({
  iceCreamToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const iceCream = [
    "Vanilla*",
    "Chocolate*",
    "Peanut Butter",
    "Coffee",
    "Mint Chocolate Chip",
    "Strawberry*",
    "Butter Pecan",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    iceCreamToMain(newPrice);
  }

  const handleChange = (e, iceCream, i) => {
    const checked = e.target.checked;
    const chosen = {
      iceCreamId: Math.round(i * Math.random() * 1000),
      text: iceCream,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 4.5;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 4.5);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    iceCreamToMain(price);
  };

  function unclick(iceCream) {
    return choices.filter((choice) => choice.text !== iceCream);
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
    dispatch(updateIceCreamChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select your ice cream choice. (Pint size, serves about 3)
      </h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} ice cream selection(s) with this meal.
            Additional selections will be charged at $4.50 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: The starred ice creams are available in a vegan
        option. All of our ice creams are marked from our supplier as
        gluten-free. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {iceCream.map((iceCream, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={iceCream}
              name={iceCream}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, iceCream, i)}
            />
            <label htmlFor={iceCream}>{iceCream}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
