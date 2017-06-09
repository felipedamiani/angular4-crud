import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CommonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
