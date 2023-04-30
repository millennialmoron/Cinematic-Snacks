import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let currentCart = cart.products.map((product) => ({
    name: product.name,
    img: product.img,
    price: product.price,
    extras: product.extras,
    _id: product._id,
  }));

  console.log(currentCart);
  //IT'S SOMETHING WITH THE BODY SECTION OF THE TABLE. NOTHING IS SHOWING UP IN THE BODY SECTION...
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Selections</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {currentCart.map((product) => {
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td className={styles.name}>
                  <div>{product.name}</div>
                </td>
                <td>
                  <span className={styles.selections}>
                    {product.extras.map((selection) => {
                      <span key={selection._id}> {selection.text} </span>;
                    })}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
              </tr>;
            })}
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
