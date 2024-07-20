import styled from "styled-components";

export const ToggleButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#abcc4a" : "#3f3f3f")};
  color: ${({ active }) => (active ? "#3f3f3f" : "#abcc4a")};
  font-weight: bold;
  border: 2px solid #abcc4a;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  outline: none;
  &:focus {
    outline: none;
  }

  &:first-child {
    border-radius: 50px 0 0 50px;
  }

  &:last-child {
    border-radius: 0 50px 50px 0;
  }

  &:hover {
    background-color: #778e33;
    color: #3f3f3f;
    border: 2px solid #778e33;
    outline: none;
  }
`;
