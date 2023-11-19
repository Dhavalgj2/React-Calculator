import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [clickedKey, setClickedKey] = useState("");
  const numberClickHandler = (e) => {
    setClickedKey((prevClickedKey) => prevClickedKey + e.target.value);
  };

  const operatorClickHandler = (e) => {
    setClickedKey((prevClickedKey) => prevClickedKey + e.target.value);
  };
  console.log(clickedKey);
  return (
    <div className={styles["calculator-container"]}>
      <div className={styles["calc-screen"]}>{clickedKey}</div>
      <div className={styles["calc-keypad"]}>
        <div className={styles["input-keypad"]}>
          <button>C</button>
          <button>+</button>
          <button>%</button>
          <button value="1" onClick={numberClickHandler}>
            1
          </button>
          <button value="2" onClick={numberClickHandler}>
            2
          </button>
          <button value="3" onClick={numberClickHandler}>
            3
          </button>
          <button value="4" onClick={numberClickHandler}>
            4
          </button>
          <button value="5" onClick={numberClickHandler}>
            5
          </button>
          <button value="6" onClick={numberClickHandler}>
            6
          </button>
          <button value="7" onClick={numberClickHandler}>
            7
          </button>
          <button value="8" onClick={numberClickHandler}>
            8
          </button>
          <button value="9" onClick={numberClickHandler}>
            9
          </button>
          <button
            value="0"
            onClick={numberClickHandler}
            className={styles["item-0"]}
          >
            0
          </button>
          <button>.</button>
        </div>
        <div className={styles["operator-keypad"]}>
          <button value="+" onClick={operatorClickHandler}>
            +
          </button>
          <button value="-" onClick={operatorClickHandler}>
            -
          </button>
          <button value="%" onClick={operatorClickHandler}>
            %
          </button>
          <button value="X" onClick={operatorClickHandler}>
            x
          </button>
          <button value="=" onClick={operatorClickHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
