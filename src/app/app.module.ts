import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './screens/customer-details/customer-details/customer-details.component';
import { BookingsComponent } from './screens/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CustomerDetailsComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent, pathMatch: 'full' },
      { path : 'customer-details/:id', component : CustomerDetailsComponent },
      { path : 'bookings', component : BookingsComponent }


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
