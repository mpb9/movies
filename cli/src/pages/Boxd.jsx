import TopBar from "components/bars/TopBar";
import PageTitleTemplate from "components/basic/PageTitleTemplate";
import Loading from "pages/utils/Loading";
import { useEffect, useState } from "react";

export default function Boxd() {
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    try {
      updateLoaded();
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
    <>
      <TopBar />
      <div className="flex flex-col w-full h-full bg-[var(--d-gray)] bg-[linear-gradient(to_right,#FF80011b_2px,transparent_1px),linear-gradient(to_bottom,#3FBDF41b_2px,transparent_1px)] bg-[size:12px_12px]">
        <div className="flex items-center justify-center w-full">
          <PageTitleTemplate title="boxd" color="boxd-green" />
        </div>
      </div>
    </>
  );
}

/*

- main menu replica with options to edit each list
- menu categories link to their respective tags
- 

*/
