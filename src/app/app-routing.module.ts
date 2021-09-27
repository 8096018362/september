import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'hal/dashboard',
        loadChildren: () => import('./hal-pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'hal/product',
        loadChildren: () => import('./hal-pages/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'hal/employer',
        loadChildren: () => import('./hal-pages/employer/employer.module').then(m => m.EmployerModule)
    },
    {
        path: 'hal/employee',
        loadChildren: () => import('./hal-pages/employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'hal/finance-origination',
        loadChildren: () => import('./hal-pages/finance-origination/finance-origination.module').then(m => m.FinanceOriginationModule)
    },
    {
        path: 'hal/finance-collection',
        loadChildren: () => import('./hal-pages/finance-collection/finance-collection.module').then(m => m.FinanceCollectionModule)
    },
    {
        path: 'hal/finance-disbursement',
        loadChildren: () => import('./hal-pages/finance-disbursement/finance-disbursement.module').then(m => m.FinanceDisbursementModule)
    },

    {
        path: 'hal/cs',
        loadChildren: () => import('./hal-pages/cs/cs.module').then(m => m.CreditScoreModule)
    },
    {
        path: 'hal/cm',
        loadChildren: () => import('./hal-pages/cm/cm.module').then(m => m.CommodityMudarabahModule)
    },

    {
        path: 'hal/notifications',
        loadChildren: () => import('./hal-pages/notifications/notifications.module').then(m => m.NotificationsModule)
    },


    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    // },
    // {
    //     path: 'email',
    //     loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
    // },
    // {
    //     path: 'apps',
    //     loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
    // },
    // {
    //     path: 'widget',
    //     loadChildren: () => import('./widget/widget.module').then(m => m.WidgetModule)
    // },
    // {
    //     path: 'ui',
    //     loadChildren: () => import('./ui/ui.module').then(m => m.UiModule)
    // },
    // {
    //     path: 'forms',
    //     loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
    // },
    // {
    //     path: 'tables',
    //     loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    // },
    // {
    //     path: 'media',
    //     loadChildren: () => import('./media/media.module').then(m => m.MediaModule)
    // },
    // {
    //     path: 'charts',
    //     loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
    // },
    // {
    //     path: 'timeline',
    //     loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelineModule)
    // },
    // {
    //     path: 'icons',
    //     loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
    // },
    // {
    //     path: 'authentication',
    //     loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
    // },
    // {
    //     path: 'extra-pages',
    //     loadChildren: () => import('./extra-pages/extra-pages.module').then(m => m.ExtraPagesModule)
    // },
    // {
    //     path: 'maps',
    //     loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
    // },
    {
        path: '',
        redirectTo: 'hal/dashboard/admin',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
