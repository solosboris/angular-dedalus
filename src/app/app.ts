import { Component, OnInit, signal } from '@angular/core';
import { ApiAmountService } from './services/amount.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Amount } from "./models/amount.model";
import { Amounts } from "./models/amounts.model";
import { Denomination } from "./models/denomination.model";

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-dedalus');
  amount: string | null = null;
  previousAmount: string | null = null;
  currentAmount: string | null = null;
  denomination: Denomination;
  denominationDiff: Denomination;

 constructor(private amountService: ApiAmountService) {
    this.denomination = new Denomination();
    this.denominationDiff = new Denomination();
 } // Inject ApiAmountService

  resetForm() {
    this.amount = null;
    this.previousAmount = null;
    this.currentAmount = null;
  }

  showAmount() {
    if (this.amount) {
      const amount = new Amount(this.amount);
      this.amountService.showAmount(amount).subscribe(denomination => {
          this.denomination = denomination;
      });
    }
  }

  showDifference() {
    if (this.previousAmount && this.currentAmount) {
      const amounts = new Amounts(this.previousAmount, this.currentAmount);
      this.amountService.showDifference(amounts).subscribe(denomination => {
          this.denominationDiff = denomination;
      });
    }
  }

}