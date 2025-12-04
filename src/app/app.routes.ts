import { Routes } from '@angular/router';
import { Home } from './home/home';
import { EmployeeDirectory } from './employee-directory/employee-directory';
import { About } from './about/about';
import { Services } from './services/services';
import { Pagenotfound } from './pagenotfound/pagenotfound';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'employee-directory', component: EmployeeDirectory },
    { path: 'about', component: About },
    { path: 'services', component: Services },
    { path: '**', component: Pagenotfound}
];
