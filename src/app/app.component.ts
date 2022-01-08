import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BudgetItem} from './models/budget.model';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  budgetList = [{description: 'adf', amount: 23, id: 1}, {description: 'sdaf', amount: -2, id: 2}];
  totalAmount = this.calculateTotalAmount();
  selectedItem: BudgetItem = null;
  isModalVisible$ = new BehaviorSubject<boolean>(false);

  private calculateTotalAmount(): number {
    return this.budgetList.reduce((curr, item) => curr += item.amount, 0);
  }

  private updateTotalAmount(val): void {
    this.totalAmount += val;
  }

  private getOppositeNumber(num: number): number {
    return num * -1;
  }

  private openModal(): void {
    this.isModalVisible$.next(true);
  }

  closeModal(): void {
    this.isModalVisible$.next(false);
  }

  onAddBudgetItem(item: BudgetItem): void {
    this.budgetList = [...this.budgetList, {...item, id: Date.now()}];
    this.updateTotalAmount(item.amount);
  }

  setSelectedItem(selectedItemId: number): void {
    this.selectedItem = this.budgetList.find(item => item.id === selectedItemId);
    this.openModal();
  }

  onDeleteButtonWasClicked(deleteItem: BudgetItem): void {
    this.budgetList = this.budgetList.filter(item => item.id !== deleteItem.id);
    this.updateTotalAmount(this.getOppositeNumber(deleteItem.amount));
  }

    onUpdateBudgetItem(updatedItem: BudgetItem): void {
    const updateFn = (item: BudgetItem) => {
      if (item.id === updatedItem.id) {
        if (item.amount !== updatedItem.amount) {
          this.updateTotalAmount(this.getOppositeNumber(item.amount));
          this.updateTotalAmount(updatedItem.amount);
        }

        return {
          ...updatedItem
        };
      }

      return item;
    };
    this.budgetList = this.budgetList.map(updateFn);
  }
}
