import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnChanges {
  @Output() updatedValue = new EventEmitter();
  @Input() userIndex: number;
  @Input() usersCollection;
  editUserForm: FormGroup;
  public userInformation;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.usersCollection)
     this.editUserForm = this.fb.group({
        email: [this.userInformation.email, Validators.required],
        userIdentity: this.fb.group({
          firstName: [this.userInformation.name.first, Validators.required],
          lastName: [this.userInformation.name.last, Validators.required],
        }),
        location: this.fb.group({
          country: [this.userInformation.location.country, Validators.required],
          city: [this.userInformation.location.city, Validators.required],
          street: this.fb.group({
            streetName: [this.userInformation.location.street.name, Validators.required],
            streetNumber: [this.userInformation.location.street.number, Validators.required]
          }),
        })
      });
  }

  ngOnChanges(changes) {
    this.userInformation = this.usersCollection[this.userIndex];
  }

  onSubmit(values) {
    this.updatedValue.emit({newData: values, userIndex: this.userIndex});
  }
}
