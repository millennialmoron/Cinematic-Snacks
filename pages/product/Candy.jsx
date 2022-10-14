import { useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Candy(props) {
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

  let chosen = [];

  const handleChange = (e, candy) => {
    const checked = e.target.checked;
    if (checked) {
      chosen.push(candy);
      console.log(chosen);
    }
  };

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
          <div
            className={styles.option}
            key={i}
            onClick={props.candyToMain(chosen)}
            newChoices={chosen}
          >
            <input
              type="checkbox"
              id={candy}
              name={candy}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, candy)}
            />
            <label htmlFor={candy}>{candy}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
