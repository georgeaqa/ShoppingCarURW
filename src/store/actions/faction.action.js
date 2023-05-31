export const SELECTED_FACTION = "SELECTED_FACTION";

export const selectedFaction = (idFactions) => ({
    type:SELECTED_FACTION,
    idFactions: idFactions,
});
