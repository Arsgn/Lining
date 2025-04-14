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

  const createData = async (formData: IForm) => {
    try {
      // Отправляем данные на сервер
      const response = await axios.post(API, formData);

      // Добавляем в store
      dispatch(addData(response.data)); // проверь, что приходит от API

      reset();
    } catch (error) {
      console.error("Ошибка при создании товара", error);
    }
  };

  return (
    <section className={scss.AdminPage}>
      <div className="container">
        <div className={scss.content}>
          <div className="inputs">
            <form onSubmit={handleSubmit(createData)}>
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="image"
              />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
              />
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="price"
              />
              <input
                {...register("description", { required: true })}
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
