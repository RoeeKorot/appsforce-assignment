import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersLibraryComponent } from './components/users-library/users-library.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersLibraryComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   SharedModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
