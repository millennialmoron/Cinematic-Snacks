import styles from "../../styles/Extras.module.css";
import { useRef, useState } from "react";

export default function Cheesecake({ cheesecakeToMain }) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const cheesecake = [
    "Original*",
    "Chocolate*",
    "Cherry Topping*",
    "Caramel Apple Topping*",
    "Oreo",
    "Berry Topping*",
    "Reese's Peanut Butter Cup",
  ];

  const handleChange = (e, cheesecake) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 13;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - 1;
      if (offset > 0) {
        setPrice(price - 13);
      }
      counter.current--;
    }
  };

  let display =
    "You are allowed one cheesecake selection with this meal. Additional selections will be charged at $13 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your cheesecake.</h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred cheesecakes are available in a vegan-friendly option. Call
        for additional details regarding what we use to keep our
        vegan/gluten-free options clean of cross-contaminates and deliciously
        healthy. Please be patient as these options may take longer to prepare
        and deliver.
      </p>
      <div className={styles.choices}>
        {cheesecake.map((cheesecake, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => cheesecakeToMain(counter)}
          >
            <input
              type="checkbox"
              id={cheesecake}
              name={cheesecake}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, cheesecake)}
            />
            <label htmlFor={cheesecake}>{cheesecake}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
