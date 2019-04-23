(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mobile-sign-up-mobile-sign-up-module"],{

/***/ "./src/app/mobile-sign-up/mobile-sign-up.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mobile-sign-up/mobile-sign-up.module.ts ***!
  \*********************************************************/
/*! exports provided: MobileSignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSignUpPageModule", function() { return MobileSignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mobile_sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile-sign-up.page */ "./src/app/mobile-sign-up/mobile-sign-up.page.ts");







var routes = [
    {
        path: '',
        component: _mobile_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["MobileSignUpPage"]
    }
];
var MobileSignUpPageModule = /** @class */ (function () {
    function MobileSignUpPageModule() {
    }
    MobileSignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mobile_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["MobileSignUpPage"]]
        })
    ], MobileSignUpPageModule);
    return MobileSignUpPageModule;
}());



/***/ }),

/***/ "./src/app/mobile-sign-up/mobile-sign-up.page.html":
/*!*********************************************************!*\
  !*** ./src/app/mobile-sign-up/mobile-sign-up.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center color=\"dark\">\n    <h3>\n      <ion-icon name=\"water\" color=\"danger\" size=\"medium\"></ion-icon> Blood Donation\n    </h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n      <!-- Tabs Titles -->\n      <h2 class=\"active\"> Sign Up </h2>\n      <!-- <h2 class=\"inactive underlineHover\">Sign Up </h2> -->\n\n      <!-- Icon -->\n      <div class=\"fadeIn first\">\n        <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n      </div>\n\n      <!-- Sign-up Form -->\n      <form>\n        <div *ngIf=\"!alive\">\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"eID\" required [(ngModel)]=\"emiratesId\"\n            placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Name</h2>\n          <input type=\"text\" id=\"name\" class=\"fadeIn third\" name=\"pNo\" required [(ngModel)]=\"name\"\n            placeholder=\"+971-5X-XXXXXXX\">\n          <h2>Email</h2>\n          <input type=\"text\" id=\"email\" class=\"fadeIn fourth\" name=\"email\" required [(ngModel)]=\"email\"\n            placeholder=\"example@example.com\">\n          <h2>Password</h2>\n          <input type=\"text\" id=\"password\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password1\"\n            placeholder=\"Use a strong password\">\n          <br>\n          <h2>Confirm Password</h2>\n          <input type=\"text\" id=\"mobileNum\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password2\"\n            placeholder=\"Re-enter password\">\n          <br>\n          <input type=\"submit\" class=\"fadeIn sixth\" value=\"Sign Up\" (click)=\"signup()\">\n        </div>\n        <div *ngIf=\"alive\">\n          <h2 class=\"fadeIn first\">Please Enter Email Confirmation Code</h2>\n          <input type=\"text\" id=\"code\" class=\"fadeIn second\" name=\"code\" required [(ngModel)]=\"code\">\n          <input type=\"submit\" class=\"fadeIn third\" value=\"confirm\" (click)=\"confirmation()\">\n\n        </div>\n\n      </form>\n\n      <!-- Remind Password -->\n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" (click)=\"login()\">Already have an account?</a>\n      </div>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile-sign-up/mobile-sign-up.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/mobile-sign-up/mobile-sign-up.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.fifth {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.sixth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuay9CbG9vZEJhbmtBcHBsaWNhdGlvbi9zcmMvYXBwL21vYmlsZS1zaWduLXVwL21vYmlsZS1zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QkEsOERBQVk7QUF6Qlo7RUFDSSxZQUFZLEVBQUE7QUFFaEI7RUFDSSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFHOUM7RUFDSSxnTkFBYSxFQUFBO0FBSWpCO0VBQ0ksWUFBVztFQUNYLCtCQUEwQyxFQUFBO0FBRTlDO0VBQ0UsWUFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLGlCQUFpQixFQUFBO0FBT25CLFVBQUE7QUFFQTtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWEsRUFBQTtBQUdmO0VBQ0UsY0FBYztFQUNkLHFCQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7QUFLaEIsY0FBQTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBR2Y7RUFFRSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQXlDO0VBQ3pDLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QixFQUFBO0FBSzlCLFNBQUE7QUFFQTtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtBQUtsQyxtQkFBQTtBQUVBO0VBQ0UseUJBQTBCO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQWlEO0VBRWpELDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBMkIsRUFBQTtBQUc3QjtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UsY0FBYyxFQUFBO0FBS2hCLGVBQUE7QUFFQSx1Q0FBQTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUczQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJbkI7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFJYixXQUFBO0FBRUE7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDRSxVQUFTLEVBQUE7QUFHWDtFQUNFLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9iaWxlLXNpZ24tdXAvbW9iaWxlLXNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xuXG59XG5pb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NDE1Njc5OTI5LTFmZDUxOTNmMTRmNz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG5cbmgxe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDMwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cbmgze1xuICBjb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcblxuLyogQkFTSUMgKi9cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBjb2xvcjogIzkyYmFkZDtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogIzIyMjQyODtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjQyODtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDM0MzU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjNmI2YjZiO1xufVxuXG5oMi5hY3RpdmUge1xuICBjb2xvcjogI2NjY2NjYztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMDQxNDE7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICNmMDQxNDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgICNjOTIyMjI7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIEFOSU1BVElPTlMgKi9cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbi1kb3duIEFuaW1hdGlvbiAqL1xuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbiAgb3BhY2l0eTowO1xuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuICBhbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcblxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcblxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbn1cblxuLmZhZGVJbi5maXJzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5mYWRlSW4uZmlmdGgge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLmZhZGVJbi5zaXh0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTEwcHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDE0MTtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogT1RIRVJTICovXG5cbio6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59IFxuXG4jaWNvbiB7XG4gIHdpZHRoOjYwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/mobile-sign-up/mobile-sign-up.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/mobile-sign-up/mobile-sign-up.page.ts ***!
  \*******************************************************/
