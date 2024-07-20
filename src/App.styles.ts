import styled from "styled-components";

export const Background = styled.div`
  background: linear-gradient(to bottom, #1d1d1d 70%, #abcc4a 30%);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #151515;
  border-radius: 10px;
  box-shadow: 0px 13px 75px 20px rgba(0, 0, 0, 0.75);
  height: 70%;
  width: 45%;
  min-width: 400px;
`;

export const Title = styled.h1`
  color: #83d2e4; 
  font-size: 48px;
  font-family: "Schwifty", Arial, sans-serif;
  -webkit-text-stroke: 1px black; /* Black border */
  text-shadow: 0 0 10px #8bcf21, /* Green outer glow */ 0 0 5px #8bcf21,
    0 0 5px #8bcf21;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #abcc4a;
  }
`;
