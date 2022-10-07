import styles from "../../styles/Extras.module.css";

export default function Sauce() {
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
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={sauce}
              name={sauce}
              className={styles.checkbox}
            />
            <label htmlFor={sauce}>{sauce}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
