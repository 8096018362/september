import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'add',
        loadChildren: () => import('./add/add.module').then(m => m.AddModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class EmployerModule { }
