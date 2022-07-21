export interface IDrop {
    count: number | undefined
    next: string
    results: [
        {
            id: string
            drop: {
                id: string
                pack_artwork: string
                price: number
                title: string
            }
        }
    ]
}
  
export interface IDropState {
    drop: IDrop | null
    isDropsLoading: boolean
    isLoaded: boolean
    error: any | null
}
