import { ISportTypeState } from "../types/sportTypes"

export const getSportTypesInfo = (state: { sportTypes: ISportTypeState }) => state.sportTypes
export const getSportTypesResult = (state: { sportTypes: ISportTypeState }) => state.sportTypes.result