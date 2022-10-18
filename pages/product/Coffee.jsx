import styles from "../../styles/Extras.module.css";

export default function Coffee({ coffeeToMain }) {
  const coffee = [
    "Regular with Cream and Sugar",
    "Regular without Cream and Sugar",
    "Decaf with Cream and Sugar",
    "Decaf without Cream and Sugar",
  ];

  const handleChange = (e, coffee) => {
    const checked = e.target.checked;
    if (checked) {
      setCounter(counter + 4.5);
    }
    if (!checked) {
      setCounter(counter - 4.5);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>
        Please select your coffee choice. (48oz, serves about 4)
      </h3>
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
