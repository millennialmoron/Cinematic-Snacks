import styles from "../../styles/Extras.module.css";

export default function IceCream() {
  const iceCream = [
    "Vanilla*",
    "Chocolate*",
    "Peanut Butter",
    "Coffee",
    "Mint Chocolate Chip",
    "Strawberry*",
    "Butter Pecan",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your ice cream choice.</h3>
      <p className={styles.important}>
        Important Information: The starred ice creams are available in a vegan
        option. All of our ice creams are marked from our supplier as
        gluten-free. We are not responsible for individual ingredient
        expectations of things prepared outside our kitchen. Please check with
        the manufacturer for more details.
      </p>
      <div className={styles.choices}>
        {iceCream.map((iceCream, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={iceCream}
              name={iceCream}
              className={styles.checkbox}
            />
            <label htmlFor={iceCream}>{iceCream}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
