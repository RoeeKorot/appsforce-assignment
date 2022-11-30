import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersDetailsService } from './../../core/services/users-details/users-details.service';

@Component({
  selector: 'app-users-library',
  templateUrl: './users-library.component.html',
  styleUrls: ['./users-library.component.scss']
})
export class UsersLibraryComponent implements OnInit {
  public usersData = [];
  public currentUserIndex: number = -1;
  public showEditForm: boolean = false

  constructor(private usersService: UsersDetailsService) { }

  ngOnInit(): void {
    this.displayAllData();  
  }
  
  displayAllData() {
    this.usersService.getAllUsers().subscribe((response: any) => {
      this.usersData = response.results;
      console.log(this.usersData)
    },
    (err) => {
      console.log(err);
    })

  }

  update(userIndex: number): void {
    this.currentUserIndex = userIndex;
    this.showEditForm = true
  }

  getUpdatedValue(userDetails) {
    let userObj = this.usersData[userDetails.userIndex];
    userObj.name.first = userDetails.newData.userIdentity.firstName;
    userObj.name.last = userDetails.newData.userIdentity.lastName;
    userObj.email = userDetails.newData.email;
    userObj.location.country = userDetails.newData.location.country;
    userObj.location.city = userDetails.newData.location.city;
    userObj.location.street.name = userDetails.newData.location.street.streetName;
    userObj.location.street.number = userDetails.newData.location.street.streetNumber;
    
    this.showEditForm = false;
  }

  delete(userIndex) {
    if (confirm('Are you sure you want to delete this user?') === true) {
      this.usersData = this.usersData.filter((_, index) => index !== userIndex);
      return;
    }
    
  }
}
