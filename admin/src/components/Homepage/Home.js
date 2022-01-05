import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
    </>
  );
}

export default Home;
