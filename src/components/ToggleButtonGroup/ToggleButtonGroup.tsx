import React from "react";

import { ToggleButtonGroupProps } from "./ToggleButtonGroup.types";

import { handleToggle } from "../../utils/helperFunctions";

import ToggleButton from "../ToggleButton/ToggleButton";

import { ButtonWrapper } from "./ToggleButtonGroup.styles";

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
  showBarChart,
  setShowBarChart,
  setIsTransitioning,
}) => {
  return (
    <ButtonWrapper>
      <ToggleButton
        active={showBarChart}
        onClick={() => handleToggle(true, setShowBarChart, setIsTransitioning)}
      >
        Popularity Chart
      </ToggleButton>
      <ToggleButton
        active={!showBarChart}
        onClick={() => handleToggle(false, setShowBarChart, setIsTransitioning)}
      >
        Least Popular Character
      </ToggleButton>
    </ButtonWrapper>
  );
};

export default ToggleButtonGroup;
