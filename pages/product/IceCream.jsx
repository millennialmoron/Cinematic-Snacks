import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function IceCream({ iceCreamToMain }) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const iceCream = [
    "Vanilla*",
    "Chocolate*",
    "Peanut Butter",
    "Coffee",
    "Mint Chocolate Chip",
    "Strawberry*",
    "Butter Pecan",
  ];

  const handleChange = (e, iceCream) => {
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
    "You are allowed one ice cream selection with this meal. Additional selections will be charged at $4.50 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select your ice cream choice. (Pint size, serves about 3)
      </h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: The starred ice creams are available in a vegan
        option. All of our ice creams are marked from our supplier as
        gluten-free. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {iceCream.map((iceCream, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => iceCreamToMain(counter)}
          >
            <input
              type="checkbox"
              id={iceCream}
              name={iceCream}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, iceCream)}
            />
            <label htmlFor={iceCream}>{iceCream}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
