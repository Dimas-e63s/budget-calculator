import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BudgetsTableComponent } from './budgets-table/budgets-table.component';
import {FilterByAmountPipe} from './shared/filterByPrice.pipe';
import { BudgetListItemComponent } from './budgets-table/budget-list-item/budget-list-item.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetComponent,
    BudgetFormComponent,
    BudgetsTableComponent,
    FilterByAmountPipe,
    BudgetListItemComponent,
    ModalComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
