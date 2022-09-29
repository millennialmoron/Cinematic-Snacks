import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
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
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
}
