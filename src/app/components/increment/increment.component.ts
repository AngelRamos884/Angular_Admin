import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  
  @ViewChild('txtProgress') txtProgress: ElementRef;
  
  @Input() leyend:string = 'Leyend';
  @Input() percent:number = 50;

  @Output() changeVal:EventEmitter<number> = new EventEmitter();
  
  constructor() { 
    console.log(this.leyend)
    console.log(this.percent)
  }

  ngOnInit(): void {
  }

  changaValue(value: number){

    if(this.percent >= 100 && value  > 0){
      this.percent = 100;
      return;
    }
    
    if(this.percent <= 0 && value < 0){
      this.percent = 0;
      return;
    }

    this.percent = this.percent + value;

    this.changeVal.emit(this.percent);
    
    this.txtProgress.nativeElement.focus();
    
  }

  onChange(e:number){
    
    // let elementHtml:any = document.getElementsByName('percent')[0];
    
    if(e >= 100){
      this.percent = 100;
      this.changeVal.emit(this.percent);
    }
    else if(e <= 0){
      this.percent = 0;
    }
    else{
      this.percent = e;
    }
    
    // elementHtml.value = Number(this.percent)

    this.txtProgress.nativeElement.value = this.percent;

    this.changeVal.emit(this.percent);

  }
}
