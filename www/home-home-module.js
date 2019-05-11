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

module.exports = "<header>\n    <div>\n        <ion-icon name=\"water\" color=\"danger\" size= \"medium\"></ion-icon>\n        <p> Blood Donation</p>\n    </div>\n</header>\n\n<body>\n\n    <header>\n      <div>\n          <ion-icon name=\"water\" color=\"danger\" size= \"large\"></ion-icon>\n          <h3>&nbsp;Blood Donation</h3>\n      </div>\n      <nav>\n        <ul>\n          <li><a href=\"#\">About Us</a></li>\n          <li><a href=\"#\">Partners</a></li>\n          <li><a href=\"#\">Donations</a></li>\n          <li><a href=\"#\">Contact</a></li>\n        </ul>\n      </nav>\n    </header>\n  \n    <div class=\"titles\">\n  \n      <h1><b>Donate Regularly,</b> <br><b>Save Lives</b> </h1>\n      <p><b>Sign up now to schedule a donation plan and earn points for donations</b><br><b>Get notified of blood shortages in local hospitals near you and save lives</b></p>\n  \n    </div>\n    \n\n    <div text-center>\n\n    <ion-button (click)=\"signup()\" color=\"dark\" size = \"large\" >\n      Sign Up\n    </ion-button>\n\n    <br>\n\n    <ion-button (click)=\"login()\"color=\"dark\" size = \"large\" >\n      Log In\n    </ion-button>\n\n    </div>\n\n    <section class=\"container-boxes\">\n      <div class=\"box\">\n  \n        <div class=\"icon\">\n          <ion-icon name=\"water\" color=\"danger\" size= \"large\"></ion-icon>\n        </div>\n  \n        <div class=\"text\">\n          <a href=\"\">\n            <h3>Blood Matters</h3>\n            <p>Find out how rare your blood is</p>\n          </a>\n        </div>\n  \n      </div>\n  \n      <div class=\"box\">\n  \n        <div class=\"icon\">\n            <ion-icon name=\"pricetags\" color=\"danger\" size= \"large\" ></ion-icon>        \n        </div>\n  \n        <div class=\"text\">\n          <a href=\"\">\n            <h3>Rewards</h3>\n            <p>Find out the exciting offers in store for donors</p>\n          </a>\n        </div>\n  \n      </div>\n      \n      <div class=\"box\">\n  \n        <div class=\"icon\">\n            <ion-icon name=\"medkit\" color=\"danger\" size= \"large\"></ion-icon>\n        </div>\n        <div class=\"text\">\n          <a href=\"\">\n            <h3>The Team</h3>\n            <p>Get to know our team better</p>\n          </a>\n        </div>\n    \n      </div>\n\n\n    </section>\n  \n  </body>\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\n* {\n  box-sizing: border-box; }\nhtml {\n  margin: 0;\n  padding: 0; }\nbody {\n  margin: 0;\n  padding: 0;\n  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) no-repeat;\n  background-size: cover;\n  color: black;\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n/* ------------------------ NAVBAR ----------------*/\nheader {\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  background: rgba(0, 0, 0, 0.2); }\nheader div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0 2rem; }\nheader div i {\n  font-size: 2rem;\n  margin: 1rem; }\nheader nav {\n  padding: 1rem 2rem; }\nnav ul li {\n  list-style: none;\n  display: inline;\n  text-transform: uppercase;\n  font-weight: bold;\n  letter-spacing: 5px; }\nnav li a {\n  padding: 1rem;\n  margin: 1rem;\n  text-decoration: none;\n  color: white;\n  transition: all 250ms ease-in; }\nnav li a:hover {\n  background: rgba(255, 255, 255, 0.3);\n  color: black; }\n/* ------------------------ TOP SECTION ----------------*/\n.titles {\n  color: white;\n  text-align: center;\n  width: 50vw;\n  margin: 0 auto; }\n.titles h1 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 5rem;\n  margin-bottom: 0;\n  text-shadow: 1px 1px 0 black; }\n.titles p {\n  letter-spacing: 3px;\n  text-shadow: 1px 1px 0 black; }\n/* ------------------------ BOT SECTION ----------------*/\n.container-boxes {\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n  max-width: 80vw; }\n.box {\n  background: rgba(255, 255, 255, 0.5);\n  margin: 1rem;\n  padding: .5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 350px;\n  max-height: 180px;\n  min-height: 180px;\n  transition: all 250ms ease-out; }\n.box:hover {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%); }\n.box a {\n  text-decoration: none;\n  color: black; }\n.icon {\n  font-size: 3rem;\n  padding: 1rem; }\n.text h3 {\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  margin-bottom: 0; }\n.text p {\n  margin-top: 1rem;\n  line-height: 1.5rem;\n  text-align: left; }\n.text {\n  padding: .5rem; }\n/* MEDIAQUERIES */\n@media (max-width: 1160px) {\n  .icon {\n    font-size: 2rem;\n    padding: 0.5rem; }\n  .text h3 {\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    margin-bottom: 0;\n    font-size: 1rem; }\n  .text p {\n    margin-top: 1rem;\n    line-height: 1.5rem;\n    text-align: left;\n    font-size: .8rem; }\n  nav li a:hover {\n    background: none;\n    color: black; } }\n@media (max-width: 850px) {\n  body {\n    height: 100%; }\n  .container-boxes {\n    flex-direction: column; }\n  .box:hover {\n    background: rgba(255, 255, 255, 0.7);\n    -webkit-transform: none;\n            transform: none; }\n  .titles h1 {\n    font-size: 3rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25pcmFuamFuL0Jsb29kQmFua0FwcGxpY2F0aW9uL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw4REFBWTtBQUhaO0VBQ0Usc0JBQXNCLEVBQUE7QUFJeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR1o7RUFDRSxTQUFRO0VBQ1IsVUFBVTtFQUNWLDROQUE0TjtFQUM1TixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEIsRUFBQTtBQUdoQyxvREFBQTtBQUdBO0VBQ0UsYUFBWTtFQUNaLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osOEJBQTJCLEVBQUE7QUFHN0I7RUFDRSxhQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUlkO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osNkJBQTZCLEVBQUE7QUFHL0I7RUFDRSxvQ0FBZ0M7RUFDaEMsWUFBWSxFQUFBO0FBS2QseURBQUE7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBO0FBSTlCO0VBQ0UsbUJBQW1CO0VBQ25CLDRCQUE0QixFQUFBO0FBRzlCLHlEQUFBO0FBSUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGFBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG9DQUFnQztFQUNoQyxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0Usb0NBQWdDO0VBQ2hDLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7QUFHZDtFQUNFLGVBQWU7RUFDZixhQUFhLEVBQUE7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsY0FBYyxFQUFBO0FBSWhCLGlCQUFBO0FBR0E7RUFDRztJQUNDLGVBQWU7SUFDZixlQUFlLEVBQUE7RUFFakI7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFHakI7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNBLGdCQUFnQjtJQUNoQixZQUFZLEVBQUEsRUFDWDtBQUlIO0VBQ0U7SUFDRSxZQUFZLEVBQUE7RUFFZDtJQUNFLHNCQUFzQixFQUFBO0VBRXhCO0lBQ0Usb0NBQWdDO0lBQ2hDLHVCQUFlO1lBQWYsZUFBZSxFQUFBO0VBRWpCO0lBQ0EsZUFBZSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMnKTtcblxuaHRtbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keXtcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMzUpLCByZ2JhKDAsIDAsIDAsIDAuMzUpKSwgdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE0NDE1Njc5OTI5LTFmZDUxOTNmMTRmNz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTk1MCZxPTgwKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBOQVZCQVIgLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuaGVhZGVye1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMilcbn1cblxuaGVhZGVyIGRpdntcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDJyZW07XG59XG5cbmhlYWRlciBkaXYgaXtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5cblxuaGVhZGVyIG5hdntcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG5uYXYgdWwgbGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbm5hdiBsaSBhe1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbjtcbn1cblxubmF2IGxpIGE6aG92ZXJ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVE9QIFNFQ1RJT04gLS0tLS0tLS0tLS0tLS0tLSovXG5cbi50aXRsZXN7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi50aXRsZXMgaDF7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIGJsYWNrO1xuXG59XG5cbi50aXRsZXMgcHtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCBibGFjaztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJPVCBTRUNUSU9OIC0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cblxuLmNvbnRhaW5lci1ib3hlc3tcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xufVxuXG4uYm94e1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgbWFyZ2luOiAxcmVtO1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLW91dDtcbn1cblxuLmJveDpob3ZlcntcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbn1cblxuLmJveCBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb257XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnRleHQgaDN7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50ZXh0IHB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50ZXh0e1xuICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuXG4vKiBNRURJQVFVRVJJRVMgKi9cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE2MHB4KXtcbiAgIC5pY29ue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgLnRleHQgaDN7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLnRleHQgcHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICB9XG4gIG5hdiBsaSBhOmhvdmVye1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpe1xuICBib2R5e1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuY29udGFpbmVyLWJveGVze1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmJveDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43KTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgLnRpdGxlcyBoMXtcbiAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5cblxuIl19 */"

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