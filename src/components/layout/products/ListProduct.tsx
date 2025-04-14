import { useAppSelector } from "../../../store/Store";
import scss from "./ListProduct.module.scss";

interface IData {
  image: string;
  name: string;
  price: number;
  description: string;
}
const ListProduct = () => {
  const { data } = useAppSelector((s) => s.data);

  return (
    <div id={scss.ListProduct}>
      <div className="container">
        <div className={scss.content}>
          {data.length > 0 ? (
            data.map((item, ind) => (
              <div className={scss.card} key={ind}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>{item.price}₸</span>
              </div>
            ))
          ) : (
            <p>Нет товаров</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
