import { createBrowserRouter } from "react-router-dom";
import Boxd from "./pages/Boxd";
import Home from "./pages/Home";
import Spreadsheet from "./pages/Spreadsheet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },

  {
    path: "/spreadsheet",
    Component: Spreadsheet,
  },
  {
    path: "/boxd",
    Component: Boxd,
  },
]);
