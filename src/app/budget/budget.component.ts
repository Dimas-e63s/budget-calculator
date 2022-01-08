import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetComponent {
  @Input() totalAmount: number;

  isTotalAmountNegative(): boolean {
    return this.totalAmount < 0;
  }
}
