import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BudgetItem} from '../../models/budget.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() set selectedItem(value: BudgetItem) {
    this.initializeForm(value);
    this.setElId(value.id);
  }
  @Output() updateBudgetItem = new EventEmitter<BudgetItem>();
  @Output() closeModalClick = new EventEmitter<void>();

  form: FormGroup;
  private id: number;

  constructor(private fb: FormBuilder) {
  }

  private initializeForm({amount, description}: BudgetItem): void {
    this.form = this.fb.group({
      amount: [amount, Validators.required],
      description: [description, Validators.required]
    });
  }

  private setElId(id: number): void {
    this.id = id;
  }

  emitUpdatedItem(): void {
    this.updateBudgetItem.emit({...this.form.value, id: this.id});
    this.closeModalWindow();
  }

  closeModalWindow(): void {
    this.closeModalClick.emit();
  }
}
