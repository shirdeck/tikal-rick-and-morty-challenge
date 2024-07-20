import styled from "styled-components";

export const Table = styled.table`
  width: 40vw;
  height: 500px;
  max-height: 500px;
  border-collapse: separate; 
  border-spacing: 0; 
  table-layout: fixed;
  background-color: #3f3f3f;
  border-radius: 15px;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #2a2a2a;
  transition: background-color 0.3s ease, border-radius 0.3s ease;

  &:hover {
    background-color: #abcc4a;
    color: black;
  }

`;

export const TableData = styled.td`
  padding: 8px;
  text-align: left;
  vertical-align: top;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  font-weight: bold;
`;

export const CharacterCard = styled.div`
  width: 40vw;
  height: 500px;
  max-height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 14px 20px 63px -3px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1); 
  }
`;
