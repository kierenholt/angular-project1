import { Component, OnDestroy, OnInit } from "@angular/core";
import { ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {
    posts: Post[] = [];
    postsSub?: Subscription;

    constructor(public postsService: PostsService) {
    }

    ngOnInit() {
        this.posts = this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts) => this.posts = posts);
    }

    ngOnDestroy() {
        this.postsSub?.unsubscribe();
    }
}