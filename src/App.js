import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Login from "./components/Login";
import QRGenerator from "./components/QRGenerator";
import QRScanner from "./components/QRScanner";
import Home from "./components/Home";

import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<QRScanner />} />
        <Route path="/generate" element={<QRGenerator />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
