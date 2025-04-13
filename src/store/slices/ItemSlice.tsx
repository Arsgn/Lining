import { FC } from "react";
import scss from "./ItemSlice.module.scss";

const ItemSlice: FC = () => {
  return (
    <section className={scss.ItemSlice}>
      <div className="container">
        <div className={scss.content}>ItemSlice</div>
      </div>
    </section>
  );
};

export default ItemSlice;
