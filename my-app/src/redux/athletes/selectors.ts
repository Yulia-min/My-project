import { IAthleteState } from "../types/athletesTypes"

export const getAthletesInfo = (state: { athletes: IAthleteState }) => state.athletes
export const getAthletesResultsInfo = (state: { athletes: IAthleteState }) => state.athletes.results