/*! exports provided: MobileSignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSignUpPage", function() { return MobileSignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_aws_exports_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/aws-exports.js */ "./src/aws-exports.js");








aws_amplify__WEBPACK_IMPORTED_MODULE_3___default.a.configure(src_aws_exports_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
var MobileSignUpPage = /** @class */ (function () {
    function MobileSignUpPage(amplifyService, router, alertController) {
        this.amplifyService = amplifyService;
        this.router = router;
        this.alertController = alertController;
        this.alive = false;
    }
    MobileSignUpPage.prototype.ngOnInit = function () {
    };
    MobileSignUpPage.prototype.presentAlert = function (data) {
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
    MobileSignUpPage.prototype.signup = function () {
        var _this = this;
        if (this.password1 != this.password2) {
            this.presentAlert('Passwords dont match!');
        }
        else {
            aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signUp({
                username: this.emiratesId.toString(),
                password: this.password2,
                attributes: {
                    email: this.email,
                    name: this.name
                },
            })
                .then(function (data) { return console.log(data); })
                .catch(function (err) { return console.log(err, _this.presentAlert(err)); });
            console.log(this.emiratesId);
            this.alive = !this.alive;
        }
    };
    MobileSignUpPage.prototype.confirmation = function () {
        var _this = this;
        aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].confirmSignUp(this.emiratesId.toString(), this.code, {
            // Optional. Force user confirmation irrespective of existing alias. By default set to True.
            forceAliasCreation: true
        }).then(function (data) {
            if (data) {
                _this.adduser();
                _this.login();
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    MobileSignUpPage.prototype.login = function () {
        this.router.navigate(['mobile-log-in']);
    };
    MobileSignUpPage.prototype.adduser = function () {
        var usr = [{
                eid: this.emiratesId,
                name: this.name,
                email: this.email
            }];
        this.amplifyService.api().post('donorapi', '/donor', { body: usr })
            .catch(function (err) {
            console.log("Error saving list: " + err);
        });
    };
    MobileSignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-sign-up',
            template: __webpack_require__(/*! ./mobile-sign-up.page.html */ "./src/app/mobile-sign-up/mobile-sign-up.page.html"),
            styles: [__webpack_require__(/*! ./mobile-sign-up.page.scss */ "./src/app/mobile-sign-up/mobile-sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__["AmplifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], MobileSignUpPage);
    return MobileSignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-sign-up-mobile-sign-up-module.js.map