import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";

export default function Cart(props) {
  const cartItems = useSelector((state) => state.cart.products);
  const cartChoices = useSelector((state) => state.cart.choices);

  const finalCart = cartItems.map((product) => {
    const choices =
      cartChoices.find((choice) => choice._id === product._id)?.choices || [];
    return {
      ...product,
      choices,
    };
  });

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
              {console.log(finalCart)}
            </tr>
          </thead>
          <tbody>
            {finalCart.map((item) => (
              <tr className={styles.tr} key={item._id}>
                <td className={styles.imgContainer}>
                  <div className={styles.imgContainer}>
                    {console.log("item: " + item._id)}
                    <Image
                      src={item.img}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td className={styles.name}>{item.name}</td>
                <td>
                  {console.log("choices length: " + item.choices.length)}
                  {item.choices.length !== 0 ? (
                    <div>
                      {item.choices.map((choice) => (
                        <span className={styles.selections} key={choice}>
                          {choice}☆{console.log("choice: " + choice)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className={styles.selections}>
                      No Extra Choices Available/Selected on this Item.
                    </span>
                  )}
                </td>
                <td>
                  <span className={styles.price}>${item.price}</span>
                </td>
              </tr>
            ))}
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
