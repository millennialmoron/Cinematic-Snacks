import styles from "../../styles/Extras.module.css";

export default function Juice({ juiceToMain }) {
  const juice = ["Apple", "Orange", "Cranberry", "Grape", "Fruit Punch"];

  const handleChange = (e, juice) => {
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
      <h3 className={styles.choose}>Please select your drink choice.</h3>
      <p className={styles.important}>
        Important Information: All of our juices are marked from our supplier as
        GF and Vegan. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {juice.map((juice, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => juiceToMain(counter)}
          >
            <input
              type="checkbox"
              id={juice}
              name={juice}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, juice)}
            />
            <label htmlFor={juice}>{juice}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
