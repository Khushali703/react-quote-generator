import css from "../css/header.module.css";
import { FaRegHeart } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const fav = useSelector((store) => store.quote.favorites);

  return (
    <>
      <div className={css.header}>
        <Link className={css.heading} to="/quotes">
          <h1>QUOTES.</h1>
        </Link>

        <Link className={css.fav} to="/favourite">
          <FaRegHeart />
          <span className={`badge text-bg-danger ${css.badge}`}>
            {fav.length}
          </span>
        </Link>
      </div>
    </>
  );
};
export default Header;
