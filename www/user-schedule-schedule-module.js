(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-schedule-schedule-module"],{

/***/ "./src/app/user/schedule/schedule.module.ts":
/*!**************************************************!*\
  !*** ./src/app/user/schedule/schedule.module.ts ***!
  \**************************************************/
/*! exports provided: SchedulePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageModule", function() { return SchedulePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/user/schedule/schedule.page.ts");







var routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]
    }
];
var SchedulePageModule = /** @class */ (function () {
    function SchedulePageModule() {
    }
    SchedulePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["SchedulePage"]]
        })
    ], SchedulePageModule);
    return SchedulePageModule;
}());



/***/ }),

/***/ "./src/app/user/schedule/schedule.page.html":
/*!**************************************************!*\
  !*** ./src/app/user/schedule/schedule.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>schedule</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/user/schedule/schedule.page.scss":
/*!**************************************************!*\
  !*** ./src/app/user/schedule/schedule.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2NoZWR1bGUvc2NoZWR1bGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/schedule/schedule.page.ts":
/*!************************************************!*\
  !*** ./src/app/user/schedule/schedule.page.ts ***!
  \************************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SchedulePage = /** @class */ (function () {
    function SchedulePage() {
    }
    SchedulePage.prototype.ngOnInit = function () {
    };
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.page.html */ "./src/app/user/schedule/schedule.page.html"),
            styles: [__webpack_require__(/*! ./schedule.page.scss */ "./src/app/user/schedule/schedule.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SchedulePage);
    return SchedulePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-schedule-schedule-module.js.map