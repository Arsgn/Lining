import { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className={scss.Layout}>
      <div className="container">
        <main>{children}</main>
      </div>
    </section>
  );
};

export default Layout;
