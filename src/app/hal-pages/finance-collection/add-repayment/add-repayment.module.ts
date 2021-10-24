import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRepaymentComponent } from './add-repayment.component';

const routes: Routes = [
    {
        path: '',
        component: AddRepaymentComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes),
    ],
    declarations: [AddRepaymentComponent]
})
export class AddrepaymentModule { }
