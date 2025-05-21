import { Routes, Route, Link, Router } from "react-router-dom";
import Main from "./Pages/Main";
import UserArray from "./Pages/UserArray";
import "./App.css";

function App() {
  return (
    <Router basename="/HOMY-LIMITED">
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
    </Router>
  );
}

export default App;
