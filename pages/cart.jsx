import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import { addProduct } from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartInfo = useSelector((state) => state.cartInfo);
  // const choices = useSelector((state) => state.choices);

  console.log(cartInfo);

  let currentCart = cart.products.map((product) => ({
    name: product.name,
    img: product.img,
    _id: product._id,
  }));

  // let extraInfo = cartInfo.itemInfo.map((item) => ({
  //   price: item.finalPrice,
  //   choices: item.choices,
  //   _id: item._id,
  // }));

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
                    <span className={styles.selections}>
                      Good Lord, just show me the console.
                      {/* {extraInfo.choices.length === 0 ? (
                        <span>
                          No Extra Choices Available or Selected on this Item.
                        </span>
                      ) : (
                        extraInfo.choices.map((selection) => {
                          return (
                            <span key={selection._id}> {selection.text} </span>
                          );
                        })
                      )} */}
                    </span>
                  </td>
                  <td>
                    <span className={styles.price}>
                      ${/* {extraInfo.price} */}
                    </span>
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
