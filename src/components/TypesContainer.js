import React, { useState } from "react";
import buket1 from "../assets/img/buket.png";
import buket2 from "../assets/img/buket2.png";
import buket3 from "../assets/img/buket3.png";
import { Link } from "react-router-dom";

function TypesContainer() {
  return (
    <section className="container py-5">
      <div className="row text-center pt-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Типы цветочных аранжировок</h1>
          <p>
            Мы создаем аранжировки различных типов и стилей, в зависимости от
            цели их создания и желаний клиента.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 p-5 mt-3">
          <Link to="/shop">
            <img
              src={buket2}
              className="rounded-circle img-fluid border imgRoundWidth"
            />
          </Link>
          <h5 className="text-center mt-3 mb-3">Букеты</h5>
          <p className="text-center">
            <Link className="btn btn-success" to="/shop">
              Приценится
            </Link>
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <Link to="/shop">
            <img
              src={buket3}
              className="rounded-circle img-fluid border imgRoundWidth"
            />
          </Link>
          <h2 className="h5 text-center mt-3 mb-3">Композиции</h2>
          <p className="text-center">
            <Link className="btn btn-success" to="/shop">
              Приценится
            </Link>
          </p>
        </div>
        <div className="col-12 col-md-4 p-5 mt-3">
          <Link to="/shop">
            <img
              src={buket1}
              className="rounded-circle img-fluid border imgRoundWidth"
            />
          </Link>
          <h2 className="h5 text-center mt-3 mb-3">Монобукеты</h2>
          <p className="text-center">
            <Link className="btn btn-success" to="/shop">
              Приценится
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TypesContainer;
