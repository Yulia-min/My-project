export interface IEdition {
    count: number
    next: string
    results:  [
        {
            id: string
            number: number
            moment: {
                id: string
                likes: number
                title: string
                original_pic: {
                    id: string
                    attachment: string
                    duration: string
                }
            }
        }
    ]
}

export type IEditionResult = {
    id: string
    number: number
    moment: {
        id: string
        likes: number
        title: string
        original_pic: {
            id: string
            attachment: string
            duration: string
        }
    }
}
  
export interface IEditionState {
    edition: IEdition | null
    saleEdition: IEdition | null
    results: IEditionResult[]
    saleResults: IEditionResult[]
    isLoading: boolean
    error: any | null
}
