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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\nheader {\n  color: black; }\np {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\nh1 {\n  color: white;\n  text-shadow: 1px 1px 30px black; }\n/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  overflow-y: auto;\n  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat;\n  background-size: cover; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #222428;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #222428;\n  border-top: 1px solid #343435;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #6b6b6b; }\nh2.active {\n  color: #cccccc;\n  border-bottom: 2px solid #f04141; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #f04141;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(233, 116, 95, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #c92222; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.fifth {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.sixth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #f04141;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #ffffff; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFua0FwcGxpY2F0aW9uL3NyYy9hcHAvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkEsOERBQVk7QUFuQlo7RUFDRSxZQUFZLEVBQUE7QUFFZDtFQUNFLFlBQVc7RUFDWCwrQkFBMEMsRUFBQTtBQVE1QztFQUNFLFlBQVc7RUFDWCwrQkFBMEMsRUFBQTtBQU01QyxVQUFBO0FBRUE7RUFDQSx5QkFBeUIsRUFBQTtBQUd6QjtFQUNBLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDROQUE0TjtFQUM1TixzQkFBc0IsRUFBQTtBQUl0QjtFQUNBLGNBQWM7RUFDZCxxQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBR2hCO0VBQ0Esa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBS2QsY0FBQTtBQUVBO0VBQ0EsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBR2I7RUFFQSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQXlDO0VBQ3pDLGtCQUFrQixFQUFBO0FBR2xCO0VBQ0EseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QixFQUFBO0FBSzVCLFNBQUE7QUFFQTtFQUNBLGNBQWMsRUFBQTtBQUdkO0VBQ0EsY0FBYztFQUNkLGdDQUFnQyxFQUFBO0FBS2hDLG1CQUFBO0FBRUE7RUFDQSx5QkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpREFBaUQ7RUFFakQsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0MsRUFBQTtBQUdoQztFQUNBLHlCQUEyQixFQUFBO0FBRzNCO0VBRUEsOEJBQThCO0VBRzlCLHNCQUFzQixFQUFBO0FBR3RCO0VBQ0EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCLEVBQUE7QUFFOUI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YseUJBQXlCO0VBS3pCLGdDQUFnQztFQUVoQyw4QkFBOEIsRUFBQTtBQUdoQztFQUNBLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTtBQUdoQztFQUNBLGNBQWMsRUFBQTtBQUtkLGVBQUE7QUFFQSx1Q0FBQTtBQUNBO0VBQ0Esa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUd6QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJakI7RUFDQTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSWpCLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNBLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3JCO0VBQ0EsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3JCO0VBQ0EsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3JCO0VBQ0EsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3JCO0VBQ0EsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3JCO0VBQ0EsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3JCO0VBQ0EsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR25CLGtDQUFBO0FBQ0E7RUFDQSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHdEI7RUFDQSxjQUFjLEVBQUE7QUFHZDtFQUNBLFdBQVcsRUFBQTtBQUlYLFdBQUE7QUFFQTtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0EsVUFBUyxFQUFBO0FBR1Q7RUFDQSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIGNvbG9yOiBibGFjaztcbn1cbnB7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzMHB4IHJnYmEoMCwgMCwgMCwgMSk7XG5cbn1cbi8vIGlvbi1jb250ZW50e1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NDE1Njc5OTI5LTFmZDUxOTNmMTRmNz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuLy8gfVxuXG5cbmgxe1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMzBweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucycpO1xuXG4vKiBCQVNJQyAqL1xuXG5odG1sIHtcbmJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XG59XG5cbmJvZHkge1xuZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuaGVpZ2h0OiAxMDB2aDtcbm92ZXJmbG93LXk6IGF1dG87XG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjM1KSwgcmdiYSgwLCAwLCAwLCAwLjM1KSksIHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNDQxNTY3OTkyOS0xZmQ1MTkzZjE0Zjc/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE5NTAmcT04MCkgbm8tcmVwZWF0O1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG5hIHtcbmNvbG9yOiAjOTJiYWRkO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5mb250LXdlaWdodDogNDAwO1xufVxuXG5oMiB7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5mb250LXNpemU6IDE2cHg7XG5mb250LXdlaWdodDogNjAwO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xubWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXG5jb2xvcjogI2NjY2NjYztcbn1cblxuXG5cbi8qIFNUUlVDVFVSRSAqL1xuXG4ud3JhcHBlciB7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG53aWR0aDogMTAwJTtcbm1pbi1oZWlnaHQ6IDEwMCU7XG5wYWRkaW5nOiAyMHB4O1xufVxuXG4jZm9ybUNvbnRlbnQge1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbmJhY2tncm91bmQ6ICMyMjI0Mjg7XG5wYWRkaW5nOiAzMHB4O1xud2lkdGg6IDkwJTtcbm1heC13aWR0aDogNDUwcHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5wYWRkaW5nOiAwcHg7XG4td2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xuYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbmJhY2tncm91bmQtY29sb3I6ICMyMjI0Mjg7XG5ib3JkZXItdG9wOiAxcHggc29saWQgIzM0MzQzNTtcbnBhZGRpbmc6IDI1cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG5ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG5cblxuLyogVEFCUyAqL1xuXG5oMi5pbmFjdGl2ZSB7XG5jb2xvcjogIzZiNmI2Yjtcbn1cblxuaDIuYWN0aXZlIHtcbmNvbG9yOiAjY2NjY2NjO1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMDQxNDE7XG59XG5cblxuXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcbmJhY2tncm91bmQtY29sb3I6ICAjZjA0MTQxO1xuYm9yZGVyOiBub25lO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogMTVweCA4MHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuZGlzcGxheTogaW5saW5lLWJsb2NrO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmZvbnQtc2l6ZTogMTNweDtcbi13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDIzMywgMTE2LCA5NSwgMC40KTtcbmJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSgyMzMsIDExNiwgOTUsIDAuNCk7XG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbmJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbm1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbi1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4tbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4tby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbnRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcbmJhY2tncm91bmQtY29sb3I6ICAgI2M5MjIyMjtcbn1cblxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XG4tbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4td2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4tby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG50cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbmJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG5ib3JkZXI6IG5vbmU7XG5jb2xvcjogIzBkMGQwZDtcbnBhZGRpbmc6IDE1cHggMzJweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmZvbnQtc2l6ZTogMTZweDtcbm1hcmdpbjogNXB4O1xud2lkdGg6IDg1JTtcbmJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbi1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbi1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xudHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbmJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xuY29sb3I6ICNjY2NjY2M7XG59XG5cblxuXG4vKiBBTklNQVRJT05TICovXG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbi5mYWRlSW5Eb3duIHtcbi13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG5hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbmFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4td2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG5hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4wJSB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xufVxuMTAwJSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4wJSB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xufVxuMTAwJSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxuXG4uZmFkZUluIHtcbm9wYWNpdHk6MDtcbi13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG4tbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xuYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XG5cbi13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbi1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbmFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbi13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XG5hbmltYXRpb24tZHVyYXRpb246MXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4tbW96LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbmFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuLmZhZGVJbi5zZWNvbmQge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4tbW96LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbmFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmZhZGVJbi50aGlyZCB7XG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbi1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uZmFkZUluLmZvdXJ0aCB7XG4td2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcbi1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLmZpZnRoIHtcbi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG5hbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uc2l4dGgge1xuLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xuYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XG5kaXNwbGF5OiBibG9jaztcbmxlZnQ6IDA7XG5ib3R0b206IC0xMHB4O1xud2lkdGg6IDA7XG5oZWlnaHQ6IDJweDtcbmJhY2tncm91bmQtY29sb3I6ICNmMDQxNDE7XG5jb250ZW50OiBcIlwiO1xudHJhbnNpdGlvbjogd2lkdGggMC4ycztcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcbmNvbG9yOiAjZmZmZmZmO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XG53aWR0aDogMTAwJTtcbn1cblxuXG4vKiBPVEhFUlMgKi9cblxuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59IFxuXG4jaWNvbiB7XG53aWR0aDo2MCU7XG59XG5cbioge1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn0iXX0= */"

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