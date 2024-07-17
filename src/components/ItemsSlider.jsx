import { useState, useRef } from "react";
import iconLeft from "../assets/images/icon-left.svg";
import iconRight from "../assets/images/icon-right.svg";
import ProductCard from "../components/ProductCard";

const ItemsSlider = ({ title, type, items }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const sliderRef = useRef(null);
  const lastItem = items.length - 1;

  function goLeft() {
    if (currentItem >= -1) {
      goItem(currentItem - 1);
    } else if (currentItem <= 0) {
      goItem(lastItem);
    }
  }

  function goRight() {
    if (currentItem <= lastItem) {
      goItem(currentItem + 1);
    } else if (currentItem >= lastItem) {
      goItem(0);
    }
  }

  function goItem(index) {
    setCurrentItem(index);

    const itemsOffsets = () => {
      const items = [];
      sliderRef.current.querySelectorAll(".ProductCard").forEach((item) => {
        items.push([item.offsetLeft, item.offsetWidth]);
      });
      return items;
    };

    const itemLeft = itemsOffsets()[currentItem][0];
    const itemWidth = itemsOffsets()[currentItem][1];
    const itemOffsett = itemLeft + itemWidth;

    sliderRef.current.querySelector(".slider-wrapper").scrollLeft = itemOffsett;

    console.log(itemLeft);
    console.log(itemWidth);
    console.log(itemOffsett);
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
