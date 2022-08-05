import { IMomentsState } from "../types/momentsTypes";

export const getMomentsInfo = (state: { moments: IMomentsState }) => state.moments

export const getMomentsResult = (state: { moments: IMomentsState}) => state.moments.results

export const getNextMomentsResult = (state: { moments: IMomentsState }) => state.moments.next