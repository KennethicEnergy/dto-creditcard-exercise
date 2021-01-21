import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentService } from '../../core/services/payment.service';
import { CreditCardDTO } from '../../core/interfaces/credit-card-dto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})
export class NewCardFormComponent implements OnInit {
  public creditCardForm: FormGroup;

  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.createCreditCardForm();
  }

  createCreditCardForm(): void {
    this.creditCardForm = this.fb.group({
      cardNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      cardHolder: new FormControl('', [Validators.required]),
      expirationDate: new FormControl('', [Validators.required, this.expirationDateValidator.bind(this)]),
      securityCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')]),
      amount: new FormControl(0, [Validators.required, Validators.pattern('^[0-9]*$'), this.amountValidator.bind(this)]),
    });
  }

  addPaymentOption(): void {
    const formData: CreditCardDTO = this.creditCardForm.value;
    this.paymentService.getCardDetails(formData);
    this.router.navigate(['/checkout']);
  }

  public creditCardFormDefaultValidators(control: string): boolean {
    return (
      this.creditCardForm.get(control).invalid &&
      this.creditCardForm.get(control).touched
    );
  }

  expirationDateValidator(control: FormControl): any {
    const valueArray = [];
    valueArray.push(control.value);
    const today = new Date();
    const separatedDateValues = valueArray.join('-').split('-');
    const year = parseInt(separatedDateValues[0], 10);
    const month = parseInt(separatedDateValues[1], 10);

    if (year < today.getFullYear() || month < today.getMonth() + 1) {
      return { lessThanCurrentDate: true };
    } else {
      return null;
    }
  }

  amountValidator(control: FormControl): any {
    const amount = parseInt(control.value, 10);
    if (amount <= 0) {
      return { lessThanZero: true };
    } else {
      return null;
    }
  }

}
