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
  selectedItem: BudgetItem = null;
  isModalVisible = false;

  private calculateTotalAmount(): number {
    return this.budgetList.reduce((curr, item) => curr += item.amount, 0);
  }

  private updateTotalAmount(val): void {
    this.totalAmount += val;
  }

  private changeNumberSign(num: number): number {
    return num * -1;
  }

  private openModal(): void {
    this.isModalVisible = true;
  }

  private getUniqueItemId(): number {
    return Date.now();
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  onAddBudgetItem(item: BudgetItem): void {
    this.budgetList = [...this.budgetList, {...item, id: this.getUniqueItemId()}];
    this.updateTotalAmount(item.amount);
  }

  setSelectedItem(selectedItemId: number): void {
    this.selectedItem = this.budgetList.find(item => item.id === selectedItemId);
    this.openModal();
  }

  onDeleteButtonWasClicked(deleteItem: BudgetItem): void {
    this.budgetList = this.budgetList.filter(item => item.id !== deleteItem.id);
    this.updateTotalAmount(this.changeNumberSign(deleteItem.amount));
  }

  private isItemAmountChanged(updatedAmount: number, oldAmount: number): boolean {
    return updatedAmount !== oldAmount;
  }

  private updateTotalAmountWithChangedItem(amount: number, oldItemAmount: number): void {
    // extract old value from sum and add new value
    // ex. sum = 12, new = 10, old = -2
    // sum += 2 --> 14
    // sum += 10 --> 24
    this.updateTotalAmount(this.changeNumberSign(oldItemAmount));
    this.updateTotalAmount(amount);
  }

  getUpdatedItemCopy(
    {amount: newItemAmount, ...updatedItem}: BudgetItem,
    {amount: oldItemAmount}: BudgetItem
  ): BudgetItem {
    if (this.isItemAmountChanged(newItemAmount, oldItemAmount)) {
      this.updateTotalAmountWithChangedItem(newItemAmount, oldItemAmount);
    }

    return {
      amount: newItemAmount,
      ...updatedItem
    };
  }

  onUpdateBudgetItem(updatedItem: BudgetItem): void {
    const updateFn = (item: BudgetItem) => item.id === updatedItem.id ? this.getUpdatedItemCopy(updatedItem, item) : item;
    this.budgetList = this.budgetList.map(updateFn);
  }
}
