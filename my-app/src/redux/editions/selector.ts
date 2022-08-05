import { IEditionState } from "../types/editionsTypes"

export const getEditionsInfo = (state: { editions: IEditionState }) => state.editions
export const getSaleInfo = (state: { saleEdition: IEditionState }) => state.saleEdition 
export const getEditionsResults = (state: {editions : IEditionState}) => state.editions.results
export const getSalesResults = (state: {saleEdition : IEditionState}) => state.saleEdition.saleResults