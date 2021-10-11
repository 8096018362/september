import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [

    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
    },
    {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.ProductEditModule)
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class ProductModule { }
