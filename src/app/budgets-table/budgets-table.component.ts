import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetItem} from '../models/budget.model';
import {AmountType} from '../models/amount-type.enum';

@Component({
  selector: 'app-budgets-table',
  templateUrl: './budgets-table.component.html',
  styleUrls: ['./budgets-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetsTableComponent {
  @Input() budgetList: BudgetItem[];
  @Output() deleteButtonWasClicked = new EventEmitter<BudgetItem>();
  @Output() updateItemWasClicked = new EventEmitter<number>();

  amountType = AmountType;

  onDeleteItem(val: BudgetItem): void {
    this.deleteButtonWasClicked.emit(val);
  }

  updateItem(id: number): void {
    this.updateItemWasClicked.emit(id);
  }
}
