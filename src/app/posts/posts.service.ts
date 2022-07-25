import { Subject } from "rxjs";
import { Post } from "./post.model";


export class PostsService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(title:string, content: string) {
        this.posts.push({
            Title: title,
            Content: content
        })
        this.postsUpdated.next([...this.posts]);
    }
}