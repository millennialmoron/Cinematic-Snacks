import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Sauce({ sauceToMain }) {
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

  const handleChange = (e, sauce) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 0.5;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - 1;
      if (offset > 0) {
        setPrice(price - 0.5);
      }
      counter.current--;
    }
  };

  let display =
    "You are allowed one sauce selection with this meal. Additional selections will be charged at $0.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your sauce choice.</h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
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
            onClick={() => sauceToMain(counter)}
          >
            <input
              type="checkbox"
              id={sauce}
              name={sauce}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, sauce)}
            />
            <label htmlFor={sauce}>{sauce}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
