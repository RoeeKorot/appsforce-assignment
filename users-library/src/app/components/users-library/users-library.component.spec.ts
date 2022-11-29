import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLibraryComponent } from './users-library.component';

describe('UsersLibraryComponent', () => {
  let component: UsersLibraryComponent;
  let fixture: ComponentFixture<UsersLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
