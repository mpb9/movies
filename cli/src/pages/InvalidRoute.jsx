import TopBar from "src/components/bars/TopBar";
import PageTitleTemplate from "src/components/basic/PageTitleTemplate";

export default function InvalidRoute() {
  return (
    <div className="flex flex-col w-full h-full bg-[#ff000044] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]">
      <TopBar />
      <div className="flex items-center justify-center w-full h-3/4">
        <PageTitleTemplate title="404 - page not found" color="l-red" />
      </div>
    </div>
  );
}
