import { ISavedCardsState } from "../types/savedCardTypes"

export const getSaveСardsInfo = (state: { savedCards: ISavedCardsState }) => state.savedCards
export const getSavedCardsResults = (state: {savedCards : ISavedCardsState}) => state.savedCards.results