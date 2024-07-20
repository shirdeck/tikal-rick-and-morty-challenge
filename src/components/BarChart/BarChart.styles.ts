import styled from "styled-components";
import { EPISODE_SCALING_FACTOR, MAX_BAR_HEIGHT } from "../../constants";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BarChartWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: ${MAX_BAR_HEIGHT}px;
  border: 1px solid #3f3f3f;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const LegendColorBox = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &.highlighted {
    transform: scale(1.2);
    box-shadow: 0 0 10px ${(props) => props.color};
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  &.highlighted ${LegendColorBox} {
    transform: scale(1.2);
    box-shadow: 0 0 10px ${({ color }) => color};
  }
`;

export const Bar = styled.div<{ color: string; height: number }>`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height * EPISODE_SCALING_FACTOR}px;
  position: relative;
  border-radius: 5px;

  &:hover img {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover ~ div ${LegendColorBox} {
    transform: scale(1.2);
    box-shadow: 0 0 10px ${(props) => props.color}; 
  }
`;

export const BarLabel = styled.span`
  padding: 10px;
  background-color: rgba(37, 38, 39, 0.6);
  color: white;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const CharacterImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: -65px;
  transform: translateY(-100%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;
