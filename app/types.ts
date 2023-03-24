export interface NewsData {
    title?: string
    image?: string
    id: string
    thumbnail?: string
}

export interface NewsListItem {
    data: NewsData
}

export interface ListResponse {
    data: {
        children: NewsListItem[]
    }
}