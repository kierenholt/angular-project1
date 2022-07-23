import { Component, Input } from "@angular/core";
import {Post} from "../post.model";

@Component ({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html'
})
export class PostListComponent {
    @Input() posts: Post[] = [
        {"Title": "title 1", "Content": "content 1"},
        {"Title": "title 2", "Content": "content 2"},
        {"Title": "title 3", "Content": "content 3"},
        {"Title": "title 4", "Content": "content 4"},
        {"Title": "title 5", "Content": "content 5"},
    ];
}