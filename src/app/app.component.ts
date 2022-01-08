import {ChangeDetectionStrategy, Component} from '@angular/core';

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
}
