import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';

const appRoutes: Routes = [{
    path: 'users',
    component: UserComponent
}];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);