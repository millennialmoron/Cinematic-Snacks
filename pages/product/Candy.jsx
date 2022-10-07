import styles from "../../styles/Extras.module.css";

export default function Candy() {
  const candy = [
    "Red Hots",
    "Reese's Pieces",
    "Milk Duds",
    "Raisinets",
    "M&M's",
    "Skittles",
    "Junior Mints",
    "Twizzlers",
    "Gobstoppers",
    "Sour Patch Kids",
    "Red Vines",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your candy choices.</h3>
      <p className={styles.important}>
        Important Information: Unfortunately we will not guarantee any of our
        packaged candies from manufacturers as GF or Vegan. Please check with
        manufacturers for more information on their specific products.
      </p>
      <div className={styles.choices}>
        {candy.map((candy, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={candy}
              name={candy}
              className={styles.checkbox}
            />
            <label htmlFor={candy}>{candy}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
