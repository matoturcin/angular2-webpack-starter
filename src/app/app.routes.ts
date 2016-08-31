import { Routes, RouterModule }  from '@angular/router';
import { TestComponent } from './test.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: TestComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [

];
export const routing = RouterModule.forRoot(appRoutes);
