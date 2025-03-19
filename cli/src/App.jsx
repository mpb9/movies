import { RouterProvider } from "react-router-dom";
import BottomBar from "./components/bottomBar.jsx";
import SideBar from "./components/SideBar.jsx";
import { router } from "./routes";
export default function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <SideBar />
      <div className="flex flex-col w-full h-full bg-[var(--d-gray)] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]">
        <RouterProvider router={router} />
        <BottomBar />
      </div>
    </div>
  );
}
