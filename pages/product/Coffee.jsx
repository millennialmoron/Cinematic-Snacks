import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCoffeeChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Coffee({
  coffeeToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const coffee = [
    "Regular with Cream and Sugar",
    "Regular without Cream and Sugar",
    "Decaf with Cream and Sugar",
    "Decaf without Cream and Sugar",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    let newPrice = price;
    coffeeToMain(newPrice);
  }

  const handleChange = (e, coffee, i) => {
    const checked = e.target.checked;
    const chosen = {
      coffeeId: Math.round(i * Math.random() * 1000),
      text: coffee,
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
      counter.current--;
      if (offset > 0) {
        setPrice(price - 4.5);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
    }
    coffeeToMain(price);
  };

  function unclick(coffee) {
    return choices.filter((choice) => choice.text !== coffee);
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
    dispatch(updateCoffeeChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  let display = "";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select your coffee choice. (48oz, serves about 4)
      </h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} coffee selection with this meal.
            Additional selections will be charged at $4.50 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: We have vegan-friendly, non-dairy cream.
      </p>
      <div className={styles.choices}>
        {coffee.map((coffee, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={coffee}
              name={coffee}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, coffee, i)}
            />
            <label htmlFor={coffee}>{coffee}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
