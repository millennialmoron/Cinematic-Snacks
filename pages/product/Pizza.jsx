import styles from "../../styles/Extras.module.css";

export default function Pizza({ pizzaToMain }) {
  const pizza = [
    "4-Cheese*",
    "Pepperoni",
    "Mushroom*",
    "Vegetarian*",
    "Meat-Lovers",
    "Everything",
    "Hawaiian",
  ];

  const handleChange = (e, pizza) => {
    const checked = e.target.checked;
    if (checked) {
      setCounter(counter + 10);
    }
    if (!checked) {
      setCounter(counter - 10);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pizza choices.</h3>
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred pizzas are available in a vegan-friendly option. Call for
        additional details regarding what we use to keep our vegan/gluten-free
        options clean of cross-contaminates and deliciously healthy. Please be
        patient as these options may take longer to prepare and deliver.
      </p>
      <div className={styles.choices}>
        {pizza.map((pizza, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => pizzaToMain(counter)}
          >
            <input
              type="checkbox"
              id={pizza}
              name={pizza}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, pizza)}
            />
            <label htmlFor={pizza}>{pizza}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
