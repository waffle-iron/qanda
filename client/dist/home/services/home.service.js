"use strict";var __decorate=this&&this.__decorate||function(e,t,r,a){var c,o=arguments.length,n=3>o?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var f=e.length-1;f>=0;f--)(c=e[f])&&(n=(3>o?c(n):o>3?c(t,r,n):c(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("@angular/core"),HomeService=function(){function e(){}return e.prototype.createNewUser=function(e,t){firebase.database().ref("users/"+e).set({username:t})},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],e)}();exports.HomeService=HomeService;