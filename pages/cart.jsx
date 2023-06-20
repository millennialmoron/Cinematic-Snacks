import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";

export default function Cart(props) {
  const cartItems = useSelector((state) => state.cart.products);
  const cartPrice = useSelector((state) => state.cart.price);
  const cartSelections = useSelector((state) => state.cart.choices);

  console.log(cartItems);
  console.log(cartPrice);
  console.log(cartSelections);

  let currentCart = cartItems.map((product) => ({
    name: product.name,
    img: product.img,
    _id: product._id,
    price: product.price,
  }));

  let currentSelections = cartSelections.map((choice) => ({
    text: choice.text,
    _id: choice._id,
  }));

  //it is trying to grab selections from [id] but it hasn't yet successfully grabbed them. there seems to be an issue wherein the object selected is temporarily stored and visible, but not permanently, even using state...

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
              return (
                <tr className={styles.tr} key={product._id}>
                  <td className={styles.imgContainer}>
                    <div className={styles.imgContainer}>
                      <Image
                        src={product.img}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </td>
                  <td className={styles.name}>{product.name}</td>
                  <td>
                    {currentSelections.length != 0 ? (
                      <ul>
                        {currentSelections.map((choice) => {
                          return <li key={choice._id}>{choice.text}</li>;
                        })}
                      </ul>
                    ) : (
                      <span className={styles.selections}>
                        No Extra Choices Available/Selected on this Item.
                      </span>
                    )}
                  </td>
                  <td>
                    <span className={styles.price}>${product.price}</span>
                  </td>
                </tr>
              );
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
