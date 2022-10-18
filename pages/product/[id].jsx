import Image from "next/image";
import { useRef, useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from "axios";
import Candy from "./Candy";
import SoftDrinks from "./SoftDrinks";
import Cheesecake from "./Cheesecake";
import Coffee from "./Coffee";
import Extras from "./Extras";
import IceCream from "./IceCream";
import Juice from "./Juice";
import Pie from "./Pie";
import Pizza from "./Pizza";
import Sauce from "./Sauce";
import Wine from "./Wine";

export default function Product({ item }) {
  const [selections, setSelections] = useState(0);
  const display = [];
  const [price, setPrice] = useState(item.prices[0]);
  const [data, setData] = useState(0);

  const changePrice = (number) => {
    setPrice(
      Number(parseFloat(Math.round((price + number) * 100) / 100).toFixed(2))
    );
  };

  const handleSelection = (index) => {
    const difference = item.prices[index] - item.prices[selections];
    setSelections(index);
    changePrice(difference);
  };

  //price up working, but not down. finish the math for the other components next, then move to uncheck button.

  for (var i = 0; i <= item.extras.length; i++) {
    if (item.extras[i] === "candy") {
      let count = 0;
      display.push(<Candy candyToMain={candyToMain} />);
      function candyToMain(candyData) {
        setData(candyData);
        console.log(candyData + " and " + data);
        if (data > count) {
          count++;
          let offset = count - 2;
          if (offset > 0) {
            let newPrice = offset * 1.5;
            changePrice(newPrice);
          }
        } else if (data < count) {
          let offset = count - data;
          let newPrice = offset * -1.5;
          changePrice(newPrice);
          count--;
        }
      }
    }
    if (item.extras[i] === "cheesecake") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Cheesecake cheesecakeToMain={cheesecakeToMain} />);
      function cheesecakeToMain(cheesecakeData) {
        setData(cheesecakeData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "coffee") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Coffee coffeeToMain={coffeeToMain} />);
      function coffeeToMain(coffeeData) {
        setData(coffeeData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "extras") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Extras extrasToMain={extrasToMain} />);
      function extrasToMain(extrasData) {
        setData(extrasData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "ice cream") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<IceCream iceCreamToMain={iceCreamToMain} />);
      function iceCreamToMain(iceCreamData) {
        setData(iceCreamData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "juice") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Juice juiceToMain={juiceToMain} />);
      function juiceToMain(juiceData) {
        setData(juiceData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "pie") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Pie pieToMain={pieToMain} />);
      function pieToMain(pieData) {
        setData(pieData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "pizza") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Pizza pizzaToMain={pizzaToMain} />);
      function pizzaToMain(pizzaData) {
        setData(pizzaData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "sauce") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Sauce sauceToMain={sauceToMain} />);
      function sauceToMain(sauceData) {
        setData(sauceData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "wine") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<Wine wineToMain={wineToMain} />);
      function wineToMain(wineData) {
        setData(wineData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
    if (item.extras[i] === "drink") {
      let maxPrice = item.maxPriceExtras[i];
      display.push(<SoftDrinks drinkToMain={drinkToMain} />);
      function drinkToMain(drinkData) {
        setData(drinkData);
        console.log(data);
        let addOns = data;
        if (addOns > 0) {
          console.log(addOns);
          changePrice(addOns);
        }
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={item.img}
            alt={item.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}> ${price} </span>
        <p className={styles.desc}> {item.desc} </p>
        <h3 className={styles.choose}>Choose Options:</h3>
        <div className={styles.options}>
          <div className={styles.option} onClick={() => handleSelection(0)}>
            <Image
              src="/img/standard.png"
              alt="standard option"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.number}>Standard Option</span>
          </div>
          <div className={styles.option} onClick={() => handleSelection(1)}>
            <Image
              src="/img/vegan.png"
              alt="vegan option"
              layout="fill"
              objectFit="contain"
            />
            <span className={styles.number}>Vegan/Gluten Free Option*</span>
          </div>
        </div>
        <p className={styles.warn}>
          *Please note, we do our best to keep from cross-contamination and
          strive to keep our customers safe and healthy. However, we are only
          responsible for items cooked in our kitchen. We cannot and will not
          verify the specific dietary wishes of customers with outside products
          we also sell. Please be mindful of any outside products with your
          order and check manufacturer's labels.
        </p>
        {display.map((display, i) => (
          <div key={i}>{display}</div>
        ))}
        <div className={styles.add}>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      item: res.data,
    },
  };
};
