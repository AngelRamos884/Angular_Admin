import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      title: 'Main',
      icon: 'nav-icon fas fa-tachometer-alt',
      subMenu:[
        {
          title: 'Home',
          url:'/home'
        },
        {
          title: 'Graphics',
          url:'/graphic'
        },
        {
          title: 'ProgressBar',
          url:'/progress'
        },
        {
          title: 'Promesas',
          url:'/promess'
        },
        {
          title: 'Rxjs',
          url:'/rxjs'
        },
      ]
    }
  ]
  
  constructor() { }
}
