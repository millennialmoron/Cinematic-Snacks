import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateWineChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Wine({
  wineToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const wine = ["House Red", "House White", "Sparkling White Wine"];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    wineToMain(newPrice);
  }

  const handleChange = (e, wine, i) => {
    const checked = e.target.checked;
    const chosen = {
      wineId: Math.round(i * Math.random() * 1000),
      text: wine,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 11;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 11);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    wineToMain(price);
  };

  function unclick(wine) {
    return choices.filter((choice) => choice.text !== wine);
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
    dispatch(updateWineChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  let display = "";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your wine choice.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} wine selection(s) with this meal.
            Additional selections will be charged at $11 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: You must be 21 or older to place the order and to
        receive the order from the delivery driver if the order contains
        alcohol. Delivery drivers are not allowed to deliver alcohol to any
        person who cannot produce an ID to demonstrate they are 21 or older upon
        delivery.
      </p>
      <div className={styles.choices}>
        {wine.map((wine, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={wine}
              name={wine}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, wine, i)}
            />
            <label htmlFor={wine}>{wine}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
