import { useEffect, useState, useContext } from "react";
import { Context } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import ShopItem from "../components/ShopItem";

function Shop({}) {
  const { firestore } = useContext(Context);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ref = firestore.collection("orders");
    let ordersData = [];
    ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let total = doc.data();
        total.id = doc.id;
        ordersData.push(total);
      });
      setOrders(ordersData);
    });
  }, []);

  const handleComplete = (id) => {
    let copy = Object.assign([], orders);
    for (const iterator of copy) {
      if (iterator.id == id) {
        iterator.completed = true;
      }
    }
    setOrders(copy);
    const ref = firestore.collection("orders");
    ref.doc(id).update({
      completed: true,
    });
  };

  return (
    <div className="container py-5">
      <div className="col-lg-9">
        <div className="row col-md-6 categories-wrap">
          <h1>Заказы: </h1>
          {orders.map((item, index) => {
            return (
              <div className="oneOrder" key={item.id}>
                <hr></hr>
                <h2 className="mb-3">{"Заказ: " + item.id}</h2>
                <h4 className="mb-3">
                  {`Состояние: ${item.completed ? "Завершен" : "Не завершен"}`}
                  {!item.completed && (
                    <a
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        handleComplete(item.id);
                        item.completed = true;
                      }}
                    >
                      Завершить
                    </a>
                  )}
                </h4>

                <div className="order-wrap">
                  <div className="mb-3">
                    <h1 className="h4">Общая информация: </h1>
                    <div>{"Имя: " + item.name}</div>
                    <div>{"Фамилия: " + item.surname}</div>
                    <div>{"Номер: " + item.phone}</div>
                  </div>

                  <div className="mb-3">
                    <h1 className="h4 ">Доставка: </h1>
                    {item.post ? (
                      <>
                        <div>
                          Доставка <b>необходима</b>
                        </div>{" "}
                        <div>Адрес: г. Михайловск СНИИСХ д.44</div>
                      </>
                    ) : (
                      <div>Доставка не нужна</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <h1 className="h4">Оплата: </h1>
                    <div>
                      Сумма: <b>{item.price + " Руб."}</b>
                    </div>
                    {item.onlinePayment ? (
                      <div>Оплата была произведена онлайн</div>
                    ) : (
                      <div>Оплата при получении</div>
                    )}
                  </div>
                </div>
                <h1 className="h4">Товары: </h1>
                <div className="Goods">
                  <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {item.items.map((i) => {
                      return (
                        <SwiperSlide className="SwiperSlide" key={i.articul}>
                          <ShopItem item={i} orderCount={i.count} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
