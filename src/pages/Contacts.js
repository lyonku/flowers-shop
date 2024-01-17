import {
  YMaps,
  Map,
  ZoomControl,
  Placemark,
  TypeSelector,
} from "@pbe/react-yandex-maps";
import React, { useState } from "react";

function Contacts() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(1);
  const [isValidName, setIsValidName] = useState(1);
  const [isValidMessage, setIsValidMessage] = useState(1);

  const handleChange = (e) => {
    console.log(e.target.id);
    if (e.target.id == "phone") {
      const phone = e.target.value;
      setPhoneNumber(phone);

      // проверяем номер телефона на соответствие формату
      const phoneRegex =
        /^(\+7|7|8)?[\s\-]?\(?(\d{3})\)?[\s\-]?(\d{3})[\s\-]?(\d{2})[\s\-]?(\d{2})$/;
      setIsValid(phoneRegex.test(phone));
    }
    if (e.target.id == "name") {
      const name = e.target.value;
      setName(name);
      setIsValidName(name.length > 1);
    }
    if (e.target.id == "message") {
      const message = e.target.value;
      setMessage(message);
      setIsValidMessage(message.length > 1);
    }
  };
  console.log(isValidMessage);
  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="col-md-6 m-auto text-center">
          <h1 className="h1">Контакты</h1>
          <p>
            Если возникли вопросы, или вы хотите индивидуальный дизайн, можете
            обращаться по следующему адресу, а так же можете отправить нам
            письмо, мы будем очень рады вам помоч.
          </p>
        </div>
      </div>
      <YMaps>
        <Map
          defaultState={{
            center: [45.049794, 41.983933],
            zoom: 17,
            controls: [],
          }}
          width={"100%"}
          height={370}
        >
          <ZoomControl options={{ float: "right" }} />
          <Placemark
            geometry={[45.049794, 41.983933]}
            properties={{
              iconCaption: "ТЦ 'Аврора', 1 этаж",
            }}
          />
          <TypeSelector options={{ float: "right" }} />
        </Map>
      </YMaps>
      <div className="container py-5">
        <div className="row py-5">
          <form className="col-md-9 m-auto" role="form">
            <div className="row">
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputname">Имя</label>
                <input
                  type="text"
                  className={`form-control mt-1 ${
                    !isValidName ? "is-invalid" : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Имя"
                  onBlur={handleChange}
                />
              </div>
              <div className="form-group col-md-6 mb-3">
                <label htmlFor="inputnumber">Номер</label>
                <input
                  type="tel"
                  className={`form-control mt-1 ${
                    !isValid ? "is-invalid" : ""
                  }`}
                  id="phone"
                  name="phone"
                  placeholder="Номер"
                  onChange={handleChange}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="inputmessage">Сообщение</label>
              <textarea
                className={`form-control mt-1 ${
                  !isValidMessage ? "is-invalid" : ""
                }`}
                id="message"
                name="message"
                placeholder="Сообщение"
                onBlur={handleChange}
                rows="8"
              ></textarea>
            </div>
            <div className="row">
              <div className="col text-end mt-2">
                <button
                  type="submit"
                  className="btn btn-success btn-lg px-3"
                  disabled={
                    isValid === true && message.length > 1 && name.length > 1
                      ? false
                      : true
                  }
                >
                  Отправить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
