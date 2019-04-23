(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-log-in-mobile-log-in-module"],{

/***/ "./src/app/mobile-log-in/mobile-log-in.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.module.ts ***!
  \*******************************************************/
/*! exports provided: MobileLogInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogInPageModule", function() { return MobileLogInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mobile_log_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-log-in.page */ "./src/app/mobile-log-in/mobile-log-in.page.ts");







var routes = [
    {
        path: '',
        component: _mobile_log_in_page__WEBPACK_IMPORTED_MODULE_6__["MobileLogInPage"]
    }
];
var MobileLogInPageModule = /** @class */ (function () {
    function MobileLogInPageModule() {
    }
    MobileLogInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mobile_log_in_page__WEBPACK_IMPORTED_MODULE_6__["MobileLogInPage"]]
        })
    ], MobileLogInPageModule);
    return MobileLogInPageModule;
}());



/***/ }),

/***/ "./src/app/mobile-log-in/mobile-log-in.page.html":
/*!*******************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n    <ion-toolbar text-center color=\"dark\">\n      <h3> <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon> Blood Donation</h3>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n        <h2 class=\"active\"> Log In </h2>\n        <!-- <h2 class=\"inactive underlineHover\">Sign Up </h2> -->\n    \n        <!-- Icon -->\n        <div class=\"fadeIn first\">\n          <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n        </div>\n    \n        <!-- Login Form -->\n        <form>\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"login\" value=\"\" [(ngModel)]=\"emiratesId\" placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Password</h2>\n          <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" [(ngModel)]=\"password\">\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log in\" (click)=\"login()\">\n        </form>\n    \n        <!-- Remind Password -->\n        <div id=\"formFooter\">\n          <a class=\"underlineHover\" (click)=\"signup()\">Dont have an account?</a>\n        </div>\n      </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mobile-log-in/mobile-log-in.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuay9CbG9vZEJhbmtBcHBsaWNhdGlvbi9zcmMvYXBwL21vYmlsZS1sb2ctaW4vbW9iaWxlLWxvZy1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBLDhEQUFZO0FBeEJaO0VBQ0ksWUFBWSxFQUFBO0FBRWhCO0VBQ0ksWUFBVztFQUNYLCtCQUEwQyxFQUFBO0FBRzlDO0VBQ0ksZ05BQWEsRUFBQTtBQUlqQjtFQUNJLFlBQVc7RUFDWCwrQkFBMEMsRUFBQTtBQUU5QztFQUNFLFlBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxpQkFBaUIsRUFBQTtBQU1uQixVQUFBO0FBRUE7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2hCLGNBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBRUUsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEIsRUFBQTtBQUs5QixTQUFBO0FBRUE7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7QUFLbEMsbUJBQUE7QUFFQTtFQUNFLHlCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLGlEQUFpRDtFQUVqRCw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBSzFCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UseUJBQTJCLEVBQUE7QUFHN0I7RUFFRSw4QkFBOEI7RUFHOUIsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UsY0FBYyxFQUFBO0FBS2hCLGVBQUE7QUFFQSx1Q0FBQTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUczQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJbkI7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFJYixXQUFBO0FBRUE7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDRSxVQUFTLEVBQUE7QUFHWDtFQUNFLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlLWxvZy1pbi9tb2JpbGUtbG9nLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcbiAgICBjb2xvcjogYmxhY2s7XG59XG5we1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDMwcHggcmdiYSgwLCAwLCAwLCAxKTtcblxufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDQxNTY3OTkyOS0xZmQ1MTkzZjE0Zjc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbn1cblxuXG5oMXtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG59XG5oM3tcbiAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucycpO1xuXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTJiYWRkO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cblxuLyogU1RSVUNUVVJFICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm1Gb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM0MzQzNTtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cblxuXG4vKiBUQUJTICovXG5cbmgyLmluYWN0aXZlIHtcbiAgY29sb3I6ICM2YjZiNmI7XG59XG5cbmgyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwNDE0MTtcbn1cblxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2YwNDE0MTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICAgI2M5MjIyMjtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBBTklNQVRJT05TICovXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbi5mYWRlSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cblxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6MDtcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICBhbmltYXRpb24tZHVyYXRpb246MXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5zZWNvbmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi50aGlyZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLmZvdXJ0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDE0MTtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogT1RIRVJTICovXG5cbio6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59IFxuXG4jaWNvbiB7XG4gIHdpZHRoOjYwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/mobile-log-in/mobile-log-in.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.page.ts ***!
  \*****************************************************/
/*! exports provided: MobileLogInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLogInPage", function() { return MobileLogInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/session/session.service */ "./src/app/services/session/session.service.ts");
/* harmony import */ var src_aws_exports_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/aws-exports.js */ "./src/aws-exports.js");








aws_amplify__WEBPACK_IMPORTED_MODULE_3___default.a.configure(src_aws_exports_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
var MobileLogInPage = /** @class */ (function () {
    function MobileLogInPage(session, router, alertController) {
        this.session = session;
        this.router = router;
        this.alertController = alertController;
    }
    MobileLogInPage.prototype.ngOnInit = function () {
    };
    MobileLogInPage.prototype.presentError = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            message: data,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MobileLogInPage.prototype.presentAlert = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Warning',
                            message: data,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MobileLogInPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.password == null)
                            this.presentAlert("Please Enter Password");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(this.emiratesId.toString(), this.password)
                            //session add user
                            // console.log(user.attributes.name);
                            // console.log(JSON.stringify(user));
                        ];
                    case 2:
                        user = _a.sent();
                        //session add user
                        // console.log(user.attributes.name);
                        // console.log(JSON.stringify(user));
                        this.session.user = user;
                        this.router.navigate(['mobile-user-home']);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        if (err_1.code === 'UserNotConfirmedException') {
                            this.presentError(err_1);
                            // The error happens if the user didn't finish the confirmation step when signing up
                            // In this case you need to resend the code and confirm the user
                            // About how to resend the code and confirm the user, please check the signUp part
                        }
                        else if (err_1.code === 'PasswordResetRequiredException') {
                            this.presentError("Reset Your Password");
                            // The error happens when the password is reset in the Cognito console
                            // In this case you need to call forgotPassword to reset the password
                            // Please check the Forgot Password part.
                        }
                        else if (err_1.code === 'NotAuthorizedException') {
                            this.presentError("Incorrect Password");
                            // The error happens when the incorrect password is provided
                        }
                        else if (err_1.code === 'UserNotFoundException') {
                            this.presentError("User not Found");
                            // The error happens when the supplied username/email does not exist in the Cognito user pool
                        }
                        else {
                            console.log(err_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MobileLogInPage.prototype.signup = function () {
        this.router.navigate(['mobile-sign-up']);
    };
    MobileLogInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-log-in',
            template: __webpack_require__(/*! ./mobile-log-in.page.html */ "./src/app/mobile-log-in/mobile-log-in.page.html"),
            styles: [__webpack_require__(/*! ./mobile-log-in.page.scss */ "./src/app/mobile-log-in/mobile-log-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], MobileLogInPage);
    return MobileLogInPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-log-in-mobile-log-in-module.js.map