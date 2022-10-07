import styles from "../../styles/Extras.module.css";

export default function Coffee() {
  const coffee = [
    "Regular with Cream and Sugar",
    "Regular without Cream and Sugar",
    "Decaf with Cream and Sugar",
    "Decaf without Cream and Sugar",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your coffee choice.</h3>
      <p className={styles.important}>
        Important Information: We have vegan-friendly, non-dairy cream.
      </p>
      <div className={styles.choices}>
        {coffee.map((coffee, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={coffee}
              name={coffee}
              className={styles.checkbox}
            />
            <label htmlFor={coffee}>{coffee}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
