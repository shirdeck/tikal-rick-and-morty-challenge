import React from "react";

import { useAppContext } from "../../context/AppContext";

import {
  Table,
  TableRow,
  TableData,
  CharacterImage,
  TableHeader,
  CharacterCard,
} from "./CharacterTable.styles";

import { findLeastPopularCharacter } from "../../utils/helperFunctions";

const CharacterTable: React.FC = () => {
  const { characterData, loading, error } = useAppContext();

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;

  // Find the least popular character using the helper function
  const leastPopularCharacter = findLeastPopularCharacter(characterData);

  return (
    <CharacterCard>
      <CharacterImage
        src={leastPopularCharacter.image}
        alt={leastPopularCharacter.name}
      />
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>Character name</TableHeader>
            <TableData>{leastPopularCharacter.name}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Origin & Dimension</TableHeader>
            <TableData>{leastPopularCharacter.origin.name}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Status</TableHeader>
            <TableData>{leastPopularCharacter.status}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Species</TableHeader>
            <TableData>{leastPopularCharacter.species}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Gender</TableHeader>
            <TableData>{leastPopularCharacter.gender}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Popularity</TableHeader>
            <TableData>{leastPopularCharacter.episode.length}</TableData>
          </TableRow>
        </tbody>
      </Table>
    </CharacterCard>
  );
};

export default CharacterTable;