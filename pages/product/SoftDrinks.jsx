import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function SoftDrinks(props) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  let data = [];
  let transferInfo = {
    counter: counter.current,
    options: [],
    amount: 0,
  };
  const drink = [
    "Coca-Cola",
    "Diet Coke",
    "Coke Zero",
    "Sprite",
    "Orange Fanta",
    "Schwepps Ginger Ale",
    "Dr. Pepper",
    "A&W Root Beer",
  ];

  const handleChange = (e, drink) => {
    const checked = e.target.checked;
    let newData = [];
    if (checked) {
      newData.push(...data, drink);
      data = newData;
      counter.current++;
      transferInfo.counter = counter.current;
      transferInfo.options = data;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 1.5;
        setPrice(newPrice);
        transferInfo.amount = price;
      }
    } else {
      let offset = counter.current - 1;
      data.filter((item) => item != drink);
      transferInfo.options = data;
      if (offset > 0) {
        setPrice(price - 1.5);
        transferInfo.amount = price;
      }
      counter.current--;
      transferInfo.counter = counter.current;
    }
  };

  let display =
    "You are allowed one drink selection with this meal. Additional selections will be charged at $1.5 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choices.</h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <div className={styles.choices}>
        {drink.map((drink, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => props.drinkToMain(transferInfo)}
          >
            <input
              type="checkbox"
              id={drink}
              name={drink}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, drink)}
            />
            <label htmlFor={drink}>{drink}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
