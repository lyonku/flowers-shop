function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="mailto:bloomingflower@gmail.com"
              >
                bloomingflower@gmail.com
              </a>
              <i className="fa fa-phone mx-2"></i>
              <a
                className="navbar-sm-brand text-light text-decoration-none"
                href="tel:+7(911)300-30-30"
              >
                +7(911)300-30-30
              </a>
            </div>
            <div>
              <a className="text-light" href="https://vk.com/" target="_blank">
                <i className="fab fa-vk fa-sm fa-fw me-2"></i>
              </a>
              <a
                className="text-light"
                href="https://www.ok.com/"
                target="_blank"
              >
                <i className="fab fa-odnoklassniki fa-sm fa-fw me-2"></i>
              </a>
              <a className="text-light" href="https://tg.com/" target="_blank">
                <i className="fab fa-telegram fa-sm fa-fw me-2"></i>
              </a>
              <a
                className="text-light"
                href="https://web.whatsapp.com/"
                target="_blank"
              >
                <i className="fab fa-whatsapp fa-sm fa-fw"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
