import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDrinkChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function SoftDrinks({
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
  drinkToMain,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  // let data = [];
  // let transferInfo = {
  //   counter: counter.current,
  //   options: [],
  //   amount: 0,
  // };
  const drink = [
    "Coca-Cola",
    "Diet Coke",
    "Coke Zero",
    "Sprite",
    "Orange Fanta",
    "Schwepps Ginger Ale",
    "Dr. Pepper",
    "A&W Root Beer",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    drinkToMain(newPrice);
  }

  const handleChange = (e, drink, i) => {
    const checked = e.target.checked;
    const chosen = {
      drinkId: Math.round(i * Math.random() * 1000),
      text: drink,
      price: price,
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
      // console.log("updated: " + updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      counter.current--;
      if (offset > 0) {
        setPrice(price - 1.5);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
    }
    drinkToMain(price);
  };

  function unclick(drink) {
    return choices.filter((choice) => choice.text !== drink);
  }

  function handleChoicesUpdate(currentChoices) {
    let choiceText = currentChoices;
    const textArray = choiceText.map((item) => {
      return item.text;
    });
    let newChoices = {
      _id: currentItem,
      choices: textArray,
      price: price,
    };
    // console.log("newChoices: " + newChoices);
    dispatch(updateDrinkChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  let display = "";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choices.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} drink selection(s) with this meal.
            Additional selections will be charged at $1.5 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <div className={styles.choices}>
        {drink.map((drink, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={drink}
              name={drink}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, drink, i)}
            />
            <label htmlFor={drink}>{drink}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
