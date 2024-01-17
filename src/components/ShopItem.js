import { Link } from "react-router-dom";

function ShopItem({ item, setOpen, setBusketItems, busketItems, orderCount }) {
  const handleBusket = () => {
    let copy = Object.assign([], busketItems);
    const obj = busketItems.findIndex((o) => o.articul == item.articul);

    if (obj != -1) {
      copy[obj].count++;
    } else {
      item.count = 1;
      copy.push(item);
    }
    setBusketItems(copy);
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 product-wap rounded-0 border-light">
        <div className="card rounded-0">
          <Link
            to={"/item#" + item.articul}
            onClick={() => {
              setOpen && setOpen(false);
            }}
          >
            <img className="card-img rounded-0 img-fluid" src={item.imgs[0]} />
          </Link>
        </div>
        <div className="card-body">
          <Link
            to={"/item#" + item.articul}
            className="h3 text-decoration-none text-center"
            onClick={() => {
              setOpen && setOpen(false);
            }}
          >
            <p className="text-center mb-0 itemName">{item.name}</p>
          </Link>
          <p className="text-center mb-2 articul">
            {"Артикул: " + item.articul}
          </p>
          <p className="text-center mb-0">{item.price + " ₽"}</p>
        </div>
        {orderCount ? (
          <p className="text-center">{"Кол-во: " + orderCount}</p>
        ) : (
          <p className="text-center">
            <a className="btn btn-outline-secondary" onClick={handleBusket}>
              <i className="fa fa-shopping-cart mx-2"></i>В корзину
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default ShopItem;
