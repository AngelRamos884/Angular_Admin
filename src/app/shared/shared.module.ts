import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations:[
        BreadcrumbsComponent,
        NavbarComponent,
        NopagefoundComponent,  
        SidebarComponent
    ],
    exports:[
        NavbarComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent  
    ]
})
export class SharedModule {

}