import React, { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";

import CheryPie from "../assets/img/CheryPie.png";
import LediPlamya from "../assets/img/LedIPlamya.png";
import kompozitsiaSymka from "../assets/img/kompozitsiaSymka.png";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      name: "Букет Черничный пирог",
      title: "Черничный пирог - это настоящее воплощение нежности и романтики.",
      text: "Как только вы откроете коробку, вы почувствуете аромат свежих роз 'Муди Блюз', которые благодаря своему черничному цвету выглядят невероятно шикарно и завораживают своей красотой. Лизиантус добавляет нежности и легкости этому букету, а статица в тон голубой глазури создает впечатление россыпи цветов, которые будто бы ласкают взгляд. Ветки эвкалипта и листья фисташки дополняют композицию своими яркими зелеными оттенками, придавая букету дополнительную пышность и объем.",
      img: CheryPie,
    },
    {
      name: "Букет Лёд и Пламя",
      title:
        "Сочетание двух крайностей, которые вместе создают неповторимую гармонию",
      text: "В этом букете сочетаются яркие краски и деликатные оттенки, напоминающие о ледяных гранях и пылающих пламенах. Белоснежные розы и каллы, словно ледяные кристаллы, переливаются на солнце и создают неповторимую атмосферу свежести и чистоты. Но среди них также можно увидеть яркие оранжевые герберы, напоминающие о теплом пламени. Этот букет восхищает своей красотой и гармоничным сочетанием двух противоположных элементов. Он подарит радость и восторг своему получателю, привнося в жизнь яркость и тепло, смешанные с прохладой и свежестью.",
      img: LediPlamya,
    },
    {
      name: "Композиция Сумка Солёная Карамель",
      title: "Изысканное сочетание нежных оттенков и ярких цветов",
      text: "В этой композиции розы Шарман прекрасно гармонируют с диантусами Карамель, создавая прекрасный контраст между светлыми и темными оттенками. Белые лизиантусы добавляют нотки изысканности и элегантности, придавая композиции особую изюминку. А синий эрингиум, словно голубые капли росы, придают ей дополнительную глубину и таинственность. Сочетание всех этих цветов и растений, украшенных зелеными листьями эвкалипта, создает неповторимый образ, напоминающий соленую карамель. Эта композиция подарит массу положительных эмоций и оставит незабываемые впечатления.",
      img: kompozitsiaSymka,
    },
  ];
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, data]);

  useEffect(() => {
    let slider = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      10000
    );
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="section-center">
        {data.map((item, index) => {
          let position = "nextSlide";
          if (index === currentIndex) {
            position = "activeSlide";
          }

          if (
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return <CarouselItem data={item} position={position} key={index} />;
        })}
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        role="button"
        onClick={() => setCurrentIndex((prevState) => prevState - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        role="button"
        onClick={() => setCurrentIndex((prevState) => prevState + 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}

export default Carousel;
