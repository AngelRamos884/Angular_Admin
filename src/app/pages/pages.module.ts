import { NgModule } from "@angular/core";

//Routes
import { Pages_ROUTES } from './pages.routes';

//Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        PagesComponent,
        HomeComponent
    ],
    exports:[
        PagesComponent,
        HomeComponent
    ],
    imports:[        
        SharedModule,
        Pages_ROUTES
    ]
})
export class PagesModule {
    
}