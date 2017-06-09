import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  today = new Date();
  profile = {id: '1', name: 'James'};
}

