import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { CardRegistrationPageComponent } from './pages/card-registration-page/card-registration-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'add-new-card', component: CardRegistrationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
