import { Link } from "react-router-dom";

function BusketItem({ item, setOpenBusket, setBusketItems, busketItems }) {
  const handleDelete = () => {
    let copy = Object.assign([], busketItems);
    console.log(copy);
    const obj = busketItems.findIndex((o) => o.articul == item.articul);

    if (copy[obj].count > 1) {
      copy[obj].count--;
    } else {
      copy.splice(obj, 1);
    }

    setBusketItems(copy);
  };

  return (
    <div className="col-md-4 busketItem">
      <div className="card busketItem-wrap ">
        <div className="busketItem-left">
          <Link
            to={"/item#" + item.articul}
            onClick={() => {
              setOpenBusket && setOpenBusket(false);
            }}
          >
            <img className="busketItem-img" src={item.imgs[0]} />
          </Link>
          <div className="busketItem-text">
            <Link
              to={"/item#" + item.articul}
              className="h3 text-decoration-none text-center"
              onClick={() => {
                setOpenBusket && setOpenBusket(false);
              }}
            >
              <p className="text-center mb-0 itemName">{item.name}</p>
            </Link>
            <p className="text-center mb-2 articul">
              {"Артикул: " + item.articul}
            </p>
          </div>
        </div>

        <div className="busketItem-right">
          <div className="count">
            <p className="text-center mb-0">{`Кол-во: ${item.count}`}</p>
          </div>

          <h3 className="text-center mb-0">{item.price * item.count + " ₽"}</h3>
          <button
            type="button"
            className="btn-close"
            onClick={handleDelete}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default BusketItem;
