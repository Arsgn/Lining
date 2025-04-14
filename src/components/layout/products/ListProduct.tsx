import axios from "axios";
import { addData } from "../../../store/slices/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import scss from "./ListProduct.module.scss";
import { useEffect } from "react";

const ListProduct = () => {
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((s) => s.data);
  console.log(data, "data");

  async function readData() {
    try {
      const { data } = await axios.get(API);
      dispatch(addData(data.data));
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteData(id: number) {
    try {
      let { data } = await axios.delete(`${API}/${id}`);
      readData();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    readData();
  }, []);
  return (
    <div id={scss.ListProduct}>
      <div className="container">
        <div className={scss.content}>
          <div  className={scss.blocks}>
            {data.map((item, index) => (
              <div className={scss.block} key={index}>
                <img src={item.image} alt={item.name} />
                <div className={scss.texts}>
                  <h1>{item.name}</h1>
                  <p>{item.price}$</p>
                </div>
                <button>Add</button>
                <div className={scss.btns}>
                  <button onClick={() => deleteData(item._id)}>delete</button>
                  <button>edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
