import { useRef, useState } from "react";
import styles from "../../styles/Extras.module.css";

export default function Pie({ pieToMain }) {
  const [price, setPrice] = useState(0);
  const counter = useRef(0);
  const pie = [
    "Apple*",
    "Cherry*",
    "Chocolate*",
    "Banana*",
    "Pecan",
    "Lemon Meringue",
  ];

  const handleChange = (e, pie) => {
    const checked = e.target.checked;
    if (checked) {
      counter.current++;
      let offset = counter.current - 1;
      if (offset > 0) {
        let newPrice = offset * 8;
        setPrice(newPrice);
      }
    } else {
      let offset = counter.current - 1;
      if (offset > 0) {
        setPrice(price - 8);
      }
      counter.current--;
    }
  };

  let display =
    "You are allowed one pie selection with this meal. Additional selections will be charged at $8 per choice. Current additional charges: $";

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pie choice.</h3>
      {counter.current > 1 ? (
        <div className={styles.over}>
          {display}
          {price}
        </div>
      ) : null}
      <p className={styles.important}>
        Important Information: All crusts are available in a gluten-free option.
        The starred pies are available in a vegan-friendly option. Call for
        additional details regarding what we use to keep our vegan/gluten-free
        options clean of cross-contaminates and deliciously healthy. Please be
        patient as these options may take longer to prepare and deliver.
      </p>
      <div className={styles.choices}>
        {pie.map((pie, i) => (
          <div
            className={styles.option}
            key={i}
            onClick={() => pieToMain(counter)}
          >
            <input
              type="checkbox"
              id={pie}
              name={pie}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, pie)}
            />
            <label htmlFor={pie}>{pie}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
