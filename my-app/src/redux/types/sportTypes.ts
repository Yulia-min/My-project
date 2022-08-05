export interface ISportType {
    count: number
    results: [
        {
            name: string
        }
    ]
}

export type ISportTypeResults = {
    name: string
}
  
export interface ISportTypeState {
    sportTypes: ISportType | null
    result: ISportTypeResults[]
    isLoading: boolean
    error: any | null
}
