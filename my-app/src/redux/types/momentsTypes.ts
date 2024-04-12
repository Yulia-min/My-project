export interface IMoments {
    data: {
        count: number
        id: string
        next: string
        results: [
           {
                id: string
                likes: number
                max_price: number
                min_price: number
                title: string
                original_pic: {
                    id: string
                    attachment: string
                    duration: string
                }
           }
        ]
    }
}

export type IMomentsResult = {
        id: string
        likes: number
        max_price: number
        min_price: number
        title: string
        original_pic: {
            id: string
            attachment: string
            duration: string
        }
}
  
export interface IMomentsState {
    moments: IMoments | null
    results: IMomentsResult[]
    next: string
    isLoading: boolean
    isNextLoading: boolean
    error: any | null
}