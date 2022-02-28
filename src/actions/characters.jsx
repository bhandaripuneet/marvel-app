import { marvel } from './actionIndex.jsx';

export const setCharacters = (characters) => {
    return {
        type: marvel.SET_CHARACTERS,
        data: characters
    }
};