import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 
  
    this.countThree().then((result)=>{

      console.log("Finish: " + result);
    
    })
    .catch((err)=> {
      
      console.error("Error in promess, " + err)
    
    })

  }

  ngOnInit(): void {
  }

  countThree():Promise<boolean>{
    return new Promise((resolve, reject)=>{
      let count = 0;      
      let interval = setInterval( ()=> {        
        count += 1;
        console.log(count);
        if(count === 3){
          resolve(true);
          clearInterval(interval);
        }
      }, 1000)      
    });
  }

}
