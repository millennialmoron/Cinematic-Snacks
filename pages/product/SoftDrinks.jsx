import styles from "../../styles/Extras.module.css";

export default function SoftDrinks() {
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

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choices.</h3>
      <div className={styles.choices}>
        {drink.map((drink, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={drink}
              name={drink}
              className={styles.checkbox}
            />
            <label htmlFor={drink}>{drink}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
