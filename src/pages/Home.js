import "../assets/css/bootstrap.min.css";
import "../assets/css/templatemo.css";
import "../assets/css/custom.css";
import "../assets/css/fontawesome.min.css";
import "../App.css";

import RecomendSection from "../components/RecomendSection";
import TypesContainer from "../components/TypesContainer";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <TypesContainer />
      <RecomendSection />
    </>
  );
}

export default Home;
