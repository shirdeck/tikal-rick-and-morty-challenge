export interface ToggleButtonGroupProps {
    showBarChart: boolean;
    setShowBarChart: React.Dispatch<React.SetStateAction<boolean>>;
    setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
  }