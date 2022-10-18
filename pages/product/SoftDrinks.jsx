import styles from "../../styles/Extras.module.css";

export default function SoftDrinks({ drinkToMain }) {
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
    if (checked) {
      setCounter(counter + 1.5);
    }
    if (!checked) {
      setCounter(counter - 1.5);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choices.</h3>
      <div className={styles.choices}>
        {drink.map((drink, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => drinkToMain(counter)}
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
