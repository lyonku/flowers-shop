import data from "../data.json";
import { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";

function Modal({ setOpen, flowers }) {
  const [value, setValue] = useState();
  const [result, setResult] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFind = () => {
    if (/^[0-9]+$/.test(value)) {
      setResult(
        flowers.filter(function (obj) {
          return obj.articul == value;
        })
      );
    } else {
      setResult(
        flowers.filter(function (obj) {
          return obj.name.toLowerCase().includes(value.toLowerCase());
        })
      );
    }
  };

  return (
    <div className="modalFind">
      <div className="modalFind__container">
        <div className="input-group mb-3 modalFind__container-wrap">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск по названию, и артиклу"
            onChange={handleChange}
            value={value}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleFind}
          >
            Найти
          </button>
          <div className="modalFind__container-wrap2">
            {result?.length >= 1 ? (
              <div>
                <p className="h5 py-2">Найдено следующее</p>
                <div className="row" id="row">
                  {result.map((item) => {
                    return (
                      <ShopItem
                        item={item}
                        setOpen={setOpen}
                        key={item.articul}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              result != 1 && <p className="h5 py-2">Ничего не найдено</p>
            )}
          </div>
        </div>
        <button
          type="button"
          className="btn-close modalClose"
          onClick={() => setOpen(false)}
        ></button>
      </div>
    </div>
  );
}

export default Modal;
