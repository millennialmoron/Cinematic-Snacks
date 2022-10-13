import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/Footer.png"
          layout="fill"
          objectFit="contain"
          alt="Movie Theater Popcorn"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We make binge-worthy food so you can keep binging TV with ease.
          </h2>
          <p className={styles.subtext}>
            <em>Ask us about our specialty dietary options.</em>
          </p>
          <br />
          <h1 className={styles.title}>Looking for a job?</h1>
          <p className={styles.text}>
            We pay great, have awesome benefits, and care about our employees.
          </p>
          <p className={styles.text}>
            EMAIL JOBS@CINEMATICSNACKS.COM FOR MORE INFO!
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find out if we deliver near you:</h1>
          <p className={styles.text}>
            NEW YORK, NY || LOS ANGELES, CA || CHICAGO, IL || AUSTIN, TX
          </p>
          <p className={styles.text}>
            We're always expanding! So join our newsletter for updates on new
            cities we'll be expanding to soon -- LOOKING AT YOU PHOENIX AND
            SEATTLE! 👀
          </p>
          <h1 className={styles.title}>Hours of Delivery:</h1>
          <p className={styles.text}>SUNDAY-THURSDAY:</p>
          <p className={styles.text}>7am-11pm</p>
          <p className={styles.text}>FRIDAY & SATURDAY:</p>
          <p className={styles.text}>7am-1am</p>
        </div>
      </div>
    </div>
  );
}
