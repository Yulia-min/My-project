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
                }
            }
        }
    ]
}
  
export interface IEditionState {
    edition: IEdition | null
    isLoading: boolean
    isLoaded: boolean
    error: any | null
}
