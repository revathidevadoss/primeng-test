function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar ></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<main>\n  <div class=\"position-relative\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero section-shaped\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n      </div>\n      <div class=\"container shape-container align-items-center\">\n        <div class=\"container shape-container d-flex align-items-center \" >\n        \n      </div>\n      </div>\n      <div class=\"container shape-container d-flex align-items-center\">\n        <div class=\"col px-0\">\n          <div class=\"row align-items-center justify-content-center\">\n            \n            <div class=\"col-lg-6 text-center\">\n              \n              <p class=\"lead text-white\"><b >Welcome to our sites</b>\n              <br><span>Best Site for Products and Sales</span></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n          \n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>Sign in with credentials</small>\n              </div>\n\n              <form role=\"form\" #userlogin = \"ngForm\" (ngSubmit) = \"userlogin.form.valid && onClickSubmit(userlogin.value) \">\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                    </div>\n                    <input id=\"userName\" class=\"form-control\" placeholder=\"username\" name = \"userName\" type=\"email\" ngModel (focus)=\"focus=true\" [(ngModel)]=\"userlogin.userName\" (blur)=\"focus=false\" #userName=\"ngModel\" required>\n                  </div>\n                  <div *ngIf=\"(userlogin.submitted || userName.touched) && userName.errors\">\n                    <span class=\"textColor\">Name is required.</span>\n                  </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                    </div>\n                    <input id=\"password\" class=\"form-control\" placeholder=\"Password\" name = \"password\" type=\"password\" ngModel (focus)=\"focus1=true\" [(ngModel)]=\"userlogin.password\" (blur)=\"focus1=false\" #password=\"ngModel\" required>\n                  </div>\n                  <div *ngIf=\"(userlogin.submitted || password.touched) && password.errors\" >\n                    <span class=\"textColor\">Password is required.</span>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-default my-4 \" >Sign in</button>\n                  <div class=\"alert alert-danger \" role=\"alert\" *ngIf=\"alertmsgflag\">\n                    {{this.errmsg}}\n                  </div>\n                </div>\n              \n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</main>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <section class=\"section section-shaped section-lg\">\n    <div class=\"shape shape-style-1 bg-gradient-default\">\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n    <div class=\"container pt-lg-md\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5\">\n          <div class=\"card bg-secondary shadow border-0\">\n            \n            <div class=\"card-body px-lg-5 py-lg-5\">\n              <div class=\"text-center text-muted mb-4\">\n                <small>New Product</small>\n              </div>\n              \n\n              <form role=\"form\" (ngSubmit) = \"f.form.valid && onClickSubmit(f.value);\" #f=\"ngForm\"  novalidate>\n                 <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-circle-08\"></i></span>\n                    </div>\n                     <input type=\"text\" maxlength=\"50\" placeholder=\"Product Name\" name=\"productName\" class=\"form-control\" [(ngModel)]=\"model.productName\" #productName=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && productName.invalid }\" required>\n                       <div *ngIf=\"f.submitted && productName.invalid\" class=\"invalid-feedback\">\n                        <div *ngIf=\"productName.errors.required\">Product Name is required</div>\n                    </div>\n\n                  </div>\n                </div>\n               \n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-mobile-button\"></i></span>\n                    </div>\n                    <input type=\"text\" maxlength=\"13\" (keypress)=\"numberOnly($event)\" placeholder=\"Product ID\" name=\"productID\" class=\"form-control\" [(ngModel)]=\"model.productID\" #productID=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && productID.invalid }\" required>\n                    <div *ngIf=\"f.submitted && productID.invalid\" class=\"invalid-feedback\">\n                     <div *ngIf=\"productID.errors.required\">Product ID is required</div>\n                 </div>                    \n                  </div>\n                </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-money-coins\"></i></span>\n                    </div>\n                    <input class=\"form-control\" maxlength=\"30\" placeholder=\"Product Manger\" name=\"productManger\" ngModel type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                </div>\n                  <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\n                  <div class=\"input-group input-group-alternative mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n                    </div>\n                    <input type=\"date\" maxlength=\"10\" placeholder=\"Sales Start Date\" name=\"saleDate\" class=\"form-control\" [(ngModel)]=\"model.saleDate\" #saleDate=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && saleDate.invalid }\" required>\n                    <div *ngIf=\"f.submitted && saleDate.invalid\" class=\"invalid-feedback\">\n                     <div *ngIf=\"saleDate.errors.required\">Date is required</div>\n                 </div>                   </div>\n                </div>\n                \n                <div class=\"text-center\">\n                  <button type=\"button\"  class=\"btn btn-primary mt-4\" (click) = \"f.reset()\">Clear</button>\n\n                  <button type=\"submit\" class=\"btn btn-primary mt-4\"  >Submit</button>\n                </div>\n               \n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n\n<p-dialog header=\"Information\" [(visible)]=\"display\">\n  Successfully submited!!!\n</p-dialog>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalesSalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div class=\"position-relative\">\n    <!-- shape Hero -->\n    <section class=\"section section-lg section-shaped pb-250\">\n      <div class=\"shape shape-style-1 shape-default\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n      <div class=\" \">\n\n      <p-table #dt1 [value]=\"sales\" dataKey=\"id\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n      [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" styleClass=\"p-datatable-customers p-datatable-gridlines\"\n      [paginator]=\"true\" currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\"\n      [globalFilterFields]=\"['productID','productName','salesQ1','salesQ2','salesQ3','salesQ4','totalSales']\">\n      \n      <ng-template pTemplate=\"caption\" (onEditInit)=\"onEditInit($event)\" (onEditCancel)=\"onEditCancel($event)\" >\n        <div class=\"p-d-flex\">\n          <span class=\"p-input-icon-left p-ml-auto\">\n             <input pInputText type=\"text\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\" placeholder=\"Search keyword\" />\n          </span><i class=\"pi pi-search\"></i>\n        </div>\n      </ng-template>\n\n      <ng-template pTemplate=\"header\">\n        <tr id=\"header\" >\n          <ng-container *ngFor=\"let col of customers\" >\n            <th  *ngIf =\"!col.subHeaders\" rowspan=\"2\" [pSortableColumn]=col.field >\n              {{col.header}} \n              <p-sortIcon field=\"col.field\"></p-sortIcon>\n            </th> \n            <th  *ngIf =\"col.subHeaders\" [attr.colspan]=col.subHeaders.length >\n              {{col.header}}\n            </th> \n          </ng-container>\n        </tr>\n        <tr id=\"subheader\">\n          <ng-container *ngFor=\"let col of customers\" >\n            <th *ngFor='let subheader of col.subHeaders' [pSortableColumn]=subheader.field >{{subheader.header}} <p-sortIcon field=\"subheader.field\"></p-sortIcon></th>\n          </ng-container>\n        </tr>  \n      </ng-template>\n\n      <ng-template pTemplate=\"body\" let-sale>\n        <tr>\n          <td pEditableColumn>\n            <p-cellEditor>\n              {{sale.productID}}\n              <ng-template pTemplate=\"input\" >\n                <input pInputText type=\"text\" [(ngModel)]=\"sale.productID\"  required>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{sale.productID}}\n               </ng-template>\n            </p-cellEditor>\n          </td>\n          <td pEditableColumn>\n            <p-cellEditor>\n              {{sale.productName}}\n              <ng-template pTemplate=\"input\" >\n              <input pInputText type=\"text\" [(ngModel)]=\"sale.productName\"  required>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{sale.productName}}\n              </ng-template>\n            </p-cellEditor>\n          </td>\n          <td pEditableColumn> \n            <p-cellEditor>\n              {{sale.salesQ1}}\n              <ng-template pTemplate=\"input\" >\n                <input pInputText type=\"number\" [(ngModel)]=\"sale.salesQ1\"  required>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                {{sale.salesQ1}}\n              </ng-template>\n            </p-cellEditor>\n          </td>\n                <td pEditableColumn> \n                    <p-cellEditor>\n                      {{sale.salesQ2}}\n                      <ng-template pTemplate=\"input\" >\n                        <input pInputText type=\"number\" [(ngModel)]=\"sale.salesQ2\"  required>\n                      </ng-template>\n                      <ng-template pTemplate=\"output\">\n                        {{sale.salesQ2}}\n                      </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn> \n                    <p-cellEditor>\n                      {{sale.salesQ3}}\n                      <ng-template pTemplate=\"input\" >\n                        <input pInputText type=\"number\" [(ngModel)]=\"sale.salesQ3\"  required>\n                      </ng-template>\n                      <ng-template pTemplate=\"output\">\n                        {{sale.salesQ3}}\n                      </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn> \n                    <p-cellEditor>\n                      {{sale.salesQ4}}\n                      <ng-template pTemplate=\"input\" >\n                        <input pInputText type=\"number\" [(ngModel)]=\"sale.salesQ4\"  required>\n                      </ng-template>\n                      <ng-template pTemplate=\"output\">\n                        {{sale.salesQ4}}\n                      </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td>{{sale.salesQ1+sale.salesQ2+sale.salesQ3+sale.salesQ4}}</td>\n            </tr>\n        </ng-template>   \n    </p-table>\n    <!--data grid End-->\n  </div>\n </section>\n    <!-- 1st Hero Variation -->\n  </div>\n\n</main>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\" >\n \n  <div class=\"container\" >\n    <div class=\"row row-grid align-items-center\" >\n      <div class=\"col-lg-6\">\n        <h3 class=\"text-primary font-weight-light mb-2\">Thank you!</h3>\n      </div>\n    \n    </div>\n    <hr>\n    \n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <nav  class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n\n  <div class=\"container\" id=\"navbar-main\" *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\n   \n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\" >\n        <li class=\"nav-item dropdown\" >\n          <a class=\"nav-link no-caret\" [routerLink]=\"['/home']\"  data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\n            <span class=\"nav-link-inner--text\">Home</span>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" >\n          <a class=\"nav-link no-caret\" (click)=\"product()\"  data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\n            <span class=\"nav-link-inner--text\">New Product </span>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" >\n          <a class=\"nav-link no-caret\" [routerLink]=\"['/sales']\"  data-toggle=\"dropdown\" role=\"button\">\n            <i class=\"ni ni-ui-04 d-lg-none\"></i>\n            <span class=\"nav-link-inner--text\">Sales</span>\n          </a>\n        </li>\n      </ul>\n             \n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto\">\n        <li (click)=\"onLogout()\"  class=\"nav-item d-none d-lg-block ml-lg-4\" >\n          <a   class=\"btn btn-neutral btn-icon\" >\n            <span class=\"btn-inner--icon\">\n              <i class=\"ni ni-button-power\"></i>\n            </span>\n            <span  *ngIf=\"isLoggedIn\" class=\"nav-link-inner--text\" >Logout</span>\n          </a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n</nav>\n\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/SaleService.ts":
  /*!********************************!*\
    !*** ./src/app/SaleService.ts ***!
    \********************************/

  /*! exports provided: SaleService */

  /***/
  function srcAppSaleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SaleService", function () {
      return SaleService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SaleService =
    /*#__PURE__*/
    function () {
      function SaleService(http) {
        _classCallCheck(this, SaleService);

        this.http = http;
      }

      _createClass(SaleService, [{
        key: "getSale",
        value: function getSale() {
          return this.http.get('assets/potato_sales.json').toPromise().then(function (res) {
            return res.data;
          }).then(function (data) {
            return data;
          });
        }
      }]);

      return SaleService;
    }();

    SaleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }];
    };

    SaleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], SaleService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 0;

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(renderer, router, document, element, location) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
      }

      _createClass(AppComponent, [{
        key: "hasScrolled",
        value: function hasScrolled() {
          var st = window.pageYOffset; // Make sure they scroll more than delta

          if (Math.abs(lastScrollTop - st) <= delta) return;
          var navbar = document.getElementsByTagName('nav')[0]; // If they scrolled down and are past the navbar, add class .headroom--unpinned.
          // This is necessary so you never see what is "behind" the navbar.

          if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
              navbar.classList.remove('headroom--pinned');
              navbar.classList.add('headroom--unpinned');
            } // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');

          } else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
              // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
              if (navbar.classList.contains('headroom--unpinned')) {
                navbar.classList.remove('headroom--unpinned');
                navbar.classList.add('headroom--pinned');
              }
            }
          }

          lastScrollTop = st;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var navbar = this.element.nativeElement.children[0].children[0];
          this._router = this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          }).subscribe(function (event) {
            if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
            } else {
              window.document.activeElement.scrollTop = 0;
            }

            _this.renderer.listen('window', 'scroll', function (event) {
              var number = window.scrollY;

              if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.add('headroom--not-top');
              } else {
                // remove logic
                navbar.classList.remove('headroom--not-top');
              }
            });
          });
          this.hasScrolled();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], AppComponent.prototype, "hasScrolled", null);

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-toast.js");
    /* harmony import */


    var _SaleService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./SaleService */
    "./src/app/SaleService.ts");
    /* harmony import */


    var _pojoService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pojoService */
    "./src/app/pojoService.ts");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/confirmdialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-confirmdialog.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _sales_sales_component__WEBPACK_IMPORTED_MODULE_17__["SalesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderModule"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_24__["ConfirmDialogModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_23__["MessagesModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_25__["DialogModule"]],
      providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"], _SaleService__WEBPACK_IMPORTED_MODULE_21__["SaleService"], _pojoService__WEBPACK_IMPORTED_MODULE_22__["pojoService"], primeng_api__WEBPACK_IMPORTED_MODULE_26__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_26__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_26__["FilterService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sales/sales.component */
    "./src/app/sales/sales.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'product',
      component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'sales',
      component: _sales_sales_component__WEBPACK_IMPORTED_MODULE_7__["SalesComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
              _this2.router.navigate(['/login']);

              return false;
            }

            return true;
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          if (user.userName !== '' && user.password !== '') {
            this.loggedIn.next(true);
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.loggedIn.asObservable();
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".textColor{\n    color: red !important;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dENvbG9ye1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDs7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.alertMsg = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit(data) {
          this.authService.login(data);
          console.log(data.userName + " " + data.password);

          if (data.userName == "admin" && data.password == "Test123") {
            this.router.navigate(['/home']);
          } else {
            this.alertmsgflag = true;
            this.errmsg = "Invalid Login credentials";
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'progress-spinner-overview-example',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pojoService.ts":
  /*!********************************!*\
    !*** ./src/app/pojoService.ts ***!
    \********************************/

  /*! exports provided: pojoService */

  /***/
  function srcAppPojoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pojoService", function () {
      return pojoService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var pojoService =
    /*#__PURE__*/
    function () {
      function pojoService(http) {
        _classCallCheck(this, pojoService);

        this.http = http;
        this.temarray = [];
      }

      _createClass(pojoService, [{
        key: "setProduct",
        value: function setProduct(data) {
          this.temarray.push(data);
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          return this.temarray;
        }
      }]);

      return pojoService;
    }();

    pojoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
      }];
    };

    pojoService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])], pojoService);
    /***/
  },

  /***/
  "./src/app/product/product.component.scss":
  /*!************************************************!*\
    !*** ./src/app/product/product.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pojoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pojoService */
    "./src/app/pojoService.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(primengConfig, pojo) {
        _classCallCheck(this, ProductComponent);

        this.primengConfig = primengConfig;
        this.pojo = pojo;
        this.model = {};
        this.display = false;
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.primengConfig.ripple = true;
        }
      }, {
        key: "numberOnly",
        value: function numberOnly(event) {
          var charCode = event.which ? event.which : event.keyCode;

          if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
          }

          return true;
        }
      }, {
        key: "onClickSubmit",
        value: function onClickSubmit(data) {
          console.log(data);
          var tempdata = data;
          tempdata["salesQ1"] = "";
          tempdata["salesQ2"] = "";
          tempdata["salesQ3"] = "";
          tempdata["salesQ4"] = "";
          this.pojo.setProduct(tempdata); // alert("subnitted successfully");

          this.display = true;
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"]
      }, {
        type: _pojoService__WEBPACK_IMPORTED_MODULE_1__["pojoService"]
      }];
    };

    ProductComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product.component.scss */
      "./src/app/product/product.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeNGConfig"], _pojoService__WEBPACK_IMPORTED_MODULE_1__["pojoService"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/app/sales/sales.component.css":
  /*!*******************************************!*\
    !*** ./src/app/sales/sales.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalesSalesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbGVzL3NhbGVzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sales/sales.component.ts":
  /*!******************************************!*\
    !*** ./src/app/sales/sales.component.ts ***!
    \******************************************/

  /*! exports provided: SalesComponent */

  /***/
  function srcAppSalesSalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesComponent", function () {
      return SalesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _SaleService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../SaleService */
    "./src/app/SaleService.ts");
    /* harmony import */


    var _pojoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pojoService */
    "./src/app/pojoService.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SalesComponent =
    /*#__PURE__*/
    function () {
      // public slider;
      function SalesComponent(saleService, pojo) {
        _classCallCheck(this, SalesComponent);

        this.saleService = saleService;
        this.pojo = pojo;
      }

      _createClass(SalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.saleService.getSale().then(function (customers) {
            _this3.customers = customers.column;
            var salesDatas = customers.datas;
            console.log(customers);

            var tempSales = _this3.pojo.getProduct();

            console.log("tempSales" + "  " + JSON.stringify(tempSales));
            _this3.sales = salesDatas.concat(tempSales);
            console.log("temporySales" + "  " + JSON.stringify(_this3.sales));
          });
        }
      }, {
        key: "onEditInit",
        value: function onEditInit() {
          //console.log(this.books);
          console.log('Edit Init Event Called');
        }
      }, {
        key: "onEditCancel",
        value: function onEditCancel() {
          // console.log(this.books);
          console.log('Edit Cancel Event Called');
        }
      }]);

      return SalesComponent;
    }();

    SalesComponent.ctorParameters = function () {
      return [{
        type: _SaleService__WEBPACK_IMPORTED_MODULE_1__["SaleService"]
      }, {
        type: _pojoService__WEBPACK_IMPORTED_MODULE_2__["pojoService"]
      }];
    };

    SalesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sales',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sales/sales.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sales.component.css */
      "./src/app/sales/sales.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_SaleService__WEBPACK_IMPORTED_MODULE_1__["SaleService"], _pojoService__WEBPACK_IMPORTED_MODULE_2__["pojoService"]])], SalesComponent);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.test = new Date();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPath",
        value: function getPath() {
          return this.router.url;
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, location, router) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.isLoggedIn$ = this.authService.isLoggedIn;
          this.router.events.subscribe(function (event) {
            _this4.isCollapsed = true;

            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              if (event.url != _this4.lastPoppedUrl) _this4.yScrollStack.push(window.scrollY);
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              if (event.url == _this4.lastPoppedUrl) {
                _this4.lastPoppedUrl = undefined;
                window.scrollTo(0, _this4.yScrollStack.pop());
              } else window.scrollTo(0, 0);
            }
          });
          this.location.subscribe(function (ev) {
            _this4.lastPoppedUrl = ev.url;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "product",
        value: function product() {
          this.router.navigate(['/product']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NavbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-navbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/shared/navbar/navbar.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/revad/Documents/Project/GIT/PrimeNg/test/primeng-test/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map