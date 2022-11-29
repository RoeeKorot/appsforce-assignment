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
}
