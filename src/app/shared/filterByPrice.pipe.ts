import {Pipe, PipeTransform} from '@angular/core';
import {BudgetItem} from '../models/budget.model';
import {AmountType} from '../models/amount-type.enum';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByAmountPipe implements PipeTransform {
  transform(budgetList: BudgetItem[], amountType: AmountType): BudgetItem[] {
    return budgetList.filter(item => {
      return AmountType.INCOME === amountType ? item.amount > 0 : item.amount < 0;
    });
  }
}
