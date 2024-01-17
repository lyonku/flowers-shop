import data from "../data.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import ShopItem from "../components/ShopItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ShopItemPage({ setBusketItems, busketItems, flowers }) {
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState();
  const [currentImg, setCurrentImg] = useState();
  const [selectedArray, setSelectedArray] = useState([]);

  const width = window.innerWidth;
  console.log(width);
  const handleBusket = () => {
    let copy = Object.assign([], busketItems);
    const obj = busketItems.findIndex((o) => o.articul == currentItem.articul);

    if (obj != -1) {
      copy[obj].count++;
    } else {
      currentItem.count = 1;
      copy.push(currentItem);
    }
    setBusketItems(copy);
  };

  useEffect(() => {
    const hash = location.hash.slice(1);

    let shuffledArray = flowers.sort(() => Math.random() - 0.5);
    setSelectedArray(shuffledArray.slice(0, 10));

    for (const item of flowers) {
      if (item.articul == hash) {
        setCurrentItem(item);
        setCurrentImg(item.imgs[0]);
        return;
      }
    }
  }, [flowers, location]);

  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={currentImg}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
            <div className="row">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {currentItem?.imgs.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={item}
                        className="swiperImg"
                        onClick={() => setCurrentImg(item)}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{currentItem?.name}</h1>
                <p className="articul">{"Артикул: " + currentItem?.articul}</p>
                <p className="h5 py-2">{currentItem?.price + " ₽"}</p>
                <hr></hr>
                <p className="articul">
                  Цена действительна только для интернет-магазина и может
                  отличаться от цен в розничных магазинах
                </p>
                <hr></hr>
                <h4>{currentItem?.desc ? "Описание:" : ""}</h4>
                <p>{currentItem?.desc}</p>
                <h4>Ближайшая доставка</h4>
                <p className="h5 py-2">
                  <b>Бесплатная доставка</b> в пределах г.Ставрополя при сумме
                  заказа от 5000 руб*
                </p>
                <table className="table table-bordered ">
                  <tbody>
                    <tr>
                      <th></th>
                      <th>По Ставрополю</th>
                      <th>За Ставрополь</th>
                    </tr>
                    <tr>
                      <td>Сегодня 06:00 - 12:00</td>
                      <td>350 ₽</td>
                      <td>550 ₽</td>
                    </tr>
                    <tr>
                      <td>Сегодня 12:00 + 20:00</td>
                      <td>300 ₽</td>
                      <td>500 ₽</td>
                    </tr>
                    <tr>
                      <td>От 2 дней 06:00 - 12:00</td>
                      <td>220 ₽</td>
                      <td>330 ₽</td>
                    </tr>
                    <tr>
                      <td>От 2 дней 12:00 + 20:00</td>
                      <td>200 ₽</td>
                      <td>300 ₽</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-4">
                  <b>
                    *При сборном заказе (отгрузка из нескольких ПВЗ) стоимость
                    доставки будет выполнена оператором.
                  </b>
                </p>
                <h4>Бонусы</h4>
                <p className="h5 py-2">
                  1 бонус = 1 рубль, при первой покупке кэш-бек 30% на 30 дней
                </p>

                <div className="row pb-3">
                  <div className="col d-grid">
                    <button type="btn" className="btn btn-success btn-lg">
                      Купить
                    </button>
                  </div>
                  <div className="col d-grid">
                    <button
                      type="btn"
                      className="btn btn-success btn-lg"
                      onClick={handleBusket}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="py-5">
            <div className="container">
              <div className="row text-left p-2 pb-3">
                <h4>Также рекомендуем</h4>
              </div>
              <div className="recomendation">
                <Swiper
                  slidesPerView={width < 500 ? 1 : 4}
                  spaceBetween={20}
                  navigation={true}
                  pagination={true}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                >
                  {selectedArray.map((item) => {
                    return (
                      <SwiperSlide className="SwiperSlide" key={item.articul}>
                        <ShopItem
                          item={item}
                          setBusketItems={setBusketItems}
                          busketItems={busketItems}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ShopItemPage;
