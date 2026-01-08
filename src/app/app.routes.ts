import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Foodrecipe } from './pages/foodrecipe/foodrecipe';
import { Contact } from './pages/contact/contact';
import { Details } from './pages/details/details';

export const routes: Routes = [
    {
        path:'',
        component: Home
    },
    {
        path:'about',
        component: About
    },
    {
        path:'foodrecipe',
        component:Foodrecipe
    },
    {
        path:'contact',
        component: Contact
    },
    {
        path: 'product/:id',
        component: Details
    }
];