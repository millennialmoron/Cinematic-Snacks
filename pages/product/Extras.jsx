import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExtraChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Extras({
  extrasToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const extras = [
    "Fries* (1 serving)",
    "Tacos* (2 tacos)",
    "Fruit Bowl* (Large)",
    "Popcorn* (Large)",
    "Chicken Fingers (1 serving)",
    "Nachos (1 serving)",
    "4-Pack of Local Brew Beer",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    let newPrice = price;
    extrasToMain(newPrice);
  }

  const handleChange = (e, extras, i) => {
    const checked = e.target.checked;
    const chosen = {
      extraId: Math.round(i * Math.random() * 1000),
      text: extras,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;
      setPrice(price + 6.5);

      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);
      setPrice(price - 6.5);
      counter.current--;

      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
    }
    extrasToMain(price);
  };

  function unclick(extra) {
    return choices.filter((choice) => choice.text !== extra);
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
    dispatch(updateExtraChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  let display =
    "Selections will be charged at $6.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select any extras you'd like to order.
      </h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: You must be 21 or older to place the order and to
        receive the order from the delivery driver if your order includes
        alcohol. Delivery drivers are not allowed to deliver alcohol to any
        person who cannot produce an ID to demonstrate they are 21 or older upon
        delivery.
      </p>
      <p className={styles.important}>
        Additionally, the starred items are available in a gluten-free, vegan
        option. Call for additional details regarding what we use to keep our
        vegan/gluten-free options clean of cross-contaminates and deliciously
        healthy. Please be patient as these options may take longer to prepare
        and deliver.
      </p>
      <div className={styles.choices}>
        {extras.map((extras, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={extras}
              name={extras}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, extras, i)}
            />
            <label htmlFor={extras}>{extras}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
