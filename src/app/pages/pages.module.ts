import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

//Routes
import { Pages_ROUTES } from './pages.routes';

//Components
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';

//NgCharts
import { ChartsModule } from 'ng2-charts';

//Components
import { IncrementComponent } from '../components/increment/increment.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';

@NgModule({
    declarations:[
        PagesComponent,
        HomeComponent,
        ProgressComponent,
        IncrementComponent,
        GraphicComponent,
        GraphicDonutComponent
    ],
    exports:[
        PagesComponent,
        HomeComponent,
        ProgressComponent,        
    ],
    imports:[        
        SharedModule,
        Pages_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule {
    
}