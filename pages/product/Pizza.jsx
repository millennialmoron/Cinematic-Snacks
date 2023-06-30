import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePizzaChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Pizza({
  currentItem,
  addedItem,
  removedItem,
  pizzaToMain,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const pizza = [
    "4-Cheese*",
    "Pepperoni",
    "Mushroom*",
    "Vegetarian*",
    "Meat-Lovers",
    "Everything",
    "Hawaiian",
  ];
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    pizzaToMain(newPrice);
  }

  const handleChange = (e, pizza, i) => {
    const checked = e.target.checked;
    const chosen = {
      pizzaId: Math.round(i * Math.random() * 1000),
      text: pizza,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 10;
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
        setPrice(price - 10);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
    }
    pizzaToMain(price);
  };

  function unclick(pizza) {
    return choices.filter((choice) => choice.text !== pizza);
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
    dispatch(updatePizzaChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pizza choices.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} pizza selections with this meal.
            Additional selections will be charged at $10 per choice. Current
            additional charges: ${price}.
          </span>
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred pizzas are available in a vegan-friendly option. Call for
        additional details regarding what we use to keep our vegan/gluten-free
        options clean of cross-contaminates and deliciously healthy. Please be
        patient as these options may take longer to prepare and deliver.
      </p>
      <div className={styles.choices}>
        {pizza.map((pizza, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={pizza}
              name={pizza}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, pizza, i)}
            />
            <label htmlFor={pizza}>{pizza}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
