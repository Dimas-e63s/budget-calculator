import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BudgetItem} from './models/budget.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  budgetList = [{description: 'adf', amount: 23, id: 1}, {description: 'sdaf', amount: -2, id: 2}];
  totalAmount = this.calculateTotalAmount();

  private calculateTotalAmount(): number {
    return this.budgetList.reduce((curr, item) => curr += item.amount, 0);
  }

  private updateTotalAmount(val): void {
    this.totalAmount += val;
  }

  onAddBudgetItem(item: BudgetItem): void {
    this.budgetList = [...this.budgetList, {...item, id: Date.now()}];
    this.updateTotalAmount(item.amount);
  }
}
