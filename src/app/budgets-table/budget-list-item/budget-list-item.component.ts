import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetItem} from '../../models/budget.model';

@Component({
  selector: 'app-budget-list-item',
  templateUrl: './budget-list-item.component.html',
  styleUrls: ['./budget-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetListItemComponent {
  @Input() item: BudgetItem;
  @Input() isIncome: boolean;
  @Output() deleteItem = new EventEmitter<BudgetItem>();

  get itemClassName() {
    return {
      'budget-table__item--income': this.isIncome,
      'budget-table__item--expense': !this.isIncome
    };
  }

  onDeleteItem(val: BudgetItem): void {
    this.deleteItem.emit(val);
  }
}
