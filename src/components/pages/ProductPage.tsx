import { FC } from "react";
import scss from "./HomePage.module.scss";

const ProductPage: FC = () => {
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>HomePage</div>
      </div>
    </section>
  );
};

export default ProductPage;
