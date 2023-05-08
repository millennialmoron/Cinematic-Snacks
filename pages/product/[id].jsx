import Image from "next/image";
import { useState } from "react";
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
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import { connect } from "mongoose";

//currently soft drinks is the only thing working almost fully. price is still off on this page by one click, but correct on the soft drink component page...??
//it may be too complicated to transfer price. that math may need to be done using the counter since it moves correctly between components...

export default function Product({ item }) {
  const [selections, setSelections] = useState(0);
  const display = [];
  const [price, setPrice] = useState(item.price[0]);
  const [data, setData] = useState(0);
  const dispatch = useDispatch();
  let selectedOptions = [];

  const changePrice = (number) => {
    setPrice(
      Number(parseFloat(Math.round((price + number) * 100) / 100).toFixed(2))
    );
  };

  const handleSelection = (index) => {
    const difference = item.price[index] - item.price[selections];
    setSelections(index);
    changePrice(difference);
  };

  // let finalPrice = price;
  // let choices = selectedOptions;
  const createSelector = Reselect.createSelector;
  const getItemInfo = createSelector([(state) => state.itemInfo], (itemInfo) =>
    itemInfo.filter((i) => i._id)
  );
  const state = {
    itemInfo: [
      {
        finalPrice: price,
        choices: selectedOptions,
        _id: item._id,
      },
    ],
  };
  function mapStateToProps(state, ownProps) {
    return { cartInfo: getItemInfo(state, ownProps) };
  }

  const handleClick = () => {
    mapStateToProps(item._id);
    dispatch(addProduct(item, selectedOptions, price));
  };

  //with maxes added in, consider going back and using to make components more modular and less hardcode?
  //Due to complications with State delaying count back, consider way of changing over to useRef?
  for (var i = 0; i <= item.extras.length; i++) {
    if (item.extras[i] === "candy") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Candy candyToMain={candyToMain} sendMaxChoice={data} />
        </div>
      );
      function candyToMain(candyData) {}
    }
    if (item.extras[i] === "cheesecake") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Cheesecake
            cheesecakeToMain={cheesecakeToMain}
            sendMaxChoice={data}
          />
        </div>
      );
      function cheesecakeToMain(cheesecakeData) {}
    }
    if (item.extras[i] === "coffee") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Coffee coffeeToMain={coffeeToMain} sendMaxChoice={data} />
        </div>
      );
      function coffeeToMain(coffeeData) {}
    }
    if (item.extras[i] === "extras") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Extras extrasToMain={extrasToMain} sendMaxChoice={data} />
        </div>
      );
      function extrasToMain(extrasData) {}
    }
    if (item.extras[i] === "ice cream") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <IceCream iceCreamToMain={iceCreamToMain} sendMaxChoice={data} />
        </div>
      );
      function iceCreamToMain(iceCreamData) {}
    }
    if (item.extras[i] === "juice") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Juice juiceToMain={juiceToMain} sendMaxChoice={data} />
        </div>
      );
      function juiceToMain(juiceData) {}
    }
    if (item.extras[i] === "pie") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Pie pieToMain={pieToMain} sendMaxChoice={data} />
        </div>
      );
      function pieToMain(pieData) {}
    }
    if (item.extras[i] === "pizza") {
      let maxChoice = item.maxPriceExtras[i];
      console.log(maxChoice);
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Pizza pizzaToMain={pizzaToMain} sendMaxChoice={data} />
        </div>
      );
      function pizzaToMain(pizzaData) {
        console.log(pizzaData);
      }

      // selectedOptions.push(pizzaData);
    }
    if (item.extras[i] === "sauce") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Sauce sauceToMain={sauceToMain} sendMaxChoice={data} />
        </div>
      );
      function sauceToMain(sauceData) {}
    }
    if (item.extras[i] === "wine") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Wine wineToMain={wineToMain} sendMaxChoice={data} />
        </div>
      );
      function wineToMain(wineData) {}
    }
    if (item.extras[i] === "drink") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <SoftDrinks drinkToMain={drinkToMain} sendMaxChoice={data} />
        </div>
      );
      function drinkToMain(drinkData) {
        console.log(drinkData);
        // if(counter > maxChoice){
        //   let priceAddOn = (counter-1)*1.5;
        //   changePrice(priceAddOn);
        // }
        // let drinkOptions = options;
      }

      // selectedOptions.push(drinkData);
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
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
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
