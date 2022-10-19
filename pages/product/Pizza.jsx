import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Pizza({ pizzaToMain, sendMaxChoice }) {
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
  const maxChoice = sendMaxChoice;
  console.log(maxChoice);

  const handleChange = (e, pizza) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 10;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 10);
      }
      counter.current--;
    }
  };

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
            onClick={() => pizzaToMain(counter)}
          >
            <input
              type="checkbox"
              id={pizza}
              name={pizza}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, pizza)}
            />
            <label htmlFor={pizza}>{pizza}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
