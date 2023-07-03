import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import { useState } from "react";

export default function Cart(props) {
  const cartItems = useSelector((state) => state.cart.products);
  const pizzaChoices = useSelector((state) => state.cart.pizzaChoices);
  const candyChoices = useSelector((state) => state.cart.candyChoices);
  const cheesecakeChoices = useSelector(
    (state) => state.cart.cheesecakeChoices
  );
  const coffeeChoices = useSelector((state) => state.cart.coffeeChoices);
  const drinkChoices = useSelector((state) => state.cart.drinkChoices);
  const extraChoices = useSelector((state) => state.cart.extraChoices);
  const iceCreamChoices = useSelector((state) => state.cart.iceCreamChoices);
  const juiceChoices = useSelector((state) => state.cart.juiceChoices);
  const pieChoices = useSelector((state) => state.cart.pieChoices);
  const sauceChoices = useSelector((state) => state.cart.sauceChoices);
  const wineChoices = useSelector((state) => state.cart.wineChoices);

  let priceAddOns = 0;

  const finalCart = cartItems.map((item) => {
    const choices = [];
    const pizzaChoice = pizzaChoices.find((choice) => choice._id === item._id);
    const candyChoice = candyChoices.find((choice) => choice._id === item._id);
    const cheesecakeChoice = cheesecakeChoices.find(
      (choice) => choice._id === item._id
    );
    const coffeeChoice = coffeeChoices.find(
      (choice) => choice._id === item._id
    );
    const drinkChoice = drinkChoices.find((choice) => choice._id === item._id);
    const extraChoice = extraChoices.find((choice) => choice._id === item._id);
    const iceCreamChoice = iceCreamChoices.find(
      (choice) => choice._id === item._id
    );
    const juiceChoice = juiceChoices.find((choice) => choice._id === item._id);
    const pieChoice = pieChoices.find((choice) => choice._id === item._id);
    const sauceChoice = sauceChoices.find((choice) => choice._id === item._id);
    const wineChoice = wineChoices.find((choice) => choice._id === item._id);

    if (pizzaChoice) choices.push(...pizzaChoice.choices);
    if (candyChoice) choices.push(...candyChoice.choices);
    if (cheesecakeChoice) choices.push(...cheesecakeChoice.choices);
    if (coffeeChoice) choices.push(...coffeeChoice.choices);
    if (drinkChoice) choices.push(...drinkChoice.choices);
    if (extraChoice) choices.push(...extraChoice.choices);
    if (iceCreamChoice) choices.push(...iceCreamChoice.choices);
    if (juiceChoice) choices.push(...juiceChoice.choices);
    if (pieChoice) choices.push(...pieChoice.choices);
    if (sauceChoice) choices.push(...sauceChoice.choices);
    if (wineChoice) choices.push(...wineChoice.choices);

    if (priceAddOns !== 0) {
      priceAddOns = 0;
    }

    if (pizzaChoice) {
      if (pizzaChoice.price) {
        let newPrice = pizzaChoice.price;
        // console.log(newPrice);
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (candyChoice) {
      if (candyChoice.price) {
        let newPrice = candyChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (cheesecakeChoice) {
      if (cheesecakeChoice.price) {
        let newPrice = cheesecakeChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (coffeeChoice) {
      if (coffeeChoice.price) {
        let newPrice = coffeeChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (drinkChoice) {
      if (drinkChoice.price) {
        let newPrice = drinkChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (iceCreamChoice) {
      if (iceCreamChoice.price) {
        let newPrice = iceCreamChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (juiceChoice) {
      if (juiceChoice.price) {
        let newPrice = juiceChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (pieChoice) {
      if (pieChoice.price) {
        let newPrice = pieChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (sauceChoice) {
      if (sauceChoice.price) {
        let newPrice = sauceChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }
    if (wineChoice) {
      if (wineChoice.price) {
        let newPrice = wineChoice.price;
        priceAddOns += newPrice;
        console.log(priceAddOns);
      }
    }

    console.log(priceAddOns);

    return {
      ...item,
      choices,
      priceAddOns,
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
                  {item.choices.length !== 0 ? (
                    <div>
                      {item.choices.map((choice) => (
                        <span className={styles.selections} key={choice}>
                          {choice} ☆{" "}
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
                  <span className={styles.price}>
                    ${(item.price + item.priceAddOns).toFixed(2)}
                  </span>
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
