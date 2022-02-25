import { Post } from './post';
export interface GetResponse{
    curPage: number,
    maxPage: number,
    posts: Post[]
}