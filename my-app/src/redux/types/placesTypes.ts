export interface IPlace {
    count: number
    results: [
        {
            name: string
        }
    ]
}

export type IPlaceResults = {
    name: string
}
  
export interface IPlaceState {
    places: IPlace | null
    results: IPlaceResults[]
    isLoading: boolean
    error: any | null
}