import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Output() updateUserInfo = new EventEmitter();
  @Output() currentUserIndex = new EventEmitter();
  @Input() userData;
  @Input() userIndex: number;
  editUserForm: FormGroup;

  constructor() { }
  
  ngOnInit(): void {
  }

  deleteUser(userIndex: number) {
    this.currentUserIndex.emit(userIndex);
  }

  updateUser(userIndex: number) {
    this.updateUserInfo.emit(userIndex);
  }
}
