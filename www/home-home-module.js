(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div>\n        <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon>\n        <p> Blood Donation</p>\n    </div>\n</header>\n\n<body>\n\n    <header>\n      <div>\n          <ion-icon name=\"water\" color=\"danger\" size= \"large\"></ion-icon>\n          <h3>&nbsp;Blood Donation</h3>\n      </div>\n      <nav>\n        <ul>\n          <li><a href=\"#\">About Us</a></li>\n          <li><a href=\"#\">Partners</a></li>\n          <li><a href=\"#\">Donations</a></li>\n          <li><a href=\"#\">Contact</a></li>\n        </ul>\n      </nav>\n    </header>\n  \n    <div class=\"titles\">\n  \n      <h1>Donate Regularly, <br> Save Lives</h1>\n      <p>Sign up now to schedule a donation plan and earn points for donations<br> Get notified of blood shortages in local hospitals near you and save lives</p>\n  \n    </div>\n    \n\n    <div text-center>\n\n    <ion-button (click)=\"signup()\" color=\"dark\" size = \"large\" >\n      Sign Up\n    </ion-button>\n\n    <br>\n\n    <ion-button (click)=\"login()\"color=\"dark\" size = \"large\" >\n      Log In\n    </ion-button>\n\n    </div>\n\n    <section class=\"container-boxes\">\n      <div class=\"box\">\n  \n        <div class=\"icon\">\n          <ion-icon name=\"water\" color=\"danger\" size= \"large\"></ion-icon>\n        </div>\n  \n        <div class=\"text\">\n          <a href=\"\">\n            <h3>Blood Matters</h3>\n            <p>Find out how rare your blood is</p>\n          </a>\n        </div>\n  \n      </div>\n  \n      <div class=\"box\">\n  \n        <div class=\"icon\">\n            <ion-icon name=\"pricetags\" color=\"danger\" size= \"large\" ></ion-icon>        \n        </div>\n  \n        <div class=\"text\">\n          <a href=\"\">\n            <h3>Rewards</h3>\n            <p>Find out the exciting offers in store for donors</p>\n          </a>\n        </div>\n  \n      </div>\n      \n      <div class=\"box\">\n  \n        <div class=\"icon\">\n            <ion-icon name=\"medkit\" color=\"danger\" size= \"large\"></ion-icon>\n        </div>\n        <div class=\"text\">\n          <a href=\"\">\n            <h3>The Team</h3>\n            <p>Get to know our team better</p>\n          </a>\n        </div>\n    \n      </div>\n\n\n    </section>\n  \n  </body>\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nhtml {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat;\n  background-size: cover;\n  color: black;\n  font-family: \"open sans\";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n\n/* ------------------------ NAVBAR ----------------*/\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  background: rgba(0, 0, 0, 0.2); }\n\nheader div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: Pacifico;\n  margin: 0 2rem; }\n\nheader div i {\n  font-size: 2rem;\n  margin: 1rem; }\n\nheader nav {\n  padding: 1rem 2rem; }\n\nnav ul li {\n  list-style: none;\n  display: inline;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 5px; }\n\nnav li a {\n  padding: 1rem;\n  margin: 1rem;\n  text-decoration: none;\n  color: white;\n  transition: all 250ms ease-in; }\n\nnav li a:hover {\n  background: rgba(255, 255, 255, 0.3);\n  color: black; }\n\n/* ------------------------ TOP SECTION ----------------*/\n\n.titles {\n  color: white;\n  text-align: center;\n  width: 50vw;\n  margin: 0 auto; }\n\n.titles h1 {\n  font-family: Pacifico;\n  font-size: 5rem;\n  margin-bottom: 0;\n  text-shadow: 1px 1px 0 black; }\n\n.titles p {\n  letter-spacing: 3px;\n  text-shadow: 1px 1px 0 black; }\n\n/* ------------------------ BOT SECTION ----------------*/\n\n.container-boxes {\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  max-width: 80vw; }\n\n.box {\n  background: rgba(255, 255, 255, 0.5);\n  margin: 1rem;\n  padding: .5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 350px;\n  max-height: 180px;\n  min-height: 180px;\n  transition: all 250ms ease-out; }\n\n.box:hover {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%); }\n\n.box a {\n  text-decoration: none;\n  color: black; }\n\n.icon {\n  font-size: 3rem;\n  padding: 1rem; }\n\n.text h3 {\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  margin-bottom: 0; }\n\n.text p {\n  margin-top: 1rem;\n  line-height: 1.5rem;\n  text-align: left; }\n\n.text {\n  padding: .5rem; }\n\n/* MEDIAQUERIES */\n\n@media (max-width: 1160px) {\n  .icon {\n    font-size: 2rem;\n    padding: 0.5rem; }\n  .text h3 {\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    margin-bottom: 0;\n    font-size: 1rem; }\n  .text p {\n    margin-top: 1rem;\n    line-height: 1.5rem;\n    text-align: left;\n    font-size: .8rem; }\n  nav li a:hover {\n    background: none;\n    color: black; } }\n\n@media (max-width: 850px) {\n  body {\n    height: 100%; }\n  .container-boxes {\n    flex-direction: column; }\n  .box:hover {\n    background: rgba(255, 255, 255, 0.7);\n    -webkit-transform: none;\n            transform: none; }\n  .titles h1 {\n    font-size: 3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFuay9CbG9vZEJhbmtBcHBsaWNhdGlvbi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsU0FBUTtFQUNSLFVBQVU7RUFDViw0TkFBNE47RUFDNU4sc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7O0FBR2hDLG9EQUFBOztBQUdBO0VBQ0UsYUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osOEJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsYUFBWTtFQUNaLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUlkO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxvQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBOztBQUtkLHlEQUFBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBOztBQUk5QjtFQUNFLG1CQUFtQjtFQUNuQiw0QkFBNEIsRUFBQTs7QUFHOUIseURBQUE7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxvQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxvQ0FBZ0M7RUFDaEMsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsYUFBYSxFQUFBOztBQUdmO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWMsRUFBQTs7QUFJaEIsaUJBQUE7O0FBR0E7RUFDRztJQUNDLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFFakI7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFHakI7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNBLGdCQUFnQjtJQUNoQixZQUFZLEVBQUEsRUFDWDs7QUFJSDtFQUNFO0lBQ0UsWUFBWSxFQUFBO0VBRWQ7SUFDRSxzQkFBc0IsRUFBQTtFQUV4QjtJQUNFLG9DQUFnQztJQUNoQyx1QkFBZTtZQUFmLGVBQWUsRUFBQTtFQUVqQjtJQUNBLGVBQWUsRUFBQSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5e1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zNSksIHJnYmEoMCwgMCwgMCwgMC4zNSkpLCB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTQ0MTU2Nzk5MjktMWZkNTE5M2YxNGY3P2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xOTUwJnE9ODApIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJvcGVuIHNhbnNcIjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gTkFWQkFSIC0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbmhlYWRlcntcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpXG59XG5cbmhlYWRlciBkaXZ7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogUGFjaWZpY287XG4gIG1hcmdpbjogMCAycmVtO1xufVxuXG5oZWFkZXIgZGl2IGl7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG5cbmhlYWRlciBuYXZ7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxubmF2IHVsIGxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG5uYXYgbGkgYXtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW47XG59XG5cbm5hdiBsaSBhOmhvdmVye1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4zKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRPUCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGl0bGVze1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4udGl0bGVzIGgxe1xuICBmb250LWZhbWlseTogUGFjaWZpY287XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCBibGFjaztcblxufVxuXG4udGl0bGVzIHB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgYmxhY2s7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBCT1QgU0VDVElPTiAtLS0tLS0tLS0tLS0tLS0tKi9cblxuXG5cbi5jb250YWluZXItYm94ZXN7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1heC13aWR0aDogODB2dztcbn1cblxuLmJveHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gIG1hcmdpbjogMXJlbTtcbiAgcGFkZGluZzogLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWF4LWhlaWdodDogMTgwcHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1vdXQ7XG59XG5cbi5ib3g6aG92ZXJ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG59XG5cbi5ib3ggYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29ue1xuICBmb250LXNpemU6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi50ZXh0IGgze1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGV4dCBwe1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGV4dHtcbiAgcGFkZGluZzogLjVyZW07XG59XG5cblxuLyogTUVESUFRVUVSSUVTICovXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExNjBweCl7XG4gICAuaWNvbntcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG4gIC50ZXh0IGgze1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC50ZXh0IHB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAuOHJlbTtcbiAgfVxuICBuYXYgbGkgYTpob3ZlcntcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KXtcbiAgYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmNvbnRhaW5lci1ib3hlc3tcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5ib3g6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIC50aXRsZXMgaDF7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(router) {
        this.router = router;
    }
    HomePage.prototype.signup = function () {
        this.router.navigate(['sign-up']);
    };
    HomePage.prototype.login = function () {
        this.router.navigate(['log-in']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map