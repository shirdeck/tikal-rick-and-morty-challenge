import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

import { fetchLocationData, fetchCharacterData, fetchSpecificCharacters } from '../api/characterApi';

import { Character } from '../types/types';

// Define the shape of the context data
interface AppContextProps {
  locationData: string[];
  characterData: Character[];
  specificCharacters: Character[];
  loading: boolean;
  error: string | null;
}

// Define the shape of the provider's props
interface AppProviderProps {
  children: ReactNode;
}

// Create the context with an undefined initial value
const AppContext = createContext<AppContextProps | undefined>(undefined);

// AppProvider component to fetch and provide data to the rest of the app
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [locationData, setLocationData] = useState<string[]>([]);
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [specificCharacters, setSpecificCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const locationData = await fetchLocationData();
        setLocationData(locationData); // Set the location data state

        if (locationData.length) {
          const characterData = await fetchCharacterData(locationData);
          setCharacterData(characterData); // Set the character data state
        }

        const specificCharacterData = await fetchSpecificCharacters();
        setSpecificCharacters(specificCharacterData); // Set the specific characters data state
      } catch (error) {
        setError((error as Error).message); // Set the error state if fetching fails
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ locationData, characterData, specificCharacters, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
