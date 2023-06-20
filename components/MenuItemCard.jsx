import Image from "next/image";
import styles from "../styles/MenuItemCard.module.css";
import Link from "next/link";

export default function MenuItemCard({ item }) {
  let price = item.price;
  return (
    <div className={styles.container}>
      <Link href={`/product/${item._id}`} passHref>
        <div>
          <div className={styles.imgContainer}>
            <Image src={item.img} alt={item.name} width="500" height="500" />
          </div>
          <h1 className={styles.title}>{item.name}</h1>
          <span className={styles.price}>${price[0]}</span>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
    </div>
  );
}
