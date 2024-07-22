import { Character } from "../types/types";

// Aggregates episode data for characters
export const aggregateEpisodeData = (characters: Character[]): Record<string, number> => {
  const characterMap: Record<string, number> = {};
  characters.forEach(character => {
    if (!characterMap[character.name]) {
      characterMap[character.name] = 0;
    }
    characterMap[character.name] += character.episode.length;
  });
  return characterMap;
};

// Finds the least popular character
export const findLeastPopularCharacter = (characters: Character[]): Character => {
  characters.sort((a, b) => a.episode.length - b.episode.length || a.name.localeCompare(b.name));
  const minEpisodeCount = characters[0].episode.length;
  return characters
    .filter(character => character.episode.length === minEpisodeCount)
    .sort((a, b) => a.name.localeCompare(b.name))
    .pop() as Character;
};

// Toggles between tasks divs
export const handleToggle = (
  showChart: boolean,
  setShowBarChart: (value: boolean) => void,
  setIsTransitioning: (value: boolean) => void
) => {
  setIsTransitioning(true);
  setTimeout(() => {
    setShowBarChart(showChart);
    setIsTransitioning(false);
  }, 500); 
};