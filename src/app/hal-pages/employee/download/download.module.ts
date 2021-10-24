import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadComponent } from './download.component';

const routes: Routes = [
    {
        path: '',
        component: DownloadComponent
    }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        RouterModule.forChild(routes)
    ],
    declarations: [DownloadComponent]
})
export class DownloadModule { }
