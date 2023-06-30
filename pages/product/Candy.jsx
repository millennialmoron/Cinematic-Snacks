import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCandyChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Candy({
  candyToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const candy = [
    "Red Hots",
    "Reese's Pieces",
    "Milk Duds",
    "Raisinets",
    "M&M's",
    "Skittles",
    "Junior Mints",
    "Twizzlers",
    "Gobstoppers",
    "Sour Patch Kids",
    "Red Vines",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    candyToMain(price);
  }

  const handleChange = (e, candy, i) => {
    const checked = e.target.checked;
    const chosen = {
      candyId: Math.round(i * Math.random() * 1000),
      text: candy,
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
    candyToMain(price);
  };

  function unclick(candy) {
    return choices.filter((choice) => choice.text !== candy);
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
    dispatch(updateCandyChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your candy choices.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} candy selections with this meal.
            Additional selections will be charged at $1.50 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: Unfortunately we will not guarantee any of our
        packaged candies from manufacturers as GF or Vegan. Please check with
        manufacturers for more information on their specific products.
      </p>
      <div className={styles.choices}>
        {candy.map((candy, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={candy}
              name={candy}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, candy, i)}
            />
            <label htmlFor={candy}>{candy}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
