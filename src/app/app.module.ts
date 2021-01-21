import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCardFormComponent } from './components/new-card-form/new-card-form.component';
import { CardRegistrationPageComponent } from './pages/card-registration-page/card-registration-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutPageComponent,
    NewCardFormComponent,
    CardRegistrationPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
