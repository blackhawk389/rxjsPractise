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
var Subject_1 = require('rxjs/Subject');
//keyup and enter key event binding
var secondClass = (function () {
    function secondClass() {
        this.localarray = [];
        //    this.proxySubject.subscribe(function(data){
        //        this.localarray.push(data);
        //   }) 
    }
    secondClass.prototype.ngOnInit = function () {
        var _this = this;
        //cold observer sending values from start
        this.sendingSubject.subscribe(function (data) {
            _this.localarray.push(data);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Subject_1.Subject)
    ], secondClass.prototype, "sendingSubject", void 0);
    secondClass = __decorate([
        core_1.Component({
            selector: 'second',
            template: "\n    \n    <div>  \n    <div *ngFor = \"let x of localarray\">{{x}} </div>\n    </div>   \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], secondClass);
    return secondClass;
}());
exports.secondClass = secondClass;
var first = (function () {
    //proxySubject = Observable.from(this.array);
    //  1. You are subscribing everytime the button clicked, you should subscribe once 2. Your first subscribe comes after your first next, that's why you miss the first value. 3. call .asObservable where you pass it to another component (i.e pass proxySubject.asObservable()). Just calling it alone has no effect, it's a function and you don't do anything with the return value
    function first() {
        this.array = [];
        this.observer = {
            next: function (v) { return console.log(v); },
            complete: function () { return console.log("complete"); }
        };
        this.proxySubject = new Subject_1.Subject();
        //how to subscribe to the observable this can also done with simple
        //variable, lets not do this
        // this.proxySubject = Observable.from(this.array);
        Observable_1.Observable.from(this.array).subscribe(this.proxySubject.asObservable);
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
    first.prototype.addto = function () {
        this.array.push(this.inputValue);
        //this.proxySubject.next(this.array)
        this.proxySubject.next(this.inputValue);
        this.observer.next(this.inputValue);
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
            template: "\n            <input type=\"text\" required \n            [(ngModel)]=\"inputValue\" name=\"inputValue\" >  \n            <button (click)=\"addto()\">submit</button>\n            <second [sendingSubject]=\"proxySubject\"></second>               \n        ",
            directives: [secondClass]
        }), 
        __metadata('design:paramtypes', [])
    ], first);
    return first;
}());
exports.first = first;
platform_browser_dynamic_1.bootstrap(first);
//# sourceMappingURL=firstcomponent.js.map