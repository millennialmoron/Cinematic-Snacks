import { useRef, useState } from "react";
import { addToCart } from "../../redux/thunks";
import { Connect } from "react-redux";
import styles from "../../styles/Extras.module.css";

export default function Pizza({
  addedItem,
  removedItem,
  pizzaToMain,
  sendMaxChoice,
}) {
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
    pizzaToMain(counter, choices);
  }

  const handleChange = (e, pizza, i) => {
    const checked = e.target.checked;
    const chosen = {
      _id: Math.round(i * Math.random() * 1000),
      text: pizza,
    };
    if (checked) {
      counter.current++;
      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 10;
        setPrice(newPrice);
        setChoices(choices, chosen);
        addedItem(chosen);
        console.log(choices);
      }
    } else {
      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 10);
      }
      let deletedChoice = unclick(i);
      choices = deletedChoice;
      removedItem(choices.text);
      console.log(choices);
      counter.current--;
    }
  };

  function unclick(id) {
    return choices.filter((id) => choices._id != id);
  }

  let display =
    "You are allowed " +
    { maxChoice } +
    " pizza selections with this meal. Additional selections will be charged at $10 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pizza choices.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} pizza selections with this meal.
            Additional selections will be charged at $10 per choice. Current
            additional charges: ${price}
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
