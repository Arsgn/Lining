import AdminPage from "../components/pages/AdminPage";
import HomePage from "../components/pages/HomePage";
import ProductPage from "../components/pages/ProductPage";

export const links = [
  {
    link: "/",
    title: "Home",
    el: <HomePage />,
  },
  {
    link: "/product",
    title: "Product",
    el: <ProductPage />,
  },
  {
    link: "/admin",
    title: "Admin",
    el: <AdminPage />,
  },
];
