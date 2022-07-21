import { IDropState } from "../types/dropsTypes";

export const getDropsInfo = (state: { drops: IDropState }) => state.drops

export const getDropsLoading = (state: {drops: IDropState}) => state.drops