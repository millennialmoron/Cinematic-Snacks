import styles from "../../styles/Extras.module.css";

export default function Wine({ wineToMain }) {
  const wine = ["House Red", "House White", "Sparkling White Wine"];

  const handleChange = (e, wine) => {
    const checked = e.target.checked;
    if (checked) {
      setCounter(counter + 11);
    }
    if (!checked) {
      setCounter(counter - 11);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your wine choice.</h3>
      <p className={styles.important}>
        Important Information: You must be 21 or older to place the order and to
        receive the order from the delivery driver if the order contains
        alcohol. Delivery drivers are not allowed to deliver alcohol to any
        person who cannot produce an ID to demonstrate they are 21 or older upon
        delivery.
      </p>
      <div className={styles.choices}>
        {wine.map((wine, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => wineToMain(counter)}
          >
            <input
              type="checkbox"
              id={wine}
              name={wine}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, wine)}
            />
            <label htmlFor={wine}>{wine}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
