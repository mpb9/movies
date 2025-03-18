import TopBar from "../components/TopBar";

export default function Spreadsheet() {
  return (
    <>
      <TopBar />
      <div className="flex flex-col w-full h-[calc(100%-3.5rem)] items-center">
        <h1 className="text-3xl py-3">SPREADSHEET</h1>
        <iframe
          src="https://docs.google.com/spreadsheets/d/1nxbbQvf3yFZSWpkESXuDO7MIuH0EsVl3T1ekWtFYZyE/edit?usp=sharing"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
