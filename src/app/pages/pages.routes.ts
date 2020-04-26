import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

const pagesRutes:Routes = [
    { 
        path:'', component: PagesComponent,
        children:[
            { path:'home', component: HomeComponent},
            { path:'',redirectTo:'/home', pathMatch:'full'}
        ]
    },
];

export const Pages_ROUTES = RouterModule.forChild( pagesRutes );