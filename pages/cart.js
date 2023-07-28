import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Cart.module.css";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export default function Cart() {
  const clientId = process.env.CLIENT_ID;

  const dispatch = useDispatch();
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

  const [open, setOpen] = useState(false);
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

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
        // console.log(priceAddOns);
      }
    }
    if (candyChoice) {
      if (candyChoice.price) {
        let newPrice = candyChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (cheesecakeChoice) {
      if (cheesecakeChoice.price) {
        let newPrice = cheesecakeChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (coffeeChoice) {
      if (coffeeChoice.price) {
        let newPrice = coffeeChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (drinkChoice) {
      if (drinkChoice.price) {
        let newPrice = drinkChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (iceCreamChoice) {
      if (iceCreamChoice.price) {
        let newPrice = iceCreamChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (juiceChoice) {
      if (juiceChoice.price) {
        let newPrice = juiceChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (pieChoice) {
      if (pieChoice.price) {
        let newPrice = pieChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (sauceChoice) {
      if (sauceChoice.price) {
        let newPrice = sauceChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }
    if (wineChoice) {
      if (wineChoice.price) {
        let newPrice = wineChoice.price;
        priceAddOns += newPrice;
        // console.log(priceAddOns);
      }
    }

    // console.log(priceAddOns);

    return {
      ...item,
      choices,
      priceAddOns,
    };
  });

  const itemTotals = finalCart.map((item) => {
    const itemAmount = item.price;
    const itemExtra = item.priceAddOns;
    return itemAmount + itemExtra;
  });

  function totalCart(itemTotals) {
    let cartTotal = 0;

    for (let i = 0; i < itemTotals.length; i++) {
      cartTotal += itemTotals[i];
    }
    return cartTotal;
  }

  const numItems = finalCart.length;
  const total = totalCart(itemTotals);
  const tax = total * 0.0825;
  const delivery = numItems * 3.5;
  const finalTotal = total + tax + delivery;

  //PayPal Button Wrapper:
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

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
            <b className={styles.totalTextTitle}>Subtotal:</b>$
            {total.toFixed(2)}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Tax:</b>${tax.toFixed(2)}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>$
            {delivery <= 12 ? delivery.toFixed(2) : 12}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$
            {finalTotal.toFixed(2)}
          </div>

          {/* CURRENTLY SETTING UP SANDBOX AND TESTING PAYPAL */}
          {open ? (
            <div className={styles.paymentMethod}>
              <PayPalScriptProvider
                options={{
                  clientId: clientId,
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
              <button className={styles.cashButton}>CASH ON DELIVERY</button>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
