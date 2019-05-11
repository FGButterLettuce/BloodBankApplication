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

module.exports = "<ion-header >\n    <ion-toolbar text-center color=\"dark\">\n      <h3> <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon> Blood Donation</h3>\n    </ion-toolbar>\n  </ion-header>\n<ion-content>\n    <div class=\"wrapper fadeInDown\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n        <h2 class=\"active\"> Log In </h2>\n        <!-- <h2 class=\"inactive underlineHover\">Sign Up </h2> -->\n    \n        <!-- Icon -->\n        <div class=\"fadeIn first\">\n          <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n        </div>\n    \n        <!-- Login Form -->\n        <form>\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"login\" value=\"\" [(ngModel)]=\"emiratesId\" placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Password</h2>\n          <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" [(ngModel)]=\"password\">\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log in\" (click)=\"login()\">\n          <ion-spinner name=\"dots\" size=\"large\" *ngIf=\"loading\" color=\"danger\"></ion-spinner>\n        </form>\n    \n        <!-- Remind Password -->\n        <div id=\"formFooter\">\n          <a class=\"underlineHover\" (click)=\"signup()\">Dont have an account?</a>\n        </div>\n      </div>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mobile-log-in/mobile-log-in.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/mobile-log-in/mobile-log-in.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-spinner {\n  position: absolute;\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n  background: #22242877;\n  top: 45.5%;\n  left: 47%;\n  z-index: 9999; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFua0FwcGxpY2F0aW9uL3NyYy9hcHAvbW9iaWxlLWxvZy1pbi9tb2JpbGUtbG9nLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0EsOERBQVk7QUFsQ1o7RUFDSSxZQUFZLEVBQUE7QUFFaEI7RUFDSSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFJOUM7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhLEVBQUE7QUFHZjtFQUNJLGdOQUFhLEVBQUE7QUFJakI7RUFDSSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFFOUM7RUFDRSxZQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsaUJBQWlCLEVBQUE7QUFNbkIsVUFBQTtBQUVBO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYSxFQUFBO0FBR2Y7RUFDRSxjQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtBQUtoQixjQUFBO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUVFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWiw0Q0FBeUM7RUFDekMsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCLEVBQUE7QUFLOUIsU0FBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2xDLG1CQUFBO0FBRUE7RUFDRSx5QkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBaUQ7RUFFakQsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUEyQixFQUFBO0FBRzdCO0VBRUUsOEJBQThCO0VBRzlCLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCLEVBQUE7QUFHaEM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNFLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLGNBQWMsRUFBQTtBQUtoQixlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHM0I7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlLEVBQUEsRUFBQTtBQUluQixrQ0FBQTtBQUNBO0VBQTRCO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUU5RDtFQUFvQjtJQUFPLFVBQVMsRUFBQTtFQUFJO0lBQUssVUFBUyxFQUFBLEVBQUE7QUFFdEQ7RUFDRSxVQUFTO0VBQ1QsbUNBQWtDO0VBRWxDLDJCQUEwQjtFQUUxQixxQ0FBb0M7RUFFcEMsNkJBQTRCO0VBRTVCLDhCQUE2QjtFQUU3QixzQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTtBQUdyQixrQ0FBQTtBQUNBO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsV0FBVyxFQUFBO0FBSWIsV0FBQTtBQUVBO0VBQ0ksYUFBYSxFQUFBO0FBR2pCO0VBQ0UsVUFBUyxFQUFBO0FBR1g7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS1sb2ctaW4vbW9iaWxlLWxvZy1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxucHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG5cbn1cblxuaW9uLXNwaW5uZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBiYWNrZ3JvdW5kOiAjMjIyNDI4Nzc7IFxuICB0b3A6IDQ1LjUlOyBcbiAgbGVmdDogNDclOyAgICAgXG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ0MTU2Nzk5MjktMWZkNTE5M2YxNGY3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTUwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cblxuaDF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuaDN7XG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcblxuLyogQkFTSUMgKi9cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBjb2xvcjogIzkyYmFkZDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogIzIyMjQyODtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDM0MzU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmI2YjZiO1xufVxuXG5oMi5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMDQxNDE7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmMDQxNDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgICNjOTIyMjI7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cblxuLyogQU5JTUFUSU9OUyAqL1xuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXG4uZmFkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5cbi5mYWRlSW4ge1xuICBvcGFjaXR5OjA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xufVxuXG4uZmFkZUluLmZpcnN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5mYWRlSW4uc2Vjb25kIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5mYWRlSW4udGhpcmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLmZhZGVJbi5mb3VydGgge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICBib3R0b206IC0xMHB4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi8qIE9USEVSUyAqL1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufSBcblxuI2ljb24ge1xuICB3aWR0aDo2MCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/session/session.service */ "./src/app/services/session/session.service.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/fcm/fcm.service */ "./src/app/services/fcm/fcm.service.ts");








// import Amplify from 'aws-amplify';
// import amplify from 'src/aws-exports.js';
// Amplify.configure(amplify);
var MobileLogInPage = /** @class */ (function () {
    function MobileLogInPage(amplify, session, router, alertController, afs, fcm) {
        this.amplify = amplify;
        this.session = session;
        this.router = router;
        this.alertController = alertController;
        this.afs = afs;
        this.fcm = fcm;
        this.loading = false;
        this.collection = this.afs.collection('users');
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
                        this.loading = true;
                        if (this.password == null)
                            this.presentAlert("Please Enter Password");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.amplify.auth().signIn(this.emiratesId.toString(), this.password)];
                    case 2:
                        user = _a.sent();
                        this.session.user = user;
                        this.session.eid = this.emiratesId.toString();
                        return [4 /*yield*/, this.session.getPoints(this.emiratesId.toString())];
                    case 3:
                        _a.sent();
                        this.session.getEvents();
                        this.session.checkRecords(this.emiratesId.toString());
                        this.session.getDonations(this.emiratesId.toString());
                        this.session.getHospitals();
                        this.loading = false;
                        this.addtoFB();
                        this.router.navigate(['mobile-user-home']);
                        return [3 /*break*/, 5];
                    case 4:
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
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MobileLogInPage.prototype.signup = function () {
        this.router.navigate(['mobile-sign-up']);
    };
    MobileLogInPage.prototype.addtoFB = function () {
        var _this = this;
        setTimeout(function () {
            var uid = _this.session.user.attributes.sub;
            if (_this.session.recordexists.val) {
                var sendrec = {
                    cogid: uid,
                    eid: _this.emiratesId.toString(),
                    bloodgroup: _this.session.recordexists.bloodgroup,
                    token: _this.fcm.msgtoken
                };
                _this.collection.doc("" + _this.emiratesId.toString()).set(sendrec);
            }
            else if (_this.session.donationexists.val) {
                var senddon = {
                    cogid: uid,
                    eid: _this.emiratesId.toString(),
                    bloodgroup: _this.session.donationexists.bloodgroup,
                    token: _this.fcm.msgtoken
                };
                _this.collection.doc("" + _this.emiratesId.toString()).set(senddon);
            }
        }, 3000);
    };
    MobileLogInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-log-in',
            template: __webpack_require__(/*! ./mobile-log-in.page.html */ "./src/app/mobile-log-in/mobile-log-in.page.html"),
            styles: [__webpack_require__(/*! ./mobile-log-in.page.scss */ "./src/app/mobile-log-in/mobile-log-in.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__["AmplifyService"], _services_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
            _services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_7__["FcmService"]])
    ], MobileLogInPage);
    return MobileLogInPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-log-in-mobile-log-in-module.js.map