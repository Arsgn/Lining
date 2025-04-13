import { FC } from "react";
import scss from "./ProductPage.module.scss";

const ProductPage: FC = () => {
  return (
    <section className={scss.ProductPage}>
      <div className="container">
        <div className={scss.content}>ProductPage</div>
      </div>
    </section>
  );
};

export default ProductPage;
