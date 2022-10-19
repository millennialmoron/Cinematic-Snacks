import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Coffee({ coffeeToMain }) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const coffee = [
    "Regular with Cream and Sugar",
    "Regular without Cream and Sugar",
    "Decaf with Cream and Sugar",
    "Decaf without Cream and Sugar",
  ];

  const handleChange = (e, coffee) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 4.5;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - 1;
      if (offset > 0) {
        setPrice(price - 4.5);
      }
      counter.current--;
    }
  };

  let display =
    "You are allowed one coffee selection with this meal. Additional selections will be charged at $4.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select your coffee choice. (48oz, serves about 4)
      </h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
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
            onClick={() => coffeeToMain(counter)}
          >
            <input
              type="checkbox"
              id={coffee}
              name={coffee}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, coffee)}
            />
            <label htmlFor={coffee}>{coffee}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
