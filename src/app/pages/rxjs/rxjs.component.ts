import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription }  from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription:Subscription;

  constructor() { 

    this.subscription = this.returnObserver()//.pipe( 
    //   retry(2)
    // )
    .subscribe(
    (data)=>{
      console.log(data)
    }, 
    (err) =>{
      console.error(err)
    }, 
    () => {
      console.log('Ha finalizado el observer')
    })
  }
  ngOnDestroy(): void {
    console.log('Page closed')
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  returnObserver(): Observable<any>{

    return  new Observable( (observer: Subscriber<any>) => {
      
      let count = 0;
      
      let interval = setInterval(()=>{
        
        count ++;

        const out = {
          value:count
        }

        observer.next( out );

        // if(count === 3){
          
        //   clearInterval(interval);
        //   observer.complete();
          
        // }
        // if(count === 2){
        //   // clearInterval(interval);
        //   observer.error('help bro')
        // }

      }, 1000);

    }).pipe( 
      map( resp  =>  resp.value ),
      filter( ( value, index ) => {
        
        if( (value % 2) === 1){
          return true;
        }
        else{
          return false;
        }
      
      })
     )

  }

}
