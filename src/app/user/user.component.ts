import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() listId: string;

  users: User[];

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {

    this.userService.findAll()
    .subscribe(
      users => {
        this.users = users;
        console.log(JSON.stringify(this.users))
      },
      err => {
          console.log(err);
      }
    );
  }

  ngOnChanges(changes: any) {
    EmitterService.get(this.listId).subscribe((users: User[]) => { this.findAll()});
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload
      // EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadComments()});
  }

}
