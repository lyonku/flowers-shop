import "../assets/css/bootstrap.min.css";
import "../assets/css/templatemo.css";
import "../assets/css/custom.css";
import "../assets/css/fontawesome.min.css";
import "../App.css";

import lavka from "../assets/img/lavka.png";
function AboutUs() {
  return (
    <>
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>О нас</h1>
              <p>
                Цветущая лавка - это уникальное место, где жизнь превращается в
                цветочное искусство. Здесь каждый букет, композиция и растение
                создаются с любовью и заботой, чтобы подарить радость и красоту
                в вашу жизнь.
              </p>
              <p>
                Пройдя через двери Цветущей лавки, вы окунетесь в атмосферу
                красок и ароматов, которые наполнят вас энергией и оптимизмом на
                весь день. Вы можете выбрать что угодно из нашего широкого
                ассортимента растений и цветов, чтобы создать идеальный букет
                для любого случая - от простого подарка до свадебной церемонии.
              </p>
              <p>
                Кроме того, наши профессиональные флористы готовы создать
                уникальные композиции, которые станут не только великолепным
                украшением для вашего дома или офиса, но и символом ваших эмоций
                и чувств.
              </p>
              <p>
                Приходите в Цветущую лавку и насладитесь великолепием цветов и
                растений, которые помогут вам привнести красоту и радость в вашу
                жизнь.
              </p>
            </div>
            <div className="col-md-4">
              <img src={lavka} alt="" className="lavkaImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5">
        <div className="row text-center pt-5 pb-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Наш сервис</h1>
            <p>
              Мы заботимся о наших клиентах и стремимся сделать процесс покупки
              и доставки максимально удобным и приятным.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i className="fa fa-truck fa-lg"></i>
              </div>
              <h2 className="h5 mt-4 text-center">Доставка</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h2 className="h5 mt-4 text-center">Возврат</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i className="fa fa-percent"></i>
              </div>
              <h2 className="h5 mt-4 text-center">Акции</h2>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 pb-5">
            <div className="h-100 py-5 services-icon-wap shadow">
              <div className="h1 text-success text-center">
                <i className="fa fa-user"></i>
              </div>
              <h2 className="h5 mt-4 text-center">Сервис 24 часа</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
