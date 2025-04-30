import { useDispatch, useSelector } from "react-redux";
import css from "../css/fav.module.css";
import { IoClose } from "react-icons/io5";
import { quoteActions } from "../store/quoteSlice";

const FavItems = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.quote.favorites) || [];

  return (
    <>
      <ul>
        {favorites.map((q) => (
          <li key={q.id}>
            <p className={css.text}>{q.text}</p>
            <p className={css.authName}>-- {q.author}</p>
            <div
              className={css.close}
              onClick={() => dispatch(quoteActions.removeFromFav(q.id))}
            >
              <IoClose />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default FavItems;
