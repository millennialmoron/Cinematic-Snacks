import styles from "../../styles/Extras.module.css";

export default function Sauce({ sauceToMain }) {
  const sauce = [
    "Ketchup",
    "Spicy Ketchup",
    "Mayo",
    "Soy Sauce",
    "Ranch",
    "BBQ",
    "Garlic Butter",
    "House Sauce",
  ];

  const handleChange = (e, sauce) => {
    const checked = e.target.checked;
    if (checked) {
      setCounter(counter + 0.5);
    }
    if (!checked) {
      setCounter(counter - 0.5);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your sauce choice.</h3>
      <p className={styles.important}>
        Important Information: All of our sauces are available in a
        vegan-friendly, gluten-free option. Our house sauce is made in house,
        fresh daily, but the rest are certified GF, Vegan by manufacturers.
        Please see manufacturer's lables for more information.
      </p>
      <div className={styles.choices}>
        {sauce.map((sauce, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => sauceToMain(counter)}
          >
            <input
              type="checkbox"
              id={sauce}
              name={sauce}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, sauce)}
            />
            <label htmlFor={sauce}>{sauce}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
