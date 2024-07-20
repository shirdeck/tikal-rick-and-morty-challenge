import React, { useState } from "react";

import CharacterTable from "../CharacterTable/CharacterTable";
import BarChart from "../BarChart/BarChart";
import ToggleButtonGroup from "../ToggleButtonGroup/ToggleButtonGroup";

import { ContentWrapper, TransitionWrapper } from "./MainContent.styles";

const MainContent: React.FC = () => {
  const [showBarChart, setShowBarChart] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <>
      <ToggleButtonGroup
        showBarChart={showBarChart}
        setShowBarChart={setShowBarChart}
        setIsTransitioning={setIsTransitioning}
      />
      <TransitionWrapper>
        <ContentWrapper className={isTransitioning ? "fade-out" : "fade-in"}>
          {showBarChart ? <BarChart /> : <CharacterTable />}
        </ContentWrapper>
      </TransitionWrapper>
    </>
  );
};

export default MainContent;
