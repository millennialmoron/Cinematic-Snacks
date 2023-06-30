import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePieChoices } from "../../redux/cartSlice";
import styles from "../../styles/Extras.module.css";

export default function Pie({
  pieToMain,
  currentItem,
  addedItem,
  removedItem,
  sendMaxChoice,
}) {
  const dispatch = useDispatch();
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
  const [choices, setChoices] = useState([]);
  const maxChoice = sendMaxChoice;

  function handleClick(event) {
    const newPrice = price;
    pieToMain(newPrice);
  }

  const handleChange = (e, pie, i) => {
    const checked = e.target.checked;
    const chosen = {
      pieId: Math.round(i * Math.random() * 1000),
      text: pie,
    };

    if (checked) {
      const updatedChoices = [...choices, chosen];
      setChoices(updatedChoices);
      counter.current++;

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        let newPrice = offset * 8;
        setPrice(newPrice);
      }
      handleChoicesUpdate(updatedChoices);
      addedItem(updatedChoices);
    } else {
      const deletedChoice = unclick(chosen.text);
      setChoices(deletedChoice);

      let offset = counter.current - maxChoice;
      if (offset > 0) {
        setPrice(price - 8);
      }
      handleChoicesUpdate(deletedChoice);
      removedItem(deletedChoice);
      counter.current--;
    }
    pieToMain(price);
  };

  function unclick(pie) {
    return choices.filter((choice) => choice.text !== pie);
  }

  function handleChoicesUpdate(currentChoices) {
    let choiceText = currentChoices;
    const textArray = choiceText.map((item) => {
      return item.text;
    });
    let newChoices = {
      _id: currentItem,
      choices: textArray,
    };
    // console.log("newChoices: " + newChoices);
    dispatch(updatePieChoices(newChoices));
  }

  useEffect(() => {
    handleChoicesUpdate(choices);
  }, [choices]);

  return (
    <div className={styles.container}>
      <h3 className={styles.choose}>Please select your pie choice.</h3>
      {counter.current > maxChoice ? (
        <div className={styles.over}>
          <span>
            You are allowed {maxChoice} pie selection(s) with this meal.
            Additional selections will be charged at $8 per choice. Current
            additional charges: ${price}.
          </span>
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
            onClick={(e) => handleClick(e)}
          >
            <input
              type="checkbox"
              id={pie}
              name={pie}
              className={styles.checkbox}
              onChange={(e) => handleChange(e, pie, i)}
            />
            <label htmlFor={pie}>{pie}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
