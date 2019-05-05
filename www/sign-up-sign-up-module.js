(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/sign-up/sign-up.page.ts");





// import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular' // Added by me


var routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }
];
var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // AmplifyAngularModule, // Added by me
                // AmplifyIonicModule, 
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.page.html":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n      <h2 class=\"active\"> Sign Up </h2>\n\n      <!-- Icon -->\n      <div class=\"fadeIn first\">\n        <ion-icon name=\"contact\" color=\"danger\" size=\"large\"></ion-icon>\n      </div>\n\n      <!-- Sign Up Form -->\n      <form>\n        <div *ngIf=\"!alive\">\n          <h2>Emirates ID</h2>\n          <input type=\"text\" id=\"emiratesId\" class=\"fadeIn second\" name=\"eID\" required [(ngModel)]=\"emiratesId\"\n            placeholder=\"xxx-xxxx-xxxxxxx-x\">\n          <h2>Name</h2>\n          <input type=\"text\" id=\"name\" class=\"fadeIn third\" name=\"pNo\" required [(ngModel)]=\"name\"\n            placeholder=\"John Doe\">\n          <h2>Email</h2>\n          <input type=\"text\" id=\"email\" class=\"fadeIn fourth\" name=\"email\" required [(ngModel)]=\"email\"\n            placeholder=\"example@example.com\">\n          <h2>Password</h2>\n          <input type=\"text\" id=\"password\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password1\"\n            placeholder=\"Use a strong password\">\n          <br>\n          <h2>Confirm Password</h2>\n          <input type=\"text\" id=\"mobileNum\" class=\"fadeIn fifth\" name=\"pwd\" required [(ngModel)]=\"password2\"\n            placeholder=\"Re-enter password\">\n          <br>\n          <input type=\"submit\" class=\"fadeIn sixth\" value=\"Sign Up\" (click)=\"signup()\">\n        </div>\n        <div *ngIf=\"alive\">\n          <h2 class=\"fadeIn first\">Check Email For Confirmation Code</h2>\n          <input type=\"text\" id=\"code\" class=\"fadeIn second\" name=\"code\" required [(ngModel)]=\"code\">\n          <input type=\"submit\" class=\"fadeIn third\" value=\"confirm\" (click)=\"confirmation()\">\n\n        </div>\n\n      </form>\n\n      <!-- <amplify-authenticator id=\"authauth\" framework=\"Ionic\"></amplify-authenticator> -->\n\n      <!-- Remind Password -->\n      <div id=\"formFooter\">\n        <a class=\"underlineHover\" (click)=\"login()\">Already have an account?</a>\n      </div>\n    </div>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.scss":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  overflow-y: auto;\n  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat;\n  background-size: cover; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.fifth {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.sixth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuay9CbG9vZEJhbmtBcHBsaWNhdGlvbi9zcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBLDhEQUFZO0FBbkJaO0VBQ0UsWUFBWSxFQUFBO0FBRWQ7RUFDRSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFRNUM7RUFDRSxZQUFXO0VBQ1gsK0JBQTBDLEVBQUE7QUFNNUMsVUFBQTtBQUVBO0VBQ0EseUJBQXlCLEVBQUE7QUFHekI7RUFDQSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw0TkFBNE47RUFDNU4sc0JBQXNCLEVBQUE7QUFJdEI7RUFDQSxjQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQTtBQUdoQjtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtBQUtkLGNBQUE7QUFFQTtFQUNBLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtBQUdiO0VBRUEsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLDRDQUF5QztFQUN6QyxrQkFBa0IsRUFBQTtBQUdsQjtFQUNBLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtFQUVsQiw0QkFBNEIsRUFBQTtBQUs1QixTQUFBO0FBRUE7RUFDQSxjQUFjLEVBQUE7QUFHZDtFQUNBLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtBQUtoQyxtQkFBQTtBQUVBO0VBQ0EseUJBQTBCO0VBQzFCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQWlEO0VBRWpELDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7QUFHaEM7RUFDQSx5QkFBMkIsRUFBQTtBQUczQjtFQUVBLDhCQUE4QjtFQUc5QixzQkFBc0IsRUFBQTtBQUd0QjtFQUNBLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBO0FBRTlCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCLEVBQUE7QUFHaEM7RUFDQSxzQkFBc0I7RUFDdEIsZ0NBQWdDLEVBQUE7QUFHaEM7RUFDQSxjQUFjLEVBQUE7QUFLZCxlQUFBO0FBRUEsdUNBQUE7QUFDQTtFQUNBLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFHekI7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSWpCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsMkNBQTJDO0lBQzNDLG1DQUFtQyxFQUFBO0VBRXJDO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixlQUFlLEVBQUEsRUFBQTtBQUlqQixrQ0FBQTtBQUNBO0VBQTRCO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUU5RDtFQUFvQjtJQUFPLFVBQVMsRUFBQTtFQUFJO0lBQUssVUFBUyxFQUFBLEVBQUE7QUFFdEQ7RUFDQSxVQUFTO0VBQ1QsbUNBQWtDO0VBRWxDLDJCQUEwQjtFQUUxQixxQ0FBb0M7RUFFcEMsNkJBQTRCO0VBRTVCLDhCQUE2QjtFQUU3QixzQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDZCQUE2QjtFQUU3QixxQkFBcUIsRUFBQTtBQUdyQjtFQUNBLDJCQUEyQjtFQUUzQixtQkFBbUIsRUFBQTtBQUduQixrQ0FBQTtBQUNBO0VBQ0EsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQixFQUFBO0FBR3RCO0VBQ0EsY0FBYyxFQUFBO0FBR2Q7RUFDQSxXQUFXLEVBQUE7QUFJWCxXQUFBO0FBRUE7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNBLFVBQVMsRUFBQTtBQUdUO0VBQ0Esc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICBjb2xvcjogYmxhY2s7XG59XG5we1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xuXG59XG4vLyBpb24tY29udGVudHtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDQxNTY3OTkyOS0xZmQ1MTkzZjE0Zjc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MCkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3Zlcjtcbi8vIH1cblxuXG5oMXtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDMwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcblxuLyogQkFTSUMgKi9cblxuaHRtbCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xufVxuXG5ib2R5IHtcbmZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbmhlaWdodDogMTAwdmg7XG5vdmVyZmxvdy15OiBhdXRvO1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zNSksIHJnYmEoMCwgMCwgMCwgMC4zNSkpLCB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ0MTU2Nzk5MjktMWZkNTE5M2YxNGY3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTUwJnE9ODApIG5vLXJlcGVhdDtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbn1cblxuYSB7XG5jb2xvcjogIzkyYmFkZDtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaDIge1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC1zaXplOiAxNnB4O1xuZm9udC13ZWlnaHQ6IDYwMDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5kaXNwbGF5OmlubGluZS1ibG9jaztcbm1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxuY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBTVFJVQ1RVUkUgKi9cblxuLndyYXBwZXIge1xuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xud2lkdGg6IDEwMCU7XG5taW4taGVpZ2h0OiAxMDAlO1xucGFkZGluZzogMjBweDtcbn1cblxuI2Zvcm1Db250ZW50IHtcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbmJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG5iYWNrZ3JvdW5kOiAjMjIyNDI4O1xucGFkZGluZzogMzBweDtcbndpZHRoOiA5MCU7XG5tYXgtd2lkdGg6IDQ1MHB4O1xucG9zaXRpb246IHJlbGF0aXZlO1xucGFkZGluZzogMHB4O1xuLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcbmJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybUZvb3RlciB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyNDI4O1xuYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzNDM0MzU7XG5wYWRkaW5nOiAyNXB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbn1cblxuXG5cbi8qIFRBQlMgKi9cblxuaDIuaW5hY3RpdmUge1xuY29sb3I6ICM2YjZiNmI7XG59XG5cbmgyLmFjdGl2ZSB7XG5jb2xvcjogI2NjY2NjYztcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjA0MTQxO1xufVxuXG5cblxuLyogRk9STSBUWVBPR1JBUEhZKi9cblxuaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAgI2YwNDE0MTtcbmJvcmRlcjogbm9uZTtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmc6IDE1cHggODBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5mb250LXNpemU6IDEzcHg7XG4td2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG5ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoMjMzLCAxMTYsIDk1LCAwLjQpO1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG5ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG5tYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4tbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAgICNjOTIyMjI7XG59XG5cbmlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xuLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbi1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xudHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuYm9yZGVyOiBub25lO1xuY29sb3I6ICMwZDBkMGQ7XG5wYWRkaW5nOiAxNXB4IDMycHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5mb250LXNpemU6IDE2cHg7XG5tYXJnaW46IDVweDtcbndpZHRoOiA4NSU7XG5ib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbi1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4tbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4tby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbnRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG5ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcbmNvbG9yOiAjY2NjY2NjO1xufVxuXG5cblxuLyogQU5JTUFUSU9OUyAqL1xuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXG4uZmFkZUluRG93biB7XG4td2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG5hbmltYXRpb24tZHVyYXRpb246IDFzO1xuLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuMCUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbn1cbjEwMCUge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuMCUge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbn1cbjEwMCUge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxufVxuXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cblxuLmZhZGVJbiB7XG5vcGFjaXR5OjA7XG4td2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcbmFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuXG4td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG4tbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xuXG4td2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcbi1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xufVxuXG4uZmFkZUluLmZpcnN0IHtcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG5hbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5mYWRlSW4uc2Vjb25kIHtcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG5hbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5mYWRlSW4udGhpcmQge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4tbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcbmFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmZhZGVJbi5mb3VydGgge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4tbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbmFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmZhZGVJbi5maWZ0aCB7XG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbi1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4uZmFkZUluLnNpeHRoIHtcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbi1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcbmFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuZGlzcGxheTogYmxvY2s7XG5sZWZ0OiAwO1xuYm90dG9tOiAtMTBweDtcbndpZHRoOiAwO1xuaGVpZ2h0OiAycHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xuY29udGVudDogXCJcIjtcbnRyYW5zaXRpb246IHdpZHRoIDAuMnM7XG59XG5cbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XG5jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVye1xud2lkdGg6IDEwMCU7XG59XG5cblxuLyogT1RIRVJTICovXG5cbio6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSBcblxuI2ljb24ge1xud2lkdGg6NjAlO1xufVxuXG4qIHtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.page.ts":
/*!*****************************************!*\
  !*** ./src/app/sign-up/sign-up.page.ts ***!
  \*****************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");





var SignUpPage = /** @class */ (function () {
    function SignUpPage(amplify, router, alertController) {
        this.amplify = amplify;
        this.router = router;
        this.alertController = alertController;
        this.alive = false;
    }
    SignUpPage.prototype.ngOnInit = function () {
    };
    SignUpPage.prototype.presentAlert = function (data) {
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
    SignUpPage.prototype.signup = function () {
        var _this = this;
        if (this.password1 != this.password2) {
            this.presentAlert('Passwords dont match!');
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
            console.log(this.emiratesId);
        }
    };
    SignUpPage.prototype.confirmation = function () {
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
    SignUpPage.prototype.login = function () {
        this.router.navigate(['log-in']);
    };
    SignUpPage.prototype.addusertoDB = function () {
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
    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.page.html */ "./src/app/sign-up/sign-up.page.html"),
            styles: [__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/sign-up/sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__["AmplifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], SignUpPage);
    return SignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map