import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Juice({ juiceToMain }) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const juice = ["Apple", "Orange", "Cranberry", "Grape", "Fruit Punch"];

  const handleChange = (e, juice) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 1.5;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - 1;
      if (offset > 0) {
        setPrice(price - 1.5);
      }
      counter.current--;
    }
  };

  let display =
    "You are allowed one juice selection with this meal. Additional selections will be charged at $1.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choice.</h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All of our juices are marked from our supplier as
        GF and Vegan. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {juice.map((juice, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => juiceToMain(counter)}
          >
            <input
              type="checkbox"
              id={juice}
              name={juice}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, juice)}
            />
            <label htmlFor={juice}>{juice}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
