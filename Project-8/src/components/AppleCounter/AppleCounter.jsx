import Buttons from "../Buttons/Buttons";
import leftArrowImage from "../../assets/images/left-arrow-removebg.png";
import rightArrowImage from "../../assets/images/right-arrow-removebg.png";
import AppleBasket from "../AppleBasket/AppleBasket";
import { useState } from "react";

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightBasketAppleCount, setrightBasketAppleCount] = useState(0);
  const [leftBasketAppleCount, setleftBasketAppleCount] = useState(
    totalAppleCount - rightBasketAppleCount
  );

  const leftButtonHandler = () => {
    if (rightBasketAppleCount > 0) {
      setrightBasketAppleCount(rightBasketAppleCount - 1);
      setleftBasketAppleCount(leftBasketAppleCount + 1);
    }
  };

  const rightButtonHandler = () => {
    if (leftBasketAppleCount > 0) {
      setrightBasketAppleCount(rightBasketAppleCount + 1);
      setleftBasketAppleCount(leftBasketAppleCount - 1);
    }
  };

  return (
    <>
    <p className="font-bold text-center text-6xl ">Apple Basket Counter</p>
    <section className="flex justify-between max-w-7xl mx-auto py-12">
      <AppleBasket applecount={leftBasketAppleCount} basketname={"Basket -1"} />
      <Buttons
        title="Left-Arrow"
        imageSrc={leftArrowImage}
        clickHandler={leftButtonHandler}
      />
      <Buttons
        title="Right-Arrow"
        imageSrc={rightArrowImage}
        clickHandler={rightButtonHandler}
      />
      <AppleBasket
        applecount={rightBasketAppleCount}
        basketname={"Basket - 2"}
      />
    </section>
    </>
  );
};

export default AppleCounter;
