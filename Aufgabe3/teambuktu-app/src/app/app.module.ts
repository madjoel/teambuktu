import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './compontents/login';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material-module';
import { RootComponent } from './compontents/root';
import { Technician } from './globals/Technician';
import { TasksComponent } from './compontents/tasks';
import { AppointmentsComponent } from './compontents/appointments';
import { SidenavService } from './globals/SidenavService';

@NgModule({
  declarations: [
    LoginComponent,
    RootComponent,
    TasksComponent,
    AppointmentsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [Technician,SidenavService],
  bootstrap: [RootComponent]
})
export class AppModule { }
