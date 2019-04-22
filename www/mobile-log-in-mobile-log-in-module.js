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

module.exports = "<ion-header >\n    <ion-toolbar text-center color=\"dark\">\n      <h3> <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon> Blood Donation</h3>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n        <h2 class=\"active\"> Log In </h2>\n        <!-- <h2 class=\"inactive underlineHover\">Sign Up </h2> -->\n    \n        <!-- Icon -->\n        <div class=\"fadeIn first\">\n          <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n        </div>\n    \n        <!-- Login Form -->\n        <form>\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"login\" value=\"\" [(ngModel)]=\"emiratesId\" placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Mobile Number</h2>\n          <input type=\"text\" id=\"mobileNum\" class=\"fadeIn third\" name=\"login\" [(ngModel)]=\"mobileNo\" placeholder=\"+971-5X-XXXXXXX\">\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log in\" (click)=\"login()\">\n        </form>\n    \n        <!-- Remind Password -->\n        <div id=\"formFooter\">\n          <a class=\"underlineHover\" (click)=\"signup()\">Dont have an account?</a>\n        </div>\n      </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mobile-log-in/mobile-log-in.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuay9CbG9vZEJhbmtBcHBsaWNhdGlvbi9zcmMvYXBwL21vYmlsZS1sb2ctaW4vbW9iaWxlLWxvZy1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBLDhEQUFZO0FBeEJaO0VBQ0ksWUFBWSxFQUFBO0FBRWhCO0VBQ0ksWUFBVztFQUNYLCtCQUEwQyxFQUFBO0FBRzlDO0VBQ0ksZ05BQWEsRUFBQTtBQUlqQjtFQUNJLFlBQVc7RUFDWCwrQkFBMEMsRUFBQTtBQUU5QztFQUNFLFlBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxpQkFBaUIsRUFBQTtBQU1uQixVQUFBO0FBRUE7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2hCLGNBQUE7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdmO0VBRUUsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEIsRUFBQTtBQUs5QixTQUFBO0FBRUE7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDLEVBQUE7QUFLbEMsbUJBQUE7QUFFQTtFQUNFLHlCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUVmLGlEQUFpRDtFQUVqRCw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBSzFCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UseUJBQTJCLEVBQUE7QUFHN0I7RUFFRSw4QkFBOEI7RUFHOUIsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWMsRUFBQTtBQUtoQixlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlLEVBQUEsRUFBQTtBQUluQixrQ0FBQTtBQUNBO0VBQTRCO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUU5RDtFQUFvQjtJQUFPLFVBQVMsRUFBQTtFQUFJO0lBQUssVUFBUyxFQUFBLEVBQUE7QUFFdEQ7RUFDRSxVQUFTO0VBQ1QsbUNBQWtDO0VBRWxDLDJCQUEwQjtFQUUxQixxQ0FBb0M7RUFFcEMsNkJBQTRCO0VBRTVCLDhCQUE2QjtFQUU3QixzQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTtBQUdyQixrQ0FBQTtBQUNBO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsV0FBVyxFQUFBO0FBSWIsV0FBQTtBQUVBO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0UsVUFBUyxFQUFBO0FBR1g7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1sb2ctaW4vbW9iaWxlLWxvZy1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxucHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG5cbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ0MTU2Nzk5MjktMWZkNTE5M2YxNGY3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTUwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cblxuaDF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuaDN7XG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcblxuLyogQkFTSUMgKi9cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBjb2xvcjogIzkyYmFkZDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogIzIyMjQyODtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDM0MzU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmI2YjZiO1xufVxuXG5oMi5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMDQxNDE7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmMDQxNDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgICNjOTIyMjI7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbiAgb3BhY2l0eTowO1xuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiBPVEhFUlMgKi9cblxuKjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn0gXG5cbiNpY29uIHtcbiAgd2lkdGg6NjAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */"

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



var MobileLogInPage = /** @class */ (function () {
    function MobileLogInPage(router, acr) {
        this.router = router;
        this.acr = acr;
    }
    MobileLogInPage.prototype.ngOnInit = function () {
    };
    MobileLogInPage.prototype.login = function () {
        this.emiratesId;
        this.mobileNo;
        //add authenticate function 
        this.router.navigate(['mobile-user-home/', this.emiratesId]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MobileLogInPage);
    return MobileLogInPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-log-in-mobile-log-in-module.js.map