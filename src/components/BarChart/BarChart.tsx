import React, { useState } from 'react';

import { useAppContext } from '../../context/AppContext';

import {
  FlexContainer,
  BarChartWrapper,
  Bar,
  BarLabel,
  Legend,
  LegendItem,
  LegendColorBox,
  CharacterImage,
} from './BarChart.styles';

import { aggregateEpisodeData } from '../../utils/helperFunctions';
import { BAR_COLORS } from '../../constants';

const BarChart: React.FC = () => {
  const { specificCharacters, loading, error } = useAppContext();
  const [highlightedLegend, setHighlightedLegend] = useState<string | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const characterData = aggregateEpisodeData(specificCharacters);

  return (
    <FlexContainer>
      <BarChartWrapper>
        {Object.entries(characterData).map(([name, episodes], index) => (
          <Bar
            key={name}
            color={BAR_COLORS[index % BAR_COLORS.length]}
            height={episodes} 
            onMouseEnter={() => setHighlightedLegend(name)}
            onMouseLeave={() => setHighlightedLegend(null)}
          >
            <CharacterImage src={specificCharacters.find(character => character.name === name)?.image} alt={name} />
            <BarLabel>{episodes}</BarLabel>
          </Bar>
        ))}
      </BarChartWrapper>
      <Legend>
        {Object.keys(characterData).map((name, index) => (
          <LegendItem key={name} className={highlightedLegend === name ? "highlighted" : ""}>
            <LegendColorBox color={BAR_COLORS[index % BAR_COLORS.length]} className={highlightedLegend === name ? "highlighted" : ""}/>
            <span>{name}</span>
          </LegendItem>
        ))}
      </Legend>
    </FlexContainer>
  );
};

export default BarChart;
