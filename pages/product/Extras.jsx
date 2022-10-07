import styles from "../../styles/Extras.module.css";

export default function Extras() {
  const extras = [
    "Fries*",
    "Tacos*",
    "Fruit Bowl*",
    "Popcorn*",
    "Chicken Fingers",
    "Nachos",
    "6-Pack of Local Brew Beer",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your drink choices.</h3>
      <p className={styles.important}>
        Important Information: You must be 21 or older to place the order and to
        receive the order from the delivery driver if your order includes
        alcohol. Delivery drivers are not allowed to deliver alcohol to any
        person who cannot produce an ID to demonstrate they are 21 or older upon
        delivery.
      </p>
      <p className={styles.important}>
        Additionally, the starred items are available in a gluten-free, vegan
        option. Call for additional details regarding what we use to keep our
        vegan/gluten-free options clean of cross-contaminates and deliciously
        healthy. Please be patient as these options may take longer to prepare
        and deliver.
      </p>
      <div className={styles.choices}>
        {extras.map((extras, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={extras}
              name={extras}
              className={styles.checkbox}
            />
            <label htmlFor={extras}>{extras}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
