import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiAmountService {

  private baseUrl = 'https://localhost:8080/api/denom'; // Example API URL

  constructor(private http: HttpClient) {}

  // calculate notes and coins for money amount
  showAmount(amount: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/amount`, amount);
  }

  // calculate diffenotes and coins for money amount
  showDifference(amounts: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/diff`, amounts);
  }
  
}