import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

export default function Product() {
  const [selections, setSelections] = useState(0);
  const item = {
    id: 1,
    img: "/img/Snack1.png",
    name: "CLASSIC CINEMATIC SNACKS",
    price: [8.99, 10.99],
    desc: "Settle into movie night with your favorite movie night snacks! Includes a giant tub of movie theater-styled, buttered popcorn (about the equivalent of 6 microwavable bags), 2 large 32oz fountain drinks (we carry most mainstream Coca-Cola products, as well as Dr. Pepper, and A&W Root Beer), and your choice of 2 packages of cinema-style candy packages (we have Red Hots, Reese's Pieces, Milk Duds, Raisinets, M&M's, Skittles, Junior Mints, Twizzlers, Gobstoppers, Sour Patch Kids, and Red Vines). **Please note that we have a vegan butter option. We cannot guarantee any candy is vegan or gluten free, however. Please see manufactures nutritional information for details.",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={item.img}
            alt={item.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}> ${item.price[selections]} </span>
        <p className={styles.desc}> {item.desc} </p>
        <h3 className={styles.choose}>Choose Options:</h3>
        <div className={styles.options}>
          <div className={styles.option} onClick={() => setSelections(0)}>
            <Image
              src="/img/standard.png"
              alt="standard option"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.number}>Standard Option</span>
          </div>
          <div className={styles.option} onClick={() => setSelections(1)}>
            <Image
              src="/img/vegan.png"
              alt="vegan option"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.number}>Vegan/Gluten Free Option*</span>
          </div>
        </div>
        <p className={styles.warn}>
          *Please note, we do our best to keep from cross contamination and
          strive to keep our customers safe and healthy. However, we are only
          responsible for items cooked in our kitchen. We cannot and will not
          verify the specific dietary wishes of customers with outside products
          we also sell. Please be mindful of any outside products with your
          order and check manufacturer's labels.
        </p>
      </div>
    </div>
  );
}
