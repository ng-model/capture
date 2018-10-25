(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.service */ "./src/app/_services/pager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return _pager_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]; });




/***/ }),

/***/ "./src/app/_services/pager.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/pager.service.ts ***!
  \********************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 3; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cstm-logo {\r\n  width: 15%;\r\n}\r\n\r\nh4 {\r\n  color: #820382;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <router-outlet></router-outlet> -->\r\n<!-- <div> -->\r\n<div class=\"container mt-5\">\r\n  <div class=\"text-center\">\r\n    <span class=\"d-flex mb-3\">\r\n      <h2 class=\"float-left\">Invoice</h2>\r\n      <button class=\"btn btn-dark float-right\" type=\"button\" (click)=\"captureScreen()\">Capture</button>\r\n    </span>\r\n    <!-- items being paged -->\r\n    <div class=\"card\" id=\"convert\">\r\n\r\n      <div class=\"card-body\" *ngFor=\"let item of pagedItems\">\r\n        <span class=\"float-left\">\r\n          <img class=\"cstm-logo\" src=\"assets/hotel.png\" alt=\"logo\">\r\n          <h4>Motel 9</h4>\r\n        </span>\r\n        <span class=\"float-right\">Date: {{item.timeStamp | date }}</span>\r\n        <br>\r\n        <span class=\"float-right\">Payment Type: ACH</span>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"mt-3 table table-lg table-hover\">\r\n            <thead>\r\n              <tr>\r\n                <th>User ID</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Amount</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>smichael</td>\r\n                <td>\r\n                  Michael\r\n                </td>\r\n                <td>\r\n                  Snell\r\n                </td>\r\n                <td>\r\n                  {{item.totalPaymentAmount | currency }}\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>djohn</td>\r\n                <td>\r\n                  John\r\n                </td>\r\n                <td>\r\n                  Doe\r\n                </td>\r\n                <td>\r\n                  {{item.totalPaymentAmount | currency }}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <table class=\"table table-borderless table-hover col-md-4 float-right\">\r\n          <tr>\r\n            <td>Amount</td>\r\n            <td> {{(item.totalPaymentAmount)*2 | currency }}</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Processing Fee(3%)</td>\r\n            <td>{{((item.totalPaymentAmount*2)/100)*3 | currency:money}}</td>\r\n          </tr>\r\n          <tr class=\"h5 border-top\">\r\n            <td>Grand Total</td>\r\n            <td>{{(item.totalPaymentAmount)*2 + ((item.totalPaymentAmount*2)/100)*3 | currency:money}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <!-- pager -->\r\n    <ul class=\"pagination float-right\" *ngIf=\"pager.pages && pager.pages.length\">\r\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n        <a class=\"page-link\" (click)=\"setPage(1)\">First</a>\r\n      </li>\r\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n      </li>\r\n      <li class=\"page-item\" *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n        <a class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n      </li>\r\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n      </li>\r\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sample_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample.service */ "./src/app/sample.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(pagerService, sampleService) {
        this.pagerService = pagerService;
        this.sampleService = sampleService;
        this.title = 'app';
        // array of all items to be paged
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
    }
    AppComponent.prototype.captureScreen = function () {
        var data = document.getElementById('convert');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('Invoice.pdf');
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get dummy data
        this.sampleService.myData().subscribe(function (data) {
            // set items to json response
            _this.items = data;
            _this.allItems = _this.items.result.revenueData;
            // initialize to page 1
            _this.setPage(1);
        });
    };
    AppComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "content", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_4__["PagerService"], _sample_service__WEBPACK_IMPORTED_MODULE_1__["SampleService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pdf_htmltopdf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdf/htmltopdf.component */ "./src/app/pdf/htmltopdf.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pdf_htmltopdf_component__WEBPACK_IMPORTED_MODULE_5__["HtmltopdfComponent"]
            ],
            imports: [
                _routes__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"]
            ],
            providers: [
                _services_index__WEBPACK_IMPORTED_MODULE_9__["PagerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pdf/htmltopdf.component.css":
/*!*********************************************!*\
  !*** ./src/app/pdf/htmltopdf.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pdf/htmltopdf.component.html":
/*!**********************************************!*\
  !*** ./src/app/pdf/htmltopdf.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #content>\r\n    <mat-card>\r\n        <button class=\"btn btn-info\" type=\"button\" (click)=\"captureScreen()\">Capture as pdf</button>\r\n    </mat-card>\r\n  <mat-card>\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header bg-info\">\r\n        <h4 class=\"m-b-0 text-white\">Dummy Data to demo print and data table print</h4>\r\n      </div>\r\n     \r\n      <div class=\"card-body\">\r\n        <div class=\"table-responsive\">\r\n          <table id=\"convert\" class=\"table table-lg table-hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n            <thead>\r\n              <tr>\r\n                <th>User ID</th>\r\n                <th>First Name</th>\r\n                <th>Last Name</th>\r\n                <th>Create Date</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of users\">\r\n                <td>{{user.checkOut}}</td>\r\n                <td>\r\n                  {{user.reservations}}\r\n                </td>\r\n                <td>\r\n                  {{user.totalPaymentAmount | currency}}\r\n                </td>\r\n                <td>\r\n                  {{user.timeStamp | date}}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pdf/htmltopdf.component.ts":
/*!********************************************!*\
  !*** ./src/app/pdf/htmltopdf.component.ts ***!
  \********************************************/
/*! exports provided: HtmltopdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmltopdfComponent", function() { return HtmltopdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sample_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sample.service */ "./src/app/sample.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import swal from 'sweetalert2';

var HtmltopdfComponent = /** @class */ (function () {
    function HtmltopdfComponent(sampleService) {
        this.sampleService = sampleService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    HtmltopdfComponent.prototype.captureScreen = function () {
        var data = document.getElementById('convert');
        html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(data).then(function (canvas) {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__('p', 'mm', 'a4');
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('Invoice.pdf');
        });
    };
    HtmltopdfComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            dom: 'lBfrtip',
            buttons: [
                {
                    extend: 'copy',
                    className: 'btn btn-default ml-3',
                    init: function (api, node, config) {
                        $(node).removeClass('dt-button');
                    }
                },
                {
                    extend: 'print',
                    className: 'btn btn-default',
                    init: function (api, node, config) {
                        $(node).removeClass('dt-button');
                    }
                },
                {
                    extend: 'csv',
                    className: 'btn btn-default',
                    init: function (api, node, config) {
                        $(node).removeClass('dt-button');
                    }
                }
            ]
        };
        this.getUser();
    };
    HtmltopdfComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    HtmltopdfComponent.prototype.getUser = function () {
        var _this = this;
        this.sampleService.myData().subscribe(function (data) {
            _this.result = data;
            _this.users = _this.result.result.revenueData;
            _this.dtElement.dtInstance.then(function (dtInstance) {
                dtInstance.destroy();
                _this.dtTrigger.next();
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTableDirective"])
    ], HtmltopdfComponent.prototype, "dtElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HtmltopdfComponent.prototype, "content", void 0);
    HtmltopdfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-htmltopdf',
            template: __webpack_require__(/*! ./htmltopdf.component.html */ "./src/app/pdf/htmltopdf.component.html"),
            styles: [__webpack_require__(/*! ./htmltopdf.component.css */ "./src/app/pdf/htmltopdf.component.css")]
        }),
        __metadata("design:paramtypes", [_sample_service__WEBPACK_IMPORTED_MODULE_3__["SampleService"]])
    ], HtmltopdfComponent);
    return HtmltopdfComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var appRoutes = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/sample.service.ts":
/*!***********************************!*\
  !*** ./src/app/sample.service.ts ***!
  \***********************************/
/*! exports provided: SampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleService", function() { return SampleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleService = /** @class */ (function () {
    function SampleService(http) {
        this.http = http;
        this.url = ' https://www.jsonstore.io/ad39e35646fbc483bf1fb8e9572658ab86588f9e400efeb0d43eecd5247b8c75';
    }
    SampleService.prototype.myData = function () {
        return this.http.get(this.url + "/chart");
    };
    SampleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SampleService);
    return SampleService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



// if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
// }
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mmaduri\Documents\GitHub\angular2-pagination-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map