import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

import { Outlet } from "react-router-dom";
import Quotes from "./components/quotes";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
