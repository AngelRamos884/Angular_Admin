import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRutes:Routes = [
    { 
        path:'', component: PagesComponent,
        children:[
            { path:'home', component: HomeComponent, data: { title:"Home" } },
            { path:'progress', component: ProgressComponent, data: { title:"Progress" } },
            { path:'graphic', component: GraphicComponent, data: { title:"Graphics" } },
            { path:'promess', component: PromesasComponent, data: { title:"Promess" } },
            { path:'rxjs', component: RxjsComponent, data: { title:"Rxjs" } },
            { path:'',redirectTo:'/home', pathMatch:'full'}
        ]
    },
];

export const Pages_ROUTES = RouterModule.forChild( pagesRutes );