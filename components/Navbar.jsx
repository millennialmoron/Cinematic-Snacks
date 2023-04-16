import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.png" alt="phone icon" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now!</div>
          <div className={styles.text}>321.555.1212</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/img/logo.png"
            alt="Cinematic Snacks Logo"
            width="80px"
            height="90px"
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="/img/cart.png"
            alt="Cinematic Snacks Logo"
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </div>
  );
}
