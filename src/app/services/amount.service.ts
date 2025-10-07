import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiAmountService {

  private baseUrl = '/api/denom'; // Example API URL

  constructor(private http: HttpClient) {}

  // calculate notes and coins for money amount
  showAmount(amount: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/amount`, amount);
  }

  // calculate diffenotes and coins for money amount
  showDifference(amounts: any): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*'
    });

    return this.http.post(`${this.baseUrl}/diff`, amounts, { headers });
  }

}