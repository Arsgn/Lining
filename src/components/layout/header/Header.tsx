import { FC } from "react";
import scss from "./Header.module.scss";
import { SiLining } from "react-icons/si";
import { links } from "../../../constants/Links";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <SiLining className={scss.icons} />
          <div className={scss.block}>
            {links.map((item, index) => (
              <nav key={index}>
                <Link className={scss.first} to={item.link}>
                  {item.title}
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
