import { useEffect } from "react";
import css from "../css/quotes.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FetchQuote } from "../store/quoteSlice";
import { quoteActions } from "../store/quoteSlice";
const Quotes = () => {
  const dispatch = useDispatch();

  const { quote, status } = useSelector((store) => store.quote) || {
    quote: { text: "", author: "" },
    status: "idle",
  };

  useEffect(() => {
    dispatch(FetchQuote());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (!quote || !quote.text) return <p>No quote available</p>;

  const handleGetQuote = () => {
    dispatch(FetchQuote());
  };

  const handleAddToFav = () => {
    if (quote && quote.text) {
      dispatch(quoteActions.addToFav(quote)); //Ensure valid quote is added
      alert("Quote added to favorites!");
    } else {
      alert("No quote available to add!");
    }
  };

  return (
    <>
      <div className={css.quoteContainer}>
        <div className={css.left}>
          <RiDoubleQuotesL />
        </div>
        <div className={css.quote}>
          <p>{quote?.text || "loading..."} </p>
        </div>
        <div className={css.right}>
          <RiDoubleQuotesR />
        </div>
        <div className={css.authName}>
          <p>-- {quote?.author || "unknown author"}</p>
        </div>
        <hr />
        <div className={css.buttons}>
          <div className={css.btn1}>
            <button onClick={handleGetQuote}>Get a Quote</button>
          </div>
          <div className={css.btn2}>
            <button onClick={handleAddToFav}>Add to favoutite</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quotes;
