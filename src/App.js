import "./assets/css/bootstrap.min.css";
import "./assets/css/templatemo.css";
import "./assets/css/custom.css";
import "./assets/css/fontawesome.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import data from "./data.json";

import { Context } from ".";

import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Busket from "./components/Busket";

import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";
import ShopItemPage from "./pages/ShopItemPage";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  const { firestore } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [openBusket, setOpenBusket] = useState(false);
  const [busketItems, setBusketItems] = useState([]);
  const [flowers, setFlowers] = useState([]);
  const check = JSON.parse(localStorage.getItem("basket"));

  useEffect(() => {
    const ref = firestore.collection("flowers");
    let flowersData = [];
    ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        flowersData.push(doc.data());
      });
      setFlowers(flowersData);
    });
  }, []);

  useEffect(() => {
    if (check) {
      setBusketItems(check);
    }
    // console.log(check);
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(busketItems));
  }, [busketItems]);

  return (
    <div className="App">
      <Header />
      <Navbar
        open={open}
        setOpen={setOpen}
        busketItems={busketItems}
        setOpenBusket={setOpenBusket}
        openBusket={openBusket}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/shop"
          element={
            <Shop
              setBusketItems={setBusketItems}
              busketItems={busketItems}
              flowers={flowers}
            />
          }
        />
        <Route
          path="/item"
          element={
            <ShopItemPage
              setBusketItems={setBusketItems}
              busketItems={busketItems}
              flowers={flowers}
            />
          }
        />
        <Route path="/manager" element={<Admin />} />
      </Routes>
      <Footer />
      {open && <Modal setOpen={setOpen} flowers={flowers} />}
      {openBusket && (
        <Busket
          setOpenBusket={setOpenBusket}
          busketItems={busketItems}
          setBusketItems={setBusketItems}
        />
      )}
    </div>
  );
}

export default App;
