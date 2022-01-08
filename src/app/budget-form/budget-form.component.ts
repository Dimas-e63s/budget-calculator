import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BudgetItem} from '../models/budget.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetFormComponent {
  @Output() addBudgetItem = new EventEmitter<BudgetItem>();

  form = this.fb.group({
    amount: [null, Validators.required],
    description: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  addItem(): void {
    this.addBudgetItem.emit(this.form.value);
    this.form.reset();
  }
}
