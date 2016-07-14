"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/from');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
//keyup and enter key event binding
var first = (function () {
    //proxySubject = Observable.from(this.array);
    //  1. You are subscribing everytime the button clicked, you should subscribe once 2. Your first subscribe comes after your first next, that's why you miss the first value. 3. call .asObservable where you pass it to another component (i.e pass proxySubject.asObservable()). Just calling it alone has no effect, it's a function and you don't do anything with the return value
    function first() {
        this.array = [];
        this.proxySubject = new ReplaySubject_1.ReplaySubject();
        //how to subscribe to the observable this can also done with simple
        //variable, lets not do this
        this.proxySubject = Observable_1.Observable.from(this.array);
        //   Observable.from(this.array).subscribe(function(data){
        //        console.log("from observable "+ data)
        //    })
        this.proxySubject.subscribe();
    }
    first.prototype.addto = function () {
        this.array.push(this.inputValue);
        //console.log(this.array);
        //     this.proxySubject.subscribe(function(data){
        //    console.log(data)
        //     })
        //    this.proxySubject.next(this.array)
        //this.proxySubject.next(this.inputValue)
        // this.proxySubject.asObservable(console.log("proxy"));
    };
    first = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <input type=\"text\" required \n            [(ngModel)]=\"inputValue\" name=\"inputValue\" >  \n            <button (click)=\"addto()\">submit</button>  \n               \n        "
        }), 
        __metadata('design:paramtypes', [])
    ], first);
    return first;
}());
exports.first = first;
platform_browser_dynamic_1.bootstrap(first);
//# sourceMappingURL=firstcomponent.js.map