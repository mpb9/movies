import { useEffect, useState } from "react";
import Loading from "src/components/Loading";
import TopBar from "src/components/TopBar";
import { getSiteCatByName } from "../services/SiteCatService";

export default function Boxd() {
  // const [boxdCat, setBoxdCat] = useState(null);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    try {
      getSiteCatByName("letterboxd").then((res) => {
        // setBoxdCat(res);
        updateLoaded();
      });
    } catch (err) {
      console.error(err);
      updateLoaded();
    }
  }, []);

  function updateLoaded() {
    setLoaded((loaded) => loaded + 1);
  }

  if (loaded < 1) return <Loading />;
  return (
    <div className="flex flex-col items-center w-full h-full">
      <TopBar />
      <h1>Boxd</h1>
    </div>
  );
}

/*

- main menu replica with options to edit each list
- 

*/
