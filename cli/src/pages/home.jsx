import HomeFooter from "src/components/home/HomeFooter";
import HomeHeader from "src/components/home/HomeHeader";
import HomeSection from "src/components/home/HomeSection";
import {
  archiveFiles,
  classicsFiles,
  featuredFiles,
  listsFiles,
  reviewsFiles,
} from "src/models/FileSpecs";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center" id="home">
      <HomeHeader />
      <div className="w-full items-center pl-10 pr-10 overflow-scroll pb-26 pt-36">
        <HomeSection
          name={"Featured"}
          files={featuredFiles}
          src={"files/featured/"}
        />
        <HomeSection
          name={"Reviews"}
          files={reviewsFiles}
          src={"files/reviews/"}
        />
        <HomeSection name={"Lists"} files={listsFiles} src={"files/lists/"} />
        <HomeSection
          name={"Classics"}
          files={classicsFiles}
          src={"files/classics/"}
        />
        <HomeSection
          name={"Archive"}
          files={archiveFiles}
          src={"files/archive/"}
        />
      </div>
      <HomeFooter />
    </div>
  );
}
