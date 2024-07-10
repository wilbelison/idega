import iconLeft from "../assets/images/icon-left.svg";
import iconRight from "../assets/images/icon-right.svg";
import ProductCard from "../components/ProductCard";

const Home = ({ catalog }) => {
  return (
    <main className="Home">
      <h1 className="title">Início</h1>
      <section className="ItemsSlider">
        <h2 className="subtitle">Items Slider</h2>
        <div className="slider-wrapper">
          <div className="slider-items">
            {catalog.map((item) => {
              return <ProductCard product={item} key={item.id} />;
            })}
          </div>
        </div>
        <button className="slider-control left" aria-label="Voltar">
          <img src={iconLeft} alt="" />
        </button>
        <button className="slider-control right" aria-label="Avançar">
          <img src={iconRight} alt="" />
        </button>
      </section>
      <section className="ItemsGrid">
        <h2 className="subtitle">Items Grid</h2>
        <ul className="grid-items">
          {(catalog || []).map((item) => {
            return <ProductCard product={item} key={item.id} />;
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;

/* controle de slider para os rows */

// function clearAllItems() {
//   const allItems = document.querySelectorAll(".row-item");
//   allItems.forEach((item) => {
//     item.classList.remove("row-current-item");
//   });
// }

// function goToItem(items, currentItem) {
//   clearAllItems();

//   items[currentItem].classList.add("row-current-item");

//   items[currentItem].scrollIntoView({
//     inline: "center",
//     block: "nearest",
//     behavior: "smooth",
//   });
// }

// const applyRowControls = (e) => {
//   const controls = e.querySelectorAll("button.row-control");
//   const items = e.querySelectorAll(".row-item");

//   const numItems = items.length;
//   let currentItem = -1;

//   controls.forEach((control) => {
//     control.addEventListener("click", () => {
//       const isLeft = control.classList.contains("row-arrow-left");
//       if (currentItem >= -1 && isLeft) {
//         currentItem--;
//         if (currentItem < 0) {
//           currentItem = numItems - 1;
//         }
//       } else if (currentItem <= numItems - 1 && !isLeft) {
//         currentItem++;
//         if (currentItem > numItems - 1) {
//           currentItem = 0;
//         }
//       }
//       goToItem(items, currentItem);
//     });

//     items.forEach((item, key) => {
//       item.addEventListener("click", (e) => {
//         e.preventDefault();
//         currentItem = key;
//         goToItem(items, key);
//       });
//       item.addEventListener("focus", (e) => {
//         e.preventDefault();
//         currentItem = key;
//         goToItem(items, key);
//       });
//     });
//   });
// };
