import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';

const pagesRutes:Routes = [
    { 
        path:'', component: PagesComponent,
        children:[
            { path:'home', component: HomeComponent},
            { path:'progress', component: ProgressComponent},
            { path:'graphic', component: GraphicComponent},
            { path:'',redirectTo:'/home', pathMatch:'full'}
        ]
    },
];

export const Pages_ROUTES = RouterModule.forChild( pagesRutes );