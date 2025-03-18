import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Spreadsheet from "./pages/spreadsheet";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },

  {
    path: "/spreadsheet",
    Component: Spreadsheet,
  },
]);
