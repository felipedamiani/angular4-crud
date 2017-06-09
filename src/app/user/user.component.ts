import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  users: User[];

  constructor(public userService:UserService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.userService.findAll()
    .subscribe(
        users => this.users = users,
        err => {
            console.log(err);
        });

    console.log(JSON.stringify(this.users));
  }

  ngOnChanges(changes:any) {
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload
      //EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadComments()});
  }

}
