import TopBar from "components/bars/TopBar";

export default function Spreadsheet() {
  return (
    <div className="flex flex-col w-full h-full bg-[var(--d-gray)] bg-[linear-gradient(to_right,#a0b1b812_1px,transparent_1px),linear-gradient(to_bottom,#a0b1b812_1px,transparent_1px)] bg-[size:18px_18px]">
      <TopBar />
      <div className="flex flex-col w-full h-[calc(100%-3.5rem)] items-center">
        <h1 className="py-3 text-3xl">SPREADSHEET</h1>
      </div>
    </div>
  );
}
