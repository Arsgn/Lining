
import { FC } from "react";
import scss from "./AdminPage.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { addData } from "../../store/slices/ItemSlice";
import { useAppDispatch } from "../../store/Store";

interface IForm {
  image: string;
  name: string;
  price: number;
  description: string;
}

const ProductPage: FC = () => {
  const API = import.meta.env.VITE_API;
  const dispatch = useAppDispatch();
  const { handleSubmit, register, reset } = useForm<IForm>();

  async function createData() {
    try {
      let { data } = await axios.get(API);
      dispatch(addData(data));
      reset();
    } catch (error) {}
  }

  const 

  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>
          <div className="inputs">
            <form onSubmit={() => handleSubmit(createData)} action="">
              <input
                {...(register("image"), { required: true })}
                type="text"
                placeholder="image"
              />
              <input
                {...(register("name"), { required: true })}
                type="text"
                placeholder="name"
              />
              <input
                {...(register("price"), { required: true })}
                type="text"
                placeholder="price"
              />
              <input
                {...(register("description"), { required: true })}
                type="text"
                placeholder="description"
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
