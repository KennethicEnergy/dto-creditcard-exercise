import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardDTO } from 'src/app/core/interfaces/credit-card-dto';
import { PaymentService } from 'src/app/core/services/payment.service';


@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  public cardsArray: Array<CreditCardDTO>;
  public buttonAction: string;

  constructor(public router: Router, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.cardsArray = this.paymentService.cardDetails;
    this.buttonAction = this.cardsArray.length > 0 ? 'Pay with' : 'Add';
  }

  navigateToCardRegistration(): void {
    this.router.navigate(['/add-new-card']);
  }
}
