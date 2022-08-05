export interface IAthlete {
    count: number
    results: [
        {
            id: number
            full_name: string
        }
    ]
}

export type IAthleteTypeResults = {
    id: number
    full_name: string
}
  
export interface IAthleteState {
    athletes: IAthlete | null
    results: IAthleteTypeResults[]
    isLoading: boolean
    error: any | null
}