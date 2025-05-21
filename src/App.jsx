import { Routes, Route, Link } from "react-router-dom";
import Main from "./Pages/Main";
import UserArray from "./Pages/UserArray";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <nav className="nav">
        <Link to="/">Головна</Link>
        <Link to="/user_array">Робота з даними</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user_array" element={<UserArray />} />
      </Routes>
    </div>
  );
}

export default App;
