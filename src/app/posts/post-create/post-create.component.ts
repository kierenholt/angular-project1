import { Component, EventEmitter, Output } from "@angular/core";
import {Post} from "../post.model";

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls: ['./post-create.component.css']

})
export class PostCreateComponent {
    enteredTitle: string = '';
    enteredContent: string = '';
    @Output() postCreated = new EventEmitter<Post>();

    onAddPost() {
        let newPost = { "Title": this.enteredTitle, "Content": this.enteredContent };
        this.postCreated.emit(newPost); 
    }
}