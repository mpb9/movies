import HomeSection from "src/components/home/HomeSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-start" id="home">
      <HomeHeader />
      {/* <HomeFeatured /> */}
      <div className="w-full h-fit min-h-[10px] items-center px-8 overflow-scroll">
        <HomeSection name={"Seasonal"} items={[]} />
        <HomeSection name={"Reviews"} items={[]} />
        <HomeSection name={"Lists"} items={[]} />
        <HomeSection name={"Classics"} items={[]} />
        <HomeSection name={"Archive"} items={[]} />
      </div>
    </div>
  );
}

function HomeHeader() {
  return (
    <div className="flex w-full h-fit items-center pt-4 pb-6">
      <div className="flex flex-col w-full items-center h-fit">
        <h6 className="text-lg cursor-default text-[#9da598] pb-[2px] font-[100]">
          Ya know what?
          <b className="pl-2 font-[100]">It&apos;s been a long day...</b>
        </h6>
        <h1 className="text-3xl cursor-default text-[#69d346] font-[100]">
          Make it a Double… Feature.
        </h1>
      </div>
    </div>
  );
}

function HomeFeatured() {
  return (
    <div className="flex w-[100%] h-fit items-center px-8">
      <div className="flex items-start w-full flex-col">
        <div className="flex items-start w-full">
          <h2 className="text-2xl italic w-full font-[100] text-[#9da598]">
            <i className="text-[#9da598]">&gt;</i> SPECIALS
            {/* <hr className="text-[#9da598]" /> */}
          </h2>
        </div>
        <div className="w-full flex items-start justify-start px-4 py-2">
          <div className="flex flex-col w-full h-fit items-start">
            <h3 className="text-2xl font-[100] text-[#69d346]">
              <i className="text-[#69d346]">&gt;</i> Bartender
            </h3>
            <p className="text-lg font-[100] text-[#9da598]">
              <i className="text-[#9da598]">&gt;</i> A bartender for your
              spreadsheets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
