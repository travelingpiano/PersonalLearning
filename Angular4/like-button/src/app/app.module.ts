import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikesComponent } from './likes/likes.component';
import { LikesService } from './likes/likes.service';

@NgModule({
  declarations: [
    AppComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ LikesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
