import styles from "../styles/Featured.module.css";
import Image from "next/image";

export default function Featured() {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="left arrow" layout="fill" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image
              src="/img/featured.png"
              key={i}
              alt="Featured Deal of the Month!"
              layout="fill"
            />
          ))}
        </div>
      </div>
      <Image src="/img/arrowr.png" alt="right arrow" layout="fill" />
    </div>
  );
}
