import Image from "next/image";
import styles from "../styles/MenuItemCard.module.css";
import Link from "next/link";

export default function MenuItemCard({ item }) {
  let price = item.price;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link href={`/product/${item._id}`} passHref>
          <Image src={item.img} alt={item.name} width="500" height="500" />
        </Link>
      </div>
      <h1 className={styles.title}>{item.name}</h1>
      <span className={styles.price}>${price[0]}</span>
      <p className={styles.desc}>{item.desc}</p>
    </div>
  );
}
