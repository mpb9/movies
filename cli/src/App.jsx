import Home from "pages/Home";
import Jsonified from "pages/utils/Jsonified";
import { Route, Routes } from "react-router-dom";
import Archive from "src/pages/Archive";
import Bartender from "src/pages/bartender/Bartender";
import Boxd from "src/pages/bartender/Boxd";
import Spreadsheet from "src/pages/bartender/Spreadsheet";
import InvalidRoute from "src/pages/utils/InvalidRoute";
import Lists from "./pages/Lists";
import Reviews from "./pages/Reviews";

const CLI_URLS = {
  home: "/",
  bartender: "/bartender",
};

export default function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <Routes>
        <Route path={CLI_URLS["home"]} element={<Home />} />
        <Route path={CLI_URLS["home"] + "/archive"} element={<Archive />} />
        <Route path={CLI_URLS["home"] + "/reviews"} element={<Reviews />} />
        <Route path={CLI_URLS["home"] + "/lists"} element={<Lists />} />

        <Route path={CLI_URLS["bartender"]} element={<Bartender />} />
        <Route
          path={CLI_URLS["bartender"] + "/spreadsheet"}
          element={<Spreadsheet />}
        />
        <Route path={CLI_URLS["bartender"] + "/boxd"} element={<Boxd />} />
        <Route
          path={CLI_URLS["bartender"] + "/jsonified"}
          element={<Jsonified />}
        />

        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </div>
  );
}
