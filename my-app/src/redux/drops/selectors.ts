import { IDropState } from "../types/dropsTypes";

export const getDropsInfo = (state: { drops: IDropState }) => state.drops

export const getDropsResults = (state: {drops : IDropState}) => state.drops.results