import styles from "../../styles/Extras.module.css";

export default function Pie() {
  const pie = [
    "Apple*",
    "Cherry*",
    "Chocolate*",
    "Banana*",
    "Pecan",
    "Lemon Meringue",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pie choice.</h3>
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred pies are available in a vegan-friendly option. Call for
        additional details regarding what we use to keep our vegan/gluten-free
        options clean of cross-contaminates and deliciously healthy. Please be
        patient as these options may take longer to prepare and deliver.
      </p>
      <div className={styles.choices}>
        {pie.map((pie, i) => (
          <div className={styles.option} key={i}>
            <input
              type="checkbox"
              id={pie}
              name={pie}
              className={styles.checkbox}
            />
            <label htmlFor={pie}>{pie}</label>
          </div>
        ))}
      </div>
    </div>
  );
}