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
import { connect, useDispatch } from "react-redux";
import { addProduct, updateItemChoices } from "../../redux/cartSlice";
import { addToCart } from "../../redux/thunks";

function Product({ item }) {
  const dispatch = useDispatch();
  const [selections, setSelections] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const display = [];
  const [price, setPrice] = useState(item.price[0]);
  const [data, setData] = useState(0);
  let pizzaOptions = [];
  const currentItem = item._id;

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

  function handleAddItem(choice) {
    console.log(choice.text);
    let newChoice = selectedOptions.filter((item) => item.text !== choice.text);
    setSelectedOptions(selectedOptions, newChoice);
    console.log(newChoice + " and selections state: " + selectedOptions);
  }

  function handleRemovedItem(choice) {
    console.log(choice);
    let deletedChoice = choice;
    let updatedSelection = selectedOptions.filter(
      (item) => item.text !== deletedChoice.text
    );
    setSelectedOptions(updatedSelection);
    console.log(updatedSelection + " and selections state: " + selectedOptions);
  }

  function handleClick(item) {
    const finalPrice = price;
    const cartItem = {
      _id: item._id,
      name: item.name,
      img: item.img,
      price: finalPrice,
    };

    dispatch(addProduct(cartItem));
  }

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
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
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
          <Coffee
            coffeeToMain={coffeeToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
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
          <Extras
            extrasToMain={extrasToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
        </div>
      );
      function extrasToMain(extrasData) {
        const addExtra = extrasData;
        changePrice(addExtra);
      }
    }
    if (item.extras[i] === "ice cream") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <IceCream
            iceCreamToMain={iceCreamToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
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
          <Juice
            juiceToMain={juiceToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
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
          <Pie
            pieToMain={pieToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
        </div>
      );
      function pieToMain(pieData) {}
    }
    if (item.extras[i] === "pizza") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Pizza
            pizzaToMain={pizzaToMain}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
            sendMaxChoice={data}
          />
        </div>
      );
      function pizzaToMain(newPrice) {
        let priceDifference = newPrice;
      }
    }

    if (item.extras[i] === "sauce") {
      let maxChoice = item.maxPriceExtras[i];
      const sendMaxChoice = () => {
        setData(maxChoice);
      };
      display.push(
        <div onClick={() => sendMaxChoice()}>
          <Sauce
            sauceToMain={sauceToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
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
          <Wine
            wineToMain={wineToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
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
          <SoftDrinks
            drinkToMain={drinkToMain}
            sendMaxChoice={data}
            addedItem={handleAddItem}
            removedItem={handleRemovedItem}
            currentItem={currentItem}
          />
        </div>
      );
      function drinkToMain(drinkData) {
        console.log(drinkData);
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
          <button
            className={styles.button}
            onClick={() => handleClick(item, pizzaOptions)}
          >
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

export default connect(null, { addToCart })(Product);
