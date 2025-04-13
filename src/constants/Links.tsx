import AdminPage from "../components/pages/AdminPage";
import HomePage from "../components/pages/HomePage";
import ProductPage from "../components/pages/ProductPage";

export const links = [
  {
    link: "/",
    title: "home",
    el: <HomePage />,
  },
  {
    link: "/form",
    title: "form",
    el: <AdminPage />,
  },
  {
    link: "/product",
    title: "product",
    el: <ProductPage />,
  },
];
