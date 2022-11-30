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
    this.editFormBuilder();
  }

  editFormBuilder() {
    this.editUserForm = this.fb.group({
      email: [this.userInformation.email, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      userIdentity: this.fb.group({
        firstName: [this.userInformation.name.first, [Validators.required, Validators.minLength(3)]],
        lastName: [this.userInformation.name.last, [Validators.required, Validators.minLength(3)]],
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

  get email() {
    return this.editUserForm.get('email');
  }

  get firstName() {
    return this.editUserForm.get('userIdentity.firstName');
  }

  get lastName() {
    return this.editUserForm.get('userIdentity.lastName');
  }

  get country() {
    return this.editUserForm.get('location.country');
  }

  get city() {
    return this.editUserForm.get('location.city');
  }

  get streetName() {
    return this.editUserForm.get('location.street.streetName');
  }

  get streetNumber() {
    return this.editUserForm.get('location.street.streetNumber');
  }

  ngOnChanges(changes) {
    this.userInformation = this.usersCollection[this.userIndex];
  }

  onSubmit(values) {
    this.updatedValue.emit({newData: values, userIndex: this.userIndex});
  }
}
