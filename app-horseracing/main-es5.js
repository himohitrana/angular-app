function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_horse_racing_horse_racing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/horse-racing/horse-racing.component */
    "./src/app/components/horse-racing/horse-racing.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'app',
      pathMatch: 'full'
    }, // { path: 'task/hipodromo', component: HipodromoComponent,
    //   children:
    //     [
    //       { path: 'dropdown-hipodromo', component: DropdownHipodromoComponent }
    //     ]
    // },
    {
      path: 'app',
      component: _components_horse_racing_horse_racing_component__WEBPACK_IMPORTED_MODULE_2__["HorseRacingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/toolbar/toolbar.component */
    "./src/app/components/toolbar/toolbar.component.ts");
    /* harmony import */


    var _components_races_table_races_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/races-table/races-table.component */
    "./src/app/components/races-table/races-table.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ticket-detail/ticket-detail.component */
    "./src/app/components/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "mobile-sidebar": a0
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(SpinnerService, router, userService, route) {
        _classCallCheck(this, AppComponent);

        this.SpinnerService = SpinnerService;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.title = 'app-horseracing';
        this.collapsed = true;
        this.LinkDemoHorseRacing = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var th = this;
          this.route.queryParams.subscribe(function (params) {
            //console.log(params);
            _this.user = params.user;
            _this.banca = params.banca;
            if (_this.user !== undefined && _this.banca !== undefined) _this.getUserInfo(_this.user, _this.banca);
          });
          this.userService.content.subscribe(function (data) {
            _this.div2 = data;
          }); // this.SpinnerService.show();
          // this.checkRouteForDemo()
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(user, banca) {
          this.userService.getUserData(user, banca).subscribe(function (data) {
            localStorage.setItem('userData', JSON.stringify(data));
          });
        }
      }, {
        key: "checkRouteForDemo",
        value: function checkRouteForDemo() {//console.log(this.router.url)
          // return this.router.url === '/template-web/horse-racing';
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 3,
      consts: [[1, "main-container"], [1, "d-flex"], [1, "left-content"], [1, "right-content", "mobile-add-none", 3, "ngClass"], ["bdColor", "rgba(0, 0, 0, 1)"], ["src", "https://media.giphy.com/media/xUOwGlBh5RlJbFcMI8/giphy.gif"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-races-table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-ticket-detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.div2));
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"], _components_races_table_races_table_component__WEBPACK_IMPORTED_MODULE_6__["RacesTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_8__["TicketDetailComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]],
      styles: [".main-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.left-content[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n}\r\n\r\n.right-content[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  padding: 8px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n@media screen and (max-width:599px){\r\n  .mobile-sidebar[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .right-content[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 8px;\r\n    background-color: #f5f5f5;\r\n    position: absolute;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubGVmdC1jb250ZW50IHtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmlnaHQtY29udGVudCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7XHJcbiAgLm1vYmlsZS1zaWRlYmFye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnJpZ2h0LWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_horse_racing_horse_racing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/horse-racing/horse-racing.component */
    "./src/app/components/horse-racing/horse-racing.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/toolbar/toolbar.component */
    "./src/app/components/toolbar/toolbar.component.ts");
    /* harmony import */


    var _components_races_table_races_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/races-table/races-table.component */
    "./src/app/components/races-table/races-table.component.ts");
    /* harmony import */


    var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/ticket-detail/ticket-detail.component */
    "./src/app/components/ticket-detail/ticket-detail.component.ts");
    /* harmony import */


    var _services_hipodromo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/hipodromo.service */
    "./src/app/services/hipodromo.service.ts");
    /* harmony import */


    var _services_race_table_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/race-table.service */
    "./src/app/services/race-table.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _components_custom_value_custom_value_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/custom-value/custom-value.component */
    "./src/app/components/custom-value/custom-value.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/countdown/countdown.component */
    "./src/app/components/countdown/countdown.component.ts");
    /* harmony import */


    var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ngx-sharebuttons */
    "./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons.js"); // Module
    // Translation
    // Component
    // Services
    // Angular material components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_hipodromo_service__WEBPACK_IMPORTED_MODULE_16__["HipodromoService"], _services_race_table_service__WEBPACK_IMPORTED_MODULE_17__["RaceTableService"]],
      imports: [[ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_33__["ShareModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
          useFactory: function useFactory(http) {
            return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
          },
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
        }
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], // Material components
      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_31__["SlickCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_horse_racing_horse_racing_component__WEBPACK_IMPORTED_MODULE_11__["HorseRacingComponent"], // DemoHorseRacingComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _components_races_table_races_table_component__WEBPACK_IMPORTED_MODULE_14__["RacesTableComponent"], _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_15__["TicketDetailComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _components_custom_value_custom_value_component__WEBPACK_IMPORTED_MODULE_28__["CustomValueComponent"], _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_32__["CountdownComponent"]],
        imports: [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_33__["ShareModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], // Material components
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_31__["SlickCarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_horse_racing_horse_racing_component__WEBPACK_IMPORTED_MODULE_11__["HorseRacingComponent"], // DemoHorseRacingComponent,
          _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_13__["ToolbarComponent"], _components_races_table_races_table_component__WEBPACK_IMPORTED_MODULE_14__["RacesTableComponent"], _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_15__["TicketDetailComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _components_custom_value_custom_value_component__WEBPACK_IMPORTED_MODULE_28__["CustomValueComponent"], _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_32__["CountdownComponent"]],
          imports: [ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_33__["ShareModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
              useFactory: function useFactory(http) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
              },
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
            }
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"], // Material components
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_31__["SlickCarouselModule"]],
          providers: [_services_hipodromo_service__WEBPACK_IMPORTED_MODULE_16__["HipodromoService"], _services_race_table_service__WEBPACK_IMPORTED_MODULE_17__["RaceTableService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/countdown/countdown.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/countdown/countdown.component.ts ***!
    \*************************************************************/

  /*! exports provided: CountdownComponent */

  /***/
  function srcAppComponentsCountdownCountdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdownComponent", function () {
      return CountdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/carrera.service */
    "./src/app/services/carrera.service.ts");

    function delay(delay) {
      return new Promise(function (r) {
        setTimeout(r, delay);
      });
    }

    var CountdownComponent = /*#__PURE__*/function () {
      function CountdownComponent(carreraService) {
        _classCallCheck(this, CountdownComponent);

        this.carreraService = carreraService;
        this.counter = 1440;
      }

      _createClass(CountdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObj = JSON.parse(localStorage.getItem('userData'));
          this.userData = jsonObj;
          this.doTimer();
        }
      }, {
        key: "ISODate",
        value: function ISODate(date) {
          var b = date.split(/\D+/);
          return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
        }
      }, {
        key: "onFetchNextRaces",
        value: function onFetchNextRaces() {
          this.carreraService.processingNextRacesByAgentAndPagination(this.userData.AgenteID, 10);
        }
      }, {
        key: "doTimer",
        value: function doTimer() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var i, strDate, countDownDate, now, distance, mins;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < this.counter)) {
                      _context.next = 14;
                      break;
                    }

                    strDate = this.ISODate(this.raceDate);
                    countDownDate = new Date(strDate).getTime();
                    now = new Date().getTime();
                    distance = now - countDownDate;
                    mins = Math.floor(distance / 1000 / 60);
                    this.minutes = mins;

                    if (distance <= 0) {
                      this.onFetchNextRaces();
                    }

                    _context.next = 11;
                    return delay(60000);

                  case 11:
                    i++;
                    _context.next = 1;
                    break;

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CountdownComponent;
    }();

    CountdownComponent.ɵfac = function CountdownComponent_Factory(t) {
      return new (t || CountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_2__["CarreraService"]));
    };

    CountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountdownComponent,
      selectors: [["app-countdown"]],
      inputs: {
        raceDate: "raceDate"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "slide-date"]],
      template: function CountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.minutes, " MTP");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-countdown',
          templateUrl: './countdown.component.html',
          styleUrls: ['./countdown.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_2__["CarreraService"]
        }];
      }, {
        raceDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/custom-value/custom-value.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/custom-value/custom-value.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CustomValueComponent */

  /***/
  function srcAppComponentsCustomValueCustomValueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValueComponent", function () {
      return CustomValueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var CustomValueComponent = /*#__PURE__*/function () {
      function CustomValueComponent(dialogRef, data) {
        _classCallCheck(this, CustomValueComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(CustomValueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CustomValueComponent;
    }();

    CustomValueComponent.ɵfac = function CustomValueComponent_Factory(t) {
      return new (t || CustomValueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CustomValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomValueComponent,
      selectors: [["app-custom-value"]],
      decls: 12,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
      template: function CustomValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ingrese cantidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "monto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomValueComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.data.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-actions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A\xF1adir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.amount);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: [".mat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tdmFsdWUvY3VzdG9tLXZhbHVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXZhbHVlL2N1c3RvbS12YWx1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-custom-value',
          templateUrl: './custom-value.component.html',
          styleUrls: ['./custom-value.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/horse-racing/horse-racing.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/horse-racing/horse-racing.component.ts ***!
    \*******************************************************************/

  /*! exports provided: HorseRacingComponent */

  /***/
  function srcAppComponentsHorseRacingHorseRacingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HorseRacingComponent", function () {
      return HorseRacingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HorseRacingComponent = /*#__PURE__*/function () {
      function HorseRacingComponent(http, router) {
        _classCallCheck(this, HorseRacingComponent);

        this.http = http;
        this.router = router;
        this.borders = ['border-primary', 'border-secondary', 'border-danger', 'border-success', 'border-warning'];
      }

      _createClass(HorseRacingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addClassToBgBody = $('body').addClass('theme-hipodromo');
          var bgNumber = ['rk-red', 'rk-white', 'rk-blue', 'rk-yellow', 'rk-green', 'rk-black', 'rk-orange', 'rk-gray', 'rk-magenta', 'rk-blueviolet', 'rk-springgreen', 'rk-mediumblue', 'rk-chocolate']; // $('.round-number').addClass(randBgNumber);

          $('.round-number').each(function (index, el) {
            var randBgNumber = bgNumber[Math.floor(Math.random() * bgNumber.length)];
            $(this).addClass(randBgNumber);
            bgNumber = $.grep(bgNumber, function (value) {
              return value !== randBgNumber;
            });
          });
        }
      }]);

      return HorseRacingComponent;
    }();

    HorseRacingComponent.ɵfac = function HorseRacingComponent_Factory(t) {
      return new (t || HorseRacingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HorseRacingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HorseRacingComponent,
      selectors: [["app-horse-racing"]],
      decls: 0,
      vars: 0,
      template: function HorseRacingComponent_Template(rf, ctx) {},
      styles: [".rk-no-padding {\r\n  padding: 0;\r\n}\r\n.rk-border-radius-none {\r\n  border-radius: unset !important;\r\n}\r\n.rk-border-right {\r\n  border-right: 1px solid #dcdcdc;\r\n}\r\n.rk-border-right-and-left {\r\n  border-right: 1px solid #dcdcdc;\r\n  border-left: 1px solid #dcdcdc;\r\n}\r\n#box-level-1 {\r\n  background-color: #f2f2f2;\r\n}\r\n#box-level-1 a {\r\n  color: #042a51;\r\n}\r\n#box-level-1 .nav-item.dropdown {\r\n  font-weight: bold;\r\n}\r\n#box-level-1 .nav-pills .nav-link.active,\r\n#box-level-1 .nav-pills .show > .nav-link {\r\n  color: #7274a7;\r\n  background-color: #bfd3e8;\r\n  border-radius: 0;\r\n}\r\n#box-level-1 .rk-nav-pills {\r\n  justify-content: space-between;\r\n  color: unset;\r\n}\r\n#box-level-1 > .card-body {\r\n  padding: 0;\r\n}\r\n#box-level-2 > .card-body {\r\n  padding: 5px 10px;\r\n}\r\n#box-level-2 > .card-body > .card > .card-body {\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#box-level-2 .box-dropdown-rk .dropdown {\r\n  padding-right: 5px;\r\n}\r\n.box-table .table {\r\n  background-color: white;\r\n}\r\n.box-table .table thead {\r\n  background-color: #e6e6e6;\r\n  font-size: 0.8rem;\r\n}\r\n.box-table .table tbody {\r\n  font-size: 0.7rem;\r\n}\r\n.box-table .table thead th:first-child,\r\n.box-table .table tbody th:first-child {\r\n  padding-left: 17px;\r\n  text-align: center;\r\n}\r\n.box-table .table tbody th:first-child .round-number {\r\n  border-radius: 100%;\r\n  border: 1px solid gray;\r\n  padding: 1px;\r\n  width: 20px;\r\n  margin: auto;\r\n}\r\n.box-table .table tbody th,\r\n.box-table .table tbody td {\r\n  vertical-align: middle;\r\n  padding: 0 10px !important;\r\n}\r\n.box-table .table.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: #f7f7f7;\r\n}\r\n.box-table .table thead th {\r\n  padding: 0;\r\n  vertical-align: middle;\r\n  padding-right: 0.75rem;\r\n  padding-left: 0.75rem;\r\n}\r\n/*japanese wave ocean painting*/\r\n.bg-tsrk {\r\n  background-image: linear-gradient(229.86deg, #1f5587 0, #042a51 100%);\r\n}\r\n.navbar-light .navbar-brand {\r\n  color: white;\r\n}\r\n#box-level-1 .card-body,\r\n#box-level-2 .card-body {\r\n  display: flex;\r\n}\r\n.rk-panel.card {\r\n  flex-grow: 1;\r\n  margin: 0 10px;\r\n}\r\n.rk-panel.card .card-body {\r\n  padding: 0;\r\n}\r\n.box-dropdown-rk {\r\n  display: flex;\r\n}\r\n.rk-hipodromo {\r\n  min-width: 27rem;\r\n}\r\n/* span.time-box.p-2.border {\r\n  text-align: center;\r\n  height: 40px;\r\n  width: 85px;\r\n} */\r\n/* .footer {\r\n  background: linear-gradient(229.86deg, #1f5587 0, #042a51 100%);\r\n  color: white !important;\r\n}\r\n.footer .rk-panel.card {\r\n  flex-basis: 100%;\r\n}\r\n.footer .box-show,\r\n.footer .up-next {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-basis: 90px;\r\n}\r\n.footer .fix-bottom {\r\n  display: flex;\r\n  flex-basis: 100%;\r\n}\r\n.footer #carouselExampleControls {\r\n  display: flex;\r\n}\r\n.footer .carousel-control-next,\r\n.footer .carousel-control-prev {\r\n  width: 4%;\r\n  position: relative;\r\n}\r\n.footer .carousel-inner {\r\n  order: 2;\r\n}\r\n.footer .carousel-control-prev {\r\n  order: 1 !important;\r\n}\r\n.footer .carousel-control-next {\r\n  order: 3 !important;\r\n}\r\n.footer .card {\r\n  background-color: transparent;\r\n}\r\n.footer .rk-item-value {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n}\r\n.footer-float {\r\n  z-index: 1030;\r\n  bottom: 0;\r\n  background-color: #f5f5f5;\r\n}\r\n.footer .box-container {\r\n  display: flex;\r\n  bottom: 0;\r\n  overflow: hidden;\r\n  left: 20%;\r\n  right: 20%;\r\n}\r\n.footer .rk-panel .panel-body {\r\n  display: flex;\r\n  padding: 0;\r\n}\r\n.footer .rk-panel .panel-body .box-value {\r\n  display: flex;\r\n}\r\n.footer .race-value {\r\n  font-size: 0.8rem;\r\n} */\r\n.b-scroll-active .box-table {\r\n  max-height: 60vh;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n.theme-hipodromo {\r\n  background-color: #042a51;\r\n  background-repeat: repeat-x !important;\r\n  background-size: 750px 486px !important;\r\n  background-image: url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 587.4 380.3' enable-background='new 0 0 587.4 380.3' xml:space='preserve'%3E %3Cg id='Layer_1'%3E %3Cdefs%3E %3Cfilter id='Adobe_OpacityMaskFilter' filterUnits='userSpaceOnUse' x='10.4' y='-19.7' width='577' height='418.6'%3E %3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E %3C/filter%3E %3C/defs%3E %3Cmask maskUnits='userSpaceOnUse' x='10.4' y='-19.7' width='577' height='418.6' id='SVGID_2_'%3E %3Cg filter='url(%23Adobe_OpacityMaskFilter)'%3E %3ClinearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='294.9886' y1='-2.339244e-03' x2='294.9886' y2='380.2977'%3E %3Cstop offset='0' style='stop-color:%23FFFFFF'/%3E %3Cstop offset='0.2491' style='stop-color:%23FDFDFD'/%3E %3Cstop offset='0.3696' style='stop-color:%23F5F5F5'/%3E %3Cstop offset='0.4624' style='stop-color:%23E8E8E8'/%3E %3Cstop offset='0.5412' style='stop-color:%23D6D6D6'/%3E %3Cstop offset='0.611' style='stop-color:%23BEBEBE'/%3E %3Cstop offset='0.6745' style='stop-color:%23A0A0A0'/%3E %3Cstop offset='0.7319' style='stop-color:%237E7E7E'/%3E %3Cstop offset='0.7514' style='stop-color:%23707070'/%3E %3Cstop offset='0.7711' style='stop-color:%235E5E5E'/%3E %3Cstop offset='0.8143' style='stop-color:%233C3C3C'/%3E %3Cstop offset='0.8585' style='stop-color:%23222222'/%3E %3Cstop offset='0.9036' style='stop-color:%230F0F0F'/%3E %3Cstop offset='0.95' style='stop-color:%23040404'/%3E %3Cstop offset='1' style='stop-color:%23000000'/%3E %3C/linearGradient%3E %3Crect id='SVGID_1_' x='2.6' y='0' fill='url(%23SVGID_3_)' width='584.8' height='380.3'/%3E %3C/g%3E %3C/mask%3E %3CradialGradient id='SVGID_4_' cx='506.467' cy='22.3335' r='0.4766' gradientTransform='matrix(2.410085e-14 -393.597 397.7216 2.435345e-14 -8642.9814 199518.3438)' gradientUnits='userSpaceOnUse'%3E %3Cstop offset='0' style='stop-color:%23248FF1'/%3E %3Cstop offset='1' style='stop-color:%23003399'/%3E %3C/radialGradient%3E %3Cpath mask='url(%23SVGID_2_)' fill='url(%23SVGID_4_)' d='M537.4,278.1c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7 c0,10.9,8.9,19.7,19.8,19.7C528.5,297.8,537.4,289,537.4,278.1 M499,278.1c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5C507.3,296.6,499,288.4,499,278.1 M526.5,284.7C526.6,284.7,526.6,284.7,526.5,284.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C526.4,284.9,526.5,284.9,526.5,284.7 M517.6,289.3L517.6,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C517.4,289.5,517.5,289.5,517.6,289.3 M439.9,278.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S439.9,289,439.9,278.1 M401.6,278.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,288.4,401.6,278.1 M429.1,284.7L429.1,284.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C428.9,284.9,429,284.9,429.1,284.7 M420.1,289.3L420.1,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C419.9,289.5,420,289.5,420.1,289.3 M342.4,278.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 S342.4,289,342.4,278.1 M304.1,278.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,288.4,304.1,278.1 M331.6,284.7L331.6,284.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C331.4,284.9,331.6,284.9,331.6,284.7 M322.6,289.3 L322.6,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C322.5,289.5,322.6,289.5,322.6,289.3 M245,278.1c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S245,289,245,278.1 M206.6,278.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S206.6,288.4,206.6,278.1 M234.1,284.7C234.2,284.7,234.2,284.7,234.1,284.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C234,284.9,234.1,284.9,234.1,284.7 M225.2,289.3L225.2,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C225,289.5,225.1,289.5,225.2,289.3 M147.5,278.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7C138.6,297.9,147.5,289,147.5,278.1 M109.2,278.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,288.4,109.2,278.1 M136.7,284.7L136.7,284.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C136.5,284.9,136.6,284.9,136.7,284.7 M127.7,289.3L127.7,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H124l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C127.5,289.5,127.7,289.5,127.7,289.3 M50,278.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 S50,289,50,278.1 M11.7,278.1c0-10.2,8.3-18.5,18.6-18.5s18.5,8.3,18.5,18.5s-8.3,18.5-18.6,18.5S11.7,288.4,11.7,278.1 M39.2,284.7L39.2,284.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V273h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H39C39,284.9,39.2,284.9,39.2,284.7 M30.2,289.3 C30.2,289.3,30.3,289.3,30.2,289.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H30C30.1,289.5,30.2,289.5,30.2,289.3 M587.4,303.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S587.4,314.5,587.4,303.6 M549,303.6c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,313.8,549,303.6 M576.5,310.2C576.5,310.1,576.5,310.1,576.5,310.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C576.4,310.3,576.5,310.3,576.5,310.2 M567.5,314.8C567.6,314.7,567.6,314.7,567.5,314.8 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C567.4,314.9,567.5,314.9,567.5,314.8 M489.9,303.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7 c0,10.9,8.9,19.7,19.8,19.7S489.9,314.5,489.9,303.6 M451.5,303.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S451.5,313.8,451.5,303.6 M479.1,310.2C479.1,310.1,479.1,310.1,479.1,310.2c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C478.9,310.3,479,310.3,479.1,310.2 M470.1,314.8C470.1,314.7,470.1,314.7,470.1,314.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C469.9,314.9,470,314.9,470.1,314.8 M392.4,303.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 C383.6,323.3,392.4,314.5,392.4,303.6 M354.1,303.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5 S354.1,313.8,354.1,303.6 M381.6,310.2C381.6,310.1,381.6,310.1,381.6,310.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C381.4,310.3,381.6,310.3,381.6,310.2 M372.6,314.8C372.6,314.7,372.6,314.7,372.6,314.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C372.4,314.9,372.6,314.9,372.6,314.8 M295,303.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 S295,314.5,295,303.6 M256.6,303.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S256.6,313.8,256.6,303.6 M284.1,310.2C284.1,310.1,284.2,310.1,284.1,310.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C284,310.3,284.1,310.3,284.1,310.2 M275.2,314.8 C275.2,314.7,275.2,314.7,275.2,314.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C275,314.9,275.1,314.9,275.2,314.8 M197.5,303.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S197.5,314.5,197.5,303.6 M159.1,303.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S159.1,313.8,159.1,303.6 M186.7,310.2 C186.7,310.1,186.7,310.1,186.7,310.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C186.5,310.3,186.6,310.3,186.7,310.2 M177.7,314.8 C177.7,314.7,177.7,314.7,177.7,314.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C177.5,314.9,177.6,314.9,177.7,314.8 M100,303.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S100,314.5,100,303.6 M61.7,303.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S61.7,313.8,61.7,303.6 M89.2,310.2 C89.2,310.1,89.2,310.1,89.2,310.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H89C89,310.3,89.2,310.3,89.2,310.2 M80.2,314.8 C80.2,314.7,80.2,314.7,80.2,314.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V295 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H80C80.1,314.9,80.2,314.9,80.2,314.8 M537.4,328.7 c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C528.5,348.4,537.4,339.6,537.4,328.7 M499,328.7 c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5C507.3,347.2,499,338.9,499,328.7 M526.5,335.3 C526.6,335.2,526.6,335.2,526.5,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C526.4,335.4,526.5,335.4,526.5,335.3 M517.6,339.9 C517.6,339.8,517.6,339.8,517.6,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C517.4,340,517.5,340,517.6,339.9 M439.9,328.7 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S439.9,339.6,439.9,328.7 M401.6,328.7 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,338.9,401.6,328.7 M429.1,335.3 C429.1,335.2,429.1,335.2,429.1,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C428.9,335.4,429,335.4,429.1,335.3 M420.1,339.9 C420.1,339.8,420.1,339.8,420.1,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C419.9,340,420,340,420.1,339.9 M342.4,328.7 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S342.4,339.6,342.4,328.7 M304.1,328.7 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,338.9,304.1,328.7 M331.6,335.3 C331.6,335.2,331.6,335.2,331.6,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C331.4,335.4,331.6,335.4,331.6,335.3 M322.6,339.9 C322.6,339.8,322.6,339.8,322.6,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C322.5,340,322.6,340,322.6,339.9 M245,328.7 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S245,339.6,245,328.7 M206.6,328.7 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S206.6,338.9,206.6,328.7 M234.1,335.3 C234.2,335.2,234.2,335.2,234.1,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C234,335.4,234.1,335.4,234.1,335.3 M225.2,339.9 C225.2,339.8,225.2,339.8,225.2,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C225,340,225.1,340,225.2,339.9 M147.5,328.7 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S147.5,339.6,147.5,328.7 M109.2,328.7 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,338.9,109.2,328.7 M136.7,335.3 C136.7,335.2,136.7,335.2,136.7,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C136.5,335.4,136.6,335.4,136.7,335.3 M127.7,339.9 C127.7,339.8,127.7,339.8,127.7,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H124l-0.2-0.9l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C127.5,340,127.7,340,127.7,339.9 M50,328.7 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S50,339.6,50,328.7 M11.7,328.7 c0-10.2,8.3-18.5,18.6-18.5s18.5,8.3,18.5,18.5s-8.3,18.5-18.6,18.5S11.7,338.9,11.7,328.7 M39.2,335.3 C39.2,335.2,39.2,335.2,39.2,335.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H39C39,335.4,39.2,335.4,39.2,335.3 M30.2,339.9 C30.2,339.8,30.3,339.8,30.2,339.9c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H30C30.1,340,30.2,340,30.2,339.9 M587.4,354.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S587.4,365,587.4,354.1 M549,354.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,364.4,549,354.1 M576.5,360.7L576.5,360.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V349h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C576.4,360.9,576.5,360.9,576.5,360.7 M567.5,365.3C567.6,365.3,567.6,365.3,567.5,365.3 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C567.4,365.5,567.5,365.5,567.5,365.3 M489.9,354.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7 c0,10.9,8.9,19.7,19.8,19.7C481,373.9,489.9,365,489.9,354.1 M451.5,354.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S451.5,364.4,451.5,354.1 M479.1,360.7L479.1,360.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7 V349h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C478.9,360.9,479,360.9,479.1,360.7 M470.1,365.3L470.1,365.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C469.9,365.5,470,365.5,470.1,365.3 M392.4,354.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7C383.6,373.9,392.4,365,392.4,354.1 M354.1,354.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S354.1,364.4,354.1,354.1 M381.6,360.7L381.6,360.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V349h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C381.4,360.9,381.6,360.9,381.6,360.7 M372.6,365.3L372.6,365.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C372.4,365.5,372.6,365.5,372.6,365.3 M295,354.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 S295,365,295,354.1 M256.6,354.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S256.6,364.4,256.6,354.1 M284.1,360.7C284.1,360.7,284.2,360.7,284.1,360.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V349h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C284,360.9,284.1,360.9,284.1,360.7 M275.2,365.3 L275.2,365.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C275,365.5,275.1,365.5,275.2,365.3 M197.5,354.1c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S197.5,365,197.5,354.1 M159.1,354.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S159.1,364.4,159.1,354.1 M186.7,360.7L186.7,360.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7 V349h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C186.5,360.9,186.6,360.9,186.7,360.7 M177.7,365.3L177.7,365.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C177.5,365.5,177.6,365.5,177.7,365.3 M100,354.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S100,365,100,354.1 M61.7,354.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S61.7,364.4,61.7,354.1 M89.2,360.7L89.2,360.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V349h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3H84v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1H89C89,360.9,89.2,360.9,89.2,360.7 M80.2,365.3L80.2,365.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H80 C80.1,365.5,80.2,365.5,80.2,365.3 M537.4,379.2c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 C528.5,398.9,537.4,390.1,537.4,379.2 M499,379.2c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5 C507.3,397.7,499,389.4,499,379.2 M526.5,385.8C526.6,385.7,526.6,385.7,526.5,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C526.4,385.9,526.5,385.9,526.5,385.8 M517.6,390.4C517.6,390.3,517.6,390.3,517.6,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C517.4,390.5,517.5,390.5,517.6,390.4 M439.9,379.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S439.9,390.1,439.9,379.2 M401.6,379.2 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,389.4,401.6,379.2 M429.1,385.8 C429.1,385.7,429.1,385.7,429.1,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C428.9,385.9,429,385.9,429.1,385.8 M420.1,390.4 C420.1,390.3,420.1,390.3,420.1,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C419.9,390.5,420,390.5,420.1,390.4 M342.4,379.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S342.4,390.1,342.4,379.2 M304.1,379.2 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,389.4,304.1,379.2 M331.6,385.8 C331.6,385.7,331.6,385.7,331.6,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C331.4,385.9,331.6,385.9,331.6,385.8 M322.6,390.4 C322.6,390.3,322.6,390.3,322.6,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C322.5,390.5,322.6,390.5,322.6,390.4 M245,379.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S245,390.1,245,379.2 M206.6,379.2 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S206.6,389.4,206.6,379.2 M234.1,385.8 C234.2,385.7,234.2,385.7,234.1,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C234,385.9,234.1,385.9,234.1,385.8 M225.2,390.4 C225.2,390.3,225.2,390.3,225.2,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C225,390.5,225.1,390.5,225.2,390.4 M147.5,379.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S147.5,390.1,147.5,379.2 M109.2,379.2 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,389.4,109.2,379.2 M136.7,385.8 C136.7,385.7,136.7,385.7,136.7,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C136.5,385.9,136.6,385.9,136.7,385.8 M127.7,390.4 C127.7,390.3,127.7,390.3,127.7,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H124l-0.2-0.9l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C127.5,390.5,127.7,390.5,127.7,390.4 M50,379.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S50,390.1,50,379.2 M11.7,379.2 c0-10.2,8.3-18.5,18.6-18.5s18.5,8.3,18.5,18.5s-8.3,18.5-18.6,18.5S11.7,389.4,11.7,379.2 M39.2,385.8 C39.2,385.7,39.2,385.7,39.2,385.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V366 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H39C39,385.9,39.2,385.9,39.2,385.8 M30.2,390.4 C30.2,390.3,30.3,390.3,30.2,390.4c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H30C30.1,390.5,30.2,390.5,30.2,390.4 M537.4,227.6 c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C528.5,247.3,537.4,238.5,537.4,227.6 M499,227.6 c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5C507.3,246.1,499,237.8,499,227.6 M526.5,234.2 C526.6,234.1,526.6,234.2,526.5,234.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C526.4,234.3,526.5,234.3,526.5,234.2 M517.6,238.8 C517.6,238.7,517.6,238.7,517.6,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C517.4,238.9,517.5,238.9,517.6,238.8 M439.9,227.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S439.9,238.5,439.9,227.6 M401.6,227.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,237.8,401.6,227.6 M429.1,234.2 C429.1,234.1,429.1,234.2,429.1,234.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C428.9,234.3,429,234.3,429.1,234.2 M420.1,238.8 C420.1,238.7,420.1,238.7,420.1,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C419.9,238.9,420,238.9,420.1,238.8 M342.4,227.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S342.4,238.5,342.4,227.6 M304.1,227.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,237.8,304.1,227.6 M331.6,234.2 C331.6,234.1,331.6,234.2,331.6,234.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C331.4,234.3,331.6,234.3,331.6,234.2 M322.6,238.8 C322.6,238.7,322.6,238.7,322.6,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C322.5,238.9,322.6,238.9,322.6,238.8 M245,227.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S245,238.5,245,227.6 M206.6,227.6c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S206.6,237.8,206.6,227.6 M234.1,234.2C234.2,234.1,234.2,234.2,234.1,234.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C234,234.3,234.1,234.3,234.1,234.2 M225.2,238.8C225.2,238.7,225.2,238.7,225.2,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C225,238.9,225.1,238.9,225.2,238.8 M147.5,227.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C138.6,247.3,147.5,238.5,147.5,227.6 M109.2,227.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,237.8,109.2,227.6 M136.7,234.2 C136.7,234.1,136.7,234.2,136.7,234.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C136.5,234.3,136.6,234.3,136.7,234.2 M127.7,238.8 C127.7,238.7,127.7,238.7,127.7,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H124l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C127.5,238.9,127.7,238.9,127.7,238.8 M50,227.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S50,238.5,50,227.6 M11.7,227.6c0-10.2,8.3-18.5,18.6-18.5 s18.5,8.3,18.5,18.5s-8.3,18.5-18.6,18.5S11.7,237.8,11.7,227.6 M39.2,234.2C39.2,234.1,39.2,234.2,39.2,234.2c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H39 C39,234.3,39.2,234.3,39.2,234.2 M30.2,238.8C30.2,238.7,30.3,238.7,30.2,238.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V219c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H30C30.1,238.9,30.2,238.9,30.2,238.8 M587.4,253 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S587.4,263.9,587.4,253 M549,253 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5c0,10.2-8.3,18.5-18.6,18.5C557.3,271.6,549,263.3,549,253 M576.5,259.6L576.5,259.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C576.4,259.8,576.5,259.8,576.5,259.6 M567.5,264.2C567.6,264.2,567.6,264.2,567.5,264.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C567.4,264.4,567.5,264.4,567.5,264.2 M489.9,253c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7 c0,10.9,8.9,19.7,19.8,19.7C481,272.8,489.9,263.9,489.9,253 M451.5,253c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 c0,10.2-8.3,18.5-18.6,18.5S451.5,263.3,451.5,253 M479.1,259.6L479.1,259.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C478.9,259.8,479,259.8,479.1,259.6 M470.1,264.2L470.1,264.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C469.9,264.4,470,264.4,470.1,264.2 M392.4,253 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7C383.6,272.8,392.4,263.9,392.4,253 M354.1,253 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5c0,10.2-8.3,18.5-18.6,18.5S354.1,263.3,354.1,253 M381.6,259.6L381.6,259.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L378,248v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C381.4,259.8,381.6,259.8,381.6,259.6 M372.6,264.2L372.6,264.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C372.4,264.4,372.6,264.4,372.6,264.2 M295,253c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7 S295,263.9,295,253 M256.6,253c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5c0,10.2-8.3,18.5-18.6,18.5S256.6,263.3,256.6,253 M284.1,259.6C284.1,259.6,284.2,259.6,284.1,259.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C284,259.8,284.1,259.8,284.1,259.6 M275.2,264.2 L275.2,264.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C275,264.4,275.1,264.4,275.2,264.2 M197.5,253c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S197.5,263.9,197.5,253 M159.1,253c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 c0,10.2-8.3,18.5-18.6,18.5S159.1,263.3,159.1,253 M186.7,259.6L186.7,259.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C186.5,259.8,186.6,259.8,186.7,259.6 M177.7,264.2L177.7,264.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C177.5,264.4,177.6,264.4,177.7,264.2 M100,253 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7c0,10.9,8.9,19.7,19.8,19.7S100,263.9,100,253 M61.7,253c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5c0,10.2-8.3,18.5-18.6,18.5S61.7,263.3,61.7,253 M89.2,259.6L89.2,259.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H89 C89,259.8,89.2,259.8,89.2,259.6 M80.2,264.2L80.2,264.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H80C80.1,264.4,80.2,264.4,80.2,264.2 M537.4,177.1 c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C528.5,196.8,537.4,187.9,537.4,177.1 M499,177.1 c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5C507.3,195.6,499,187.3,499,177.1 M526.5,183.6 C526.6,183.6,526.6,183.6,526.5,183.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C526.4,183.8,526.5,183.8,526.5,183.6 M517.6,188.2 L517.6,188.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4 v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C517.4,188.4,517.5,188.4,517.6,188.2 M439.9,177.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S439.9,187.9,439.9,177.1 M401.6,177.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,187.3,401.6,177.1 M429.1,183.6L429.1,183.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C428.9,183.8,429,183.8,429.1,183.6 M420.1,188.2L420.1,188.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C419.9,188.4,420,188.4,420.1,188.2 M342.4,177.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S342.4,187.9,342.4,177.1 M304.1,177.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,187.3,304.1,177.1 M331.6,183.6L331.6,183.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L328,172v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C331.4,183.8,331.6,183.8,331.6,183.6 M322.6,188.2 L322.6,188.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C322.5,188.4,322.6,188.4,322.6,188.2 M245,177.1c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S245,187.9,245,177.1 M206.6,177.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S206.6,187.3,206.6,177.1 M234.1,183.6C234.2,183.6,234.2,183.6,234.1,183.6c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C234,183.8,234.1,183.8,234.1,183.6 M225.2,188.2L225.2,188.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C225,188.4,225.1,188.4,225.2,188.2 M147.5,177.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C138.6,196.8,147.5,187.9,147.5,177.1 M109.2,177.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,187.3,109.2,177.1 M136.7,183.6L136.7,183.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C136.5,183.8,136.6,183.8,136.7,183.6 M127.7,188.2L127.7,188.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H124l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C127.5,188.4,127.7,188.4,127.7,188.2 M50,177.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S50,187.9,50,177.1 M11.7,177.1c0-10.2,8.3-18.5,18.6-18.5 s18.5,8.2,18.5,18.5c0,10.2-8.3,18.5-18.6,18.5S11.7,187.3,11.7,177.1 M39.2,183.6L39.2,183.6c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H39 C39,183.8,39.2,183.8,39.2,183.6 M30.2,188.2C30.2,188.2,30.3,188.2,30.2,188.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H30 C30.1,188.4,30.2,188.4,30.2,188.2 M587.4,202.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S587.4,213.4,587.4,202.5 M549,202.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,212.7,549,202.5 M576.5,209.1L576.5,209.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C576.4,209.2,576.5,209.2,576.5,209.1 M567.5,213.7 C567.6,213.7,567.6,213.7,567.5,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C567.4,213.8,567.5,213.8,567.5,213.7 M489.9,202.5 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S489.9,213.4,489.9,202.5 M451.5,202.5 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S451.5,212.7,451.5,202.5 M479.1,209.1L479.1,209.1 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C478.9,209.2,479,209.2,479.1,209.1 M470.1,213.7L470.1,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C469.9,213.8,470,213.8,470.1,213.7 M392.4,202.5 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C383.6,222.2,392.4,213.4,392.4,202.5 M354.1,202.5 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S383,221,372.7,221S354.1,212.7,354.1,202.5 M381.6,209.1L381.6,209.1 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C381.4,209.2,381.6,209.2,381.6,209.1 M372.6,213.7L372.6,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C372.4,213.8,372.6,213.8,372.6,213.7 M295,202.5 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S295,213.4,295,202.5 M256.6,202.5c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S256.6,212.7,256.6,202.5 M284.1,209.1C284.1,209.1,284.2,209.1,284.1,209.1 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C284,209.2,284.1,209.2,284.1,209.1 M275.2,213.7L275.2,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C275,213.8,275.1,213.8,275.2,213.7 M197.5,202.5 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S197.5,213.4,197.5,202.5 M159.1,202.5 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S188,221,177.7,221S159.1,212.7,159.1,202.5 M186.7,209.1L186.7,209.1 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C186.5,209.2,186.6,209.2,186.7,209.1 M177.7,213.7L177.7,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C177.5,213.8,177.6,213.8,177.7,213.7 M100,202.5 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S100,213.4,100,202.5 M61.7,202.5c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5S90.6,221,80.3,221S61.7,212.7,61.7,202.5 M89.2,209.1L89.2,209.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H89 C89,209.2,89.2,209.2,89.2,209.1 M80.2,213.7L80.2,213.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V202h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H80C80.1,213.8,80.2,213.8,80.2,213.7 M537.4,126.2 c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C528.5,145.9,537.4,137,537.4,126.2 M499,126.2 c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.4,18.5-18.6,18.5C507.3,144.7,499,136.4,499,126.2 M526.5,132.7 C526.6,132.7,526.6,132.7,526.5,132.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C526.4,132.9,526.5,132.9,526.5,132.7 M517.6,137.3 L517.6,137.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4 v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C517.4,137.5,517.5,137.5,517.6,137.3 M439.9,126.2c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S439.9,137,439.9,126.2 M401.6,126.2c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,136.4,401.6,126.2 M429.1,132.7L429.1,132.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C428.9,132.9,429,132.9,429.1,132.7 M420.1,137.3L420.1,137.3 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C419.9,137.5,420,137.5,420.1,137.3 M342.4,126.2c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S342.4,137,342.4,126.2 M304.1,126.2c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,136.4,304.1,126.2 M331.6,132.7L331.6,132.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C331.4,132.9,331.6,132.9,331.6,132.7 M322.6,137.3 L322.6,137.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C322.5,137.5,322.6,137.5,322.6,137.3 M245,126.2c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S245,137,245,126.2 M206.6,126.2c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S206.6,136.4,206.6,126.2 M234.1,132.7C234.2,132.7,234.2,132.7,234.1,132.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C234,132.9,234.1,132.9,234.1,132.7 M225.2,137.3L225.2,137.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C225,137.5,225.1,137.5,225.2,137.3 M147.5,126.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S147.5,137,147.5,126.2 M109.2,126.2c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,136.4,109.2,126.2 M136.7,132.7L136.7,132.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C136.5,132.9,136.6,132.9,136.7,132.7 M127.7,137.3L127.7,137.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H124l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C127.5,137.5,127.7,137.5,127.7,137.3 M50,126.2 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S50,137,50,126.2 M11.7,126.2c0-10.2,8.3-18.5,18.6-18.5 s18.5,8.2,18.5,18.5s-8.3,18.5-18.5,18.5S11.7,136.4,11.7,126.2 M39.2,132.7L39.2,132.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7V121h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H34v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H39 C39,132.9,39.2,132.9,39.2,132.7 M30.2,137.3C30.2,137.3,30.3,137.3,30.2,137.3c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H30 C30.1,137.5,30.2,137.5,30.2,137.3 M587.4,151.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S587.4,162.5,587.4,151.6 M549,151.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,161.8,549,151.6 M576.5,158.2L576.5,158.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C576.4,158.3,576.5,158.3,576.5,158.2 M567.5,162.8 C567.6,162.8,567.6,162.8,567.5,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V143 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C567.4,162.9,567.5,162.9,567.5,162.8 M489.9,151.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S489.9,162.5,489.9,151.6 M451.5,151.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S451.5,161.8,451.5,151.6 M479.1,158.2L479.1,158.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C478.9,158.3,479,158.3,479.1,158.2 M470.1,162.8L470.1,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3V143c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C469.9,162.9,470,162.9,470.1,162.8 M392.4,151.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C383.6,171.3,392.4,162.5,392.4,151.6 M354.1,151.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S354.1,161.8,354.1,151.6 M381.6,158.2L381.6,158.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C381.4,158.3,381.6,158.3,381.6,158.2 M372.6,162.8L372.6,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3V143c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C372.4,162.9,372.6,162.9,372.6,162.8 M295,151.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S295,162.5,295,151.6 M256.6,151.6c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S256.6,161.8,256.6,151.6 M284.1,158.2C284.1,158.2,284.2,158.2,284.1,158.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C284,158.3,284.1,158.3,284.1,158.2 M275.2,162.8L275.2,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3V143c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C275,162.9,275.1,162.9,275.2,162.8 M197.5,151.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S197.5,162.5,197.5,151.6 M159.1,151.6 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S159.1,161.8,159.1,151.6 M186.7,158.2L186.7,158.2 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C186.5,158.3,186.6,158.3,186.7,158.2 M177.7,162.8L177.7,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3V143c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C177.5,162.9,177.6,162.9,177.7,162.8 M100,151.6 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S100,162.5,100,151.6 M61.7,151.6c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S61.7,161.8,61.7,151.6 M89.2,158.2L89.2,158.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H89 C89,158.3,89.2,158.3,89.2,158.2 M80.2,162.8L80.2,162.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3V143c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H80C80.1,162.9,80.2,162.9,80.2,162.8 M537.4,75.6 c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7C528.5,95.3,537.4,86.5,537.4,75.6 M499,75.6 c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5C507.3,94.1,499,85.8,499,75.6 M526.5,82.2 C526.6,82.2,526.6,82.2,526.5,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V68l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7 H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C526.4,82.3,526.5,82.3,526.5,82.2 M517.6,86.8L517.6,86.8 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C517.4,86.9,517.5,86.9,517.6,86.8 M439.9,75.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S439.9,86.5,439.9,75.6 M401.6,75.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,85.8,401.6,75.6 M429.1,82.2L429.1,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V68l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C428.9,82.3,429,82.3,429.1,82.2 M420.1,86.8L420.1,86.8 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C419.9,86.9,420,86.9,420.1,86.8 M342.4,75.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7 s8.9,19.7,19.8,19.7S342.4,86.5,342.4,75.6 M304.1,75.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5 S304.1,85.8,304.1,75.6 M331.6,82.2L331.6,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V68l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C331.4,82.3,331.6,82.3,331.6,82.2 M322.6,86.8 L322.6,86.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C322.5,86.9,322.6,86.9,322.6,86.8 M245,75.6c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S245,86.5,245,75.6 M206.6,75.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S206.6,85.8,206.6,75.6 M234.1,82.2C234.2,82.2,234.2,82.2,234.1,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V68l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C234,82.3,234.1,82.3,234.1,82.2 M225.2,86.8 L225.2,86.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C225,86.9,225.1,86.9,225.2,86.8 M147.5,75.6c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7 s8.9,19.7,19.8,19.7C138.6,95.3,147.5,86.5,147.5,75.6 M109.2,75.6c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S109.2,85.8,109.2,75.6 M136.7,82.2L136.7,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1 h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V68l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C136.5,82.3,136.6,82.3,136.7,82.2 M127.7,86.8 L127.7,86.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H124 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C127.5,86.9,127.7,86.9,127.7,86.8 M50,75.6c0-10.9-8.9-19.7-19.8-19.7s-19.7,8.8-19.7,19.7 s8.9,19.7,19.8,19.7S50,86.5,50,75.6 M11.7,75.6c0-10.2,8.3-18.5,18.6-18.5s18.5,8.3,18.5,18.5s-8.3,18.5-18.6,18.5 S11.7,85.8,11.7,75.6 M39.2,82.2L39.2,82.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.2-0.5l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6L34,67.5c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7L34.1,69 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C39,82.3,39.2,82.3,39.2,82.2 M30.2,86.8 C30.2,86.8,30.3,86.8,30.2,86.8c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3V67 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H30C30.1,86.9,30.2,86.9,30.2,86.8 M587.4,101.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S587.4,111.9,587.4,101.1 M549,101.1c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,111.3,549,101.1 M576.5,107.6L576.5,107.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3V96 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C576.4,107.8,576.5,107.8,576.5,107.6 M567.5,112.2C567.6,112.2,567.6,112.2,567.5,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C567.4,112.4,567.5,112.4,567.5,112.2 M489.9,101.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S489.9,111.9,489.9,101.1 M451.5,101.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S451.5,111.3,451.5,101.1 M479.1,107.6L479.1,107.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3V96c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C478.9,107.8,479,107.8,479.1,107.6 M470.1,112.2L470.1,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C469.9,112.4,470,112.4,470.1,112.2 M392.4,101.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 C383.6,120.8,392.4,111.9,392.4,101.1 M354.1,101.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5 S354.1,111.3,354.1,101.1 M381.6,107.6L381.6,107.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L378,96v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3V96c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C381.4,107.8,381.6,107.8,381.6,107.6 M372.6,112.2 L372.6,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C372.4,112.4,372.6,112.4,372.6,112.2 M295,101.1c0-10.9-8.9-19.7-19.8-19.7 s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S295,111.9,295,101.1 M256.6,101.1c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S256.6,111.3,256.6,101.1 M284.1,107.6C284.1,107.6,284.2,107.6,284.1,107.6c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3V96c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C284,107.8,284.1,107.8,284.1,107.6 M275.2,112.2L275.2,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C275,112.4,275.1,112.4,275.2,112.2 M197.5,101.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S197.5,111.9,197.5,101.1 M159.1,101.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S159.1,111.3,159.1,101.1 M186.7,107.6L186.7,107.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3V96c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1h8.3C186.5,107.8,186.6,107.8,186.7,107.6 M177.7,112.2L177.7,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5 l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7 l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C177.5,112.4,177.6,112.4,177.7,112.2 M100,101.1c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S100,111.9,100,101.1 M61.7,101.1 c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S61.7,111.3,61.7,101.1 M89.2,107.6L89.2,107.6 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L85.6,96v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3H84V96c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3 c0,0.1,0.2,0.1,0.3,0.1H89C89,107.8,89.2,107.8,89.2,107.6 M80.2,112.2L80.2,112.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0L76.2,98v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V98l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1H80 C80.1,112.4,80.2,112.4,80.2,112.2 M537.4,25.1c0-10.9-8.9-19.7-19.8-19.7c-10.9,0-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 C528.5,44.8,537.4,36,537.4,25.1 M499,25.1c0-10.2,8.3-18.5,18.6-18.5c10.3,0,18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5 C507.3,43.6,499,35.3,499,25.1 M526.5,31.7C526.6,31.6,526.6,31.6,526.5,31.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H521c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C526.4,31.8,526.5,31.8,526.5,31.7 M517.6,36.2L517.6,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V22l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H512c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C517.4,36.4,517.5,36.4,517.6,36.2 M439.9,25.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S439.9,36,439.9,25.1 M401.6,25.1c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S401.6,35.3,401.6,25.1 M429.1,31.7C429.1,31.6,429.1,31.6,429.1,31.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C428.9,31.8,429,31.8,429.1,31.7 M420.1,36.2L420.1,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V22l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C419.9,36.4,420,36.4,420.1,36.2 M342.4,25.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S342.4,36,342.4,25.1 M304.1,25.1c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S304.1,35.3,304.1,25.1 M331.6,31.7C331.6,31.6,331.6,31.6,331.6,31.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H326c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C331.4,31.8,331.6,31.8,331.6,31.7 M322.6,36.2L322.6,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V22l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C322.5,36.4,322.6,36.4,322.6,36.2 M245,25.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S245,36,245,25.1 M206.6,25.1c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.2,18.6,18.5s-8.3,18.5-18.6,18.5S206.6,35.3,206.6,25.1 M234.1,31.7C234.2,31.6,234.2,31.6,234.1,31.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C234,31.8,234.1,31.8,234.1,31.7 M225.2,36.2L225.2,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V22l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C225,36.4,225.1,36.4,225.2,36.2 M147.5,25.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S147.5,36,147.5,25.1 M109.2,25.1c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S109.2,35.3,109.2,25.1 M136.7,31.7C136.7,31.6,136.7,31.6,136.7,31.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H133l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C136.5,31.8,136.6,31.8,136.7,31.7 M127.7,36.2L127.7,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H124l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V22l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C127.5,36.4,127.7,36.4,127.7,36.2 M50,25.1 c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7S50,36,50,25.1 M11.7,25.1c0-10.2,8.3-18.5,18.6-18.5 s18.5,8.2,18.5,18.5s-8.3,18.5-18.6,18.5S11.7,35.3,11.7,25.1 M39.2,31.7C39.2,31.6,39.2,31.6,39.2,31.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V20h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 H34v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H39 C39,31.8,39.2,31.8,39.2,31.7 M30.2,36.2C30.2,36.2,30.3,36.2,30.2,36.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7 v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.5L27,22c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7L25.2,23c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H25v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H30 C30.1,36.4,30.2,36.4,30.2,36.2 M587.4,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S587.4,61.4,587.4,50.5 M549,50.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S577.9,69,567.6,69S549,60.7,549,50.5 M576.5,57.1 L576.5,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4 v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C576.4,57.2,576.5,57.2,576.5,57.1 M567.5,61.7C567.6,61.7,567.6,61.7,567.5,61.7c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H562c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C567.4,61.8,567.5,61.8,567.5,61.7 M489.9,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S489.9,61.4,489.9,50.5 M451.5,50.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S480.4,69,470.1,69S451.5,60.7,451.5,50.5 M479.1,57.1L479.1,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C478.9,57.2,479,57.2,479.1,57.1 M470.1,61.7L470.1,61.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C469.9,61.8,470,61.8,470.1,61.7 M392.4,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 C383.6,70.2,392.4,61.4,392.4,50.5 M354.1,50.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S383,69,372.7,69 S354.1,60.7,354.1,50.5 M381.6,57.1L381.6,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C381.4,57.2,381.6,57.2,381.6,57.1 M372.6,61.7L372.6,61.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C372.4,61.8,372.6,61.8,372.6,61.7 M295,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S295,61.4,295,50.5 M256.6,50.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S285.5,69,275.2,69S256.6,60.7,256.6,50.5 M284.1,57.1C284.1,57.1,284.2,57.1,284.1,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7 l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C284,57.2,284.1,57.2,284.1,57.1 M275.2,61.7L275.2,61.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C275,61.8,275.1,61.8,275.2,61.7 M197.5,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S197.5,61.4,197.5,50.5 M159.1,50.5c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5S188,69,177.7,69S159.1,60.7,159.1,50.5 M186.7,57.1L186.7,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H183l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C186.5,57.2,186.6,57.2,186.7,57.1 M177.7,61.7L177.7,61.7 c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3H174l-0.1-0.7 l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6 l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3 c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1 h8.3C177.5,61.8,177.6,61.8,177.7,61.7 M100,50.5c0-10.9-8.9-19.7-19.8-19.7s-19.8,8.8-19.8,19.7s8.9,19.7,19.8,19.7 S100,61.4,100,50.5 M61.7,50.5C61.7,40.3,70,32,80.3,32s18.5,8.3,18.5,18.5S90.5,69,80.2,69S61.7,60.7,61.7,50.5 M89.2,57.1 L89.2,57.1c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4 l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4 c-0.2,0-0.4,0.2-0.4,0.4v5.4l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4 c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H89C89,57.2,89.2,57.2,89.2,57.1 M80.2,61.7L80.2,61.7c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7V50h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H80 C80.1,61.8,80.2,61.8,80.2,61.7 M587.4,0c0-10.9-8.9-19.7-19.8-19.7S547.8-10.9,547.8,0s8.9,19.7,19.8,19.7S587.4,10.9,587.4,0 M549,0c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S549,10.2,549,0 M576.5,6.6 C576.5,6.5,576.5,6.5,576.5,6.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L572.9-5v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H571c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3V-5c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C576.4,6.7,576.5,6.7,576.5,6.6 M567.5,11.2 C567.6,11.1,567.6,11.1,567.5,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0L563.5-3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4V-3l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7 H562c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C567.4,11.3,567.5,11.3,567.5,11.2 M489.9,0c0-10.9-8.9-19.7-19.8-19.7 S450.3-10.9,450.3,0s8.9,19.7,19.8,19.7S489.9,10.9,489.9,0 M451.5,0c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5 s-8.3,18.5-18.6,18.5S451.5,10.2,451.5,0 M479.1,6.6C479.1,6.5,479.1,6.5,479.1,6.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3 l-1.3-6.6L475.5-5v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6L474-7.9c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3V-5 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C478.9,6.7,479,6.7,479.1,6.6 M470.1,11.2C470.1,11.1,470.1,11.1,470.1,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0L466.1-3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V-3L465-3.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C469.9,11.3,470,11.3,470.1,11.2 M392.4,0c0-10.9-8.9-19.7-19.8-19.7S352.8-10.9,352.8,0s8.9,19.7,19.8,19.7 C383.6,19.7,392.4,10.9,392.4,0 M354.1,0c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S354.1,10.2,354.1,0 M381.6,6.6C381.6,6.5,381.6,6.5,381.6,6.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L378-5v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.5l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7H376c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3V-5c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C381.4,6.7,381.6,6.7,381.6,6.6 M372.6,11.2 C372.6,11.1,372.6,11.1,372.6,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L369-0.4v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0L368.6-3v-5.6 c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V-3l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C372.4,11.3,372.6,11.3,372.6,11.2 M295,0 c0-10.9-8.9-19.7-19.8-19.7S255.4-10.9,255.4,0s8.9,19.7,19.8,19.7S295,10.9,295,0 M256.6,0c0-10.2,8.3-18.5,18.6-18.5 s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S256.6,10.2,256.6,0 M284.1,6.6C284.1,6.5,284.2,6.5,284.1,6.6c0-0.2,0-0.2-0.1-0.3 c0,0-1.6-1.3-1.9-3l-1.3-6.6L280.5-5v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7 c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6L279-7.9 c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3 h0.3V-5c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3 C284,6.7,284.1,6.7,284.1,6.6 M275.2,11.2C275.2,11.1,275.2,11.1,275.2,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6 l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5 c-0.1-0.1-0.4-0.1-0.5,0L271.2-3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4V-3l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0 s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1 c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3 C275,11.3,275.1,11.3,275.2,11.2 M197.5,0c0-10.9-8.9-19.7-19.8-19.7S157.9-10.9,157.9,0s8.9,19.7,19.8,19.7S197.5,10.9,197.5,0 M159.1,0c0-10.2,8.3-18.5,18.6-18.5s18.6,8.3,18.6,18.5s-8.3,18.5-18.6,18.5S159.1,10.2,159.1,0 M186.7,6.6 C186.7,6.5,186.7,6.5,186.7,6.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L183.1-5v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H183l-0.2-0.9l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.8 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0.2,0.1,0.3,0.1h8.3C186.5,6.7,186.6,6.7,186.7,6.6 M177.7,11.2 C177.7,11.1,177.7,11.1,177.7,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3H174L173.8-2l-0.1-0.3l0.7-0.7c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0l-0.3,0.3v-5.6 c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v5.6l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7L172.6-2c0,0-0.1,0.4-0.1,0.7 h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3h0.3v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.7c-0.4,1.7-1.9,3-1.9,3 c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1h8.3C177.5,11.3,177.6,11.3,177.7,11.2 M100,0c0-10.9-8.9-19.7-19.8-19.7 S60.5-10.9,60.5,0s8.9,19.7,19.8,19.7S100,10.9,100,0 M61.7,0c0-10.2,8.3-18.5,18.6-18.5S98.8-10.2,98.8,0s-8.3,18.5-18.6,18.5 S61.7,10.2,61.7,0 M89.2,6.6C89.2,6.5,89.2,6.5,89.2,6.6c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6L85.6-5v-0.1h0.3 c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3L86-7.4c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0 l-0.3,0.3v-5.6c0-0.2-0.2-0.4-0.4-0.4c-0.2,0-0.4,0.2-0.4,0.4v5.6l-0.3-0.3C84-8,83.7-8,83.6-7.9s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H84V-5c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3c-0.1,0.1,0,0.1,0.2,0.1h8.3C89,6.7,89.2,6.7,89.2,6.6 M80.2,11.2 C80.2,11.1,80.2,11.1,80.2,11.2c0-0.2,0-0.2-0.1-0.3c0,0-1.6-1.3-1.9-3l-1.3-6.6l-0.3-1.7v-0.1h0.3c0.2,0,0.3-0.2,0.3-0.3 c0-0.2-0.2-0.3-0.3-0.3h-0.4l-0.1-0.7l-0.1-0.3L77-2.8c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.4-0.1-0.5,0L76.2-3v-5.6 C76.2-8.8,76-9,75.8-9c-0.2,0-0.4,0.2-0.4,0.4V-3l-0.3-0.3c-0.1-0.1-0.4-0.1-0.5,0s-0.1,0.3,0,0.5l0.7,0.7l-0.1,0.3 c0,0-0.1,0.4-0.1,0.7h-0.4c-0.2,0-0.3,0.2-0.3,0.3c0,0.2,0.2,0.3,0.3,0.3H75v0.1c-0.2,0.9-0.3,1.7-0.3,1.7l-1.3,6.6 c-0.4,1.7-1.9,3-1.9,3c-0.1,0.1-0.1,0.2-0.1,0.3s0.2,0.1,0.3,0.1H80C80.1,11.3,80.2,11.3,80.2,11.2'/%3E %3C/g%3E %3Cg id='mask'%3E %3C/g%3E %3C/svg%3E\");\r\n}\r\n.round-number.rk-red {\r\n  background-color: red;\r\n  color: white;\r\n}\r\n.round-number.rk-white {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n.round-number.rk-blue {\r\n  background-color: blue;\r\n  color: white;\r\n}\r\n.round-number.rk-yellow {\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n.round-number.rk-green {\r\n  background-color: green;\r\n  color: white;\r\n}\r\n.round-number.rk-black {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.round-number.rk-orange {\r\n  background-color: orange;\r\n  color: white;\r\n}\r\n.round-number.rk-gray {\r\n  background-color: gray;\r\n  color: black;\r\n}\r\n.round-number.rk-magenta {\r\n  background-color: magenta;\r\n  color: white;\r\n}\r\n.round-number.rk-blueviolet {\r\n  background-color: blueviolet;\r\n  color: black;\r\n}\r\n.round-number.rk-springgreen {\r\n  background-color: springgreen;\r\n  color: brown;\r\n}\r\n.round-number.rk-mediumblue {\r\n  background-color: mediumblue;\r\n  color: magenta;\r\n}\r\n.round-number.rk-chocolate {\r\n  background-color: chocolate;\r\n  color: red;\r\n}\r\n.bold-name {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3JzZS1yYWNpbmcvaG9yc2UtcmFjaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOztFQUVFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7OztHQUlHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnRUc7QUFDSDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMscTM5SEFBcTM5SDtBQUN2MzlIO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob3JzZS1yYWNpbmcvaG9yc2UtcmFjaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmstbm8tcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ucmstYm9yZGVyLXJhZGl1cy1ub25lIHtcclxuICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5yay1ib3JkZXItcmlnaHQge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkY2RjZGM7XHJcbn1cclxuLnJrLWJvcmRlci1yaWdodC1hbmQtbGVmdCB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RjZGNkYztcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkY2RjZGM7XHJcbn1cclxuI2JveC1sZXZlbC0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiNib3gtbGV2ZWwtMSBhIHtcclxuICBjb2xvcjogIzA0MmE1MTtcclxufVxyXG4jYm94LWxldmVsLTEgLm5hdi1pdGVtLmRyb3Bkb3duIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2JveC1sZXZlbC0xIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuI2JveC1sZXZlbC0xIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjNzI3NGE3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmQzZTg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4jYm94LWxldmVsLTEgLnJrLW5hdi1waWxscyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGNvbG9yOiB1bnNldDtcclxufVxyXG5cclxuI2JveC1sZXZlbC0xID4gLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4jYm94LWxldmVsLTIgPiAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4jYm94LWxldmVsLTIgPiAuY2FyZC1ib2R5ID4gLmNhcmQgPiAuY2FyZC1ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jYm94LWxldmVsLTIgLmJveC1kcm9wZG93bi1yayAuZHJvcGRvd24ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxufVxyXG4uYm94LXRhYmxlIC50YWJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJveC10YWJsZSAudGFibGUgdGhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5ib3gtdGFibGUgLnRhYmxlIHRib2R5IHtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4uYm94LXRhYmxlIC50YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCxcclxuLmJveC10YWJsZSAudGFibGUgdGJvZHkgdGg6Zmlyc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gtdGFibGUgLnRhYmxlIHRib2R5IHRoOmZpcnN0LWNoaWxkIC5yb3VuZC1udW1iZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYm94LXRhYmxlIC50YWJsZSB0Ym9keSB0aCxcclxuLmJveC10YWJsZSAudGFibGUgdGJvZHkgdGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJveC10YWJsZSAudGFibGUudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59XHJcbi5ib3gtdGFibGUgLnRhYmxlIHRoZWFkIHRoIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XHJcbn1cclxuXHJcbi8qamFwYW5lc2Ugd2F2ZSBvY2VhbiBwYWludGluZyovXHJcbi5iZy10c3JrIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI5Ljg2ZGVnLCAjMWY1NTg3IDAsICMwNDJhNTEgMTAwJSk7XHJcbn1cclxuLm5hdmJhci1saWdodCAubmF2YmFyLWJyYW5kIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuI2JveC1sZXZlbC0xIC5jYXJkLWJvZHksXHJcbiNib3gtbGV2ZWwtMiAuY2FyZC1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yay1wYW5lbC5jYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLnJrLXBhbmVsLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uYm94LWRyb3Bkb3duLXJrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yay1oaXBvZHJvbW8ge1xyXG4gIG1pbi13aWR0aDogMjdyZW07XHJcbn1cclxuLyogc3Bhbi50aW1lLWJveC5wLTIuYm9yZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA4NXB4O1xyXG59ICovXHJcbi8qIC5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjkuODZkZWcsICMxZjU1ODcgMCwgIzA0MmE1MSAxMDAlKTtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyIC5yay1wYW5lbC5jYXJkIHtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG59XHJcbi5mb290ZXIgLmJveC1zaG93LFxyXG4uZm9vdGVyIC51cC1uZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1iYXNpczogOTBweDtcclxufVxyXG4uZm9vdGVyIC5maXgtYm90dG9tIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDEwMCU7XHJcbn1cclxuLmZvb3RlciAjY2Fyb3VzZWxFeGFtcGxlQ29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZvb3RlciAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LFxyXG4uZm9vdGVyIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gIHdpZHRoOiA0JTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZvb3RlciAuY2Fyb3VzZWwtaW5uZXIge1xyXG4gIG9yZGVyOiAyO1xyXG59XHJcbi5mb290ZXIgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XHJcbiAgb3JkZXI6IDEgIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xyXG4gIG9yZGVyOiAzICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvb3RlciAuY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvb3RlciAucmstaXRlbS12YWx1ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItZmxvYXQge1xyXG4gIHotaW5kZXg6IDEwMzA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuLmZvb3RlciAuYm94LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBsZWZ0OiAyMCU7XHJcbiAgcmlnaHQ6IDIwJTtcclxufVxyXG4uZm9vdGVyIC5yay1wYW5lbCAucGFuZWwtYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb290ZXIgLnJrLXBhbmVsIC5wYW5lbC1ib2R5IC5ib3gtdmFsdWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZvb3RlciAucmFjZS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn0gKi9cclxuLmItc2Nyb2xsLWFjdGl2ZSAuYm94LXRhYmxlIHtcclxuICBtYXgtaGVpZ2h0OiA2MHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnRoZW1lLWhpcG9kcm9tbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MmE1MTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDc1MHB4IDQ4NnB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNTg3LjQgMzgwLjMnIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDU4Ny40IDM4MC4zJyB4bWw6c3BhY2U9J3ByZXNlcnZlJyUzRSAlM0NnIGlkPSdMYXllcl8xJyUzRSAlM0NkZWZzJTNFICUzQ2ZpbHRlciBpZD0nQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXInIGZpbHRlclVuaXRzPSd1c2VyU3BhY2VPblVzZScgeD0nMTAuNCcgeT0nLTE5LjcnIHdpZHRoPSc1NzcnIGhlaWdodD0nNDE4LjYnJTNFICUzQ2ZlQ29sb3JNYXRyaXggdHlwZT0nbWF0cml4JyB2YWx1ZXM9JzEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCcvJTNFICUzQy9maWx0ZXIlM0UgJTNDL2RlZnMlM0UgJTNDbWFzayBtYXNrVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyB4PScxMC40JyB5PSctMTkuNycgd2lkdGg9JzU3NycgaGVpZ2h0PSc0MTguNicgaWQ9J1NWR0lEXzJfJyUzRSAlM0NnIGZpbHRlcj0ndXJsKCUyM0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKSclM0UgJTNDbGluZWFyR3JhZGllbnQgaWQ9J1NWR0lEXzNfJyBncmFkaWVudFVuaXRzPSd1c2VyU3BhY2VPblVzZScgeDE9JzI5NC45ODg2JyB5MT0nLTIuMzM5MjQ0ZS0wMycgeDI9JzI5NC45ODg2JyB5Mj0nMzgwLjI5NzcnJTNFICUzQ3N0b3Agb2Zmc2V0PScwJyBzdHlsZT0nc3RvcC1jb2xvcjolMjNGRkZGRkYnLyUzRSAlM0NzdG9wIG9mZnNldD0nMC4yNDkxJyBzdHlsZT0nc3RvcC1jb2xvcjolMjNGREZERkQnLyUzRSAlM0NzdG9wIG9mZnNldD0nMC4zNjk2JyBzdHlsZT0nc3RvcC1jb2xvcjolMjNGNUY1RjUnLyUzRSAlM0NzdG9wIG9mZnNldD0nMC40NjI0JyBzdHlsZT0nc3RvcC1jb2xvcjolMjNFOEU4RTgnLyUzRSAlM0NzdG9wIG9mZnNldD0nMC41NDEyJyBzdHlsZT0nc3RvcC1jb2xvcjolMjNENkQ2RDYnLyUzRSAlM0NzdG9wIG9mZnNldD0nMC42MTEnIHN0eWxlPSdzdG9wLWNvbG9yOiUyM0JFQkVCRScvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjY3NDUnIHN0eWxlPSdzdG9wLWNvbG9yOiUyM0EwQTBBMCcvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjczMTknIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzdFN0U3RScvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjc1MTQnIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzcwNzA3MCcvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjc3MTEnIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzVFNUU1RScvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjgxNDMnIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzNDM0MzQycvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjg1ODUnIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzIyMjIyMicvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjkwMzYnIHN0eWxlPSdzdG9wLWNvbG9yOiUyMzBGMEYwRicvJTNFICUzQ3N0b3Agb2Zmc2V0PScwLjk1JyBzdHlsZT0nc3RvcC1jb2xvcjolMjMwNDA0MDQnLyUzRSAlM0NzdG9wIG9mZnNldD0nMScgc3R5bGU9J3N0b3AtY29sb3I6JTIzMDAwMDAwJy8lM0UgJTNDL2xpbmVhckdyYWRpZW50JTNFICUzQ3JlY3QgaWQ9J1NWR0lEXzFfJyB4PScyLjYnIHk9JzAnIGZpbGw9J3VybCglMjNTVkdJRF8zXyknIHdpZHRoPSc1ODQuOCcgaGVpZ2h0PSczODAuMycvJTNFICUzQy9nJTNFICUzQy9tYXNrJTNFICUzQ3JhZGlhbEdyYWRpZW50IGlkPSdTVkdJRF80XycgY3g9JzUwNi40NjcnIGN5PScyMi4zMzM1JyByPScwLjQ3NjYnIGdyYWRpZW50VHJhbnNmb3JtPSdtYXRyaXgoMi40MTAwODVlLTE0IC0zOTMuNTk3IDM5Ny43MjE2IDIuNDM1MzQ1ZS0xNCAtODY0Mi45ODE0IDE5OTUxOC4zNDM4KScgZ3JhZGllbnRVbml0cz0ndXNlclNwYWNlT25Vc2UnJTNFICUzQ3N0b3Agb2Zmc2V0PScwJyBzdHlsZT0nc3RvcC1jb2xvcjolMjMyNDhGRjEnLyUzRSAlM0NzdG9wIG9mZnNldD0nMScgc3R5bGU9J3N0b3AtY29sb3I6JTIzMDAzMzk5Jy8lM0UgJTNDL3JhZGlhbEdyYWRpZW50JTNFICUzQ3BhdGggbWFzaz0ndXJsKCUyM1NWR0lEXzJfKScgZmlsbD0ndXJsKCUyM1NWR0lEXzRfKScgZD0nTTUzNy40LDI3OC4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdjLTEwLjksMC0xOS44LDguOC0xOS44LDE5LjcgYzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdDNTI4LjUsMjk3LjgsNTM3LjQsMjg5LDUzNy40LDI3OC4xIE00OTksMjc4LjFjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNWMxMC4zLDAsMTguNiw4LjMsMTguNiwxOC41IHMtOC4zLDE4LjUtMTguNiwxOC41QzUwNy4zLDI5Ni42LDQ5OSwyODguNCw0OTksMjc4LjEgTTUyNi41LDI4NC43QzUyNi42LDI4NC43LDUyNi42LDI4NC43LDUyNi41LDI4NC43YzAtMC4yLDAtMC4yLTAuMS0wLjMgYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjI3M2gwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjcgYzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zIGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1MjFjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjMgaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEM1MjYuNCwyODQuOSw1MjYuNSwyODQuOSw1MjYuNSwyODQuNyBNNTE3LjYsMjg5LjNMNTE3LjYsMjg5LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN0g1MTJjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzUxNy40LDI4OS41LDUxNy41LDI4OS41LDUxNy42LDI4OS4zIE00MzkuOSwyNzguMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTNDM5LjksMjg5LDQzOS45LDI3OC4xIE00MDEuNiwyNzguMSBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVM0MDEuNiwyODguNCw0MDEuNiwyNzguMSBNNDI5LjEsMjg0LjdMNDI5LjEsMjg0LjcgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjczaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M0MjguOSwyODQuOSw0MjksMjg0LjksNDI5LjEsMjg0LjcgTTQyMC4xLDI4OS4zTDQyMC4xLDI4OS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzQxOS45LDI4OS41LDQyMCwyODkuNSw0MjAuMSwyODkuMyBNMzQyLjQsMjc4LjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjcgUzM0Mi40LDI4OSwzNDIuNCwyNzguMSBNMzA0LjEsMjc4LjFjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMzMDQuMSwyODguNCwzMDQuMSwyNzguMSBNMzMxLjYsMjg0LjdMMzMxLjYsMjg0LjdjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YyNzNoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDMyNmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMzMxLjQsMjg0LjksMzMxLjYsMjg0LjksMzMxLjYsMjg0LjcgTTMyMi42LDI4OS4zIEwzMjIuNiwyODkuM2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNCBsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNCBjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNCBjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDMgYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzMyMi41LDI4OS41LDMyMi42LDI4OS41LDMyMi42LDI4OS4zIE0yNDUsMjc4LjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuNyBzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzI0NSwyODksMjQ1LDI3OC4xIE0yMDYuNiwyNzguMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNSBzLTguMywxOC41LTE4LjYsMTguNVMyMDYuNiwyODguNCwyMDYuNiwyNzguMSBNMjM0LjEsMjg0LjdDMjM0LjIsMjg0LjcsMjM0LjIsMjg0LjcsMjM0LjEsMjg0LjdjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjczaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuNyBjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjMgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjMgaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEMyMzQsMjg0LjksMjM0LjEsMjg0LjksMjM0LjEsMjg0LjcgTTIyNS4yLDI4OS4zTDIyNS4yLDI4OS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjI1LDI4OS41LDIyNS4xLDI4OS41LDIyNS4yLDI4OS4zIE0xNDcuNSwyNzguMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdDMTM4LjYsMjk3LjksMTQ3LjUsMjg5LDE0Ny41LDI3OC4xIE0xMDkuMiwyNzguMSBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMxMDkuMiwyODguNCwxMDkuMiwyNzguMSBNMTM2LjcsMjg0LjdMMTM2LjcsMjg0LjcgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjczaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEzM2wtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zIGMwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzEzNi41LDI4NC45LDEzNi42LDI4NC45LDEzNi43LDI4NC43IE0xMjcuNywyODkuM0wxMjcuNywyODkuM2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEyNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzEyNy41LDI4OS41LDEyNy43LDI4OS41LDEyNy43LDI4OS4zIE01MCwyNzguMWMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuNyBTNTAsMjg5LDUwLDI3OC4xIE0xMS43LDI3OC4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNSw4LjMsMTguNSwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTEuNywyODguNCwxMS43LDI3OC4xIE0zOS4yLDI4NC43TDM5LjIsMjg0LjdjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YyNzNoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIMzR2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMUgzOUMzOSwyODQuOSwzOS4yLDI4NC45LDM5LjIsMjg0LjcgTTMwLjIsMjg5LjMgQzMwLjIsMjg5LjMsMzAuMywyODkuMywzMC4yLDI4OS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0gyNXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xSDMwQzMwLjEsMjg5LjUsMzAuMiwyODkuNSwzMC4yLDI4OS4zIE01ODcuNCwzMDMuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1M1ODcuNCwzMTQuNSw1ODcuNCwzMDMuNiBNNTQ5LDMwMy42YzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjUgczE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzU0OSwzMTMuOCw1NDksMzAzLjYgTTU3Ni41LDMxMC4yQzU3Ni41LDMxMC4xLDU3Ni41LDMxMC4xLDU3Ni41LDMxMC4yIGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdINTcxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNTc2LjQsMzEwLjMsNTc2LjUsMzEwLjMsNTc2LjUsMzEwLjIgTTU2Ny41LDMxNC44QzU2Ny42LDMxNC43LDU2Ny42LDMxNC43LDU2Ny41LDMxNC44IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YyOTVjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1NjJjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1NjcuNCwzMTQuOSw1NjcuNSwzMTQuOSw1NjcuNSwzMTQuOCBNNDg5LjksMzAzLjZjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43IGMwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzQ4OS45LDMxNC41LDQ4OS45LDMwMy42IE00NTEuNSwzMDMuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNSBzLTguMywxOC41LTE4LjYsMTguNVM0NTEuNSwzMTMuOCw0NTEuNSwzMDMuNiBNNDc5LjEsMzEwLjJDNDc5LjEsMzEwLjEsNDc5LjEsMzEwLjEsNDc5LjEsMzEwLjJjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjcgYzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zIGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIGgwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguMyBDNDc4LjksMzEwLjMsNDc5LDMxMC4zLDQ3OS4xLDMxMC4yIE00NzAuMSwzMTQuOEM0NzAuMSwzMTQuNyw0NzAuMSwzMTQuNyw0NzAuMSwzMTQuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMjk1YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzQ2OS45LDMxNC45LDQ3MCwzMTQuOSw0NzAuMSwzMTQuOCBNMzkyLjQsMzAzLjZjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjcgQzM4My42LDMyMy4zLDM5Mi40LDMxNC41LDM5Mi40LDMwMy42IE0zNTQuMSwzMDMuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41IFMzNTQuMSwzMTMuOCwzNTQuMSwzMDMuNiBNMzgxLjYsMzEwLjJDMzgxLjYsMzEwLjEsMzgxLjYsMzEwLjEsMzgxLjYsMzEwLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0gzNzZjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEMzODEuNCwzMTAuMywzODEuNiwzMTAuMywzODEuNiwzMTAuMiBNMzcyLjYsMzE0LjhDMzcyLjYsMzE0LjcsMzcyLjYsMzE0LjcsMzcyLjYsMzE0LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjI5NWMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEMzNzIuNCwzMTQuOSwzNzIuNiwzMTQuOSwzNzIuNiwzMTQuOCBNMjk1LDMwMy42YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43IFMyOTUsMzE0LjUsMjk1LDMwMy42IE0yNTYuNiwzMDMuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzI1Ni42LDMxMy44LDI1Ni42LDMwMy42IE0yODQuMSwzMTAuMkMyODQuMSwzMTAuMSwyODQuMiwzMTAuMSwyODQuMSwzMTAuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43IGwtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzI4NCwzMTAuMywyODQuMSwzMTAuMywyODQuMSwzMTAuMiBNMjc1LjIsMzE0LjggQzI3NS4yLDMxNC43LDI3NS4yLDMxNC43LDI3NS4yLDMxNC44YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjI5NSBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MyNzUsMzE0LjksMjc1LjEsMzE0LjksMjc1LjIsMzE0LjggTTE5Ny41LDMwMy42IGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1MxOTcuNSwzMTQuNSwxOTcuNSwzMDMuNiBNMTU5LjEsMzAzLjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTU5LjEsMzEzLjgsMTU5LjEsMzAzLjYgTTE4Ni43LDMxMC4yIEMxODYuNywzMTAuMSwxODYuNywzMTAuMSwxODYuNywzMTAuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE4M2wtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTg2LjUsMzEwLjMsMTg2LjYsMzEwLjMsMTg2LjcsMzEwLjIgTTE3Ny43LDMxNC44IEMxNzcuNywzMTQuNywxNzcuNywzMTQuNywxNzcuNywzMTQuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE3NGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjI5NSBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MxNzcuNSwzMTQuOSwxNzcuNiwzMTQuOSwxNzcuNywzMTQuOCBNMTAwLDMwMy42IGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1MxMDAsMzE0LjUsMTAwLDMwMy42IE02MS43LDMwMy42IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzYxLjcsMzEzLjgsNjEuNywzMDMuNiBNODkuMiwzMTAuMiBDODkuMiwzMTAuMSw4OS4yLDMxMC4xLDg5LjIsMzEwLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDg0djAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFIODlDODksMzEwLjMsODkuMiwzMTAuMyw4OS4yLDMxMC4yIE04MC4yLDMxNC44IEM4MC4yLDMxNC43LDgwLjIsMzE0LjcsODAuMiwzMTQuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YyOTUgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0g3NXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xSDgwQzgwLjEsMzE0LjksODAuMiwzMTQuOSw4MC4yLDMxNC44IE01MzcuNCwzMjguNyBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN2MtMTAuOSwwLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDNTI4LjUsMzQ4LjQsNTM3LjQsMzM5LjYsNTM3LjQsMzI4LjcgTTQ5OSwzMjguNyBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNWMxMC4zLDAsMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVDNTA3LjMsMzQ3LjIsNDk5LDMzOC45LDQ5OSwzMjguNyBNNTI2LjUsMzM1LjMgQzUyNi42LDMzNS4yLDUyNi42LDMzNS4yLDUyNi41LDMzNS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTIxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1MjYuNCwzMzUuNCw1MjYuNSwzMzUuNCw1MjYuNSwzMzUuMyBNNTE3LjYsMzM5LjkgQzUxNy42LDMzOS44LDUxNy42LDMzOS44LDUxNy42LDMzOS45YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTEyYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1MTcuNCwzNDAsNTE3LjUsMzQwLDUxNy42LDMzOS45IE00MzkuOSwzMjguNyBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTNDM5LjksMzM5LjYsNDM5LjksMzI4LjcgTTQwMS42LDMyOC43IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQwMS42LDMzOC45LDQwMS42LDMyOC43IE00MjkuMSwzMzUuMyBDNDI5LjEsMzM1LjIsNDI5LjEsMzM1LjIsNDI5LjEsMzM1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M0MjguOSwzMzUuNCw0MjksMzM1LjQsNDI5LjEsMzM1LjMgTTQyMC4xLDMzOS45IEM0MjAuMSwzMzkuOCw0MjAuMSwzMzkuOCw0MjAuMSwzMzkuOWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzQxOS45LDM0MCw0MjAsMzQwLDQyMC4xLDMzOS45IE0zNDIuNCwzMjguNyBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTMzQyLjQsMzM5LjYsMzQyLjQsMzI4LjcgTTMwNC4xLDMyOC43IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzMwNC4xLDMzOC45LDMwNC4xLDMyOC43IE0zMzEuNiwzMzUuMyBDMzMxLjYsMzM1LjIsMzMxLjYsMzM1LjIsMzMxLjYsMzM1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN0gzMjZjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzMzMS40LDMzNS40LDMzMS42LDMzNS40LDMzMS42LDMzNS4zIE0zMjIuNiwzMzkuOSBDMzIyLjYsMzM5LjgsMzIyLjYsMzM5LjgsMzIyLjYsMzM5LjljMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzMjIuNSwzNDAsMzIyLjYsMzQwLDMyMi42LDMzOS45IE0yNDUsMzI4LjcgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzI0NSwzMzkuNiwyNDUsMzI4LjcgTTIwNi42LDMyOC43IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzIwNi42LDMzOC45LDIwNi42LDMyOC43IE0yMzQuMSwzMzUuMyBDMjM0LjIsMzM1LjIsMjM0LjIsMzM1LjIsMjM0LjEsMzM1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MyMzQsMzM1LjQsMjM0LjEsMzM1LjQsMjM0LjEsMzM1LjMgTTIyNS4yLDMzOS45IEMyMjUuMiwzMzkuOCwyMjUuMiwzMzkuOCwyMjUuMiwzMzkuOWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzIyNSwzNDAsMjI1LjEsMzQwLDIyNS4yLDMzOS45IE0xNDcuNSwzMjguNyBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTMTQ3LjUsMzM5LjYsMTQ3LjUsMzI4LjcgTTEwOS4yLDMyOC43IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzEwOS4yLDMzOC45LDEwOS4yLDMyOC43IE0xMzYuNywzMzUuMyBDMTM2LjcsMzM1LjIsMTM2LjcsMzM1LjIsMTM2LjcsMzM1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMzNsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzEzNi41LDMzNS40LDEzNi42LDMzNS40LDEzNi43LDMzNS4zIE0xMjcuNywzMzkuOSBDMTI3LjcsMzM5LjgsMTI3LjcsMzM5LjgsMTI3LjcsMzM5LjljMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMjRsLTAuMi0wLjlsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzEyNy41LDM0MCwxMjcuNywzNDAsMTI3LjcsMzM5LjkgTTUwLDMyOC43IGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1M1MCwzMzkuNiw1MCwzMjguNyBNMTEuNywzMjguNyBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC41LDguMywxOC41LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMxMS43LDMzOC45LDExLjcsMzI4LjcgTTM5LjIsMzM1LjMgQzM5LjIsMzM1LjIsMzkuMiwzMzUuMiwzOS4yLDMzNS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0gzNHYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xSDM5QzM5LDMzNS40LDM5LjIsMzM1LjQsMzkuMiwzMzUuMyBNMzAuMiwzMzkuOSBDMzAuMiwzMzkuOCwzMC4zLDMzOS44LDMwLjIsMzM5LjljMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDI1djAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFIMzBDMzAuMSwzNDAsMzAuMiwzNDAsMzAuMiwzMzkuOSBNNTg3LjQsMzU0LjEgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzU4Ny40LDM2NSw1ODcuNCwzNTQuMSBNNTQ5LDM1NC4xIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzU0OSwzNjQuNCw1NDksMzU0LjEgTTU3Ni41LDM2MC43TDU3Ni41LDM2MC43IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjM0OWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1NzFjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1NzYuNCwzNjAuOSw1NzYuNSwzNjAuOSw1NzYuNSwzNjAuNyBNNTY3LjUsMzY1LjNDNTY3LjYsMzY1LjMsNTY3LjYsMzY1LjMsNTY3LjUsMzY1LjMgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1NjJjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1NjcuNCwzNjUuNSw1NjcuNSwzNjUuNSw1NjcuNSwzNjUuMyBNNDg5LjksMzU0LjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43IGMwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43QzQ4MSwzNzMuOSw0ODkuOSwzNjUsNDg5LjksMzU0LjEgTTQ1MS41LDM1NC4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41IHMtOC4zLDE4LjUtMTguNiwxOC41UzQ1MS41LDM2NC40LDQ1MS41LDM1NC4xIE00NzkuMSwzNjAuN0w0NzkuMSwzNjAuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43IFYzNDloMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzQ3OC45LDM2MC45LDQ3OSwzNjAuOSw0NzkuMSwzNjAuNyBNNDcwLjEsMzY1LjNMNDcwLjEsMzY1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuNyBsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M0NjkuOSwzNjUuNSw0NzAsMzY1LjUsNDcwLjEsMzY1LjMgTTM5Mi40LDM1NC4xIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN0MzODMuNiwzNzMuOSwzOTIuNCwzNjUsMzkyLjQsMzU0LjEgTTM1NC4xLDM1NC4xIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzM1NC4xLDM2NC40LDM1NC4xLDM1NC4xIE0zODEuNiwzNjAuN0wzODEuNiwzNjAuNyBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YzNDloMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdIMzc2Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMzgxLjQsMzYwLjksMzgxLjYsMzYwLjksMzgxLjYsMzYwLjcgTTM3Mi42LDM2NS4zTDM3Mi42LDM2NS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzM3Mi40LDM2NS41LDM3Mi42LDM2NS41LDM3Mi42LDM2NS4zIE0yOTUsMzU0LjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjcgUzI5NSwzNjUsMjk1LDM1NC4xIE0yNTYuNiwzNTQuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzI1Ni42LDM2NC40LDI1Ni42LDM1NC4xIE0yODQuMSwzNjAuN0MyODQuMSwzNjAuNywyODQuMiwzNjAuNywyODQuMSwzNjAuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjM0OWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjg0LDM2MC45LDI4NC4xLDM2MC45LDI4NC4xLDM2MC43IE0yNzUuMiwzNjUuMyBMMjc1LjIsMzY1LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjQgYy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjQgYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MyNzUsMzY1LjUsMjc1LjEsMzY1LjUsMjc1LjIsMzY1LjMgTTE5Ny41LDM1NC4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5Ljcgcy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1MxOTcuNSwzNjUsMTk3LjUsMzU0LjEgTTE1OS4xLDM1NC4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41IHMtOC4zLDE4LjUtMTguNiwxOC41UzE1OS4xLDM2NC40LDE1OS4xLDM1NC4xIE0xODYuNywzNjAuN0wxODYuNywzNjAuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43IFYzNDloMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTgzbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguMyBDMTg2LjUsMzYwLjksMTg2LjYsMzYwLjksMTg2LjcsMzYwLjcgTTE3Ny43LDM2NS4zTDE3Ny43LDM2NS4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTc0bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MxNzcuNSwzNjUuNSwxNzcuNiwzNjUuNSwxNzcuNywzNjUuMyBNMTAwLDM1NC4xIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1MxMDAsMzY1LDEwMCwzNTQuMSBNNjEuNywzNTQuMSBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVM2MS43LDM2NC40LDYxLjcsMzU0LjEgTTg5LjIsMzYwLjdMODkuMiwzNjAuNyBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YzNDloMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNIODR2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMUg4OUM4OSwzNjAuOSw4OS4yLDM2MC45LDg5LjIsMzYwLjcgTTgwLjIsMzY1LjNMODAuMiwzNjUuM2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42IGwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNINzV2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMUg4MCBDODAuMSwzNjUuNSw4MC4yLDM2NS41LDgwLjIsMzY1LjMgTTUzNy40LDM3OS4yYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdjLTEwLjksMC0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43IEM1MjguNSwzOTguOSw1MzcuNCwzOTAuMSw1MzcuNCwzNzkuMiBNNDk5LDM3OS4yYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVjMTAuMywwLDE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41IEM1MDcuMywzOTcuNyw0OTksMzg5LjQsNDk5LDM3OS4yIE01MjYuNSwzODUuOEM1MjYuNiwzODUuNyw1MjYuNiwzODUuNyw1MjYuNSwzODUuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMzY2YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41IGwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdINTIxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43IGwtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1MjYuNCwzODUuOSw1MjYuNSwzODUuOSw1MjYuNSwzODUuOCBNNTE3LjYsMzkwLjRDNTE3LjYsMzkwLjMsNTE3LjYsMzkwLjMsNTE3LjYsMzkwLjRjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN0g1MTJjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzUxNy40LDM5MC41LDUxNy41LDM5MC41LDUxNy42LDM5MC40IE00MzkuOSwzNzkuMiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTNDM5LjksMzkwLjEsNDM5LjksMzc5LjIgTTQwMS42LDM3OS4yIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQwMS42LDM4OS40LDQwMS42LDM3OS4yIE00MjkuMSwzODUuOCBDNDI5LjEsMzg1LjcsNDI5LjEsMzg1LjcsNDI5LjEsMzg1LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMzY2IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzQyOC45LDM4NS45LDQyOSwzODUuOSw0MjkuMSwzODUuOCBNNDIwLjEsMzkwLjQgQzQyMC4xLDM5MC4zLDQyMC4xLDM5MC4zLDQyMC4xLDM5MC40YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNDE5LjksMzkwLjUsNDIwLDM5MC41LDQyMC4xLDM5MC40IE0zNDIuNCwzNzkuMiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTMzQyLjQsMzkwLjEsMzQyLjQsMzc5LjIgTTMwNC4xLDM3OS4yIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzMwNC4xLDM4OS40LDMwNC4xLDM3OS4yIE0zMzEuNiwzODUuOCBDMzMxLjYsMzg1LjcsMzMxLjYsMzg1LjcsMzMxLjYsMzg1LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMzY2IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDMyNmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMzMxLjQsMzg1LjksMzMxLjYsMzg1LjksMzMxLjYsMzg1LjggTTMyMi42LDM5MC40IEMzMjIuNiwzOTAuMywzMjIuNiwzOTAuMywzMjIuNiwzOTAuNGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzMyMi41LDM5MC41LDMyMi42LDM5MC41LDMyMi42LDM5MC40IE0yNDUsMzc5LjIgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzI0NSwzOTAuMSwyNDUsMzc5LjIgTTIwNi42LDM3OS4yIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzIwNi42LDM4OS40LDIwNi42LDM3OS4yIE0yMzQuMSwzODUuOCBDMjM0LjIsMzg1LjcsMjM0LjIsMzg1LjcsMjM0LjEsMzg1LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMzY2IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzIzNCwzODUuOSwyMzQuMSwzODUuOSwyMzQuMSwzODUuOCBNMjI1LjIsMzkwLjQgQzIyNS4yLDM5MC4zLDIyNS4yLDM5MC4zLDIyNS4yLDM5MC40YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjI1LDM5MC41LDIyNS4xLDM5MC41LDIyNS4yLDM5MC40IE0xNDcuNSwzNzkuMiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTMTQ3LjUsMzkwLjEsMTQ3LjUsMzc5LjIgTTEwOS4yLDM3OS4yIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzEwOS4yLDM4OS40LDEwOS4yLDM3OS4yIE0xMzYuNywzODUuOCBDMTM2LjcsMzg1LjcsMTM2LjcsMzg1LjcsMTM2LjcsMzg1LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMzNsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YzNjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTM2LjUsMzg1LjksMTM2LjYsMzg1LjksMTM2LjcsMzg1LjggTTEyNy43LDM5MC40IEMxMjcuNywzOTAuMywxMjcuNywzOTAuMywxMjcuNywzOTAuNGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEyNGwtMC4yLTAuOWwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTI3LjUsMzkwLjUsMTI3LjcsMzkwLjUsMTI3LjcsMzkwLjQgTTUwLDM3OS4yIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1M1MCwzOTAuMSw1MCwzNzkuMiBNMTEuNywzNzkuMiBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC41LDguMywxOC41LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMxMS43LDM4OS40LDExLjcsMzc5LjIgTTM5LjIsMzg1LjggQzM5LjIsMzg1LjcsMzkuMiwzODUuNywzOS4yLDM4NS44YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjM2NiBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDM0djAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFIMzlDMzksMzg1LjksMzkuMiwzODUuOSwzOS4yLDM4NS44IE0zMC4yLDM5MC40IEMzMC4yLDM5MC4zLDMwLjMsMzkwLjMsMzAuMiwzOTAuNGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIMjV2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMUgzMEMzMC4xLDM5MC41LDMwLjIsMzkwLjUsMzAuMiwzOTAuNCBNNTM3LjQsMjI3LjYgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdjLTEwLjksMC0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43QzUyOC41LDI0Ny4zLDUzNy40LDIzOC41LDUzNy40LDIyNy42IE00OTksMjI3LjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVjMTAuMywwLDE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41QzUwNy4zLDI0Ni4xLDQ5OSwyMzcuOCw0OTksMjI3LjYgTTUyNi41LDIzNC4yIEM1MjYuNiwyMzQuMSw1MjYuNiwyMzQuMiw1MjYuNSwyMzQuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDUyMWMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNTI2LjQsMjM0LjMsNTI2LjUsMjM0LjMsNTI2LjUsMjM0LjIgTTUxNy42LDIzOC44IEM1MTcuNiwyMzguNyw1MTcuNiwyMzguNyw1MTcuNiwyMzguOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YyMTkgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTEyYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M1MTcuNCwyMzguOSw1MTcuNSwyMzguOSw1MTcuNiwyMzguOCBNNDM5LjksMjI3LjYgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTNDM5LjksMjM4LjUsNDM5LjksMjI3LjYgTTQwMS42LDIyNy42IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQwMS42LDIzNy44LDQwMS42LDIyNy42IE00MjkuMSwyMzQuMiBDNDI5LjEsMjM0LjEsNDI5LjEsMjM0LjIsNDI5LjEsMjM0LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M0MjguOSwyMzQuMyw0MjksMjM0LjMsNDI5LjEsMjM0LjIgTTQyMC4xLDIzOC44IEM0MjAuMSwyMzguNyw0MjAuMSwyMzguNyw0MjAuMSwyMzguOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YyMTkgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNDE5LjksMjM4LjksNDIwLDIzOC45LDQyMC4xLDIzOC44IE0zNDIuNCwyMjcuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MzNDIuNCwyMzguNSwzNDIuNCwyMjcuNiBNMzA0LjEsMjI3LjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMzA0LjEsMjM3LjgsMzA0LjEsMjI3LjYgTTMzMS42LDIzNC4yIEMzMzEuNiwyMzQuMSwzMzEuNiwyMzQuMiwzMzEuNiwyMzQuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDMyNmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzMxLjQsMjM0LjMsMzMxLjYsMjM0LjMsMzMxLjYsMjM0LjIgTTMyMi42LDIzOC44IEMzMjIuNiwyMzguNywzMjIuNiwyMzguNywzMjIuNiwyMzguOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1YyMTkgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzIyLjUsMjM4LjksMzIyLjYsMjM4LjksMzIyLjYsMjM4LjggTTI0NSwyMjcuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MyNDUsMjM4LjUsMjQ1LDIyNy42IE0yMDYuNiwyMjcuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMyMDYuNiwyMzcuOCwyMDYuNiwyMjcuNiBNMjM0LjEsMjM0LjJDMjM0LjIsMjM0LjEsMjM0LjIsMjM0LjIsMjM0LjEsMjM0LjIgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDMjM0LDIzNC4zLDIzNC4xLDIzNC4zLDIzNC4xLDIzNC4yIE0yMjUuMiwyMzguOEMyMjUuMiwyMzguNywyMjUuMiwyMzguNywyMjUuMiwyMzguOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWMjE5YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41IGwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuNyBsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMjI1LDIzOC45LDIyNS4xLDIzOC45LDIyNS4yLDIzOC44IE0xNDcuNSwyMjcuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN0MxMzguNiwyNDcuMywxNDcuNSwyMzguNSwxNDcuNSwyMjcuNiBNMTA5LjIsMjI3LjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTA5LjIsMjM3LjgsMTA5LjIsMjI3LjYgTTEzNi43LDIzNC4yIEMxMzYuNywyMzQuMSwxMzYuNywyMzQuMiwxMzYuNywyMzQuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEzM2wtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMTM2LjUsMjM0LjMsMTM2LjYsMjM0LjMsMTM2LjcsMjM0LjIgTTEyNy43LDIzOC44IEMxMjcuNywyMzguNywxMjcuNywyMzguNywxMjcuNywyMzguOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEyNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjIxOSBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MxMjcuNSwyMzguOSwxMjcuNywyMzguOSwxMjcuNywyMzguOCBNNTAsMjI3LjYgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTNTAsMjM4LjUsNTAsMjI3LjYgTTExLjcsMjI3LjZjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNSBzMTguNSw4LjMsMTguNSwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTEuNywyMzcuOCwxMS43LDIyNy42IE0zOS4yLDIzNC4yQzM5LjIsMjM0LjEsMzkuMiwyMzQuMiwzOS4yLDIzNC4yYzAtMC4yLDAtMC4yLTAuMS0wLjMgYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBIMzR2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDM5IEMzOSwyMzQuMywzOS4yLDIzNC4zLDM5LjIsMjM0LjIgTTMwLjIsMjM4LjhDMzAuMiwyMzguNywzMC4zLDIzOC43LDMwLjIsMjM4LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjIxOWMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNSBsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIMjV2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuNyBsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUgzMEMzMC4xLDIzOC45LDMwLjIsMjM4LjksMzAuMiwyMzguOCBNNTg3LjQsMjUzIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN1M1ODcuNCwyNjMuOSw1ODcuNCwyNTMgTTU0OSwyNTMgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41YzAsMTAuMi04LjMsMTguNS0xOC42LDE4LjVDNTU3LjMsMjcxLjYsNTQ5LDI2My4zLDU0OSwyNTMgTTU3Ni41LDI1OS42TDU3Ni41LDI1OS42IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdINTcxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNTc2LjQsMjU5LjgsNTc2LjUsMjU5LjgsNTc2LjUsMjU5LjYgTTU2Ny41LDI2NC4yQzU2Ny42LDI2NC4yLDU2Ny42LDI2NC4yLDU2Ny41LDI2NC4yIGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdINTYyYy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNTY3LjQsMjY0LjQsNTY3LjUsMjY0LjQsNTY3LjUsMjY0LjIgTTQ4OS45LDI1M2MwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjcgYzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdDNDgxLDI3Mi44LDQ4OS45LDI2My45LDQ4OS45LDI1MyBNNDUxLjUsMjUzYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41IGMwLDEwLjItOC4zLDE4LjUtMTguNiwxOC41UzQ1MS41LDI2My4zLDQ1MS41LDI1MyBNNDc5LjEsMjU5LjZMNDc5LjEsMjU5LjZjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguMyBDNDc4LjksMjU5LjgsNDc5LDI1OS44LDQ3OS4xLDI1OS42IE00NzAuMSwyNjQuMkw0NzAuMSwyNjQuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43IGwtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzQ2OS45LDI2NC40LDQ3MCwyNjQuNCw0NzAuMSwyNjQuMiBNMzkyLjQsMjUzIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdjMCwxMC45LDguOSwxOS43LDE5LjgsMTkuN0MzODMuNiwyNzIuOCwzOTIuNCwyNjMuOSwzOTIuNCwyNTMgTTM1NC4xLDI1MyBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVjMCwxMC4yLTguMywxOC41LTE4LjYsMTguNVMzNTQuMSwyNjMuMywzNTQuMSwyNTMgTTM4MS42LDI1OS42TDM4MS42LDI1OS42IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42TDM3OCwyNDh2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0gzNzZjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzODEuNCwyNTkuOCwzODEuNiwyNTkuOCwzODEuNiwyNTkuNiBNMzcyLjYsMjY0LjJMMzcyLjYsMjY0LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguMyBDMzcyLjQsMjY0LjQsMzcyLjYsMjY0LjQsMzcyLjYsMjY0LjIgTTI5NSwyNTNjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjcgUzI5NSwyNjMuOSwyOTUsMjUzIE0yNTYuNiwyNTNjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVjMCwxMC4yLTguMywxOC41LTE4LjYsMTguNVMyNTYuNiwyNjMuMywyNTYuNiwyNTMgTTI4NC4xLDI1OS42QzI4NC4xLDI1OS42LDI4NC4yLDI1OS42LDI4NC4xLDI1OS42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjg0LDI1OS44LDI4NC4xLDI1OS44LDI4NC4xLDI1OS42IE0yNzUuMiwyNjQuMiBMMjc1LjIsMjY0LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjQgYy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjQgYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MyNzUsMjY0LjQsMjc1LjEsMjY0LjQsMjc1LjIsMjY0LjIgTTE5Ny41LDI1M2MwLTEwLjktOC45LTE5LjctMTkuOC0xOS43IHMtMTkuOCw4LjgtMTkuOCwxOS43YzAsMTAuOSw4LjksMTkuNywxOS44LDE5LjdTMTk3LjUsMjYzLjksMTk3LjUsMjUzIE0xNTkuMSwyNTNjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjUgYzAsMTAuMi04LjMsMTguNS0xOC42LDE4LjVTMTU5LjEsMjYzLjMsMTU5LjEsMjUzIE0xODYuNywyNTkuNkwxODYuNywyNTkuNmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42IGwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE4M2wtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzE4Ni41LDI1OS44LDE4Ni42LDI1OS44LDE4Ni43LDI1OS42IE0xNzcuNywyNjQuMkwxNzcuNywyNjQuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE3NGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTc3LjUsMjY0LjQsMTc3LjYsMjY0LjQsMTc3LjcsMjY0LjIgTTEwMCwyNTMgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN2MwLDEwLjksOC45LDE5LjcsMTkuOCwxOS43UzEwMCwyNjMuOSwxMDAsMjUzIE02MS43LDI1M2MwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVjMCwxMC4yLTguMywxOC41LTE4LjYsMTguNVM2MS43LDI2My4zLDYxLjcsMjUzIE04OS4yLDI1OS42TDg5LjIsMjU5LjZjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDg0djAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFIODkgQzg5LDI1OS44LDg5LjIsMjU5LjgsODkuMiwyNTkuNiBNODAuMiwyNjQuMkw4MC4yLDI2NC4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0g3NXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xSDgwQzgwLjEsMjY0LjQsODAuMiwyNjQuNCw4MC4yLDI2NC4yIE01MzcuNCwxNzcuMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN2MtMTAuOSwwLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDNTI4LjUsMTk2LjgsNTM3LjQsMTg3LjksNTM3LjQsMTc3LjEgTTQ5OSwxNzcuMSBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNWMxMC4zLDAsMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVDNTA3LjMsMTk1LjYsNDk5LDE4Ny4zLDQ5OSwxNzcuMSBNNTI2LjUsMTgzLjYgQzUyNi42LDE4My42LDUyNi42LDE4My42LDUyNi41LDE4My42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTIxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M1MjYuNCwxODMuOCw1MjYuNSwxODMuOCw1MjYuNSwxODMuNiBNNTE3LjYsMTg4LjIgTDUxNy42LDE4OC4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41IGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjQgdjUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1MTJjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0M1MTcuNCwxODguNCw1MTcuNSwxODguNCw1MTcuNiwxODguMiBNNDM5LjksMTc3LjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBTNDM5LjksMTg3LjksNDM5LjksMTc3LjEgTTQwMS42LDE3Ny4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTNDAxLjYsMTg3LjMsNDAxLjYsMTc3LjEgTTQyOS4xLDE4My42TDQyOS4xLDE4My42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNDI4LjksMTgzLjgsNDI5LDE4My44LDQyOS4xLDE4My42IE00MjAuMSwxODguMkw0MjAuMSwxODguMiBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0M0MTkuOSwxODguNCw0MjAsMTg4LjQsNDIwLjEsMTg4LjIgTTM0Mi40LDE3Ny4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzM0Mi40LDE4Ny45LDM0Mi40LDE3Ny4xIE0zMDQuMSwxNzcuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzMwNC4xLDE4Ny4zLDMwNC4xLDE3Ny4xIE0zMzEuNiwxODMuNkwzMzEuNiwxODMuNmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42TDMyOCwxNzJ2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdIMzI2Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MzMzEuNCwxODMuOCwzMzEuNiwxODMuOCwzMzEuNiwxODMuNiBNMzIyLjYsMTg4LjIgTDMyMi42LDE4OC4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40IGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40IGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40IGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksMyBjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzIyLjUsMTg4LjQsMzIyLjYsMTg4LjQsMzIyLjYsMTg4LjIgTTI0NSwxNzcuMWMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43IHMtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MyNDUsMTg3LjksMjQ1LDE3Ny4xIE0yMDYuNiwxNzcuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNSBzLTguMywxOC41LTE4LjYsMTguNVMyMDYuNiwxODcuMywyMDYuNiwxNzcuMSBNMjM0LjEsMTgzLjZDMjM0LjIsMTgzLjYsMjM0LjIsMTgzLjYsMjM0LjEsMTgzLjZjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjcgYzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zIGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIGgwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguMyBDMjM0LDE4My44LDIzNC4xLDE4My44LDIzNC4xLDE4My42IE0yMjUuMiwxODguMkwyMjUuMiwxODguMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzIyNSwxODguNCwyMjUuMSwxODguNCwyMjUuMiwxODguMiBNMTQ3LjUsMTc3LjEgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDMTM4LjYsMTk2LjgsMTQ3LjUsMTg3LjksMTQ3LjUsMTc3LjEgTTEwOS4yLDE3Ny4xIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzEwOS4yLDE4Ny4zLDEwOS4yLDE3Ny4xIE0xMzYuNywxODMuNkwxMzYuNywxODMuNiBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEzM2wtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzEzNi41LDE4My44LDEzNi42LDE4My44LDEzNi43LDE4My42IE0xMjcuNywxODguMkwxMjcuNywxODguMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjEgaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEyNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMTI3LjUsMTg4LjQsMTI3LjcsMTg4LjQsMTI3LjcsMTg4LjIgTTUwLDE3Ny4xIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzUwLDE4Ny45LDUwLDE3Ny4xIE0xMS43LDE3Ny4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjUgczE4LjUsOC4yLDE4LjUsMTguNWMwLDEwLjItOC4zLDE4LjUtMTguNiwxOC41UzExLjcsMTg3LjMsMTEuNywxNzcuMSBNMzkuMiwxODMuNkwzOS4yLDE4My42YzAtMC4yLDAtMC4yLTAuMS0wLjMgYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBIMzR2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDM5IEMzOSwxODMuOCwzOS4yLDE4My44LDM5LjIsMTgzLjYgTTMwLjIsMTg4LjJDMzAuMiwxODguMiwzMC4zLDE4OC4yLDMwLjIsMTg4LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDI1djAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFIMzAgQzMwLjEsMTg4LjQsMzAuMiwxODguNCwzMC4yLDE4OC4yIE01ODcuNCwyMDIuNWMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43IFM1ODcuNCwyMTMuNCw1ODcuNCwyMDIuNSBNNTQ5LDIwMi41YzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTNTQ5LDIxMi43LDU0OSwyMDIuNSBNNTc2LjUsMjA5LjFMNTc2LjUsMjA5LjFjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNiBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN0g1NzFjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzU3Ni40LDIwOS4yLDU3Ni41LDIwOS4yLDU3Ni41LDIwOS4xIE01NjcuNSwyMTMuNyBDNTY3LjYsMjEzLjcsNTY3LjYsMjEzLjcsNTY3LjUsMjEzLjdjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YyMDJoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDU2MmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNTY3LjQsMjEzLjgsNTY3LjUsMjEzLjgsNTY3LjUsMjEzLjcgTTQ4OS45LDIwMi41IGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzQ4OS45LDIxMy40LDQ4OS45LDIwMi41IE00NTEuNSwyMDIuNSBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVM0NTEuNSwyMTIuNyw0NTEuNSwyMDIuNSBNNDc5LjEsMjA5LjFMNDc5LjEsMjA5LjEgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDNDc4LjksMjA5LjIsNDc5LDIwOS4yLDQ3OS4xLDIwOS4xIE00NzAuMSwyMTMuN0w0NzAuMSwyMTMuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwMiBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNDY5LjksMjEzLjgsNDcwLDIxMy44LDQ3MC4xLDIxMy43IE0zOTIuNCwyMDIuNSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN0MzODMuNiwyMjIuMiwzOTIuNCwyMTMuNCwzOTIuNCwyMDIuNSBNMzU0LjEsMjAyLjUgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41UzM4MywyMjEsMzcyLjcsMjIxUzM1NC4xLDIxMi43LDM1NC4xLDIwMi41IE0zODEuNiwyMDkuMUwzODEuNiwyMDkuMSBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDM3NmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzM4MS40LDIwOS4yLDM4MS42LDIwOS4yLDM4MS42LDIwOS4xIE0zNzIuNiwyMTMuN0wzNzIuNiwyMTMuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwMiBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzcyLjQsMjEzLjgsMzcyLjYsMjEzLjgsMzcyLjYsMjEzLjcgTTI5NSwyMDIuNSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MyOTUsMjEzLjQsMjk1LDIwMi41IE0yNTYuNiwyMDIuNWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMyNTYuNiwyMTIuNywyNTYuNiwyMDIuNSBNMjg0LjEsMjA5LjFDMjg0LjEsMjA5LjEsMjg0LjIsMjA5LjEsMjg0LjEsMjA5LjEgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDMjg0LDIwOS4yLDI4NC4xLDIwOS4yLDI4NC4xLDIwOS4xIE0yNzUuMiwyMTMuN0wyNzUuMiwyMTMuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwMiBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMjc1LDIxMy44LDI3NS4xLDIxMy44LDI3NS4yLDIxMy43IE0xOTcuNSwyMDIuNSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MxOTcuNSwyMTMuNCwxOTcuNSwyMDIuNSBNMTU5LjEsMjAyLjUgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41UzE4OCwyMjEsMTc3LjcsMjIxUzE1OS4xLDIxMi43LDE1OS4xLDIwMi41IE0xODYuNywyMDkuMUwxODYuNywyMDkuMSBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE4M2wtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzE4Ni41LDIwOS4yLDE4Ni42LDIwOS4yLDE4Ni43LDIwOS4xIE0xNzcuNywyMTMuN0wxNzcuNywyMTMuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwMiBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTc0bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MxNzcuNSwyMTMuOCwxNzcuNiwyMTMuOCwxNzcuNywyMTMuNyBNMTAwLDIwMi41IGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzEwMCwyMTMuNCwxMDAsMjAyLjUgTTYxLjcsMjAyLjVjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNSBzMTguNiw4LjMsMTguNiwxOC41UzkwLjYsMjIxLDgwLjMsMjIxUzYxLjcsMjEyLjcsNjEuNywyMDIuNSBNODkuMiwyMDkuMUw4OS4yLDIwOS4xYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0g4NHYwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDg5IEM4OSwyMDkuMiw4OS4yLDIwOS4yLDg5LjIsMjA5LjEgTTgwLjIsMjEzLjdMODAuMiwyMTMuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwMmgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0g3NXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDgwQzgwLjEsMjEzLjgsODAuMiwyMTMuOCw4MC4yLDIxMy43IE01MzcuNCwxMjYuMiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN2MtMTAuOSwwLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDNTI4LjUsMTQ1LjksNTM3LjQsMTM3LDUzNy40LDEyNi4yIE00OTksMTI2LjIgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVjMTAuMywwLDE4LjYsOC4zLDE4LjYsMTguNXMtOC40LDE4LjUtMTguNiwxOC41QzUwNy4zLDE0NC43LDQ5OSwxMzYuNCw0OTksMTI2LjIgTTUyNi41LDEzMi43IEM1MjYuNiwxMzIuNyw1MjYuNiwxMzIuNyw1MjYuNSwxMzIuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjEyMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTIxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M1MjYuNCwxMzIuOSw1MjYuNSwxMzIuOSw1MjYuNSwxMzIuNyBNNTE3LjYsMTM3LjMgTDUxNy42LDEzNy4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41IGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjQgdjUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN0g1MTJjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0M1MTcuNCwxMzcuNSw1MTcuNSwxMzcuNSw1MTcuNiwxMzcuMyBNNDM5LjksMTI2LjJjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBTNDM5LjksMTM3LDQzOS45LDEyNi4yIE00MDEuNiwxMjYuMmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQwMS42LDEzNi40LDQwMS42LDEyNi4yIE00MjkuMSwxMzIuN0w0MjkuMSwxMzIuN2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjEyMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNDI4LjksMTMyLjksNDI5LDEzMi45LDQyOS4xLDEzMi43IE00MjAuMSwxMzcuM0w0MjAuMSwxMzcuMyBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0M0MTkuOSwxMzcuNSw0MjAsMTM3LjUsNDIwLjEsMTM3LjMgTTM0Mi40LDEyNi4yYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzM0Mi40LDEzNywzNDIuNCwxMjYuMiBNMzA0LjEsMTI2LjJjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMzMDQuMSwxMzYuNCwzMDQuMSwxMjYuMiBNMzMxLjYsMTMyLjdMMzMxLjYsMTMyLjdjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YxMjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDMyNmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzMxLjQsMTMyLjksMzMxLjYsMTMyLjksMzMxLjYsMTMyLjcgTTMyMi42LDEzNy4zIEwzMjIuNiwxMzcuM2MwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNCBsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNCBjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNCBjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDMgYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzMyMi41LDEzNy41LDMyMi42LDEzNy41LDMyMi42LDEzNy4zIE0yNDUsMTI2LjJjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuNyBzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMjQ1LDEzNywyNDUsMTI2LjIgTTIwNi42LDEyNi4yYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41IHMtOC4zLDE4LjUtMTguNiwxOC41UzIwNi42LDEzNi40LDIwNi42LDEyNi4yIE0yMzQuMSwxMzIuN0MyMzQuMiwxMzIuNywyMzQuMiwxMzIuNywyMzQuMSwxMzIuN2MwLTAuMiwwLTAuMi0wLjEtMC4zIGMwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1YxMjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzIzNCwxMzIuOSwyMzQuMSwxMzIuOSwyMzQuMSwxMzIuNyBNMjI1LjIsMTM3LjNMMjI1LjIsMTM3LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MyMjUsMTM3LjUsMjI1LjEsMTM3LjUsMjI1LjIsMTM3LjMgTTE0Ny41LDEyNi4yIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzE0Ny41LDEzNywxNDcuNSwxMjYuMiBNMTA5LjIsMTI2LjJjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNSBzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTA5LjIsMTM2LjQsMTA5LjIsMTI2LjIgTTEzNi43LDEzMi43TDEzNi43LDEzMi43YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43VjEyMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMzNsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zIEMxMzYuNSwxMzIuOSwxMzYuNiwxMzIuOSwxMzYuNywxMzIuNyBNMTI3LjcsMTM3LjNMMTI3LjcsMTM3LjNjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzEyNy41LDEzNy41LDEyNy43LDEzNy41LDEyNy43LDEzNy4zIE01MCwxMjYuMiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1M1MCwxMzcsNTAsMTI2LjIgTTExLjcsMTI2LjJjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNSBzMTguNSw4LjIsMTguNSwxOC41cy04LjMsMTguNS0xOC41LDE4LjVTMTEuNywxMzYuNCwxMS43LDEyNi4yIE0zOS4yLDEzMi43TDM5LjIsMTMyLjdjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjdWMTIxaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIMzR2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUgzOSBDMzksMTMyLjksMzkuMiwxMzIuOSwzOS4yLDEzMi43IE0zMC4yLDEzNy4zQzMwLjIsMTM3LjMsMzAuMywxMzcuMywzMC4yLDEzNy4zYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjYgbC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0gyNXYwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDMwIEMzMC4xLDEzNy41LDMwLjIsMTM3LjUsMzAuMiwxMzcuMyBNNTg3LjQsMTUxLjZjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBTNTg3LjQsMTYyLjUsNTg3LjQsMTUxLjYgTTU0OSwxNTEuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzU0OSwxNjEuOCw1NDksMTUxLjYgTTU3Ni41LDE1OC4yTDU3Ni41LDE1OC4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdINTcxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M1NzYuNCwxNTguMyw1NzYuNSwxNTguMyw1NzYuNSwxNTguMiBNNTY3LjUsMTYyLjggQzU2Ny42LDE2Mi44LDU2Ny42LDE2Mi44LDU2Ny41LDE2Mi44YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zVjE0MyBjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN0g1NjJjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzU2Ny40LDE2Mi45LDU2Ny41LDE2Mi45LDU2Ny41LDE2Mi44IE00ODkuOSwxNTEuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1M0ODkuOSwxNjIuNSw0ODkuOSwxNTEuNiBNNDUxLjUsMTUxLjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTNDUxLjUsMTYxLjgsNDUxLjUsMTUxLjYgTTQ3OS4xLDE1OC4yTDQ3OS4xLDE1OC4yIGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNiBsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzQ3OC45LDE1OC4zLDQ3OSwxNTguMyw0NzkuMSwxNTguMiBNNDcwLjEsMTYyLjhMNDcwLjEsMTYyLjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xIGgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zVjE0M2MwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzQ2OS45LDE2Mi45LDQ3MCwxNjIuOSw0NzAuMSwxNjIuOCBNMzkyLjQsMTUxLjYgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDMzgzLjYsMTcxLjMsMzkyLjQsMTYyLjUsMzkyLjQsMTUxLjYgTTM1NC4xLDE1MS42IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzM1NC4xLDE2MS44LDM1NC4xLDE1MS42IE0zODEuNiwxNTguMkwzODEuNiwxNTguMiBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDM3NmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzM4MS40LDE1OC4zLDM4MS42LDE1OC4zLDM4MS42LDE1OC4yIE0zNzIuNiwxNjIuOEwzNzIuNiwxNjIuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjEgaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjNWMTQzYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzcyLjQsMTYyLjksMzcyLjYsMTYyLjksMzcyLjYsMTYyLjggTTI5NSwxNTEuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MyOTUsMTYyLjUsMjk1LDE1MS42IE0yNTYuNiwxNTEuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMyNTYuNiwxNjEuOCwyNTYuNiwxNTEuNiBNMjg0LjEsMTU4LjJDMjg0LjEsMTU4LjIsMjg0LjIsMTU4LjIsMjg0LjEsMTU4LjIgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDMjg0LDE1OC4zLDI4NC4xLDE1OC4zLDI4NC4xLDE1OC4yIE0yNzUuMiwxNjIuOEwyNzUuMiwxNjIuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjEgaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjNWMTQzYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMjc1LDE2Mi45LDI3NS4xLDE2Mi45LDI3NS4yLDE2Mi44IE0xOTcuNSwxNTEuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MxOTcuNSwxNjIuNSwxOTcuNSwxNTEuNiBNMTU5LjEsMTUxLjYgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTU5LjEsMTYxLjgsMTU5LjEsMTUxLjYgTTE4Ni43LDE1OC4yTDE4Ni43LDE1OC4yIGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTgzbC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDMTg2LjUsMTU4LjMsMTg2LjYsMTU4LjMsMTg2LjcsMTU4LjIgTTE3Ny43LDE2Mi44TDE3Ny43LDE2Mi44YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMSBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTc0bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zVjE0M2MwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzE3Ny41LDE2Mi45LDE3Ny42LDE2Mi45LDE3Ny43LDE2Mi44IE0xMDAsMTUxLjYgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMTAwLDE2Mi41LDEwMCwxNTEuNiBNNjEuNywxNTEuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVM2MS43LDE2MS44LDYxLjcsMTUxLjYgTTg5LjIsMTU4LjJMODkuMiwxNTguMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIODR2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUg4OSBDODksMTU4LjMsODkuMiwxNTguMyw4OS4yLDE1OC4yIE04MC4yLDE2Mi44TDgwLjIsMTYyLjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zVjE0M2MwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNINzV2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUg4MEM4MC4xLDE2Mi45LDgwLjIsMTYyLjksODAuMiwxNjIuOCBNNTM3LjQsNzUuNiBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN2MtMTAuOSwwLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdDNTI4LjUsOTUuMyw1MzcuNCw4Ni41LDUzNy40LDc1LjYgTTQ5OSw3NS42IGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41YzEwLjMsMCwxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNUM1MDcuMyw5NC4xLDQ5OSw4NS44LDQ5OSw3NS42IE01MjYuNSw4Mi4yIEM1MjYuNiw4Mi4yLDUyNi42LDgyLjIsNTI2LjUsODIuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNFY2OGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuNyBINTIxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1MjYuNCw4Mi4zLDUyNi41LDgyLjMsNTI2LjUsODIuMiBNNTE3LjYsODYuOEw1MTcuNiw4Ni44IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuNyBsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1Y2N2MwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjMgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDUxMmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjMgQzUxNy40LDg2LjksNTE3LjUsODYuOSw1MTcuNiw4Ni44IE00MzkuOSw3NS42YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzQzOS45LDg2LjUsNDM5LjksNzUuNiBNNDAxLjYsNzUuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQwMS42LDg1LjgsNDAxLjYsNzUuNiBNNDI5LjEsODIuMkw0MjkuMSw4Mi4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40VjY4bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M0MjguOSw4Mi4zLDQyOSw4Mi4zLDQyOS4xLDgyLjIgTTQyMC4xLDg2LjhMNDIwLjEsODYuOCBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWNjdjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNDE5LjksODYuOSw0MjAsODYuOSw0MjAuMSw4Ni44IE0zNDIuNCw3NS42YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuNyBzOC45LDE5LjcsMTkuOCwxOS43UzM0Mi40LDg2LjUsMzQyLjQsNzUuNiBNMzA0LjEsNzUuNmMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41IFMzMDQuMSw4NS44LDMwNC4xLDc1LjYgTTMzMS42LDgyLjJMMzMxLjYsODIuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNFY2OGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdIMzI2Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzMzEuNCw4Mi4zLDMzMS42LDgyLjMsMzMxLjYsODIuMiBNMzIyLjYsODYuOCBMMzIyLjYsODYuOGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNCBsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM1Y2N2MwLTAuMi0wLjItMC40LTAuNC0wLjQgYy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjQgYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzMjIuNSw4Ni45LDMyMi42LDg2LjksMzIyLjYsODYuOCBNMjQ1LDc1LjZjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuNyBzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMjQ1LDg2LjUsMjQ1LDc1LjYgTTIwNi42LDc1LjZjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjUgcy04LjMsMTguNS0xOC42LDE4LjVTMjA2LjYsODUuOCwyMDYuNiw3NS42IE0yMzQuMSw4Mi4yQzIzNC4yLDgyLjIsMjM0LjIsODIuMiwyMzQuMSw4Mi4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40VjY4bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjUgbDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43IGwtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MyMzQsODIuMywyMzQuMSw4Mi4zLDIzNC4xLDgyLjIgTTIyNS4yLDg2LjggTDIyNS4yLDg2LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWNjdjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjI1LDg2LjksMjI1LjEsODYuOSwyMjUuMiw4Ni44IE0xNDcuNSw3NS42YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuNyBzOC45LDE5LjcsMTkuOCwxOS43QzEzOC42LDk1LjMsMTQ3LjUsODYuNSwxNDcuNSw3NS42IE0xMDkuMiw3NS42YzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41IHMtOC4zLDE4LjUtMTguNiwxOC41UzEwOS4yLDg1LjgsMTA5LjIsNzUuNiBNMTM2LjcsODIuMkwxMzYuNyw4Mi4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMSBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTMzbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjRWNjhsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzEzNi41LDgyLjMsMTM2LjYsODIuMywxMzYuNyw4Mi4yIE0xMjcuNyw4Ni44IEwxMjcuNyw4Ni44YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxMjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWNjdjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTI3LjUsODYuOSwxMjcuNyw4Ni45LDEyNy43LDg2LjggTTUwLDc1LjZjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuNyw4LjgtMTkuNywxOS43IHM4LjksMTkuNywxOS44LDE5LjdTNTAsODYuNSw1MCw3NS42IE0xMS43LDc1LjZjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC41LDguMywxOC41LDE4LjVzLTguMywxOC41LTE4LjYsMTguNSBTMTEuNyw4NS44LDExLjcsNzUuNiBNMzkuMiw4Mi4yTDM5LjIsODIuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMi0wLjVsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZMMzQsNjcuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdMMzQuMSw2OSBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzOSw4Mi4zLDM5LjIsODIuMywzOS4yLDgyLjIgTTMwLjIsODYuOCBDMzAuMiw4Ni44LDMwLjMsODYuOCwzMC4yLDg2LjhjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjNWNjcgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0gyNXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xSDMwQzMwLjEsODYuOSwzMC4yLDg2LjksMzAuMiw4Ni44IE01ODcuNCwxMDEuMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1M1ODcuNCwxMTEuOSw1ODcuNCwxMDEuMSBNNTQ5LDEwMS4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjUgczE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzU0OSwxMTEuMyw1NDksMTAxLjEgTTU3Ni41LDEwNy42TDU3Ni41LDEwNy42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdINTcxYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM1Y5NiBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEM1NzYuNCwxMDcuOCw1NzYuNSwxMDcuOCw1NzYuNSwxMDcuNiBNNTY3LjUsMTEyLjJDNTY3LjYsMTEyLjIsNTY3LjYsMTEyLjIsNTY3LjUsMTEyLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjRWOThsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNSBsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDU2MmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuNyBsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDNTY3LjQsMTEyLjQsNTY3LjUsMTEyLjQsNTY3LjUsMTEyLjIgTTQ4OS45LDEwMS4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTNDg5LjksMTExLjksNDg5LjksMTAxLjEgTTQ1MS41LDEwMS4xIGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41UzQ1MS41LDExMS4zLDQ1MS41LDEwMS4xIE00NzkuMSwxMDcuNkw0NzkuMSwxMDcuNiBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM1Y5NmMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zIGMwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzQ3OC45LDEwNy44LDQ3OSwxMDcuOCw0NzkuMSwxMDcuNiBNNDcwLjEsMTEyLjJMNDcwLjEsMTEyLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjRWOThsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEM0NjkuOSwxMTIuNCw0NzAsMTEyLjQsNDcwLjEsMTEyLjIgTTM5Mi40LDEwMS4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgQzM4My42LDEyMC44LDM5Mi40LDExMS45LDM5Mi40LDEwMS4xIE0zNTQuMSwxMDEuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41IFMzNTQuMSwxMTEuMywzNTQuMSwxMDEuMSBNMzgxLjYsMTA3LjZMMzgxLjYsMTA3LjZjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNkwzNzgsOTZ2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjcgbC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdIMzc2Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM1Y5NmMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzM4MS40LDEwNy44LDM4MS42LDEwNy44LDM4MS42LDEwNy42IE0zNzIuNiwxMTIuMiBMMzcyLjYsMTEyLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjQgYy0wLjIsMC0wLjQsMC4yLTAuNCwwLjRWOThsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNCBjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDMgYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zQzM3Mi40LDExMi40LDM3Mi42LDExMi40LDM3Mi42LDExMi4yIE0yOTUsMTAxLjFjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuNyBzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMjk1LDExMS45LDI5NSwxMDEuMSBNMjU2LjYsMTAxLjFjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjUgcy04LjMsMTguNS0xOC42LDE4LjVTMjU2LjYsMTExLjMsMjU2LjYsMTAxLjEgTTI4NC4xLDEwNy42QzI4NC4xLDEwNy42LDI4NC4yLDEwNy42LDI4NC4xLDEwNy42YzAtMC4yLDAtMC4yLTAuMS0wLjMgYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBoMC4zVjk2Yy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguMyBDMjg0LDEwNy44LDI4NC4xLDEwNy44LDI4NC4xLDEwNy42IE0yNzUuMiwxMTIuMkwyNzUuMiwxMTIuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNFY5OGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMjc1LDExMi40LDI3NS4xLDExMi40LDI3NS4yLDExMi4yIE0xOTcuNSwxMDEuMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1MxOTcuNSwxMTEuOSwxOTcuNSwxMDEuMSBNMTU5LjEsMTAxLjEgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTU5LjEsMTExLjMsMTU5LjEsMTAxLjEgTTE4Ni43LDEwNy42TDE4Ni43LDEwNy42IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTgzbC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjNWOTZjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuMyBjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MxODYuNSwxMDcuOCwxODYuNiwxMDcuOCwxODYuNywxMDcuNiBNMTc3LjcsMTEyLjJMMTc3LjcsMTEyLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktMyBsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxNzRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNFY5OGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41IGwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuNyBsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTc3LjUsMTEyLjQsMTc3LjYsMTEyLjQsMTc3LjcsMTEyLjIgTTEwMCwxMDEuMWMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzEwMCwxMTEuOSwxMDAsMTAxLjEgTTYxLjcsMTAxLjEgYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTNjEuNywxMTEuMyw2MS43LDEwMS4xIE04OS4yLDEwNy42TDg5LjIsMTA3LjYgYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZMODUuNiw5NnYtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDg0Vjk2Yy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjMgYzAsMC4xLDAuMiwwLjEsMC4zLDAuMUg4OUM4OSwxMDcuOCw4OS4yLDEwNy44LDg5LjIsMTA3LjYgTTgwLjIsMTEyLjJMODAuMiwxMTIuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42IGwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMNzYuMiw5OHYtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40Vjk4bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDc1djAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFIODAgQzgwLjEsMTEyLjQsODAuMiwxMTIuNCw4MC4yLDExMi4yIE01MzcuNCwyNS4xYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdjLTEwLjksMC0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43IEM1MjguNSw0NC44LDUzNy40LDM2LDUzNy40LDI1LjEgTTQ5OSwyNS4xYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVjMTAuMywwLDE4LjYsOC4zLDE4LjYsMTguNXMtOC4zLDE4LjUtMTguNiwxOC41IEM1MDcuMyw0My42LDQ5OSwzNS4zLDQ5OSwyNS4xIE01MjYuNSwzMS43QzUyNi42LDMxLjYsNTI2LjYsMzEuNiw1MjYuNSwzMS43YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjYgbC0wLjMtMS43VjIwaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDUyMWMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzUyNi40LDMxLjgsNTI2LjUsMzEuOCw1MjYuNSwzMS43IE01MTcuNiwzNi4yTDUxNy42LDM2LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuMyBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC41bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjRWMjJsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDUxMmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDNTE3LjQsMzYuNCw1MTcuNSwzNi40LDUxNy42LDM2LjIgTTQzOS45LDI1LjEgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTNDM5LjksMzYsNDM5LjksMjUuMSBNNDAxLjYsMjUuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVM0MDEuNiwzNS4zLDQwMS42LDI1LjEgTTQyOS4xLDMxLjdDNDI5LjEsMzEuNiw0MjkuMSwzMS42LDQyOS4xLDMxLjdjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzQyOC45LDMxLjgsNDI5LDMxLjgsNDI5LjEsMzEuNyBNNDIwLjEsMzYuMkw0MjAuMSwzNi4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40VjIybC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M0MTkuOSwzNi40LDQyMCwzNi40LDQyMC4xLDM2LjIgTTM0Mi40LDI1LjEgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMzQyLjQsMzYsMzQyLjQsMjUuMSBNMzA0LjEsMjUuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMzMDQuMSwzNS4zLDMwNC4xLDI1LjEgTTMzMS42LDMxLjdDMzMxLjYsMzEuNiwzMzEuNiwzMS42LDMzMS42LDMxLjdjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNWwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdIMzI2Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIGgwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguMyBDMzMxLjQsMzEuOCwzMzEuNiwzMS44LDMzMS42LDMxLjcgTTMyMi42LDM2LjJMMzIyLjYsMzYuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNFYyMmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzIyLjUsMzYuNCwzMjIuNiwzNi40LDMyMi42LDM2LjIgTTI0NSwyNS4xIGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43cy0xOS44LDguOC0xOS44LDE5LjdzOC45LDE5LjcsMTkuOCwxOS43UzI0NSwzNiwyNDUsMjUuMSBNMjA2LjYsMjUuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMiwxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMyMDYuNiwzNS4zLDIwNi42LDI1LjEgTTIzNC4xLDMxLjdDMjM0LjIsMzEuNiwyMzQuMiwzMS42LDIzNC4xLDMxLjdjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuMyBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuMyBoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzIzNCwzMS44LDIzNC4xLDMxLjgsMjM0LjEsMzEuNyBNMjI1LjIsMzYuMkwyMjUuMiwzNi4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjMgYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40VjIybC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MyMjUsMzYuNCwyMjUuMSwzNi40LDIyNS4yLDM2LjIgTTE0Ny41LDI1LjEgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjdTMTQ3LjUsMzYsMTQ3LjUsMjUuMSBNMTA5LjIsMjUuMWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMxMDkuMiwzNS4zLDEwOS4yLDI1LjEgTTEzNi43LDMxLjdDMTM2LjcsMzEuNiwxMzYuNywzMS42LDEzNi43LDMxLjdjMC0wLjIsMC0wLjItMC4xLTAuMyBjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjdWMjBoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTMzbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjcgYzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40cy0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zIGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIGgwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguMyBDMTM2LjUsMzEuOCwxMzYuNiwzMS44LDEzNi43LDMxLjcgTTEyNy43LDM2LjJMMTI3LjcsMzYuMmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDEyNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40VjIybC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MxMjcuNSwzNi40LDEyNy43LDM2LjQsMTI3LjcsMzYuMiBNNTAsMjUuMSBjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuN1M1MCwzNiw1MCwyNS4xIE0xMS43LDI1LjFjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNSBzMTguNSw4LjIsMTguNSwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTEuNywzNS4zLDExLjcsMjUuMSBNMzkuMiwzMS43QzM5LjIsMzEuNiwzOS4yLDMxLjYsMzkuMiwzMS43YzAtMC4yLDAtMC4yLTAuMS0wLjMgYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjIwaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuNyBjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjMgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjMgSDM0djAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUgzOSBDMzksMzEuOCwzOS4yLDMxLjgsMzkuMiwzMS43IE0zMC4yLDM2LjJDMzAuMiwzNi4yLDMwLjMsMzYuMiwzMC4yLDM2LjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuNyB2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC41TDI3LDIyYzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43TDI1LjIsMjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zSDI1djAuMSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFIMzAgQzMwLjEsMzYuNCwzMC4yLDM2LjQsMzAuMiwzNi4yIE01ODcuNCw1MC41YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzU4Ny40LDYxLjQsNTg3LjQsNTAuNSBNNTQ5LDUwLjVjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVTNTc3LjksNjksNTY3LjYsNjlTNTQ5LDYwLjcsNTQ5LDUwLjUgTTU3Ni41LDU3LjEgTDU3Ni41LDU3LjFjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjQgbC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNCB2NS40bC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDU3MWMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zIGMwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMSBoOC4zQzU3Ni40LDU3LjIsNTc2LjUsNTcuMiw1NzYuNSw1Ny4xIE01NjcuNSw2MS43QzU2Ny42LDYxLjcsNTY3LjYsNjEuNyw1NjcuNSw2MS43YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTMgbC0xLjMtNi42bC0wLjMtMS43VjUwaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjUgYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDU2MmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzU2Ny40LDYxLjgsNTY3LjUsNjEuOCw1NjcuNSw2MS43IE00ODkuOSw1MC41YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzQ4OS45LDYxLjQsNDg5LjksNTAuNSBNNDUxLjUsNTAuNWMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNVM0ODAuNCw2OSw0NzAuMSw2OVM0NTEuNSw2MC43LDQ1MS41LDUwLjUgTTQ3OS4xLDU3LjFMNDc5LjEsNTcuMWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjRsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzQ3OC45LDU3LjIsNDc5LDU3LjIsNDc5LjEsNTcuMSBNNDcwLjEsNjEuN0w0NzAuMSw2MS43IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjUwaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0M0NjkuOSw2MS44LDQ3MCw2MS44LDQ3MC4xLDYxLjcgTTM5Mi40LDUwLjVjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBDMzgzLjYsNzAuMiwzOTIuNCw2MS40LDM5Mi40LDUwLjUgTTM1NC4xLDUwLjVjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVTMzgzLDY5LDM3Mi43LDY5IFMzNTQuMSw2MC43LDM1NC4xLDUwLjUgTTM4MS42LDU3LjFMMzgxLjYsNTcuMWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjRsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43IGwtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43SDM3NmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMzgxLjQsNTcuMiwzODEuNiw1Ny4yLDM4MS42LDU3LjEgTTM3Mi42LDYxLjdMMzcyLjYsNjEuNyBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1Y1MGgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43IGwtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42IGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjMgYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xIGg4LjNDMzcyLjQsNjEuOCwzNzIuNiw2MS44LDM3Mi42LDYxLjcgTTI5NSw1MC41YzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdzLTE5LjgsOC44LTE5LjgsMTkuN3M4LjksMTkuNywxOS44LDE5LjcgUzI5NSw2MS40LDI5NSw1MC41IE0yNTYuNiw1MC41YzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41UzI4NS41LDY5LDI3NS4yLDY5UzI1Ni42LDYwLjcsMjU2LjYsNTAuNSBNMjg0LjEsNTcuMUMyODQuMSw1Ny4xLDI4NC4yLDU3LjEsMjg0LjEsNTcuMWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMCBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjRsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43IGwtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNoMC4zdjAuMWMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjYgYy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFoOC4zQzI4NCw1Ny4yLDI4NC4xLDU3LjIsMjg0LjEsNTcuMSBNMjc1LjIsNjEuN0wyNzUuMiw2MS43IGMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43VjUwaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0MyNzUsNjEuOCwyNzUuMSw2MS44LDI3NS4yLDYxLjcgTTE5Ny41LDUwLjVjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBTMTk3LjUsNjEuNCwxOTcuNSw1MC41IE0xNTkuMSw1MC41YzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41UzE4OCw2OSwxNzcuNyw2OVMxNTkuMSw2MC43LDE1OS4xLDUwLjUgTTE4Ni43LDU3LjFMMTg2LjcsNTcuMWMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42bC0wLjMtMS43di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zSDE4M2wtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNHMtMC40LDAuMi0wLjQsMC40djUuNGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMTg2LjUsNTcuMiwxODYuNiw1Ny4yLDE4Ni43LDU3LjEgTTE3Ny43LDYxLjdMMTc3LjcsNjEuNyBjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1Y1MGgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxNzRsLTAuMS0wLjcgbC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBsLTAuMywwLjN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjYgbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuM2MwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuMyBjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjEgaDguM0MxNzcuNSw2MS44LDE3Ny42LDYxLjgsMTc3LjcsNjEuNyBNMTAwLDUwLjVjMC0xMC45LTguOS0xOS43LTE5LjgtMTkuN3MtMTkuOCw4LjgtMTkuOCwxOS43czguOSwxOS43LDE5LjgsMTkuNyBTMTAwLDYxLjQsMTAwLDUwLjUgTTYxLjcsNTAuNUM2MS43LDQwLjMsNzAsMzIsODAuMywzMnMxOC41LDguMywxOC41LDE4LjVTOTAuNSw2OSw4MC4yLDY5UzYxLjcsNjAuNyw2MS43LDUwLjUgTTg5LjIsNTcuMSBMODkuMiw1Ny4xYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40IGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40IGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNGwtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40IGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM0g4NHYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xSDg5Qzg5LDU3LjIsODkuMiw1Ny4yLDg5LjIsNTcuMSBNODAuMiw2MS43TDgwLjIsNjEuN2MwLTAuMiwwLTAuMi0wLjEtMC4zIGMwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN1Y1MGgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjcgYzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwbC0wLjMsMC4zdi01LjZjMC0wLjItMC4yLTAuNC0wLjQtMC40Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjR2NS42bC0wLjMtMC4zIGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIEg3NXYwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM3MwLjIsMC4xLDAuMywwLjFIODAgQzgwLjEsNjEuOCw4MC4yLDYxLjgsODAuMiw2MS43IE01ODcuNCwwYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdTNTQ3LjgtMTAuOSw1NDcuOCwwczguOSwxOS43LDE5LjgsMTkuN1M1ODcuNCwxMC45LDU4Ny40LDAgTTU0OSwwYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTNTQ5LDEwLjIsNTQ5LDAgTTU3Ni41LDYuNiBDNTc2LjUsNi41LDU3Ni41LDYuNSw1NzYuNSw2LjZjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNkw1NzIuOS01di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDU3MWMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjNWLTVjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0M1NzYuNCw2LjcsNTc2LjUsNi43LDU3Ni41LDYuNiBNNTY3LjUsMTEuMiBDNTY3LjYsMTEuMSw1NjcuNiwxMS4xLDU2Ny41LDExLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNmwtMC4zLTEuN3YtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMNTYzLjUtM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNFYtM2wtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuNyBINTYyYy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzIGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0M1NjcuNCwxMS4zLDU2Ny41LDExLjMsNTY3LjUsMTEuMiBNNDg5LjksMGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43IFM0NTAuMy0xMC45LDQ1MC4zLDBzOC45LDE5LjcsMTkuOCwxOS43UzQ4OS45LDEwLjksNDg5LjksMCBNNDUxLjUsMGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41czE4LjYsOC4zLDE4LjYsMTguNSBzLTguMywxOC41LTE4LjYsMTguNVM0NTEuNSwxMC4yLDQ1MS41LDAgTTQ3OS4xLDYuNkM0NzkuMSw2LjUsNDc5LjEsNi41LDQ3OS4xLDYuNmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zIGwtMS4zLTYuNkw0NzUuNS01di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43YzAuMS0wLjEsMC4xLTAuMywwLTAuNSBjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNkw0NzQtNy45Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM1YtNSBjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEM0NzguOSw2LjcsNDc5LDYuNyw0NzkuMSw2LjYgTTQ3MC4xLDExLjJDNDcwLjEsMTEuMSw0NzAuMSwxMS4xLDQ3MC4xLDExLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwTDQ2Ni4xLTN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNFYtM0w0NjUtMy4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDAgcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjEgYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNmMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguMyBDNDY5LjksMTEuMyw0NzAsMTEuMyw0NzAuMSwxMS4yIE0zOTIuNCwwYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdTMzUyLjgtMTAuOSwzNTIuOCwwczguOSwxOS43LDE5LjgsMTkuNyBDMzgzLjYsMTkuNywzOTIuNCwxMC45LDM5Mi40LDAgTTM1NC4xLDBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNXMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMzNTQuMSwxMC4yLDM1NC4xLDAgTTM4MS42LDYuNkMzODEuNiw2LjUsMzgxLjYsNi41LDM4MS42LDYuNmMwLTAuMiwwLTAuMi0wLjEtMC4zYzAsMC0xLjYtMS4zLTEuOS0zbC0xLjMtNi42TDM3OC01di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjVsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43SDM3NmMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjNWLTVjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjMCwwLjEsMC4yLDAuMSwwLjMsMC4xaDguM0MzODEuNCw2LjcsMzgxLjYsNi43LDM4MS42LDYuNiBNMzcyLjYsMTEuMiBDMzcyLjYsMTEuMSwzNzIuNiwxMS4xLDM3Mi42LDExLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNkwzNjktMC40di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuMyBjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMEwzNjguNi0zdi01LjYgYzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40Vi0zbC0wLjMtMC4zYy0wLjEtMC4xLTAuNC0wLjEtMC41LDBzLTAuMSwwLjMsMCwwLjVsMC43LDAuN2wtMC4xLDAuMyBjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zaDAuM3YwLjFjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNzMC4yLDAuMSwwLjMsMC4xaDguM0MzNzIuNCwxMS4zLDM3Mi42LDExLjMsMzcyLjYsMTEuMiBNMjk1LDAgYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjdTMjU1LjQtMTAuOSwyNTUuNCwwczguOSwxOS43LDE5LjgsMTkuN1MyOTUsMTAuOSwyOTUsMCBNMjU2LjYsMGMwLTEwLjIsOC4zLTE4LjUsMTguNi0xOC41IHMxOC42LDguMywxOC42LDE4LjVzLTguMywxOC41LTE4LjYsMTguNVMyNTYuNiwxMC4yLDI1Ni42LDAgTTI4NC4xLDYuNkMyODQuMSw2LjUsMjg0LjIsNi41LDI4NC4xLDYuNmMwLTAuMiwwLTAuMi0wLjEtMC4zIGMwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNkwyODAuNS01di0wLjFoMC4zYzAuMiwwLDAuMy0wLjIsMC4zLTAuM2MwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM2wwLjctMC43IGMwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNkwyNzktNy45IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwcy0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjNjMCwwLTAuMSwwLjQtMC4xLDAuN2gtMC40Yy0wLjIsMC0wLjMsMC4yLTAuMywwLjNjMCwwLjIsMC4yLDAuMywwLjMsMC4zIGgwLjNWLTVjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42Yy0wLjQsMS43LTEuOSwzLTEuOSwzYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM2MwLDAuMSwwLjIsMC4xLDAuMywwLjFoOC4zIEMyODQsNi43LDI4NC4xLDYuNywyODQuMSw2LjYgTTI3NS4yLDExLjJDMjc1LjIsMTEuMSwyNzUuMiwxMS4xLDI3NS4yLDExLjJjMC0wLjIsMC0wLjItMC4xLTAuM2MwLDAtMS42LTEuMy0xLjktM2wtMS4zLTYuNiBsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zYzAtMC4yLTAuMi0wLjMtMC4zLTAuM2gtMC40bC0wLjEtMC43bC0wLjEtMC4zbDAuNy0wLjdjMC4xLTAuMSwwLjEtMC4zLDAtMC41IGMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwTDI3MS4yLTN2LTUuNmMwLTAuMi0wLjItMC40LTAuNC0wLjRjLTAuMiwwLTAuNCwwLjItMC40LDAuNFYtM2wtMC4zLTAuM2MtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xIGMtMC4yLDAuOS0wLjMsMS43LTAuMywxLjdsLTEuMyw2LjZjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjMgQzI3NSwxMS4zLDI3NS4xLDExLjMsMjc1LjIsMTEuMiBNMTk3LjUsMGMwLTEwLjktOC45LTE5LjctMTkuOC0xOS43UzE1Ny45LTEwLjksMTU3LjksMHM4LjksMTkuNywxOS44LDE5LjdTMTk3LjUsMTAuOSwxOTcuNSwwIE0xNTkuMSwwYzAtMTAuMiw4LjMtMTguNSwxOC42LTE4LjVzMTguNiw4LjMsMTguNiwxOC41cy04LjMsMTguNS0xOC42LDE4LjVTMTU5LjEsMTAuMiwxNTkuMSwwIE0xODYuNyw2LjYgQzE4Ni43LDYuNSwxODYuNyw2LjUsMTg2LjcsNi42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZMMTgzLjEtNXYtMC4xaDAuM2MwLjIsMCwwLjMtMC4yLDAuMy0wLjMgYzAtMC4yLTAuMi0wLjMtMC4zLTAuM0gxODNsLTAuMi0wLjlsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGMtMC4xLDAuMS0wLjEsMC4zLDAsMC41bDAuNywwLjdsLTAuMSwwLjMgYzAsMC0wLjEsMC40LTAuMSwwLjdoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuOCBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zYzAsMC4xLDAuMiwwLjEsMC4zLDAuMWg4LjNDMTg2LjUsNi43LDE4Ni42LDYuNywxODYuNyw2LjYgTTE3Ny43LDExLjIgQzE3Ny43LDExLjEsMTc3LjcsMTEuMSwxNzcuNywxMS4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNIMTc0TDE3My44LTJsLTAuMS0wLjNsMC43LTAuN2MwLjEtMC4xLDAuMS0wLjMsMC0wLjVjLTAuMS0wLjEtMC40LTAuMS0wLjUsMGwtMC4zLDAuM3YtNS42IGMwLTAuMi0wLjItMC40LTAuNC0wLjRzLTAuNCwwLjItMC40LDAuNHY1LjZsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43TDE3Mi42LTJjMCwwLTAuMSwwLjQtMC4xLDAuNyBoLTAuNGMtMC4yLDAtMC4zLDAuMi0wLjMsMC4zYzAsMC4yLDAuMiwwLjMsMC4zLDAuM2gwLjN2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuN2MtMC40LDEuNy0xLjksMy0xLjksMyBjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMWg4LjNDMTc3LjUsMTEuMywxNzcuNiwxMS4zLDE3Ny43LDExLjIgTTEwMCwwYzAtMTAuOS04LjktMTkuNy0xOS44LTE5LjcgUzYwLjUtMTAuOSw2MC41LDBzOC45LDE5LjcsMTkuOCwxOS43UzEwMCwxMC45LDEwMCwwIE02MS43LDBjMC0xMC4yLDguMy0xOC41LDE4LjYtMTguNVM5OC44LTEwLjIsOTguOCwwcy04LjMsMTguNS0xOC42LDE4LjUgUzYxLjcsMTAuMiw2MS43LDAgTTg5LjIsNi42Qzg5LjIsNi41LDg5LjIsNi41LDg5LjIsNi42YzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZMODUuNi01di0wLjFoMC4zIGMwLjIsMCwwLjMtMC4yLDAuMy0wLjNjMC0wLjItMC4yLTAuMy0wLjMtMC4zaC0wLjRsLTAuMS0wLjdsLTAuMS0wLjNMODYtNy40YzAuMS0wLjEsMC4xLTAuMywwLTAuNWMtMC4xLTAuMS0wLjQtMC4xLTAuNSwwIGwtMC4zLDAuM3YtNS42YzAtMC4yLTAuMi0wLjQtMC40LTAuNGMtMC4yLDAtMC40LDAuMi0wLjQsMC40djUuNmwtMC4zLTAuM0M4NC04LDgzLjctOCw4My42LTcuOXMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNIODRWLTVjLTAuMiwwLjktMC4zLDEuNy0wLjMsMS43bC0xLjMsNi42IGMtMC40LDEuNy0xLjksMy0xLjksM2MtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjNjLTAuMSwwLjEsMCwwLjEsMC4yLDAuMWg4LjNDODksNi43LDg5LjIsNi43LDg5LjIsNi42IE04MC4yLDExLjIgQzgwLjIsMTEuMSw4MC4yLDExLjEsODAuMiwxMS4yYzAtMC4yLDAtMC4yLTAuMS0wLjNjMCwwLTEuNi0xLjMtMS45LTNsLTEuMy02LjZsLTAuMy0xLjd2LTAuMWgwLjNjMC4yLDAsMC4zLTAuMiwwLjMtMC4zIGMwLTAuMi0wLjItMC4zLTAuMy0wLjNoLTAuNGwtMC4xLTAuN2wtMC4xLTAuM0w3Ny0yLjhjMC4xLTAuMSwwLjEtMC4zLDAtMC41Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMNzYuMi0zdi01LjYgQzc2LjItOC44LDc2LTksNzUuOC05Yy0wLjIsMC0wLjQsMC4yLTAuNCwwLjRWLTNsLTAuMy0wLjNjLTAuMS0wLjEtMC40LTAuMS0wLjUsMHMtMC4xLDAuMywwLDAuNWwwLjcsMC43bC0wLjEsMC4zIGMwLDAtMC4xLDAuNC0wLjEsMC43aC0wLjRjLTAuMiwwLTAuMywwLjItMC4zLDAuM2MwLDAuMiwwLjIsMC4zLDAuMywwLjNINzV2MC4xYy0wLjIsMC45LTAuMywxLjctMC4zLDEuN2wtMS4zLDYuNiBjLTAuNCwxLjctMS45LDMtMS45LDNjLTAuMSwwLjEtMC4xLDAuMi0wLjEsMC4zczAuMiwwLjEsMC4zLDAuMUg4MEM4MC4xLDExLjMsODAuMiwxMS4zLDgwLjIsMTEuMicvJTNFICUzQy9nJTNFICUzQ2cgaWQ9J21hc2snJTNFICUzQy9nJTNFICUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi5yb3VuZC1udW1iZXIucmstcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3VuZC1udW1iZXIucmstd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ucm91bmQtbnVtYmVyLnJrLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3VuZC1udW1iZXIucmsteWVsbG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5yb3VuZC1udW1iZXIucmstZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucm91bmQtbnVtYmVyLnJrLWJsYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvdW5kLW51bWJlci5yay1vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvdW5kLW51bWJlci5yay1ncmF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ucm91bmQtbnVtYmVyLnJrLW1hZ2VudGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3VuZC1udW1iZXIucmstYmx1ZXZpb2xldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnJvdW5kLW51bWJlci5yay1zcHJpbmdncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc3ByaW5nZ3JlZW47XHJcbiAgY29sb3I6IGJyb3duO1xyXG59XHJcbi5yb3VuZC1udW1iZXIucmstbWVkaXVtYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtYmx1ZTtcclxuICBjb2xvcjogbWFnZW50YTtcclxufVxyXG4ucm91bmQtbnVtYmVyLnJrLWNob2NvbGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmJvbGQtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorseRacingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-horse-racing',
          templateUrl: './horse-racing.component.html',
          styleUrls: ['./horse-racing.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/races-table/races-table.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/races-table/races-table.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RacesTableComponent */

  /***/
  function srcAppComponentsRacesTableRacesTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RacesTableComponent", function () {
      return RacesTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_DetailSelected_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/DetailSelected.model */
    "./src/app/models/DetailSelected.model.ts");
    /* harmony import */


    var src_app_services_carreraDetalle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/carreraDetalle.service */
    "./src/app/services/carreraDetalle.service.ts");
    /* harmony import */


    var src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/race-table.service */
    "./src/app/services/race-table.service.ts");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/carrera.service */
    "./src/app/services/carrera.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RacesTableComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r47.number, " ");
      }
    }

    function RacesTableComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RacesTableComponent_td_6_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var element_r48 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.addToFavourites(element_r48, 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r48 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r26.getClass(element_r48, 1));
      }
    }

    function RacesTableComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 2 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RacesTableComponent_td_9_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var element_r51 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.addToFavourites(element_r51, 2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r51 = ctx.$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r28.getClass(element_r51, 2));
      }
    }

    function RacesTableComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RacesTableComponent_td_12_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var element_r54 = ctx.$implicit;

          var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r55.addToFavourites(element_r54, 3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r54 = ctx.$implicit;

        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r30.getClass(element_r54, 3));
      }
    }

    function RacesTableComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " 4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RacesTableComponent_td_15_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var element_r57 = ctx.$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.addToFavourites(element_r57, 4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r57 = ctx.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r32.getClass(element_r57, 4));
      }
    }

    function RacesTableComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ODDS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "12");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "M:18");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RUNNER INFO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Chestnut, Geldin 4 yrs (IN) L");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r62.name);
      }
    }

    function RacesTableComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JOCKEY/RECORD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "12% 687 - 81 - 79 - 79");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r63.jockey);
      }
    }

    function RacesTableComponent_th_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TRAINER/RECORD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "11% 36 - 4 - 3 - 5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r64.trainer);
      }
    }

    function RacesTableComponent_th_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SIRE/DAM");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_td_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Giant Oak");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Whoisvendeladente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RacesTableComponent_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function RacesTableComponent_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    var RacesTableComponent = /*#__PURE__*/function () {
      function RacesTableComponent(carreraDetalleService, raceTableService, ticketService, carreraService) {
        _classCallCheck(this, RacesTableComponent);

        this.carreraDetalleService = carreraDetalleService;
        this.raceTableService = raceTableService;
        this.ticketService = ticketService;
        this.carreraService = carreraService;
        this.ColumnsOrigin = ['position', 'odds', 'pl', 'runner-info', 'jockey', 'trainer', 'sire'];
        this.displayedColumns = [];
        this.selection = new Set();
      }

      _createClass(RacesTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clicked = false;
          var jsonObj = JSON.parse(localStorage.getItem('userData'));
          this.userData = jsonObj;
          this.onGetCarrera();
          this.onGetKindOfBet();
          this.onFetchNextRaces();
        }
      }, {
        key: "onFetchNextRaces",
        value: function onFetchNextRaces() {
          this.carreraService.processingNextRacesByAgentAndPagination(this.userData.AgenteID, 10);
        }
      }, {
        key: "onGetKindOfBet",
        value: function onGetKindOfBet() {
          var _this2 = this;

          this.ticketService.tipoApuesta$.subscribe(function (response) {
            _this2.tipoApuesta = response;

            _this2.proccessingNumberOfOptionsBets(response);
          });
        }
      }, {
        key: "existElement",
        value: function existElement(arr, element) {
          return arr.includes(element);
        }
      }, {
        key: "proccessingNumberOfOptionsBets",
        value: function proccessingNumberOfOptionsBets(kindOfBet) {
          var displayedColumnsOrigin = _toConsumableArray(this.ColumnsOrigin);

          if (kindOfBet.CantidadOpciones == 1) {
            displayedColumnsOrigin.splice(1, 0, 'circles1');
          }

          if (kindOfBet.CantidadOpciones == 2) {
            displayedColumnsOrigin.splice(1, 0, 'circles1');
            displayedColumnsOrigin.splice(2, 0, 'circles2');
          }

          if (kindOfBet.CantidadOpciones == 3) {
            displayedColumnsOrigin.splice(1, 0, 'circles1');
            displayedColumnsOrigin.splice(2, 0, 'circles2');
            displayedColumnsOrigin.splice(3, 0, 'circles3');
          }

          if (kindOfBet.CantidadOpciones == 4) {
            displayedColumnsOrigin.splice(1, 0, 'circles1');
            displayedColumnsOrigin.splice(2, 0, 'circles2');
            displayedColumnsOrigin.splice(3, 0, 'circles3');
            displayedColumnsOrigin.splice(4, 0, 'circles4');
          }

          this.displayedColumns = displayedColumnsOrigin;
        }
      }, {
        key: "onGetCarrera",
        value: function onGetCarrera() {
          var _this3 = this;

          this.ticketService.carrera$.subscribe(function (response) {
            _this3.carrera = response;

            _this3.onFetchCarreraDetail(_this3.userData.AgenteID, _this3.carrera.UID);
          });
        }
      }, {
        key: "onFetchCarreraDetail",
        value: function onFetchCarreraDetail(agenteID, raceID) {
          var _this4 = this;

          var carreraDetail = this.carreraDetalleService.fetchCarreraDetail(agenteID, raceID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
            var carreraDetailArray = [];
            carreraDetailArray.push.apply(carreraDetailArray, _toConsumableArray(response));
            return _this4.dataSource = carreraDetailArray;
          })).subscribe(function (details) {// console.log(details);
          });
        }
      }, {
        key: "AddNewDetailToTicket",
        value: function AddNewDetailToTicket(favourite, index) {
          var detailSelected = this.getDetailSelected(favourite, index);
          this.raceTableService.addDetail(detailSelected, this.tipoApuesta.CantidadOpciones);
        }
      }, {
        key: "addToFavourites",
        value: function addToFavourites(favourite, index) {
          var detailSelected = this.getDetailSelected(favourite, index);

          if (this.raceTableService.existDetailByIndex(detailSelected)) {
            this.raceTableService.removeDetailByNumber(detailSelected, this.tipoApuesta.CantidadOpciones);
          } else {
            this.AddNewDetailToTicket(favourite, index);
          }
        }
      }, {
        key: "getDetailSelected",
        value: function getDetailSelected(favourite, index) {
          var detailSelected = new src_app_models_DetailSelected_model__WEBPACK_IMPORTED_MODULE_2__["DetailSelected"](favourite.UID, favourite.number, index, this.carrera.UID);
          return detailSelected;
        }
      }, {
        key: "getClass",
        value: function getClass(favourite, index) {
          var detailSelected = this.getDetailSelected(favourite, index);
          return this.raceTableService.existDetailByIndex(detailSelected) ? 'circle-container-clicked' : 'circle-container-white';
        }
      }]);

      return RacesTableComponent;
    }();

    RacesTableComponent.ɵfac = function RacesTableComponent_Factory(t) {
      return new (t || RacesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_carreraDetalle_service__WEBPACK_IMPORTED_MODULE_3__["CarreraDetalleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__["RaceTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_6__["CarreraService"]));
    };

    RacesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RacesTableComponent,
      selectors: [["app-races-table"]],
      decls: 36,
      vars: 3,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "circles1"], ["matColumnDef", "circles2"], ["matColumnDef", "circles3"], ["matColumnDef", "circles4"], ["matColumnDef", "odds"], ["matColumnDef", "pl"], ["matColumnDef", "runner-info"], ["matColumnDef", "jockey"], ["matColumnDef", "trainer"], ["matColumnDef", "sire"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "circle-number-container"], [1, "circle-container-white"], [3, "ngClass", "click"], [1, "odds-container"], [1, "name-bold"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function RacesTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RacesTableComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RacesTableComponent_td_3_Template, 4, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RacesTableComponent_th_5_Template, 4, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RacesTableComponent_td_6_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RacesTableComponent_th_8_Template, 4, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RacesTableComponent_td_9_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RacesTableComponent_th_11_Template, 4, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RacesTableComponent_td_12_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RacesTableComponent_th_14_Template, 4, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RacesTableComponent_td_15_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RacesTableComponent_th_17_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RacesTableComponent_td_18_Template, 7, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RacesTableComponent_th_20_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RacesTableComponent_td_21_Template, 2, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RacesTableComponent_th_23_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RacesTableComponent_td_24_Template, 7, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RacesTableComponent_th_26_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RacesTableComponent_td_27_Template, 7, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RacesTableComponent_th_29_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RacesTableComponent_td_30_Template, 7, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RacesTableComponent_th_32_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RacesTableComponent_td_33_Template, 7, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, RacesTableComponent_tr_34_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RacesTableComponent_tr_35_Template, 1, 0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n.mat-header-row[_ngcontent-%COMP%] {\r\n  background-color: #cccbcb;\r\n}\r\n\r\n\r\n.mat-column-position[_ngcontent-%COMP%] {\r\n  width: 32px;\r\n  border-right: 1px solid currentColor;\r\n  padding-right: 24px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.mat-column-circles[_ngcontent-%COMP%] {\r\n  padding-left: 16px;\r\n}\r\n\r\n\r\n.mat-column-runner-info[_ngcontent-%COMP%] {\r\n  padding-left: 16px;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.circle-number-container[_ngcontent-%COMP%] {\r\n  background-color: #cccbcb;\r\n  display: block;\r\n  height: 24px;\r\n  width: 24px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.circle-number-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n.circle-container-white[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  display: block;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 50%;\r\n  border: solid 1px aqua;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.circle-container-clicked[_ngcontent-%COMP%] {\r\n  background-color: aqua;\r\n  display: block;\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 50%;\r\n  border: solid 1px white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.circle-container-white[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 8px;\r\n  color: aqua;\r\n}\r\n\r\n\r\n.odds-container[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n.name-bold[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n@media screen and (max-width:599px){\r\n  table.mat-table[_ngcontent-%COMP%] {\r\n    border-spacing: 0;\r\n    display: block;\r\n    width: 100%;\r\n    overflow: scroll;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYWNlcy10YWJsZS9yYWNlcy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JhY2VzLXRhYmxlL3JhY2VzLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWhlYWRlci1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NiY2I7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXBvc2l0aW9uIHtcclxuICB3aWR0aDogMzJweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNpcmNsZXMge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcnVubmVyLWluZm8ge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtbnVtYmVyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2JjYjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpcmNsZS1udW1iZXItY29udGFpbmVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNpcmNsZS1jb250YWluZXItd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCBhcXVhO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaXJjbGUtY29udGFpbmVyLWNsaWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2lyY2xlLWNvbnRhaW5lci13aGl0ZSBzcGFuIHtcclxuICBmb250LXNpemU6IDhweDtcclxuICBjb2xvcjogYXF1YTtcclxufVxyXG5cclxuLm9kZHMtY29udGFpbmVyLFxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5uYW1lLWJvbGQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7XHJcbiAgdGFibGUubWF0LXRhYmxlIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RacesTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-races-table',
          templateUrl: './races-table.component.html',
          styleUrls: ['./races-table.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_carreraDetalle_service__WEBPACK_IMPORTED_MODULE_3__["CarreraDetalleService"]
        }, {
          type: src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__["RaceTableService"]
        }, {
          type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]
        }, {
          type: src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_6__["CarreraService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ticket-detail/ticket-detail.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/ticket-detail/ticket-detail.component.ts ***!
    \*********************************************************************/

  /*! exports provided: TicketDetailComponent */

  /***/
  function srcAppComponentsTicketDetailTicketDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function () {
      return TicketDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Runners_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Runners.model */
    "./src/app/models/Runners.model.ts");
    /* harmony import */


    var src_app_models_ticket_detalle_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/ticket-detalle.model */
    "./src/app/models/ticket-detalle.model.ts");
    /* harmony import */


    var src_app_models_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/ticket.model */
    "./src/app/models/ticket.model.ts");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/race-table.service */
    "./src/app/services/race-table.service.ts");
    /* harmony import */


    var ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-sharebuttons */
    "./node_modules/ngx-sharebuttons/__ivy_ngcc__/fesm2015/ngx-sharebuttons.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var TicketDetailComponent = /*#__PURE__*/function () {
      function TicketDetailComponent(ticketService, raceTableService, shareService) {
        _classCallCheck(this, TicketDetailComponent);

        this.ticketService = ticketService;
        this.raceTableService = raceTableService;
        this.shareService = shareService;
        this.valorApuesta = 0;
        this.newTicketDetalle = {};
        this.selectedDetailsItems = [];
        this.selectedDetailsItemsDescription = '';
        this.horseDetails = '';
        this.isDisabledToActionsTicket = true;
      }

      _createClass(TicketDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObj = JSON.parse(localStorage.getItem('userData'));
          this.userData = jsonObj;
          this.raceTableService.processingIsThereAnyFavorite();
          this.onGetTicketDetail();
          this.description = '2kwin.bet | Las apuestas donde mas ganas!!';
          this.title = '2kwin.bet | Las apuestas donde mas ganas!!';
          this.url = '2kwin.bet';
        }
      }, {
        key: "onGetTicketDetail",
        value: function onGetTicketDetail() {
          var _this5 = this;

          this.ticketService.hipodromo$.subscribe(function (response) {
            _this5.hipodromo = response;
          });
          this.ticketService.carrera$.subscribe(function (response) {
            _this5.carrera = response;
          });
          this.ticketService.tipoApuesta$.subscribe(function (response) {
            _this5.tipoApuesta = response;
          });
          this.ticketService.valorApuesta$.subscribe(function (response) {
            _this5.valorApuesta = response;
          });
          this.raceTableService.favouritesList$.subscribe(function (response) {
            _this5.selectedDetailsItems = response;

            _this5.processDetailDescription();
          });
          this.raceTableService.isThereAnyfavourite$.subscribe(function (response) {
            _this5.isDisabledToActionsTicket = response;

            _this5.processDetailDescription();
          });
        }
      }, {
        key: "processDetailDescription",
        value: function processDetailDescription() {
          var th = this;
          this.selectedDetailsItemsDescription = '';
          this.selectedDetailsItems.forEach(function (value, index) {
            if (index < 4) th.selectedDetailsItemsDescription += "".concat(value.Number, " (Pos. ").concat(value.Index, ") ");
            if (index == 4) th.selectedDetailsItemsDescription += '...';
          });
        }
      }, {
        key: "onShareTicket",
        value: function onShareTicket() {}
      }, {
        key: "onSaveTicket",
        value: function onSaveTicket() {
          this.processingTicket(false);
        }
      }, {
        key: "onSubmitTicket",
        value: function onSubmitTicket() {
          this.processingTicket(true);
        }
      }, {
        key: "processingTicket",
        value: function processingTicket(isSubmit) {
          var ticket;
          var ticketDetalles = [];
          var ticketDetalle;
          var runners;
          runners = this.selectedDetailsItems.map(function (runner) {
            return new src_app_models_Runners_model__WEBPACK_IMPORTED_MODULE_1__["Runners"](runner.UID, runner.Index, runner.Number, false);
          });
          var numbers = runners.sort(function (a, b) {
            return a.Posicion > b.Posicion ? 1 : -1;
          }).map(function (element) {
            return element.Numero;
          }).join('-');
          ticketDetalle = new src_app_models_ticket_detalle_model__WEBPACK_IMPORTED_MODULE_2__["TicketDetalle"](this.carrera.UID, this.carrera.UID_Hipodromo, this.tipoApuesta.UID, numbers, this.userData.Amount, runners);
          ticketDetalles.push(ticketDetalle);
          ticket = new src_app_models_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"](this.userData.BancaID, this.userData.AgenteID, this.userData.User, 50, this.tipoApuesta.UID, this.tipoApuesta.Nombre, this.userData.Amount, this.valorApuesta, isSubmit, ticketDetalles);
          console.error(ticket);
          this.ticketService.onSubmitTicket(ticket);
        }
      }]);

      return TicketDetailComponent;
    }();

    TicketDetailComponent.ɵfac = function TicketDetailComponent_Factory(t) {
      return new (t || TicketDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_5__["RaceTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_6__["ShareService"]));
    };

    TicketDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TicketDetailComponent,
      selectors: [["app-ticket-detail"]],
      decls: 45,
      vars: 19,
      consts: [[1, "mat-card"], [1, "d-flex", "justify-content-between"], ["mat-dialog-title", ""], [1, "tipo-apuesta", "text-center", "py-1"], [1, "mat-typography"], [1, "d-flex", "flex-column", 2, "margin-bottom", "8px"], [1, "d-flex", "justify-content-between", 2, "margin", "8px 0 8px 0"], [1, "td-row"], [1, "td-soicalmedia-btn"], ["shareButton", "facebook", 1, "fa", "fa-facebook", 3, "url", "title", "description"], ["shareButton", "twitter", 1, "fa", "fa-twitter", 3, "url", "title", "description"], ["shareButton", "whatsapp", 1, "whatsapp", 3, "url", "title", "description"], [1, "fa", "fa-whatsapp", "whatsapp-icon"], [1, "td-process-btn"], ["mat-stroked-button", "", "mat-dialog-close", "", "mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "click"]],
      template: function TicketDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Detalle Apuesta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hipodromo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Carrera: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Apuesta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Caballos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Monto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketDetailComponent_Template_button_click_39_listener() {
            return ctx.onShareTicket();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Share Bet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketDetailComponent_Template_button_click_41_listener() {
            return ctx.onSaveTicket();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save Bet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketDetailComponent_Template_button_click_43_listener() {
            return ctx.onSubmitTicket();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Submit Bet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tipoApuesta.Nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hipodromo.Nombre, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carrera.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tipoApuesta.Nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedDetailsItemsDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.valorApuesta, " ", ctx.userData.Coin, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url)("title", ctx.title)("description", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url)("title", ctx.title)("description", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url)("title", ctx.title)("description", ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabledToActionsTicket);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabledToActionsTicket);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabledToActionsTicket);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_6__["ShareDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"]],
      styles: [".tipo-apuesta[_ngcontent-%COMP%] {\r\n  background-color: rgb(166, 199, 116);\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  color: black;\r\n  width: 3.5rem;\r\n  height: 32px;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]   .mat-divider-horizontal[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-flat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n  margin: 0 4px;\r\n}\r\n\r\n.whatsapp[_ngcontent-%COMP%] {\r\n  \r\n  width:60px;\r\n  height:60px;\r\n  bottom:40px;\r\n  right:40px;\r\n  background-color:#25d366;\r\n  color:#FFF;\r\n  border-radius:50px;\r\n  text-align:center;\r\n  \r\n  z-index:100;\r\n}\r\n\r\n.whatsapp-icon[_ngcontent-%COMP%] {\r\n  \r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  font-size: 20px;\r\n  \r\n  text-align: center;\r\n  text-decoration: none;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  padding: 0;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%]:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.fa-facebook[_ngcontent-%COMP%] {\r\n  background: #3B5998;\r\n  color: white;\r\n}\r\n\r\n.fa-twitter[_ngcontent-%COMP%] {\r\n  background: #55ACEE;\r\n  color: white;\r\n}\r\n\r\n.td-row[_ngcontent-%COMP%]   .td-soicalmedia-btn[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.td-row[_ngcontent-%COMP%]   .td-soicalmedia-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-right: 10px;\r\n  border: unset;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aWNrZXQtZGV0YWlsL3RpY2tldC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZjtpQkFDZTtFQUNmLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlwby1hcHVlc3RhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY2LCAxOTksIDExNik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMy41cmVtO1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIC5tYXQtZGl2aWRlci1ob3Jpem9udGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zLFxyXG4ubWF0LWNhcmQtc3VidGl0bGUsXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uLFxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWZsYXQtYnV0dG9uLFxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgNHB4O1xyXG59XHJcbi53aGF0c2FwcCB7XHJcbiAgLyogLy9wb3NpdGlvbjpmaXhlZDsgKi9cclxuICB3aWR0aDo2MHB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIGJvdHRvbTo0MHB4O1xyXG4gIHJpZ2h0OjQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjVkMzY2O1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIC8qIGZvbnQtc2l6ZTozMHB4OyAqL1xyXG4gIHotaW5kZXg6MTAwO1xyXG59XHJcblxyXG4ud2hhdHNhcHAtaWNvbiB7XHJcbiAgLyogbWFyZ2luLXRvcDoxM3B4OyAqL1xyXG59XHJcbi5mYSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLyogd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZmE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uZmEtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmEtdHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRkLXJvdyAudGQtc29pY2FsbWVkaWEtYnRue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4udGQtcm93IC50ZC1zb2ljYWxtZWRpYS1idG4gYnV0dG9ue1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyOiB1bnNldDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ticket-detail',
          templateUrl: './ticket-detail.component.html',
          styleUrls: ['./ticket-detail.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"]
        }, {
          type: src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_5__["RaceTableService"]
        }, {
          type: ngx_sharebuttons__WEBPACK_IMPORTED_MODULE_6__["ShareService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/toolbar/toolbar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/toolbar/toolbar.component.ts ***!
    \*********************************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppComponentsToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _custom_value_custom_value_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../custom-value/custom-value.component */
    "./src/app/components/custom-value/custom-value.component.ts");
    /* harmony import */


    var src_app_services_hipodromo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/hipodromo.service */
    "./src/app/services/hipodromo.service.ts");
    /* harmony import */


    var src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/carrera.service */
    "./src/app/services/carrera.service.ts");
    /* harmony import */


    var src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/race-table.service */
    "./src/app/services/race-table.service.ts");
    /* harmony import */


    var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/ticket.service */
    "./src/app/services/ticket.service.ts");
    /* harmony import */


    var src_app_services_KindOfBets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/KindOfBets.service */
    "./src/app/services/KindOfBets.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function ToolbarComponent_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_option_6_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var hipo_r5 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSelectHipo(hipo_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hipo_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", hipo_r5.UID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 4, hipo_r5.Fecha, "shortTime"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hipo_r5.Nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hipo_r5.Clasificacion);
      }
    }

    function ToolbarComponent_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_option_11_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var race_r9 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onSelectCarrera(race_r9);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var race_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", race_r9.UID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](race_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](race_r9.post_time);
      }
    }

    function ToolbarComponent_mat_option_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_option_16_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var bet_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.onSelectTipoApuesta(bet_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var bet_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bet_r13.UID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bet_r13.Nombre);
      }
    }

    function ToolbarComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_mat_option_21_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var betValue_r17 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onSelectValorApuesta(betValue_r17.amount);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var betValue_r17 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", betValue_r17.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", betValue_r17.amount, " ", ctx_r3.userData.Coin, "");
      }
    }

    function ToolbarComponent_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r21.Number, " (Pos. ", item_r21.Index, ") \xA0 ");
      }
    }

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent(hipodromoService, carreraService, raceTableService, ticketService, kindOfBetsService, dialog) {
        _classCallCheck(this, ToolbarComponent);

        this.hipodromoService = hipodromoService;
        this.carreraService = carreraService;
        this.raceTableService = raceTableService;
        this.ticketService = ticketService;
        this.kindOfBetsService = kindOfBetsService;
        this.dialog = dialog;
        this.selectedBet = '';
        this.betValueList = [{
          id: 'val-0',
          amount: 10
        }, {
          id: 'val-1',
          amount: 25
        }, {
          id: 'val-2',
          amount: 50
        }, {
          id: 'val-3',
          amount: 100
        }, {
          id: 'val-4',
          amount: 200
        }, {
          id: 'val-5',
          amount: 250
        }, {
          id: 'val-6',
          amount: 500
        }, {
          id: 'val-7',
          amount: 1000
        }, {
          id: 'val-8',
          amount: 2000
        }];
        this.selectedValueBet = 'val-0';
        this.hipodromosList = [];
        this.carrerasList = [];
        this.selectedItems = [];
        this.kindOfBetsList = [];
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObj = JSON.parse(localStorage.getItem('userData'));
          this.userData = jsonObj;
          this.agentId = this.userData.AgenteID;
          this.onFetchHipodromos(this.agentId);
          this.onSelectValorApuesta(this.betValueList[0].amount);
          this.raceTableService.favouritesList$.pipe().subscribe(function (response) {// this.selectedItems = response;
          });
        }
      }, {
        key: "onFetchHipodromos",
        value: function onFetchHipodromos(agentId) {
          var _this6 = this;

          return this.hipodromoService.fetchHipodromos(agentId).subscribe(function (responseData) {
            _this6.hipodromosList = responseData;

            if (_this6.hipodromosList.length > 0) {
              _this6.onSelectHipo(_this6.hipodromosList[0]);
            }
          });
        }
      }, {
        key: "onFetchCarreras",
        value: function onFetchCarreras(agentId, hipodromoId) {
          var _this7 = this;

          return this.carreraService.fetchCarrerasByAgenteIdAndHipodromoId(agentId, hipodromoId).subscribe(function (responseData) {
            _this7.carrerasList = responseData;

            if (_this7.carrerasList.length > 0) {
              _this7.onSelectCarrera(_this7.carrerasList[0]);
            }
          });
        }
      }, {
        key: "onFetchKindOfBets",
        value: function onFetchKindOfBets(UIDKindOfBets) {
          var _this8 = this;

          return this.kindOfBetsService.getKindsOfBets().subscribe(function (responseData) {
            _this8.kindOfBetsList = responseData;

            var defaultValues = _this8.kindOfBetsService.getDefaultKindsOfBets();

            if (UIDKindOfBets !== null) {
              _this8.kindOfBetsList = _this8.kindOfBetsList.filter(function (x) {
                return UIDKindOfBets.includes(x.UID);
              });
              _this8.kindOfBetsList = _this8.kindOfBetsList.concat(responseData.filter(function (x) {
                return defaultValues.includes(x.UID);
              }));
            } else {
              _this8.kindOfBetsList = responseData.filter(function (x) {
                return defaultValues.includes(x.UID);
              });
            }

            _this8.kindOfBetsList = _this8.kindOfBetsList.sort(function (a, b) {
              return a.Orden - b.Orden;
            });

            if (_this8.kindOfBetsList.length > 0) {
              _this8.onSelectTipoApuesta(_this8.kindOfBetsList[0]);
            }
          });
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this9 = this;

          var dialogRef = this.dialog.open(_custom_value_custom_value_component__WEBPACK_IMPORTED_MODULE_1__["CustomValueComponent"], {
            data: {
              id: this.id,
              amount: this.amount
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this9.onSelectValorApuesta(result); //console.log(`result: ${result}`);

          }, function (err) {// console.error(err.message);
          });
        }
      }, {
        key: "onSelectHipo",
        value: function onSelectHipo(hipodromo) {
          this.selectedHipo = hipodromo;
          this.selectedHipodromoUID = hipodromo.UID;
          this.onFetchCarreras(this.agentId, hipodromo.UID);
          this.ticketService.addHipodromoToTicketDetail(hipodromo);
        }
      }, {
        key: "onSelectCarrera",
        value: function onSelectCarrera(race) {
          this.selectedRace = race;
          this.selectedRaceUID = race.UID;
          this.onFetchKindOfBets(race.TipoApuesta);
          this.ticketService.addCarreraToTicketDetail(race);
        }
      }, {
        key: "onSelectTipoApuesta",
        value: function onSelectTipoApuesta(tipoApuesta) {
          this.selectedBet = tipoApuesta.UID;
          this.ticketService.addTipoApuestaToTicketDetail(tipoApuesta);
        }
      }, {
        key: "onSelectValorApuesta",
        value: function onSelectValorApuesta(valorApuesta) {
          this.ticketService.addValorApuestaToTicketDetail(valorApuesta);
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_hipodromo_service__WEBPACK_IMPORTED_MODULE_2__["HipodromoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_3__["CarreraService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__["RaceTableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_KindOfBets_service__WEBPACK_IMPORTED_MODULE_6__["KindOfBetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 33,
      vars: 9,
      consts: [["id", "hipo", "appearance", "fill"], ["name", "hipo", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "race", "appearance", "fill"], ["id", "bet", "appearance", "fill"], ["name", "bet", 3, "ngModel", "ngModelChange"], ["id", "bet-value", "appearance", "fill"], ["name", "betValue", 3, "ngModel", "ngModelChange"], [3, "click"], ["id", "last-section", 1, "button-row"], ["mat-stroked-button", ""], [1, "d-flex"], [4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "time-box"], [1, "hipo-name"], [1, "race-info"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Seleccionar Hipodromo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_mat_select_ngModelChange_5_listener($event) {
            return ctx.selectedHipodromoUID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_mat_option_6_Template, 10, 7, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seleccionar Carrera");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_mat_select_ngModelChange_10_listener($event) {
            return ctx.selectedRaceUID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolbarComponent_mat_option_11_Template, 6, 3, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apuesta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_mat_select_ngModelChange_15_listener($event) {
            return ctx.selectedBet = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ToolbarComponent_mat_option_16_Template, 3, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Valor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToolbarComponent_Template_mat_select_ngModelChange_20_listener($event) {
            return ctx.selectedValueBet = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ToolbarComponent_mat_option_21_Template, 3, 3, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_mat_option_click_22_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Other ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "PPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "VIDEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Seleccionados: \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ToolbarComponent_span_32_Template, 2, 2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedHipodromoUID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hipodromosList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedRaceUID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carrerasList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedBet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kindOfBetsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValueBet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.betValueList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItems);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]],
      styles: [".mat-form-field,\r\n#hipo {\r\n  width: 200px;\r\n  height: 100%;\r\n  font-size: 14px;\r\n  margin-right: 24px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.mat-form-field,\r\n#race {\r\n  width: 170px;\r\n  height: 100%;\r\n  font-size: 14px;\r\n  min-width: 170px;\r\n}\r\n\r\n.cdk-overlay-pane{\r\n  transform: unset!important;\r\n}\r\n\r\n.mat-form-field,\r\n#bet {\r\n  width: 170px;\r\n  height: 100%;\r\n  font-size: 14px;\r\n  margin-right: 24px;\r\n}\r\n\r\n.mat-form-field,\r\n#bet-value {\r\n  width: 100px;\r\n  height: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n.mat-select-panel-wrap .mat-select-panel {\r\n  max-width: 350px;\r\n  min-height: 100%;\r\n  /* margin-top: 40px; */\r\n  border-radius: 10px;\r\n}\r\n\r\n.mat-select-panel-wrap .mat-select-panel .mat-option {\r\n  height: 4em;\r\n}\r\n\r\n.mat-select-panel-wrap .mat-select-panel .mat-option .mat-option-text {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.mat-select-panel-wrap\r\n  .mat-select-panel\r\n  .mat-option\r\n  .mat-option-text\r\n  .time-box {\r\n  width: 100px;\r\n  text-align: center;\r\n  border: 1px solid green;\r\n  border-radius: 4px;\r\n  padding: 4px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.mat-select-panel-wrap\r\n  .mat-select-panel\r\n  .mat-option\r\n  .mat-option-text\r\n  .hipo-name {\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n\r\n.mat-select-panel-wrap\r\n  .mat-select-panel\r\n  .mat-option\r\n  .mat-option-text\r\n  .race-info {\r\n  padding: 4px;\r\n  margin-left: auto;\r\n}\r\n\r\n.button-row .mat-button-base {\r\n  margin: 2px 2px 2px 0px;\r\n}\r\n\r\n#last-section {\r\n  margin-left: auto;\r\n}\r\n\r\n.mat-toolbar .mat-card {\r\n  text-align: center;\r\n  width: 40%;\r\n  margin: 0 auto;\r\n  padding: 4px;\r\n  font-size: 14px;\r\n}\r\n\r\n@media screen and (max-width:599px){\r\n  .mat-toolbar .mat-toolbar-row{\r\n    display: block;\r\n    white-space: unset;\r\n    height: auto;\r\n  }\r\n  .left-content {\r\n    width: 100% !important;\r\n  }\r\n  .mat-form-field {\r\n      width: 48% !important;\r\n      height: 100%;\r\n      font-size: 14px;\r\n      margin-right: 0 !important;\r\n      margin-top: 0 !important;\r\n      margin-top: 15px;\r\n      float: left;\r\n      display: inline-block;\r\n  }\r\n  .mat-form-field:nth-child(2),\r\n  .mat-form-field:nth-child(4) {\r\n    float: right;\r\n  }\r\n  .mat-toolbar .mat-card {\r\n    width: 60% !important;\r\n    margin: unset !important;\r\n  }\r\n  section.button-row {\r\n    position: absolute;\r\n    top: 220px;\r\n    width: 37%;\r\n    right: 0px;\r\n  }\r\n  .mat-toolbar-multiple-rows {\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n  }\r\n  .cdk-overlay-pane{\r\n    left:15px!important;\r\n    top: 130px !important;\r\n    width: 84% !important;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7OztFQUtFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFHQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0kscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixlQUFlO01BQ2YsMEJBQTBCO01BQzFCLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLHFCQUFxQjtFQUN6QjtFQUNBOztJQUVFLFlBQVk7RUFDZDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtFQUNaO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2Qjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQsXHJcbiNoaXBvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLFxyXG4jcmFjZSB7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWluLXdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgdHJhbnNmb3JtOiB1bnNldCFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkLFxyXG4jYmV0IHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCxcclxuI2JldC12YWx1ZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXAgLm1hdC1zZWxlY3QtcGFuZWwge1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICAvKiBtYXJnaW4tdG9wOiA0MHB4OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXAgLm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ge1xyXG4gIGhlaWdodDogNGVtO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdC1wYW5lbC13cmFwIC5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uIC5tYXQtb3B0aW9uLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1zZWxlY3QtcGFuZWwtd3JhcFxyXG4gIC5tYXQtc2VsZWN0LXBhbmVsXHJcbiAgLm1hdC1vcHRpb25cclxuICAubWF0LW9wdGlvbi10ZXh0XHJcbiAgLnRpbWUtYm94IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXBcclxuICAubWF0LXNlbGVjdC1wYW5lbFxyXG4gIC5tYXQtb3B0aW9uXHJcbiAgLm1hdC1vcHRpb24tdGV4dFxyXG4gIC5oaXBvLW5hbWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXBhbmVsLXdyYXBcclxuICAubWF0LXNlbGVjdC1wYW5lbFxyXG4gIC5tYXQtb3B0aW9uXHJcbiAgLm1hdC1vcHRpb24tdGV4dFxyXG4gIC5yYWNlLWluZm8ge1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgbWFyZ2luOiAycHggMnB4IDJweCAwcHg7XHJcbn1cclxuXHJcbiNsYXN0LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIgLm1hdC1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7XHJcbiAgLm1hdC10b29sYmFyIC5tYXQtdG9vbGJhci1yb3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmxlZnQtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICB3aWR0aDogNDglICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQ6bnRoLWNoaWxkKDIpLFxyXG4gIC5tYXQtZm9ybS1maWVsZDpudGgtY2hpbGQoNCkge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICAubWF0LXRvb2xiYXIgLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogdW5zZXQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgc2VjdGlvbi5idXR0b24tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjIwcHg7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmNkay1vdmVybGF5LXBhbmV7XHJcbiAgICBsZWZ0OjE1cHghaW1wb3J0YW50O1xyXG4gICAgdG9wOiAxMzBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDg0JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn0iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: src_app_services_hipodromo_service__WEBPACK_IMPORTED_MODULE_2__["HipodromoService"]
        }, {
          type: src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_3__["CarreraService"]
        }, {
          type: src_app_services_race_table_service__WEBPACK_IMPORTED_MODULE_4__["RaceTableService"]
        }, {
          type: src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"]
        }, {
          type: src_app_services_KindOfBets_service__WEBPACK_IMPORTED_MODULE_6__["KindOfBetsService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/carrera.service */
    "./src/app/services/carrera.service.ts");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/countdown/countdown.component */
    "./src/app/components/countdown/countdown.component.ts");

    function FooterComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-countdown", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var race_r69 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](race_r69.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("raceDate", race_r69.datetime);
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(carreraService) {
        _classCallCheck(this, FooterComponent);

        this.carreraService = carreraService;
        this.races = [];
        this.slideConfig = {
          slidesToShow: 4,
          slidesToScroll: 4
        };
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var jsonObj = JSON.parse(localStorage.getItem('userData'));
          this.userData = jsonObj;
          this.onFetchNextRaces();
        }
      }, {
        key: "slickInit",
        value: function slickInit(e) {}
      }, {
        key: "breakpoint",
        value: function breakpoint(e) {}
      }, {
        key: "afterChange",
        value: function afterChange(e) {}
      }, {
        key: "beforeChange",
        value: function beforeChange(e) {}
      }, {
        key: "onFetchNextRaces",
        value: function onFetchNextRaces() {
          var _this10 = this;

          this.carreraService.nextRacesList.subscribe(function (response) {
            _this10.races = response;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_1__["CarreraService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 4,
      vars: 2,
      consts: [[1, "race-slider"], [1, "carousel", 3, "config", "init", "breakpoint", "afterChange", "beforeChange"], ["slickModal", "slick-carousel"], ["ngxSlickItem", "", "class", "slide", 4, "ngFor", "ngForOf"], ["ngxSlickItem", "", 1, "slide"], [1, "slide-item"], [1, "slide-name"], [3, "raceDate"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngx-slick-carousel", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("init", function FooterComponent_Template_ngx_slick_carousel_init_1_listener($event) {
            return ctx.slickInit($event);
          })("breakpoint", function FooterComponent_Template_ngx_slick_carousel_breakpoint_1_listener($event) {
            return ctx.breakpoint($event);
          })("afterChange", function FooterComponent_Template_ngx_slick_carousel_afterChange_1_listener($event) {
            return ctx.afterChange($event);
          })("beforeChange", function FooterComponent_Template_ngx_slick_carousel_beforeChange_1_listener($event) {
            return ctx.beforeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_div_3_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.slideConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.races);
        }
      },
      directives: [ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_2__["SlickItemDirective"], _components_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__["CountdownComponent"]],
      styles: [".race-slider[_ngcontent-%COMP%] {\r\n  max-width: 96%;\r\n  margin: 0 auto;\r\n  background-color: #042a51;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n  border: 0.6px solid #094481;\r\n  border-left: white;\r\n}\r\n\r\n.slide-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 50px;\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width:599px){\r\n  .race-slider[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFjZS1zbGlkZXIge1xyXG4gIG1heC13aWR0aDogOTYlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDJhNTE7XHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgYm9yZGVyOiAwLjZweCBzb2xpZCAjMDk0NDgxO1xyXG4gIGJvcmRlci1sZWZ0OiB3aGl0ZTtcclxufVxyXG5cclxuLnNsaWRlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7XHJcbiAgLnJhY2Utc2xpZGVyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_carrera_service__WEBPACK_IMPORTED_MODULE_1__["CarreraService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(userService) {
        _classCallCheck(this, HeaderComponent);

        this.userService = userService;
        this.div1 = true;
        var jsonObj = JSON.parse(localStorage.getItem('userData'));
        this.userData = jsonObj;
      }

      _createClass(HeaderComponent, [{
        key: "div1Function",
        value: function div1Function() {
          this.div1 = this.div1 ? false : true; // console.log(.div1);

          this.userService.shareValue(this.div1);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 20,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-tsrk"], ["href", "#", 1, "navbar-brand"], [1, "menu-mobile-button", 3, "click"], [1, "fa", "fa-bars"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "task-menu", "nav-item"], [1, "btn-group"], [1, "form-inline", "my-2", "my-lg-0"], [1, "box-login-user", "text-light"], [1, "name-user"], [1, "name-value"], [1, "balance-user"], [1, "balance-value"], [1, "x"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logo Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.div1Function();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Usuario: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Saldo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.User);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userData.Amount, " ", ctx.userData.Coin, " ");
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]],
      styles: [".loading-task[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-basis: 100%;\r\n  align-items: center;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #80808052;\r\n}\r\n.cssload-dots[_ngcontent-%COMP%] {\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  outline: 1px solid red;\r\n  filter: url(#goo);\r\n  -o-filter: url(#goo);\r\n  -ms-filter: url(#goo);\r\n  -webkit-filter: url(#goo);\r\n  -moz-filter: url(#goo);\r\n}\r\n.menu-mobile-button[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%] {\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  width: 34px;\r\n  height: 34px;\r\n  border-radius: 49px;\r\n  background: rgb(251, 211, 1);\r\n  position: absolute;\r\n  left: 50%;\r\n  transform: translateY(0);\r\n  -o-transform: translateY(0);\r\n  -ms-transform: translateY(0);\r\n  -webkit-transform: translateY(0);\r\n  -moz-transform: translateY(0);\r\n  margin-left: -17.5px;\r\n  margin-top: -17.5px;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(5):before {\r\n  z-index: 100;\r\n  width: 44.5px;\r\n  height: 44.5px;\r\n  margin-left: -21.75px;\r\n  margin-top: -21.75px;\r\n  animation: cssload-dot-colors 4.6s ease infinite;\r\n  -o-animation: cssload-dot-colors 4.6s ease infinite;\r\n  -ms-animation: cssload-dot-colors 4.6s ease infinite;\r\n  -webkit-animation: cssload-dot-colors 4.6s ease infinite;\r\n  -moz-animation: cssload-dot-colors 4.6s ease infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation: cssload-dot-rotate-1 4.6s 0s linear infinite;\r\n  -o-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;\r\n  -ms-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;\r\n  -webkit-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;\r\n  -moz-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(1):before {\r\n  background-color: rgb(255, 50, 112);\r\n  animation: cssload-dot-move 4.6s 0s ease infinite;\r\n  -o-animation: cssload-dot-move 4.6s 0s ease infinite;\r\n  -ms-animation: cssload-dot-move 4.6s 0s ease infinite;\r\n  -webkit-animation: cssload-dot-move 4.6s 0s ease infinite;\r\n  -moz-animation: cssload-dot-move 4.6s 0s ease infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;\r\n  -o-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;\r\n  -ms-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;\r\n  -webkit-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;\r\n  -moz-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(2):before {\r\n  background-color: rgb(32, 139, 241);\r\n  animation: cssload-dot-move 4.6s 1.15s ease infinite;\r\n  -o-animation: cssload-dot-move 4.6s 1.15s ease infinite;\r\n  -ms-animation: cssload-dot-move 4.6s 1.15s ease infinite;\r\n  -webkit-animation: cssload-dot-move 4.6s 1.15s ease infinite;\r\n  -moz-animation: cssload-dot-move 4.6s 1.15s ease infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;\r\n  -o-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;\r\n  -ms-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;\r\n  -webkit-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;\r\n  -moz-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(3):before {\r\n  background-color: rgb(175, 225, 2);\r\n  animation: cssload-dot-move 4.6s 2.3s ease infinite;\r\n  -o-animation: cssload-dot-move 4.6s 2.3s ease infinite;\r\n  -ms-animation: cssload-dot-move 4.6s 2.3s ease infinite;\r\n  -webkit-animation: cssload-dot-move 4.6s 2.3s ease infinite;\r\n  -moz-animation: cssload-dot-move 4.6s 2.3s ease infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(4) {\r\n  animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;\r\n  -o-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;\r\n  -ms-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;\r\n  -webkit-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;\r\n  -moz-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;\r\n}\r\n.cssload-dot[_ngcontent-%COMP%]:nth-child(4):before {\r\n  background-color: rgb(251, 211, 1);\r\n  animation: cssload-dot-move 4.6s 3.45s ease infinite;\r\n  -o-animation: cssload-dot-move 4.6s 3.45s ease infinite;\r\n  -ms-animation: cssload-dot-move 4.6s 3.45s ease infinite;\r\n  -webkit-animation: cssload-dot-move 4.6s 3.45s ease infinite;\r\n  -moz-animation: cssload-dot-move 4.6s 3.45s ease infinite;\r\n}\r\n@media screen and (max-width:520px){\r\n  .menu-mobile-button[_ngcontent-%COMP%]{\r\n    display: block;\r\n    background: #fff;\r\n    color: #000;\r\n    border: unset;\r\n    outline: unset;\r\n  }\r\n}\r\n@keyframes cssload-dot-move {\r\n  0% {\r\n    transform: translateY(0);\r\n  }\r\n  18%,\r\n  22% {\r\n    transform: translateY(-68px);\r\n  }\r\n  40%,\r\n  100% {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-move {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n  }\r\n  18%,\r\n  22% {\r\n    -webkit-transform: translateY(-68px);\r\n  }\r\n  40%,\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n  }\r\n}\r\n@keyframes cssload-dot-colors {\r\n  0% {\r\n    background-color: rgb(251, 211, 1);\r\n  }\r\n  25% {\r\n    background-color: rgb(255, 50, 112);\r\n  }\r\n  50% {\r\n    background-color: rgb(32, 139, 241);\r\n  }\r\n  75% {\r\n    background-color: rgb(175, 225, 2);\r\n  }\r\n  100% {\r\n    background-color: rgb(251, 211, 1);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-colors {\r\n  0% {\r\n    background-color: rgb(251, 211, 1);\r\n  }\r\n  25% {\r\n    background-color: rgb(255, 50, 112);\r\n  }\r\n  50% {\r\n    background-color: rgb(32, 139, 241);\r\n  }\r\n  75% {\r\n    background-color: rgb(175, 225, 2);\r\n  }\r\n  100% {\r\n    background-color: rgb(251, 211, 1);\r\n  }\r\n}\r\n@keyframes cssload-dot-rotate-1 {\r\n  0% {\r\n    transform: rotate(-105deg);\r\n  }\r\n  100% {\r\n    transform: rotate(270deg);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-rotate-1 {\r\n  0% {\r\n    -webkit-transform: rotate(-105deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(270deg);\r\n  }\r\n}\r\n@keyframes cssload-dot-rotate-2 {\r\n  0% {\r\n    transform: rotate(165deg);\r\n  }\r\n  100% {\r\n    transform: rotate(540deg);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-rotate-2 {\r\n  0% {\r\n    -webkit-transform: rotate(165deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(540deg);\r\n  }\r\n}\r\n@keyframes cssload-dot-rotate-3 {\r\n  0% {\r\n    transform: rotate(435deg);\r\n  }\r\n  100% {\r\n    transform: rotate(810deg);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-rotate-3 {\r\n  0% {\r\n    -webkit-transform: rotate(435deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(810deg);\r\n  }\r\n}\r\n@keyframes cssload-dot-rotate-4 {\r\n  0% {\r\n    transform: rotate(705deg);\r\n  }\r\n  100% {\r\n    transform: rotate(1080deg);\r\n  }\r\n}\r\n@-webkit-keyframes cssload-dot-rotate-4 {\r\n  0% {\r\n    -webkit-transform: rotate(705deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(1080deg);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixnREFBZ0Q7RUFDaEQsbURBQW1EO0VBQ25ELG9EQUFvRDtFQUNwRCx3REFBd0Q7RUFDeEQscURBQXFEO0FBQ3ZEO0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsMERBQTBEO0VBQzFELDJEQUEyRDtFQUMzRCwrREFBK0Q7RUFDL0QsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsaURBQWlEO0VBQ2pELG9EQUFvRDtFQUNwRCxxREFBcUQ7RUFDckQseURBQXlEO0VBQ3pELHNEQUFzRDtBQUN4RDtBQUVBO0VBQ0UsMERBQTBEO0VBQzFELDZEQUE2RDtFQUM3RCw4REFBOEQ7RUFDOUQsa0VBQWtFO0VBQ2xFLCtEQUErRDtBQUNqRTtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9EQUFvRDtFQUNwRCx1REFBdUQ7RUFDdkQsd0RBQXdEO0VBQ3hELDREQUE0RDtFQUM1RCx5REFBeUQ7QUFDM0Q7QUFFQTtFQUNFLHlEQUF5RDtFQUN6RCw0REFBNEQ7RUFDNUQsNkRBQTZEO0VBQzdELGlFQUFpRTtFQUNqRSw4REFBOEQ7QUFDaEU7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxtREFBbUQ7RUFDbkQsc0RBQXNEO0VBQ3RELHVEQUF1RDtFQUN2RCwyREFBMkQ7RUFDM0Qsd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSwwREFBMEQ7RUFDMUQsNkRBQTZEO0VBQzdELDhEQUE4RDtFQUM5RCxrRUFBa0U7RUFDbEUsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsb0RBQW9EO0VBQ3BELHVEQUF1RDtFQUN2RCx3REFBd0Q7RUFDeEQsNERBQTREO0VBQzVELHlEQUF5RDtBQUMzRDtBQUdBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUNGO0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBOztJQUVFLDRCQUE0QjtFQUM5QjtFQUNBOztJQUVFLHdCQUF3QjtFQUMxQjtBQUNGO0FBOEJBO0VBQ0U7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTs7SUFFRSxvQ0FBb0M7RUFDdEM7RUFDQTs7SUFFRSxnQ0FBZ0M7RUFDbEM7QUFDRjtBQWdCQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtBQXNDQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLG1DQUFtQztFQUNyQztFQUNBO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQW9CQTtFQUNFO0lBQ0Usa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjtBQVdBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGO0FBV0E7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFvQkE7RUFDRTtJQUNFLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsaUNBQWlDO0VBQ25DO0FBQ0Y7QUFXQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvYWRpbmctdGFzayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1iYXNpczogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwNTI7XHJcbn1cclxuLmNzc2xvYWQtZG90cyB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XHJcbiAgZmlsdGVyOiB1cmwoI2dvbyk7XHJcbiAgLW8tZmlsdGVyOiB1cmwoI2dvbyk7XHJcbiAgLW1zLWZpbHRlcjogdXJsKCNnb28pO1xyXG4gIC13ZWJraXQtZmlsdGVyOiB1cmwoI2dvbyk7XHJcbiAgLW1vei1maWx0ZXI6IHVybCgjZ29vKTtcclxufVxyXG4ubWVudS1tb2JpbGUtYnV0dG9ue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmNzc2xvYWQtZG90IHtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5jc3Nsb2FkLWRvdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBib3JkZXItcmFkaXVzOiA0OXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTEsIDIxMSwgMSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNy41cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE3LjVweDtcclxufVxyXG5cclxuLmNzc2xvYWQtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB3aWR0aDogNDQuNXB4O1xyXG4gIGhlaWdodDogNDQuNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjEuNzVweDtcclxuICBtYXJnaW4tdG9wOiAtMjEuNzVweDtcclxuICBhbmltYXRpb246IGNzc2xvYWQtZG90LWNvbG9ycyA0LjZzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1jb2xvcnMgNC42cyBlYXNlIGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtZG90LWNvbG9ycyA0LjZzIGVhc2UgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtZG90LWNvbG9ycyA0LjZzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtZG90LWNvbG9ycyA0LjZzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jc3Nsb2FkLWRvdDpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbjogY3NzbG9hZC1kb3Qtcm90YXRlLTEgNC42cyAwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtMSA0LjZzIDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtMSA0LjZzIDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1kb3Qtcm90YXRlLTEgNC42cyAwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0xIDQuNnMgMHMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5jc3Nsb2FkLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MCwgMTEyKTtcclxuICBhbmltYXRpb246IGNzc2xvYWQtZG90LW1vdmUgNC42cyAwcyBlYXNlIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDBzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDBzIGVhc2UgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtZG90LW1vdmUgNC42cyAwcyBlYXNlIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMHMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNzc2xvYWQtZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtMiA0LjZzIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0yIDQuNnMgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0yIDQuNnMgMS4xNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtMiA0LjZzIDEuMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogY3NzbG9hZC1kb3Qtcm90YXRlLTIgNC42cyAxLjE1cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmNzc2xvYWQtZG90Om50aC1jaGlsZCgyKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTM5LCAyNDEpO1xyXG4gIGFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDEuMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMS4xNXMgZWFzZSBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMS4xNXMgZWFzZSBpbmZpbml0ZTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDEuMTVzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtZG90LW1vdmUgNC42cyAxLjE1cyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG4uY3NzbG9hZC1kb3Q6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0zIDQuNnMgMi4zcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtMyA0LjZzIDIuM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0zIDQuNnMgMi4zcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0zIDQuNnMgMi4zcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS0zIDQuNnMgMi4zcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmNzc2xvYWQtZG90Om50aC1jaGlsZCgzKTpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDIyNSwgMik7XHJcbiAgYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMi4zcyBlYXNlIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDIuM3MgZWFzZSBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMi4zcyBlYXNlIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMi4zcyBlYXNlIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMi4zcyBlYXNlIGluZmluaXRlO1xyXG59XHJcblxyXG4uY3NzbG9hZC1kb3Q6bnRoLWNoaWxkKDQpIHtcclxuICBhbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS00IDQuNnMgMy40NXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1kb3Qtcm90YXRlLTQgNC42cyAzLjQ1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogY3NzbG9hZC1kb3Qtcm90YXRlLTQgNC42cyAzLjQ1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtZG90LXJvdGF0ZS00IDQuNnMgMy40NXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1yb3RhdGUtNCA0LjZzIDMuNDVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4uY3NzbG9hZC1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjExLCAxKTtcclxuICBhbmltYXRpb246IGNzc2xvYWQtZG90LW1vdmUgNC42cyAzLjQ1cyBlYXNlIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDMuNDVzIGVhc2UgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogY3NzbG9hZC1kb3QtbW92ZSA0LjZzIDMuNDVzIGVhc2UgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGNzc2xvYWQtZG90LW1vdmUgNC42cyAzLjQ1cyBlYXNlIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLWRvdC1tb3ZlIDQuNnMgMy40NXMgZWFzZSBpbmZpbml0ZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTIwcHgpe1xyXG4gIC5tZW51LW1vYmlsZS1idXR0b257XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICBvdXRsaW5lOiB1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1kb3QtbW92ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAxOCUsXHJcbiAgMjIlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjhweCk7XHJcbiAgfVxyXG4gIDQwJSxcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1kb3QtbW92ZSB7XHJcbiAgMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuICAxOCUsXHJcbiAgMjIlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjhweCk7XHJcbiAgfVxyXG4gIDQwJSxcclxuICAxMDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtZG90LW1vdmUge1xyXG4gIDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDE4JSxcclxuICAyMiUge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjhweCk7XHJcbiAgfVxyXG4gIDQwJSxcclxuICAxMDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1kb3QtbW92ZSB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDE4JSxcclxuICAyMiUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTY4cHgpO1xyXG4gIH1cclxuICA0MCUsXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1tb3ZlIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgMTglLFxyXG4gIDIyJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjhweCk7XHJcbiAgfVxyXG4gIDQwJSxcclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjc3Nsb2FkLWRvdC1jb2xvcnMge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgMSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MCwgMTEyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTM5LCAyNDEpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjI1LCAyKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1jb2xvcnMge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgMSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MCwgMTEyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTM5LCAyNDEpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjI1LCAyKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1kb3QtY29sb3JzIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDEpO1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNTAsIDExMik7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDEzOSwgMjQxKTtcclxuICB9XHJcbiAgNzUlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzUsIDIyNSwgMik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjExLCAxKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1jb2xvcnMge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgMSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA1MCwgMTEyKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMTM5LCAyNDEpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NSwgMjI1LCAyKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMTEsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtZG90LWNvbG9ycyB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjExLCAxKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDUwLCAxMTIpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAxMzksIDI0MSk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc1LCAyMjUsIDIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIxMSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTA1ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtMSB7XHJcbiAgMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTEwNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTEwNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTEge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS0xIHtcclxuICAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE2NWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTIge1xyXG4gIDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDE2NWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS0yIHtcclxuICAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTY1ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtMiB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtMiB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxNjVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNTQwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTMge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQzNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTMge1xyXG4gIDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQzNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS0zIHtcclxuICAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDM1ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtMyB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MzVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtMyB7XHJcbiAgMCUge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0MzVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTQge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDcwNWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGNzc2xvYWQtZG90LXJvdGF0ZS00IHtcclxuICAwJSB7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg3MDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTQge1xyXG4gIDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg3MDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMDgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjc3Nsb2FkLWRvdC1yb3RhdGUtNCB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg3MDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1kb3Qtcm90YXRlLTQge1xyXG4gIDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNzA1ZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/DetailSelected.model.ts":
  /*!************************************************!*\
    !*** ./src/app/models/DetailSelected.model.ts ***!
    \************************************************/

  /*! exports provided: DetailSelected */

  /***/
  function srcAppModelsDetailSelectedModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailSelected", function () {
      return DetailSelected;
    });

    var DetailSelected = function DetailSelected(UID, Number, Index, UIDRacing) {
      _classCallCheck(this, DetailSelected);

      this.UID = UID;
      this.Number = Number;
      this.Index = Index;
      this.UIDRacing = UIDRacing;
    };
    /***/

  },

  /***/
  "./src/app/models/Runners.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/Runners.model.ts ***!
    \*****************************************/

  /*! exports provided: Runners */

  /***/
  function srcAppModelsRunnersModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Runners", function () {
      return Runners;
    });

    var Runners = function Runners(UID_CarreraDetalle, Posicion, Numero, Eliminado) {
      _classCallCheck(this, Runners);

      this.UID_CarreraDetalle = UID_CarreraDetalle;
      this.Posicion = Posicion;
      this.Numero = Numero;
      this.Eliminado = Eliminado;
    };
    /***/

  },

  /***/
  "./src/app/models/ticket-detalle.model.ts":
  /*!************************************************!*\
    !*** ./src/app/models/ticket-detalle.model.ts ***!
    \************************************************/

  /*! exports provided: TicketDetalle */

  /***/
  function srcAppModelsTicketDetalleModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketDetalle", function () {
      return TicketDetalle;
    });

    var TicketDetalle = function TicketDetalle(UID_Carrera, UID_Hipodromo, UID_TipoApuesta, Numbers, valorApuesta, Runners) {
      _classCallCheck(this, TicketDetalle);

      this.UID_Carrera = UID_Carrera;
      this.UID_Hipodromo = UID_Hipodromo;
      this.UID_TipoApuesta = UID_TipoApuesta;
      this.Numbers = Numbers;
      this.valorApuesta = valorApuesta;
      this.Runners = Runners;
    };
    /***/

  },

  /***/
  "./src/app/models/ticket.model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/ticket.model.ts ***!
    \****************************************/

  /*! exports provided: Ticket */

  /***/
  function srcAppModelsTicketModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ticket", function () {
      return Ticket;
    });

    var Ticket = function Ticket(UID_Banca, UID_Agente, Usuario, CantidadUnidades, UID_TipoApuesta, TipoApuesta, saldo, Monto, Submit, Detalle) {
      _classCallCheck(this, Ticket);

      this.UID_Banca = UID_Banca;
      this.UID_Agente = UID_Agente;
      this.Usuario = Usuario;
      this.CantidadUnidades = CantidadUnidades;
      this.UID_TipoApuesta = UID_TipoApuesta;
      this.TipoApuesta = TipoApuesta;
      this.saldo = saldo;
      this.Monto = Monto;
      this.Submit = Submit;
      this.Detalle = Detalle;
    };
    /***/

  },

  /***/
  "./src/app/services/KindOfBets.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/KindOfBets.service.ts ***!
    \************************************************/

  /*! exports provided: KindOfBetsService */

  /***/
  function srcAppServicesKindOfBetsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KindOfBetsService", function () {
      return KindOfBetsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var KindOfBetsService = /*#__PURE__*/function () {
      function KindOfBetsService(http) {
        _classCallCheck(this, KindOfBetsService);

        this.http = http;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_API;
        this.kindOfBetsResource = 'TipoApuesta';
      }

      _createClass(KindOfBetsService, [{
        key: "getKindsOfBets",
        value: function getKindsOfBets() {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.kindOfBetsResource));
        }
      }, {
        key: "getDefaultKindsOfBets",
        value: function getDefaultKindsOfBets() {
          return ['00fe01a93220a22764301f949c51b04ef067d2c8ab2b15e9aa07e5b98fd27d5b', '4c323e8ebc0b0ffbd970817cd00b09ed7a34fe870c38ec18bf9682e18a93c799', '4c323e8ebc0b0ffbd970817cd00b09e90rt0f0fdg0c38ec18bf9682e18a93c799'];
        }
      }]);

      return KindOfBetsService;
    }();

    KindOfBetsService.ɵfac = function KindOfBetsService_Factory(t) {
      return new (t || KindOfBetsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    KindOfBetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KindOfBetsService,
      factory: KindOfBetsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KindOfBetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/carrera.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/carrera.service.ts ***!
    \*********************************************/

  /*! exports provided: CarreraService */

  /***/
  function srcAppServicesCarreraServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarreraService", function () {
      return CarreraService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CarreraService = /*#__PURE__*/function () {
      function CarreraService(http) {
        _classCallCheck(this, CarreraService);

        this.http = http;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL_API;
        this.carreraResource = 'Carrera';
        this.nextRacesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
      }

      _createClass(CarreraService, [{
        key: "fetchCarrerasByHipodromoId",
        value: function fetchCarrerasByHipodromoId(hipodromoId) {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.carreraResource, "/").concat(hipodromoId));
        }
      }, {
        key: "fetchCarrerasByAgenteIdAndHipodromoId",
        value: function fetchCarrerasByAgenteIdAndHipodromoId(agenteID, hipodromoID) {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.carreraResource, "/").concat(agenteID, "/").concat(hipodromoID));
        }
      }, {
        key: "processingNextRacesByAgentAndPagination",
        value: function processingNextRacesByAgentAndPagination(agentID, pagination) {
          var _this11 = this;

          this.fetchNextRacesByAgentIdAndPagination(agentID, pagination).subscribe(function (responseData) {
            _this11.nextRacesList.next(responseData);
          });
        }
      }, {
        key: "fetchNextRacesByAgentIdAndPagination",
        value: function fetchNextRacesByAgentIdAndPagination(agentID, pagination) {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.carreraResource, "/").concat(agentID, "/").concat(pagination, "/Next"));
        }
      }]);

      return CarreraService;
    }();

    CarreraService.ɵfac = function CarreraService_Factory(t) {
      return new (t || CarreraService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    CarreraService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CarreraService,
      factory: CarreraService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarreraService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/carreraDetalle.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/carreraDetalle.service.ts ***!
    \****************************************************/

  /*! exports provided: CarreraDetalleService */

  /***/
  function srcAppServicesCarreraDetalleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarreraDetalleService", function () {
      return CarreraDetalleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CarreraDetalleService = /*#__PURE__*/function () {
      function CarreraDetalleService(http) {
        _classCallCheck(this, CarreraDetalleService);

        this.http = http;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_API;
        this.carreraDetalleResource = 'CarreraDetalle';
      }

      _createClass(CarreraDetalleService, [{
        key: "fetchCarreraDetail",
        value: function fetchCarreraDetail(agenteID, raceID) {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.carreraDetalleResource, "/").concat(agenteID, "/").concat(raceID));
        }
      }]);

      return CarreraDetalleService;
    }();

    CarreraDetalleService.ɵfac = function CarreraDetalleService_Factory(t) {
      return new (t || CarreraDetalleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CarreraDetalleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CarreraDetalleService,
      factory: CarreraDetalleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarreraDetalleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/hipodromo.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/hipodromo.service.ts ***!
    \***********************************************/

  /*! exports provided: HipodromoService */

  /***/
  function srcAppServicesHipodromoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HipodromoService", function () {
      return HipodromoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HipodromoService = /*#__PURE__*/function () {
      function HipodromoService(http) {
        _classCallCheck(this, HipodromoService);

        this.http = http;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_API;
        this.hipodromoResource = 'Hipodromo';
      }

      _createClass(HipodromoService, [{
        key: "fetchHipodromos",
        value: function fetchHipodromos(agentId) {
          return this.http.get("".concat(this.SERVER_URL, "/").concat(this.hipodromoResource, "/").concat(agentId));
        }
      }]);

      return HipodromoService;
    }();

    HipodromoService.ɵfac = function HipodromoService_Factory(t) {
      return new (t || HipodromoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    HipodromoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HipodromoService,
      factory: HipodromoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HipodromoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/race-table.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/race-table.service.ts ***!
    \************************************************/

  /*! exports provided: RaceTableService */

  /***/
  function srcAppServicesRaceTableServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RaceTableService", function () {
      return RaceTableService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RaceTableService = /*#__PURE__*/function () {
      function RaceTableService() {
        _classCallCheck(this, RaceTableService);

        this.favouritesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.isThereAnyfavourite = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.favouritesList$ = this.favouritesList.asObservable();
        this.isThereAnyfavourite$ = this.isThereAnyfavourite.asObservable();
      }

      _createClass(RaceTableService, [{
        key: "getNumberOfDetails",
        value: function getNumberOfDetails() {
          return this.favouritesList.value.length;
        }
      }, {
        key: "addDetail",
        value: function addDetail(favourite, options) {
          if (this.getNumberOfDetails() === 0) {
            this.favouritesList.next(this.favouritesList.getValue().concat(favourite));
          } else {
            var detailElement = this.favouritesList.value.filter(function (x) {
              return x.Index === favourite.Index && x.Number === favourite.Number && x.UIDRacing === favourite.UIDRacing;
            })[0];

            if (detailElement === undefined) {
              this.favouritesList.next(this.favouritesList.getValue().concat(favourite));
            }
          }

          this.processingIsThereAnyFavorite();
        }
      }, {
        key: "processingIsThereAnyFavorite",
        value: function processingIsThereAnyFavorite() {
          this.isThereAnyfavourite.next(this.favouritesList.value.length == 0);
        }
      }, {
        key: "removeDetailByNumber",
        value: function removeDetailByNumber(favourite, options) {
          var detailElementGeneral = this.favouritesList.value.filter(function (x) {
            return x.Number === favourite.Number && x.Index === favourite.Index;
          })[0];
          var indexArr = this.favouritesList.value.indexOf(detailElementGeneral, 0);

          if (indexArr > -1) {
            this.favouritesList.value.splice(indexArr, 1);
          }

          this.processingIsThereAnyFavorite();
        }
      }, {
        key: "removeDetailByNumberAndIndex",
        value: function removeDetailByNumberAndIndex(favourite) {
          var detailElement = this.favouritesList.value.filter(function (x) {
            return x.Number === favourite.Number && x.Index === favourite.Index;
          })[0];
          var index = this.favouritesList.value.indexOf(detailElement, 0);

          if (index > -1) {
            this.favouritesList.value.splice(index, 1);
          }

          this.processingIsThereAnyFavorite();
        }
      }, {
        key: "existDetailByIndex",
        value: function existDetailByIndex(favourite) {
          return this.favouritesList.value.filter(function (x) {
            return x.Number === favourite.Number && x.Index === favourite.Index;
          }).length > 0;
        }
      }]);

      return RaceTableService;
    }();

    RaceTableService.ɵfac = function RaceTableService_Factory(t) {
      return new (t || RaceTableService)();
    };

    RaceTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RaceTableService,
      factory: RaceTableService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RaceTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/ticket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/ticket.service.ts ***!
    \********************************************/

  /*! exports provided: TicketService */

  /***/
  function srcAppServicesTicketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketService", function () {
      return TicketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TicketService = /*#__PURE__*/function () {
      function TicketService(http) {
        _classCallCheck(this, TicketService);

        this.http = http;
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL_API;
        this.ticketResource = 'Ticket';
        this.hipodromo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.hipodromo$ = this.hipodromo.asObservable();
        this.carrera = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.carrera$ = this.carrera.asObservable();
        this.tipoApuesta = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.tipoApuesta$ = this.tipoApuesta.asObservable();
        this.valorApuesta = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.valorApuesta$ = this.valorApuesta.asObservable();
        this.seleccionados = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.seleccionados$ = this.seleccionados.asObservable();
      }

      _createClass(TicketService, [{
        key: "addHipodromoToTicketDetail",
        value: function addHipodromoToTicketDetail(hipodromo) {
          this.hipodromo.next(hipodromo);
        }
      }, {
        key: "addCarreraToTicketDetail",
        value: function addCarreraToTicketDetail(carrera) {
          this.carrera.next(carrera);
        }
      }, {
        key: "addTipoApuestaToTicketDetail",
        value: function addTipoApuestaToTicketDetail(tipoApuesta) {
          this.tipoApuesta.next(tipoApuesta);
        }
      }, {
        key: "addValorApuestaToTicketDetail",
        value: function addValorApuestaToTicketDetail(valorApuesta) {
          this.valorApuesta.next(valorApuesta);
        }
      }, {
        key: "onSubmitTicket",
        value: function onSubmitTicket(ticket) {
          return this.http.post("".concat(this.SERVER_URL, "/").concat(this.ticketResource), ticket).toPromise().then(function (result) {
            console.error(result);
            return this.extractData(result);
          }.bind(this))["catch"](function (result) {
            console.error(result);
            return this.extractData(result);
          });
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res.json();
          return body;
        }
      }]);

      return TicketService;
    }();

    TicketService.ɵfac = function TicketService_Factory(t) {
      return new (t || TicketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    TicketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TicketService,
      factory: TicketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TicketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.content = this.data.asObservable();
        this.SERVER_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].URL_API;
      }

      _createClass(UserService, [{
        key: "getUserData",
        value: function getUserData(user, banca) {
          return this.http.get("".concat(this.SERVER_URL, "/APITest/User/").concat(user, "/").concat(banca));
        }
      }, {
        key: "shareValue",
        value: function shareValue(value) {
          this.data.next(value); // console.log('fds',value);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
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
    });

    var environment = {
      production: false,
      URL_API: 'http://209.172.47.156:4500'
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Applications/XAMPP/xamppfiles/htdocs/project/angular/app-horseracing/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map