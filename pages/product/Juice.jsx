import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateJuiceChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Juice({
  juiceToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const juice = ["Apple", "Orange", "Cranberry", "Grape", "Fruit Punch"];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    juiceToMain(newPrice);
  }

  const handleChange = (e, juice, i) => {
    const checked = e.target.checked;
    const chosen = {
      juiceId: Math.round(i * Math.random() * 1000),
      text: juice,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 1.5;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 1.5);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    juiceToMain(price);
  };

  function unclick(juice) {
    return choices.filter((choice) => choice.text !== juice);
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
    dispatch(updateJuiceChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choice.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} juice selection(s) with this meal.
            Additional selections will be charged at $1.50 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All of our juices are marked from our supplier as
        GF and Vegan. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {juice.map((juice, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={juice}
              name={juice}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, juice, i)}
            />
            <label htmlFor={juice}>{juice}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
