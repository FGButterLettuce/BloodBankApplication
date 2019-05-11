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

module.exports = "<ion-header>\n  <ion-toolbar text-center color=\"dark\">\n    <h3>\n      <ion-icon name=\"water\" color=\"danger\" size=\"medium\"></ion-icon> Blood Donation\n    </h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n      <h2 class=\"active\"> Sign Up </h2>\n\n      <!-- Icon -->\n      <div class=\"fadeIn first\">\n        <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n      </div>\n\n      <!-- Sign-up Form -->\n      <form>\n        <div *ngIf=\"!alive\">\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"eID\" required [(ngModel)]=\"emiratesId\"\n            placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Name</h2>\n          <input type=\"text\" id=\"name\" class=\"fadeIn third\" name=\"pNo\" required [(ngModel)]=\"name\"\n            placeholder=\"John Doe\">\n          <h2>Email</h2>\n          <input type=\"text\" id=\"email\" class=\"fadeIn fourth\" name=\"email\" required [(ngModel)]=\"email\"\n            placeholder=\"example@example.com\">\n          <h2>Password</h2>\n          <input type=\"text\" id=\"password\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password1\"\n            placeholder=\"Use a strong password\">\n          <br>\n          <h2>Confirm Password</h2>\n          <input type=\"text\" id=\"mobileNum\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password2\"\n            placeholder=\"Re-enter password\">\n          <br>\n          <input type=\"submit\" class=\"fadeIn sixth\" value=\"Sign Up\" (click)=\"signup()\">\n        </div>\n        <div *ngIf=\"alive\">\n          <h2 class=\"fadeIn first\">Please Enter Email Confirmation Code</h2>\n          <input type=\"text\" id=\"code\" class=\"fadeIn second\" name=\"code\" required [(ngModel)]=\"code\">\n          <input type=\"submit\" class=\"fadeIn third\" value=\"confirm\" (click)=\"confirmation()\">\n\n        </div>\n\n      </form>\n\n      <!-- Remind Password -->\n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" (click)=\"login()\">Already have an account?</a>\n      </div>\n    </div>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mobile-sign-up/mobile-sign-up.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/mobile-sign-up/mobile-sign-up.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nion-content {\n  --background: rgba(255, 255, 255, 0) url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat center center / cover; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh3 {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: bold; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.fifth {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.sixth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFua0FwcGxpY2F0aW9uL3NyYy9hcHAvbW9iaWxlLXNpZ24tdXAvbW9iaWxlLXNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQSw4REFBWTtBQXpCWjtFQUNJLFlBQVksRUFBQTtBQUVoQjtFQUNJLFlBQVc7RUFDWCwrQkFBMEMsRUFBQTtBQUc5QztFQUNJLGdOQUFhLEVBQUE7QUFJakI7RUFDSSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFFOUM7RUFDRSxZQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsaUJBQWlCLEVBQUE7QUFPbkIsVUFBQTtBQUVBO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYSxFQUFBO0FBR2Y7RUFDRSxjQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtBQUtoQixjQUFBO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7QUFHZjtFQUVFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFFWiw0Q0FBeUM7RUFDekMsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCLEVBQUE7QUFLOUIsU0FBQTtBQUVBO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2xDLG1CQUFBO0FBRUE7RUFDRSx5QkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBaUQ7RUFFakQsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdsQztFQUNFLHlCQUEyQixFQUFBO0FBRzdCO0VBRUUsOEJBQThCO0VBRzlCLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCLEVBQUE7QUFHaEM7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSxjQUFjLEVBQUE7QUFLaEIsZUFBQTtBQUVBLHVDQUFBO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlLEVBQUEsRUFBQTtBQUluQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJbkIsa0NBQUE7QUFDQTtFQUE0QjtJQUFPLFVBQVMsRUFBQTtFQUFJO0lBQUssVUFBUyxFQUFBLEVBQUE7QUFFOUQ7RUFBb0I7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRXREO0VBQ0UsVUFBUztFQUNULG1DQUFrQztFQUVsQywyQkFBMEI7RUFFMUIscUNBQW9DO0VBRXBDLDZCQUE0QjtFQUU1Qiw4QkFBNkI7RUFFN0Isc0JBQXFCLEVBQUE7QUFHdkI7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSwyQkFBMkI7RUFFM0IsbUJBQW1CLEVBQUE7QUFHckIsa0NBQUE7QUFDQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsYUFBYTtFQUNiLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFdBQVcsRUFBQTtBQUliLFdBQUE7QUFFQTtFQUNJLGFBQWEsRUFBQTtBQUdqQjtFQUNFLFVBQVMsRUFBQTtBQUdYO0VBQ0Usc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtc2lnbi11cC9tb2JpbGUtc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxucHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG5cbn1cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ0MTU2Nzk5MjktMWZkNTE5M2YxNGY3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTUwJnE9ODApIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cblxuaDF7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuaDN7XG4gIGNvbG9yOnJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucycpO1xuXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjOTJiYWRkO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cblxuLyogU1RSVUNUVVJFICovXG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjIyNDI4O1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2Zvcm1Gb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzM0MzQzNTtcbiAgcGFkZGluZzogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cblxuXG4vKiBUQUJTICovXG5cbmgyLmluYWN0aXZlIHtcbiAgY29sb3I6ICM2YjZiNmI7XG59XG5cbmgyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjY2NjY2NjO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YwNDE0MTtcbn1cblxuXG5cbi8qIEZPUk0gVFlQT0dSQVBIWSovXG5cbmlucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgI2YwNDE0MTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHggODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG4gIGJhY2tncm91bmQtY29sb3I6ICAgI2M5MjIyMjtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuXG5cblxuLyogQU5JTUFUSU9OUyAqL1xuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXG4uZmFkZUluRG93biB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5cbi5mYWRlSW4ge1xuICBvcGFjaXR5OjA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xufVxuXG4uZmFkZUluLmZpcnN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5mYWRlSW4uc2Vjb25kIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5mYWRlSW4udGhpcmQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5mb3VydGgge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi5maWZ0aCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLnNpeHRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiBPVEhFUlMgKi9cblxuKjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn0gXG5cbiNpY29uIHtcbiAgd2lkdGg6NjAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */"

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
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var MobileSignUpPage = /** @class */ (function () {
    function MobileSignUpPage(amplify, router, alertController) {
        this.amplify = amplify;
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
        if (this.password1.length < 8 || this.password2.length < 8) {
            this.presentAlert('Password not 8 characters long!');
        }
        else {
            this.amplify.auth().signUp({
                username: this.emiratesId.toString(),
                password: this.password2,
                attributes: {
                    email: this.email,
                    name: this.name
                },
            })
                .then(function (data) {
                return _this.alive = !_this.alive;
            })
                .catch(function (err) { return console.log(err, _this.presentAlert(err)); });
        }
    };
    MobileSignUpPage.prototype.confirmation = function () {
        var _this = this;
        this.amplify.auth().confirmSignUp(this.emiratesId.toString(), this.code, {
            forceAliasCreation: true
        }).then(function (data) {
            if (data) {
                _this.alive = !_this.alive;
                _this.addusertoDB();
                _this.login();
            }
        })
            .catch(function (err) { return console.log(err); });
    };
    MobileSignUpPage.prototype.login = function () {
        this.router.navigate(['log-in']);
    };
    MobileSignUpPage.prototype.addusertoDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myInit, path;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myInit = {
                            body: {
                                eid: this.emiratesId.toString(),
                                email: this.email,
                                name: this.name
                            }
                        };
                        path = '/donor';
                        return [4 /*yield*/, this.amplify.api().post('donor', path, myInit)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MobileSignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-sign-up',
            template: __webpack_require__(/*! ./mobile-sign-up.page.html */ "./src/app/mobile-sign-up/mobile-sign-up.page.html"),
            styles: [__webpack_require__(/*! ./mobile-sign-up.page.scss */ "./src/app/mobile-sign-up/mobile-sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_3__["AmplifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], MobileSignUpPage);
    return MobileSignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=mobile-sign-up-mobile-sign-up-module.js.map