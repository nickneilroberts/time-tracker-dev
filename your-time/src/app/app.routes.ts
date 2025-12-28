import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CategoryPage } from './pages/category-page/category-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'category', component: CategoryPage}
];
