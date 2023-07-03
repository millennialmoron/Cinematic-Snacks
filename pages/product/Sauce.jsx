import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateSauceChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Sauce({
  sauceToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const sauce = [
    "Ketchup",
    "Spicy Ketchup",
    "Mayo",
    "Soy Sauce",
    "Ranch",
    "BBQ",
    "Garlic Butter",
    "House Sauce",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    sauceToMain(newPrice);
  }

  const handleChange = (e, sauce, i) => {
    const checked = e.target.checked;
    const chosen = {
      sauceId: Math.round(i * Math.random() * 1000),
      text: sauce,
      price: price,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 0.5;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 0.5);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    sauceToMain(price);
  };

  function unclick(sauce) {
    return choices.filter((choice) => choice.text !== sauce);
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
    dispatch(updateSauceChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  let display = "";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your sauce choice.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} sauce selection(s) with this meal.
            Additional selections will be charged at $0.50 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All of our sauces are available in a
        vegan-friendly, gluten-free option. Our house sauce is made in house,
        fresh daily, but the rest are certified GF, Vegan by manufacturers.
        Please see manufacturer's lables for more information.
      </p>
      <div className={styles.choices}>
        {sauce.map((sauce, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={sauce}
              name={sauce}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, sauce, i)}
            />
            <label htmlFor={sauce}>{sauce}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
