import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes)
    ],
    declarations: [ListComponent]
})
export class ListModule { }
