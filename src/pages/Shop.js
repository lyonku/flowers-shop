import { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";
import jsonData from "../data.json";

function Shop({ setBusketItems, busketItems, flowers }) {
  const [sort, setSort] = useState([]);
  const [PriceSort, setPriceSort] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(flowers);
  }, [flowers]);

  const handleCategory = (category) => {
    let copy = Object.assign([], sort);
    if (sort.includes(category)) {
      console.log(copy);
      let index = copy.indexOf(category);
      copy.splice(index, 1);
      setSort(copy);
    } else {
      setSort([...sort, category]);
    }
  };

  const handlePriceSort = (direction) => {
    let copy = Object.assign([], data);

    // сортируем массив объектов по полю price
    copy.sort((a, b) => a.price - b.price);
    // если параметр direction равен "down", то переворачиваем массив
    if (direction === "down") {
      copy.reverse();
    }
    setPriceSort(direction);
    setData(copy);
  };

  return (
    <div className="container py-5">
      <div className="col-lg-9">
        <div className="row col-md-6 categories-wrap">
          <div className="categories">
            <a
              className={`h3 text-dark text-decoration-none mr-5 category ${
                sort.includes("Букет") && "chosen"
              }`}
              onClick={() => handleCategory("Букет")}
            >
              Букеты
            </a>

            <a
              className={`h3 text-dark text-decoration-none mr-5 category ${
                sort.includes("Композиция") && "chosen"
              }`}
              onClick={() => handleCategory("Композиция")}
            >
              Композиции
            </a>
            <a
              className={`h3 text-dark text-decoration-none category ${
                sort.includes("Комнатное растение") && "chosen"
              }`}
              onClick={() => handleCategory("Комнатное растение")}
            >
              Комнатные растения
            </a>
          </div>

          <div className="priceSort">
            <div
              className={`priceSort-item ${PriceSort == "up" && "chosen"}`}
              onClick={() => {
                handlePriceSort("up");
              }}
            >
              Сначала недорогие <i className="fa fa-sort-amount-down-alt"></i>
            </div>
            <div
              className={`priceSort-item ${PriceSort == "down" && "chosen"}`}
              onClick={() => {
                handlePriceSort("down");
              }}
            >
              Сначала дорогие <i className="fa fa-sort-amount-up"></i>
            </div>
          </div>
        </div>
        <div className="row" id="row">
          {data.map((item, index) => {
            if (sort?.length >= 1) {
              if (sort.includes(item.type)) {
                console.log("1");
                return (
                  <ShopItem
                    item={item}
                    key={item.articul}
                    setBusketItems={setBusketItems}
                    busketItems={busketItems}
                  />
                );
              }
            } else {
              return (
                <ShopItem
                  item={item}
                  key={item.articul}
                  setBusketItems={setBusketItems}
                  busketItems={busketItems}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
