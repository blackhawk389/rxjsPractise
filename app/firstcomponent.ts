import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';


//keyup and enter key event binding
@Component(
    {
        selector: 'my-app',
        template: `
            <input type="text" required 
            [(ngModel)]="inputValue" name="inputValue" >  
            <button (click)="addto()">submit</button>  
               
        `
    }
)
export class first{
     
     proxySubject;
     inputValue: string;
     array = [];
     
       observer = {
         next: v => console.log(v),
         complete: () => console.log("complete") 
         
     }
   
     
     //proxySubject = Observable.from(this.array);
     
    //  1. You are subscribing everytime the button clicked, you should subscribe once 2. Your first subscribe comes after your first next, that's why you miss the first value. 3. call .asObservable where you pass it to another component (i.e pass proxySubject.asObservable()). Just calling it alone has no effect, it's a function and you don't do anything with the return value
     
    
    constructor(){
        
      
        
     //this.proxySubject = new Subject();
     //how to subscribe to the observable this can also done with simple
     //variable, lets not do this
   // this.proxySubject = Observable.from(this.array);
       Observable.from(this.array).subscribe(this.observer
        //function(data){
          
    //        console.log("from observable "+ data)
       //}
       )
       //this.proxySubject.subscribe(this.observer
    //            function(data){
    //       //if there is conosle with string all values will be string
    //        console.log(data)
    //    }
       // function(e){
    //        console.log(e)
    //    }, function(){
    //        console.log("complete")
    //    })
      // )
    }
    
    addto(){
       
       
        this.array.push(this.inputValue)
       // this.proxySubject.next(this.array);
       this.observer.next(this.array);
        //console.log(this.array);
    //     this.proxySubject.subscribe(function(data){
    //    console.log(data)
    //     })
    //    this.proxySubject.next(this.array)
      
       //this.proxySubject.next(this.inputValue)
      // this.proxySubject.asObservable(console.log("proxy"));
      
    }
}
bootstrap(first);