// Import angular router modules

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import components who are pages
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PageComponent } from './components/page/page.component';
import { WorkComponent } from './components/work/work.component';
import { ErrorComponent } from './components/error/error.component';

// Routes Array
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'form', component: FormComponent },
    { path: 'work', component: WorkComponent },
    { path: 'test-page', component: PageComponent },
    { path: '**', component: ErrorComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);