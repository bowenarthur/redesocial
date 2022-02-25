export interface Post{
    _id: string,
    user: {
      name: string
    }
    content: string
    imageUrl?: string
    createdAt: string
  }
  