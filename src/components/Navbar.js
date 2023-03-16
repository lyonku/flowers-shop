import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ open, setOpen, busketItems, setOpenBusket, openBusket }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand text-success logo h1 align-self-center"
            to="/"
          >
            Цветущая лавка
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={handleMenu}></span>
          </button>
          <div
            className={`align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between ${
              openMenu && "openMenu"
            }`}
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Главная
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    О нас
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Каталог
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacts">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <a
                className="nav-icon d-none d-lg-inline"
                onClick={() => setOpen(!open)}
                href="#"
              >
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </a>

              <a
                className="nav-icon position-relative text-decoration-none"
                onClick={() => setOpenBusket(!openBusket)}
                href="#"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                {busketItems?.length >= 1 && (
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {busketItems?.length}
                  </span>
                )}
              </a>
              <a
                className="nav-icon position-relative text-decoration-none"
                href="#"
              ></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
