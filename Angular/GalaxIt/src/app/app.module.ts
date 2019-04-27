import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,MatMenuModule } from '@angular/material';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { UnbookComponent } from './components/unbook/unbook.component';
import { BackgroundComponent } from './components/background/background.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SeatInfoComponent } from './components/seat-info/seat-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    BubbleComponent,
    UnbookComponent,
    SelectionComponent,
    SeatInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule, 
    MatCheckboxModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
