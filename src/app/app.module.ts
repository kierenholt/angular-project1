import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent, PostCreateComponent, HeaderComponent,PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
