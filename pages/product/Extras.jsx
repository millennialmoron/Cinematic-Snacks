import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Extras({ extrasToMain }) {
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

  const handleChange = (e, extras) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      setPrice(price + 6.5);
    } else {
      setPrice(price - 6.5);
      counter.current--;
    }
  };

  let display =
    "Selections will be charged at $6.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select any extras you'd like to order.
      </h3>
      {counter.current > 0 ? (
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
            onClick={() => extrasToMain(counter)}
          >
            <input
              type="checkbox"
              id={extras}
              name={extras}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, extras)}
            />
            <label htmlFor={extras}>{extras}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
