(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-home-mobile-home-module"],{

/***/ "./src/app/mobile-home/mobile-home.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mobile-home/mobile-home.module.ts ***!
  \***************************************************/
/*! exports provided: MobileHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHomePageModule", function() { return MobileHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mobile_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-home.page */ "./src/app/mobile-home/mobile-home.page.ts");







var routes = [
    {
        path: '',
        component: _mobile_home_page__WEBPACK_IMPORTED_MODULE_6__["MobileHomePage"]
    }
];
var MobileHomePageModule = /** @class */ (function () {
    function MobileHomePageModule() {
    }
    MobileHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mobile_home_page__WEBPACK_IMPORTED_MODULE_6__["MobileHomePage"]]
        })
    ], MobileHomePageModule);
    return MobileHomePageModule;
}());



/***/ }),

/***/ "./src/app/mobile-home/mobile-home.page.html":
/*!***************************************************!*\
  !*** ./src/app/mobile-home/mobile-home.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar text-center color=\"dark\">\n    <h3> <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon> Blood Donation</h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div text-center>\n\n    <br>\n    <br>\n\n  <h1><b>Donate Regularly,<br>Save Lives</b></h1>\n\n  <br>\n  <br>\n\n  <p>Sign up now to schedule a donation plan <br> and earn points for donations<br> Get notified of blood shortages in<br> local hospitals near you and save lives</p>\n\n  <br>\n  <br>\n\n      <ion-button (click)=\"signup()\" color=\"light\" size = \"medium\"  >\n        Sign Up\n      </ion-button>\n  \n      <br>\n  \n      <ion-button (click)=\"login()\" color=\"light\" size = \"medium\" >\n        Log In\n      </ion-button>\n</div>\n<br>\n<br>\n<div>\n  <ion-card color= \"dark\">\n    <div class=\"text\">\n        <h3><ion-icon name=\"water\" color=\"danger\" size= \"large\"></ion-icon>\n          Blood Matters</h3>\n        <p>Find out how rare your blood is</p>\n    </div>\n  </ion-card>\n\n  <ion-card color= \"dark\">\n      <div class=\"text\">\n        <h3><ion-icon name=\"pricetags\" color=\"danger\" size= \"large\" ></ion-icon>        \n          Rewards</h3>\n          <p>Find out the exciting offers in store for donors</p>\n    </div>\n  </ion-card>\n\n  <ion-card color= \"dark\">\n      <div class=\"text\">\n          <h3><ion-icon name=\"medkit\" color=\"danger\" size= \"large\"></ion-icon>\n            The Team</h3>\n            <p>Get to know our team better</p>\n      </div>\n    </ion-card>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mobile-home/mobile-home.page.scss":
/*!***************************************************!*\
  !*** ./src/app/mobile-home/mobile-home.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFua0FwcGxpY2F0aW9uL3NyYy9hcHAvbW9iaWxlLWhvbWUvbW9iaWxlLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUFZO0FBRVo7RUFDSSxZQUFZLEVBQUE7QUFFaEI7RUFDSSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFHOUM7RUFDSSxnTkFBYTtFQUNiLFlBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxpQkFBaUIsRUFBQTtBQUlyQjtFQUNJLFlBQVc7RUFDWCwrQkFBMEM7RUFDMUMsa0NBQWtDO0VBQ2xDLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksWUFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlLWhvbWUvbW9iaWxlLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XG5cbmhlYWRlcntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5we1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDMwcHggcmdiYSgwLCAwLCAwLCAxKTtcblxufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDQxNTY3OTkyOS0xZmQ1MTkzZjE0Zjc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG5cbmgxe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDMwcHggcmdiYSgwLCAwLCAwLCAxKTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbn1cbmgze1xuICAgIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/mobile-home/mobile-home.page.ts":
/*!*************************************************!*\
  !*** ./src/app/mobile-home/mobile-home.page.ts ***!
  \*************************************************/
/*! exports provided: MobileHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHomePage", function() { return MobileHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session/session.service */ "./src/app/services/session/session.service.ts");




var MobileHomePage = /** @class */ (function () {
    function MobileHomePage(session, router) {
        this.session = session;
        this.router = router;
    }
    MobileHomePage.prototype.ngOnInit = function () {
    };
    MobileHomePage.prototype.signup = function () {
        this.router.navigate(['mobile-sign-up']);
    };
    MobileHomePage.prototype.login = function () {
        this.router.navigate(['mobile-log-in']);
    };
    MobileHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-home',
            template: __webpack_require__(/*! ./mobile-home.page.html */ "./src/app/mobile-home/mobile-home.page.html"),
            styles: [__webpack_require__(/*! ./mobile-home.page.scss */ "./src/app/mobile-home/mobile-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MobileHomePage);
    return MobileHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-home-mobile-home-module.js.map