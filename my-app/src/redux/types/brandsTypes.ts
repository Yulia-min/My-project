export interface IBrand {
    count: number
    results: [
        {
            id: number
            name: string
        }
    ]
}

export type IBrandResults = {
    id: number
    name: string
}
  
export interface IBrandState {
    brands: IBrand | null
    results: IBrandResults[]
    isLoading: boolean
    error: any | null
}