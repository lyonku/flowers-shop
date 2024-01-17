import React, { useState } from "react";
import GvozdikaLotus from "../assets/img/GvozdikaLotus.png";
import GipsofilaBelaya from "../assets/img/GipsofilaBelaya.png";
import RozaExplorer from "../assets/img/RozaExplorer.png";
import { Link } from "react-router-dom";

function RecomendSection() {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Рекомендуемый продукт</h1>
            <p>
              Мы рекомендуем вам несколько наших, самых популярных товаров. У
              них максимально приятная цена, а также рейтинг
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <Link to="/item#125027">
                <img src={GvozdikaLotus} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">600 ₽</li>
                </ul>
                <Link
                  to="/item#125027"
                  className="h2 text-decoration-none text-dark"
                >
                  Букет Гвоздика "Лотус"
                </Link>
                <p className="card-text">
                  Настоящий символ изящества и чистоты, который обладает
                  невероятной красотой и утонченным ароматом. Идеально подойдет
                  для того, чтобы выразить свою любовь, благодарность или
                  уважение к кому-то особенному.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <Link to="/item#40245">
                <img src={GipsofilaBelaya} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">1200 ₽</li>
                </ul>
                <Link
                  to="/item#40245"
                  className="h2 text-decoration-none text-dark"
                >
                  Букет Гипсофила "Белая"
                </Link>
                <p className="card-text">
                  Воплощение нежности и чистоты, которое словно окутывает вас
                  своей легкой и воздушной аурой. Каждая маленькая цветочная
                  головка в этом букете напоминает облачко, которое легко и
                  нежно парит в воздухе, создавая атмосферу тепла и уюта.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
              <Link to="/item#17426">
                <img src={RozaExplorer} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                  </li>
                  <li className="text-muted text-right">2590 ₽</li>
                </ul>
                <Link
                  to="/item#17426"
                  className="h2 text-decoration-none text-dark"
                >
                  Букет Роза "Эксплорер"
                </Link>
                <p className="card-text">
                  Букет обладает роскошной красотой и изысканным ароматом,
                  который нежно обволакивает и пленяет с первых минут
                  знакомства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecomendSection;
