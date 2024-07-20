import React from 'react';

import { ToggleButtonProps } from './ToggleButton.types';

import { ToggleButton as StyledToggleButton } from './ToggleButton.styles';

const ToggleButton: React.FC<ToggleButtonProps> = ({ active, onClick, children }) => {
  return (
    <StyledToggleButton active={active} onClick={onClick}>
      {children}
    </StyledToggleButton>
  );
};

export default ToggleButton;
