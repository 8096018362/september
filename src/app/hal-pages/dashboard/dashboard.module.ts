import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'operator',
        loadChildren: () => import('./operator/operator.module').then(m => m.OperatorModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'employer',
        loadChildren: () => import('./employer/employer.module').then(m => m.DashboardEmployerModule)
    }
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class DashboardModule { }
