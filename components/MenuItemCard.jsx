import Image from "next/image";
import styles from "../styles/MenuItemCard.module.css";

export default function MenuItemCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/Snack1.png" alt="Menu Item" width="500" height="500" />
      </div>
      <h1 className={styles.title}>Classic Cinematic Snacks</h1>
      <span className={styles.price}>$8.99</span>
      <p className={styles.desc}>
        Settle into movie night with your favorite movie night snacks! Includes
        a giant tub of movie theater-styled, buttered popcorn (about the
        equivalent of 6 microwavable bags), 2 large 32oz fountain drinks (we
        carry most mainstream Coca-Cola products, as well as Dr. Pepper, and A&W
        Root Beer), and your choice of 2 packages of cinema-style candy packages
        (we have Red Hots, Reese's Pieces, Milk Duds, Raisinets, M&M's,
        Skittles, Junior Mints, Gobstoppers, Sour Patch Kids, and Red Vines).
      </p>
    </div>
  );
}
