import axios from "axios";
import { useAppSelector } from "../../../store/Store";
import scss from "./ListProduct.module.scss";
interface Idata {
  image: string;
  name: string;
  price: number;
  description: string;
}
const ListProduct = () => {
  const API = import.meta.env.VITE_API;

  const { data } = useAppSelector((s) => s.data);

 

  return (
    <div id={scss.ListProduct}>
      <div className="container">
        <div className={scss.content}>
          {data.map((item, ind) => (
            <div key={ind}>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
