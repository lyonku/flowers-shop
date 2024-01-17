import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              Цветущая лавка
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i> г. Ставрополь
                пр. Карла Маркса 63 ТЦ "Аврора", 1 этаж
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:+7(911)300-30-30">
                  {" "}
                  +7 (911) 300-30-30
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a
                  className="text-decoration-none"
                  href="mailto:bloomingflower@gmail.com"
                >
                  {" "}
                  bloomingflower@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Продукты
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" to="/shop">
                  Букеты
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/shop">
                  Комнатные растения
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/shop">
                  Цветы упаковками
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/shop">
                  Монобукеты
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/shop">
                  Композиции
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-5">
            <h2 className="h2 text-light border-bottom pb-3 border-light">
              Доп. Информация
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <Link className="text-decoration-none" to="/">
                  Главная
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/about">
                  О нас
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/contacts">
                  Локация магазина
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/contacts">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row text-light">
          <div className="col-12 mb-3">
            <div className="w-100 my-3 border-top border-light"></div>
          </div>
          <div className="col-auto me-auto">
            <ul className="list-inline text-left footer-icons">
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="http://vk.com/"
                >
                  <i className="fab fa-vk fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://www.ok.com/"
                >
                  <i className="fab fa-odnoklassniki fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://tg.com/"
                >
                  <i className="fab fa-telegram fa-lg fa-fw"></i>
                </a>
              </li>
              <li className="list-inline-item border border-light rounded-circle text-center">
                <a
                  className="text-light text-decoration-none"
                  target="_blank"
                  href="https://web.whatsapp.com/"
                >
                  <i className="fab fa-whatsapp fa-lg fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <label className="sr-only" htmlFor="subscribeEmail">
              Email адрес
            </label>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control  border-light inputColor"
                id="subscribeEmail"
                placeholder="Email адрес"
              />
              <div className="input-group-text btn-success text-light">
                Подписаться
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
