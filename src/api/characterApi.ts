import axios from "axios";
import { Character } from "../types/types";
import { API_BASE_URL, SPECIFIC_CHARACTER_NAMES } from "../constants";

/**
 * Gets the residents of location ID 1 from the API.
 * @returns {Promise<string[]>} An array of URLs for the residents.
 */
export const fetchLocationData = async (): Promise<string[]> => {
  const response = await axios.get(`${API_BASE_URL}/location/1`);
  return response.data.residents;
};

/**
 * Gets character data from an array of character URLs.
 * @param {string[]} characterUrls - An array of character URLs.
 * @returns {Promise<Character[]>} An array of Character objects.
 */
export const fetchCharacterData = async (
  characterUrls: string[]
): Promise<Character[]> => {
  const characterIds = characterUrls
    .map((url) => url.split("/").pop())
    .join(",");
  const response = await axios.get(`${API_BASE_URL}/character/${characterIds}`);
  return Array.isArray(response.data) ? response.data : [response.data];
};

/**
 * Gets data for specific characters by their names.
 * @returns {Promise<Character[]>} An array of Character objects.
 */
export const fetchSpecificCharacters = async (): Promise<Character[]> => {
  const promises = SPECIFIC_CHARACTER_NAMES.map((name) =>
    axios
      .get(`${API_BASE_URL}/character/?name=${name}`)
      .then((res) => res.data.results[0])
  );
  const characters = await Promise.all(promises);
  return characters;
};
