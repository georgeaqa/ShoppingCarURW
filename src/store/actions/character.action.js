export const SELECTED_CHARACTER = "SELECTED_CHARACTER";
export const FILTERED_CHARACTER = "FILTERED_CHARACTER";

export const selectedCharacter = (idCharacter) => ({
  type: "SELECTED_CHARACTER",
  idCharacter: idCharacter,
});

export const filteredCharacter = (idFactions) => ({
  type: "FILTERED_CHARACTER",
  idFactions: idFactions,
});
