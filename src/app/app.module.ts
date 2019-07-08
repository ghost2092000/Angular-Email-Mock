import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InboxComponent } from './inbox/inbox.component';
import { CommentComponent } from './comment/comment.component';
import { InputtDirective } from './inputt.directive';

@NgModule({
  declarations: [
    AppComponent,
    InboxComponent,
    CommentComponent,
    InputtDirective,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
