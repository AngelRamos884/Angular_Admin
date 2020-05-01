import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-donut',
  templateUrl: './graphic-donut.component.html',
  styles: [
  ]
})
export class GraphicDonutComponent implements OnInit {

  @Input() graficos: any = {  };

  constructor() {
   }

  ngOnInit(): void {
  }

}
