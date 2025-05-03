import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Quotes from "./components/quotes";
import FavItems from "./components/favItems";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Quotes />
                </>
              }
            />
            <Route
              path="/quotes"
              element={
                <>
                  <Header />
                  <Quotes />
                </>
              }
            />
            <Route
              path="/favourite"
              element={
                <>
                  <Header />
                  <FavItems />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
