import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCardDTO } from '../interfaces/credit-card-dto';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public cardDetails: Array<CreditCardDTO> = [];
  constructor(private http: HttpClient) { }

  addNewCard(): any{
    // this.http.post<CreditCardDTO>('api/sample', { title: 'Add New Card' }).subscribe({
    //   next: data => {
    //     // this.postId = data.id;
    //   },
    //   error: error => {
    //     console.error('There was an error!', error);
    //   }
    // });
  }

  getCardDetails(details: CreditCardDTO): void {
    this.cardDetails.push(details);
  }

}
