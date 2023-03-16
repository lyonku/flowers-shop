import { useEffect, useState, useContext } from "react";
import BusketItem from "../components/BusketItem";
import { Link } from "react-router-dom";
import { Context } from "..";

function Busket({ setOpenBusket, busketItems, setBusketItems }) {
  const [summ, setSumm] = useState(0);
  const [confirm, setConfirm] = useState(false);
  const [arrived, setArrived] = useState(false);
  const [onlinePayment, setOnlinePayment] = useState(true);
  const { firestore } = useContext(Context);

  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < busketItems?.length; i++) {
      sum += busketItems[i]?.price * busketItems[i]?.count;
    }
    setSumm(sum);
  }, [busketItems]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleConfirm = () => {
    setConfirm(true);
  };

  const handleArrived = (e) => {
    setArrived(!arrived);
  };

  const handleBuy = (event) => {
    event.preventDefault();
    let totalValues = Object.assign({}, formValues);
    totalValues.post = arrived;
    totalValues.onlinePayment = onlinePayment;
    totalValues.price = summ;
    totalValues.completed = false;
    totalValues.items = busketItems;

    firestore
      .collection("orders")
      .add(totalValues)
      .then((docRef) => {
        setBusketItems([]);
        setOpenBusket(false);
      });
  };

  return (
    <div className="modalFind">
      <div className="modalFind__container">
        <p className="fs-1 busketTitle">В корзине</p>
        <hr></hr>
        <div
          className={`input-group mb-3 busketTitle__container-wrap ${confirm}`}
        >
          <div className="modalFind__container-wrap2">
            {busketItems?.length >= 1 ? (
              <div className="row" id="row">
                {busketItems.map((item) => {
                  return (
                    <BusketItem
                      item={item}
                      setOpenBusket={setOpenBusket}
                      busketItems={busketItems}
                      setBusketItems={setBusketItems}
                    />
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="busketTotal-wrap">
          <hr></hr>
          {confirm ? (
            <div class="busketTotal order">
              <h4 class="mb-3">Форма заказа</h4>
              <form class="needs-validation " onSubmit={handleBuy}>
                <div className="left">
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="firstName" class="form-label">
                        Имя
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="firstName"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Имя обязательно</div>
                    </div>

                    <div class="col-sm-6">
                      <label for="lastName" class="form-label">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        required
                        name="surname"
                        value={formValues.surname}
                        onChange={handleChange}
                      />
                      <div class="invalid-feedback">Фамилия обязательна</div>
                    </div>
                    <div class="col-12">
                      <label for="phone" class="form-label">
                        Номер телефона
                      </label>
                      <input
                        type="phone"
                        class="form-control"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        placeholder="8 911 300 30 30"
                        required
                      />
                      <div class="invalid-feedback">
                        Введите корректный email
                      </div>
                    </div>
                    {/* <div class="col-12">
                      <label for="email" class="form-label">
                        Email <span class="text-muted">(Необязательно)</span>
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div class="invalid-feedback">
                        Введите корректный email
                      </div>
                    </div> */}
                  </div>

                  <hr class="my-4"></hr>

                  <div class="form-check mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="same-address"
                      onChange={handleArrived}
                    />
                    <label class="form-check-label" for="same-address">
                      Нужна ли доставка?
                    </label>
                  </div>
                  {arrived && (
                    <div class="col-12">
                      <label for="address" class="form-label">
                        Адрес
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder="г. Ставрополь ул. Мира 23"
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}
                        required
                      />
                      <div class="invalid-feedback">Введите адрес</div>
                    </div>
                  )}
                </div>
                <hr class="my-4"></hr>
                <div className="right">
                  <h4 class="mb-3">Оплата</h4>

                  <div class="my-3">
                    <div class="form-check">
                      <input
                        id="debit"
                        type="radio"
                        name="radio"
                        class="form-check-input"
                        required
                        onClick={() => {
                          setOnlinePayment(true);
                        }}
                      />
                      <label class="form-check-label" for="debit">
                        Дебетовая карта
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        id="paypal"
                        type="radio"
                        class="form-check-input"
                        name="radio"
                        required
                        onClick={() => {
                          setOnlinePayment(false);
                        }}
                      />
                      <label class="form-check-label" for="paypal">
                        При получении (карта, наличные)
                      </label>
                    </div>
                  </div>
                  <div class="row gy-3">
                    <div class="col-md-6">
                      <label for="cc-name" class="form-label">
                        Имя на карте
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        required={onlinePayment}
                      />
                      <small class="text-muted">Полное имя, как на карте</small>
                      <div class="invalid-feedback">Введите имя</div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-number" class="form-label">
                        Номер карты
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        required={onlinePayment}
                      />
                      <div class="invalid-feedback">Введи номер карты</div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-expiration" class="form-label">
                        Дата
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required={onlinePayment}
                      />
                      <div class="invalid-feedback">Введите дату на карте</div>
                    </div>

                    <div class="col-md-3">
                      <label for="cc-cvv" class="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required={onlinePayment}
                      />
                      <div class="invalid-feedback">Введите секретный ключ</div>
                    </div>
                  </div>

                  <hr class="my-4"></hr>
                  <button class="w-100 btn btn-primary btn-lg" type="submit">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="busketTotal">
              <Link to="/shop" onClick={() => setOpenBusket(false)}>
                <p className="h5 py-2">{"< Вернутся к покупкам"}</p>
              </Link>
              <div className="busketTotal-summ">
                <h2>
                  Сумма заказа: <b>{summ}</b> ₽
                </h2>
                <a
                  className="btn btn-outline-secondary"
                  onClick={handleConfirm}
                >
                  Оформить заказ
                </a>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          className="btn-close modalClose"
          onClick={() => setOpenBusket(false)}
        ></button>
      </div>
    </div>
  );
}

export default Busket;
