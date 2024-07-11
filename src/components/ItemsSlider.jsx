import { useState, useRef } from "react";
import iconLeft from "../assets/images/icon-left.svg";
import iconRight from "../assets/images/icon-right.svg";
import ProductCard from "../components/ProductCard";

const ItemsSlider = ({ title, items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const sliderRef = useRef(null);
  const lastItem = items.length - 1;

  function goLeft() {
    if (currentItem >= -1) {
      setCurrentItem(currentItem - 1);
      if (currentItem <= 0) {
        setCurrentItem(lastItem);
      }
      goCurrentItem();
    }
  }

  function goRight() {
    if (currentItem <= lastItem) {
      setCurrentItem(currentItem + 1);
      if (currentItem >= lastItem) {
        setCurrentItem(0);
      }
    }
    goCurrentItem();
  }

  function goCurrentItem() {
    const itemsLefts = () => {
      const lefts = [];
      sliderRef.current.querySelectorAll(".ProductCard").forEach((item) => {
        lefts.push(item.offsetLeft);
        console.log(item.offsetLeft);
      });
      return lefts;
    };
    sliderRef.current.querySelector(".slider-wrapper").scrollLeft =
      itemsLefts()[currentItem];
  }

  return (
    <section className="ItemsSlider" ref={sliderRef}>
      <h2 className="subtitle">{title}</h2>
      <div className="slider-wrapper">
        <ul className="slider-items">
          {items.map((item, index) => {
            return (
              <ProductCard
                product={item}
                key={item.id}
                active={index === currentItem ? "active" : ""}
              />
            );
          })}
        </ul>
      </div>
      <button
        className="slider-control left"
        aria-label="Voltar"
        onClick={goLeft}
      >
        <img src={iconLeft} alt="" />
      </button>
      <button
        className="slider-control right"
        aria-label="Avançar"
        onClick={goRight}
      >
        <img src={iconRight} alt="" />
      </button>
    </section>
  );
};

export default ItemsSlider;
