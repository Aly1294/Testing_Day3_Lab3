import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
constructor(private _userService:UserServiceService){}
  ngOnInit(): void {
    this._userService.getValue()
  }
}
