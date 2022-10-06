import styles from "../../styles/SoftDrinks.module.css";

export default function SoftDrinks() {
  const drinks = [
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
    </div>
  );
}
