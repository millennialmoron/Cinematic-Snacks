import Image from "next/image";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Selections</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/Snack1.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CLASSIC CINEMATIC SNACKS</span>
              </td>
              <td>
                <span className={styles.selections}>
                  Coke Zero, Dr. Pepper, Milk Duds, Sour Patch Kids
                </span>
              </td>
              <td>
                <span className={styles.price}>$8.99</span>
              </td>
              <td>
                <span className={styles.total}>$8.99</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/Snack1.png"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CLASSIC CINEMATIC SNACKS</span>
              </td>
              <td>
                <span className={styles.selections}>
                  Coke Zero, Dr. Pepper, Milk Duds, Sour Patch Kids
                </span>
              </td>
              <td>
                <span className={styles.price}>$8.99</span>
              </td>
              <td>
                <span className={styles.total}>$8.99</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$24.50
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Tax:</b>$1.96
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>$5.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$31.46
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
