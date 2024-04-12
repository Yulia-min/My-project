export interface ISavedCards {
    count: number
    results:  [
        {
            id: string
            likes: number
            max_price: number
            title: string
            original_pic: {
                id: string
                attachment: string
                duration: string
            }
        }
    ]
}

export type ISavedCardsResult =  {
    id: string
    likes: number
    max_price: number
    title: string
    original_pic: {
        id: string
        attachment: string
        duration: string
    }
}
  
export interface ISavedCardsState {
    savedCards: ISavedCards | null
    results: ISavedCardsResult[]
    isLoading: boolean
    error: any | null
}
