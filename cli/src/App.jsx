import Boxd from "pages/Boxd.jsx";
import Home from "pages/Home.jsx";
import Jsonified from "pages/Jsonified.jsx";
import Spreadsheet from "pages/Spreadsheet.jsx";
import { Route, Routes } from "react-router-dom";
import InvalidRoute from "./pages/InvalidRoute";

export default function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spreadsheet" element={<Spreadsheet />} />
        <Route path="/boxd" element={<Boxd />} />
        <Route path="/jsonified" element={<Jsonified />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </div>
  );
}
