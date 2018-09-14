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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-view name=\"content\"></ui-view>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mydatepicker */ "./node_modules/ngx-mydatepicker/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/index.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/fesm5/ncstate-sat-popover.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var app_app_states__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/app.states */ "./src/app/app.states.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/components/containers/scrumboard/scrumboard.component */ "./src/app/components/containers/scrumboard/scrumboard.component.ts");
/* harmony import */ var app_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/components/avatar/avatar.component */ "./src/app/components/avatar/avatar.component.ts");
/* harmony import */ var app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/components/containers/issueboard/issueboard.component */ "./src/app/components/containers/issueboard/issueboard.component.ts");
/* harmony import */ var app_components_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var app_components_marker_marker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/components/marker/marker.component */ "./src/app/components/marker/marker.component.ts");
/* harmony import */ var app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");
/* harmony import */ var _pipes_group_scrums_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/group-scrums.pipe */ "./src/app/pipes/group-scrums.pipe.ts");
/* harmony import */ var _pipes_group_issues_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/group-issues.pipe */ "./src/app/pipes/group-issues.pipe.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _services_interceptors_token_service_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/interceptors/token-service.service */ "./src/app/services/interceptors/token-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR MODULES




// INSTALLED MODULES










// IMPORTED FROM PROJECT












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_16__["ScrumboardComponent"],
                app_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__["AvatarComponent"],
                app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_18__["IssueboardComponent"],
                app_components_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                app_components_marker_marker_component__WEBPACK_IMPORTED_MODULE_20__["MarkerComponent"],
                app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _pipes_group_scrums_pipe__WEBPACK_IMPORTED_MODULE_22__["GroupScrumsPipe"],
                _pipes_group_issues_pipe__WEBPACK_IMPORTED_MODULE_23__["GroupIssuesPipe"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_24__["NavigationComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_11__["SatPopoverModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken',
                }),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forRoot(app_app_states__WEBPACK_IMPORTED_MODULE_14__["APP_STATES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMyDatePickerModule"].forRoot(),
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_interceptors_token_service_service__WEBPACK_IMPORTED_MODULE_25__["TokenService"], multi: true }
            ],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/utils/layouts.utils */ "./src/app/utils/layouts.utils.ts");
/* harmony import */ var app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/containers/scrumboard/scrumboard.component */ "./src/app/components/containers/scrumboard/scrumboard.component.ts");
/* harmony import */ var app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/containers/issueboard/issueboard.component */ "./src/app/components/containers/issueboard/issueboard.component.ts");
/* harmony import */ var app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var HOME_STATE = [
    {
        name: 'scrumboard',
        url: '/',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_1__["ScrumboardComponent"]),
    }
];
var ISSUES_STATE = [
    {
        name: 'issuesboard',
        url: '/issues',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_2__["IssueboardComponent"]),
    }
];
var LOGIN_STATE = [
    {
        name: 'login',
        url: '/login',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]),
    }
];
var LOGOUT_STATE = [
    {
        name: 'logout',
        url: '/logout',
        onEnter: function (trans, state) {
            var auth = trans.injector().get(app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]);
            auth.rmToken();
            // Returns the router wihout using state service
            return trans.router.stateService.target('login');
        }
    }
];
var APP_STATES = {
    states: [].concat(HOME_STATE, ISSUES_STATE, LOGIN_STATE, LOGOUT_STATE)
};


/***/ }),

/***/ "./src/app/components/avatar/avatar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot{\n    cursor: pointer;\n}\n\n\n\n.rounded-circle{\n  width: 37px;\n  height: 37px;\n}"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-0 dot d-flex justify-content-center align-items-center rounded-circle\" [style.background-color]= \"getColor(id)\">\n    <div class=\" avatar\">{{getUsername(username)}}</div>\n</div>"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.ts ***!
  \*******************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-to-color */ "./node_modules/string-to-color/index.js");
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_to_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scrum_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scrum-data.service */ "./src/app/services/scrum-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(scrumDataService) {
        this.scrumDataService = scrumDataService;
        this.addLight = function (color, amount) {
            // Parsing the splitted color amount to base 16 and adding amount
            var cc = parseInt(color, 16) + amount;
            // Pull down amount that surprass 255
            var c = (cc > 255) ? 255 : (cc);
            // Convert the 255 color value into hex
            c = (c.toString(16).length > 1) ? c.toString(16) : "0" + c.toString(16);
            return c;
        };
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent.prototype.getColor = function (id) {
        var _this = this;
        if (!id) {
            id = 'blue';
        }
        var lighten = function (color, amount) {
            // Removes hashtag in the color generated 
            color = (color.indexOf("#") >= 0) ? color.substring(1, color.length) : color;
            // amount to be added for the color change
            amount = ((255 * amount) / 100);
            amount = parseInt(amount);
            // Split the color into three parts, RGB and combine
            var R = _this.addLight(color.substring(0, 2), amount);
            var G = _this.addLight(color.substring(2, 4), amount);
            var B = _this.addLight(color.substring(4, 6), amount);
            var RGB = '#' + R + G + B;
            return RGB;
        };
        var lighten_generated_color = lighten(string_to_color__WEBPACK_IMPORTED_MODULE_0__(id), 15);
        return lighten_generated_color;
    };
    AvatarComponent.prototype.getUsername = function (username) {
        if (!username) {
            return 'CS';
        }
        if (username.indexOf('.') == -1) {
            return username.charAt(0).toUpperCase() +
                username.charAt(1).toUpperCase();
        }
        var avatar_name = username.split('.');
        return avatar_name[0].charAt(0).toUpperCase() +
            avatar_name[1].charAt(0).toUpperCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "username", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/components/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.css */ "./src/app/components/avatar/avatar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scrum_data_service__WEBPACK_IMPORTED_MODULE_2__["ScrumDataService"]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-navigation [current_page]=\"current_page\" (searchEvent)=\"searchSetter($event)\"></app-navigation>\n    <div class=\"row issues_container\">\n        <div class=\"col pt-5 pb-5 pl-5 pr-5 mt-2 ml-5\">\n            <div class=\"row\">\n                <div class=\"d-flex align-items-center summary_box flex-fill ml-3\">\n                    <div class=\"marker_static\">\n                    </div>\n                    <div>\n                        <p class=\"mb-0 ml-2 title\">You have {{ getPending()?.length }} unresolved issues</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row pt-4 pb-4 justify-content-between\">\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Select Project</span>\n                        <div class=\"input-group w-50\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_project=select_project.value\" #select_project>\n                            <option selected value=\"\">All Projects</option>\n                            <option *ngFor=\"let project of projects\">{{ project.name }}</option>\n                          </select>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Members</span>\n                        <div class=\"input-group w-50\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_user=select_user.value\" #select_user>\n                            <option selected value=\"\">All Members</option>\n                            <option *ngFor=\"let user of users\">{{ user.username }}</option>\n                          </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row-reverse align-items-center\">\n                            <div class=\"w-25 input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"to\" [(ngModel)]=\"to_model\" [options]=\"toOptions\" #to_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateToFilter($event)\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light less-emphasis grey-border\" (click)=\"to_dp.toggleCalendar()\">\n                                        <fa-icon [icon]=\"icons.calendar\"></fa-icon>\n                                    </button>\n                                </span>\n                            </div>\n                            <h3 class=\"m-0 mr-2 ml-2 w-20px\">-</h3>\n                            <div class=\"w-25 input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"from\" [(ngModel)]=\"from_model\" [options]=\"fromOptions\" #from_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateFromFilter($event)\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light  less-emphasis grey-border\" (click)=\"from_dp.toggleCalendar()\">\n                                        <fa-icon [icon]=\"icons.calendar\"></fa-icon>\n                                    </button>\n                                </span>\n                            </div>\n                        <span class=\"less-emphasis mr-4\">Date</span>\n                    </div>\n                    <br>\n                    <div class=\"d-flex flex-row-reverse align-items-center\">\n                        <div class=\"input-group w-55\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_status=select_status.value\" #select_status>\n                            <option selected value=\"\">All</option>\n                            <option value=\"P\">Pending</option>\n                            <option value=\"R\">Resolved</option>\n                            <option value=\"C\">Closed</option>\n                          </select>\n                        </div>\n                        <span class=\"mr-4 less-emphasis\">Status</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row pt-4 \">\n                <div class=\"col-sm-12 d-flex justify-content-between\">\n                    <h4 class=\"font-bold\">Issues list</h4>\n                    <button (click)=\"producePDFReport()\" class=\"btn btn-primary align-button\"> Download PDF </button>\n                </div>\n            </div>\n            <div class=\"row mt-3 d-flex\">\n                <div class=\"offset-3 col-2\">\n                    <span class=\"category_label font-bold\">Project Channel</span>\n                </div>\n                <div class=\"offset-1 col-2 pl-0\">\n                    <span class=\"category_label font-bold\">Issues</span>\n                </div>\n                <div class=\"offset-2 col-2\">\n                    <span class=\"category_label pr-5 font-bold\">Due Date</span>\n                </div>\n            </div>\n            <div class=\"mb-4\" *ngFor=\"let date_group of filtered_issues | groupIssues:'date_created' \">\n                <div *ngIf=\"isWithinDate(date_group.date, filter_from, filter_to) && filteredExists(date_group.issues)\">\n                    <div class=\"row mb-3\">\n                        <div class=\"col-sm-2 d-flex\">\n                            <span class=\"align-self-center grey-border less-emphasis\">{{ returnToDisplayHumanizeTime(date_group)}}{{ date_group.date | date:'longDate'}}</span>\n                        </div>\n                        <div class=\"col-sm-10\">\n                            <hr>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column m-0 scrumlist\">\n                        <div *ngFor=\"let issue of date_group.issues\">\n                            <div *ngIf=\"(filter_user=='' || issue.scrum_data.user_username==filter_user) && (filter_project=='' || issue.scrum_data.project_name==filter_project) && (filter_status=='' || issue.status==filter_status) && isWithinDate(issue.scrum_data.date_created, filter_from, filter_to)\" class=\"d-flex align-items-center scrumitem mt-1 mb-1\">\n                                <app-marker [project]=\"issue.scrum_data.project_name\"></app-marker>\n                                <div class=\"d-flex flex-fill align-items-center\" >\n                                    <div class=\"col-3 d-flex mr-0\">\n                                        <div class=\"pt-2\">\n                                            <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n                                        </div>\n                                        <div class=\"ml-3 pt-2 w-75\">\n                                            <p class=\" mb-0 pb-0 user text-truncate w-100 font-lato-16-height-19\">{{ issue.scrum_data.user_username }}</p>\n                                            <span class=\"less-emphasis category_label mt-0 pt-0\">{{ issue.scrum_data.date_created | date:'shortTime'}} <span *ngIf=\"issue.scrum_data.is_edited\">(edited)</span></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-2 d-flex align-items-center mr-0 ml-0 pl-0\">\n                                        <span class=\"project_label font-lato-16-height-19\">#{{ issue.scrum_data.project_name }}</span>\n                                    </div>\n                                    <div class=\"col-2 offset-1 d-flex p-0 align-items-center\">\n                                        <div class=\"d-inline-block issue_box text-truncate\">\n                                            <p class=\"less-emphasis inital-truncate mt-2 text-truncate font-lato-16-height-19\">{{ issue.issue }}</p>\n                                        </div>\n                                         <p *ngIf=\"issue.is_urgent\" class=\"urgent m-0 pt-1 pl-1 pr-1 ml-4 rounded-left rounded-right pb-0\">Urgent</p>\n                                    </div>\n                                    <div *ngIf=\"issue.deadline\" class=\"col d-flex align-items-center justify-content-end pr-0 mr-0\">\n                                        <span class=\"deadline_label font-lato-16\">{{ issue.deadline | date:'mediumDate'}} - {{ issue.deadline | date:'shortTime'}}</span>\n                                    </div>\n                                    <div *ngIf=\"!issue.deadline\" class=\"col d-flex align-items-center justify-content-end pr-5 mr-0\">\n\n                                        - -\n                                    </div>\n                                    <sat-popover #issueDetail class=\"mr-4 whole-issue-pop-over\" verticalAlign=\"center\" horizontalAlign=\"before\" forceAlignment>\n                                        <div class=\"issue_details\">\n                                            <div class=\"d-flex justify-content-between\">\n                                                <div class=\"d-flex\">\n                                                    <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n                                                    <div class=\"ml-3\">\n                                                        <span class=\"font-lato-16 font-color-black\">{{ issue.scrum_data.user_username }}</span>\n                                                        <br>\n                                                        <span class=\"less-emphasis category_label font-lato-16 override-14-px\">{{ issue.scrum_data.date_created | date:'shortTime'}} <span *ngIf=\"issue.scrum_data.is_edited\">(edited)</span></span>\n                                                    </div>\n                                                </div>\n                                                <p *ngIf=\"issue.is_urgent\" class=\"urgent pt-1 pl-1 pr-1 rounded-left rounded-right\">Urgent</p>\n                                            </div>\n                                            <div class=\"pt-4 pop-over-issues\">\n                                                <p class=\"font-lato-16 font-color-black\">{{issue.issue}}</p>\n                                            </div>\n                                            <div class=\"d-flex\">\n                                                <div class=\"d-flex flex-column mr-3\">\n                                                    <span class=\"label less-emphasis pb-2\">Date</span>\n                                                    <div class=\"input-group\">\n                                                    <input type=\"text\" bsDatepicker class=\"form-control border deadline_picker font-lato-16\" #deadline_date=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'MMMM D, YYYY' }\" [(ngModel)]=\"issue.deadline\" (bsValueChange)=\"updateDeadline(issue.id, issue.deadline)\" [minDate]=\"today\"/>\n                                                    <div class=\"input-group-append\">\n                                                        <button class=\"btn btn-light border border-left-0\" (click)=\"deadline_date.toggle()\">\n                                                            <fa-icon [icon]=\"icons.angle_down\" class=\"less-emphasis\"></fa-icon>\n                                                        </button>\n                                                    </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"d-flex flex-column\">\n                                                    <span class=\"label less-emphasis pb-2\">Time</span>\n                                                    <timepicker [(ngModel)]=\"issue.deadline\" [showSpinners]=\"false\" minuteStep='1' (isValid)=\"updateDeadline(issue.id, issue.deadline)\"></timepicker>\n                                                </div>\n                                            </div>\n                                            <div class=\"d-flex mt-2\">\n                                                <button #rButton type=\"button\" class=\"statusbtn btn btn-outline-success col-6 mr-2\" (click)=\"updateStatus(issue.id, rButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"R\">Mark as Solved</button>\n                                                <button #cButton type=\"button\" class=\"statusbtn btn btn-outline-warning col-6\" (click)=\"updateStatus(issue.id, cButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"C\">Close</button>\n                                            </div>\n                                        </div>\n                                    </sat-popover>\n                                    <fa-icon [icon]=\"icons.ellipsis\" class=\"less-emphasis clickable pr-4\" [satPopoverAnchorFor]=\"issueDetail\" (click)=\"issueDetail.toggle()\"></fa-icon>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".issues_container {\n  margin: 0 120 0 120; }\n\n.issue_box {\n  max-width: 400px; }\n\n.issue_details {\n  background-color: white;\n  padding: 30px 40px;\n  box-shadow: 0 3px 8px 0 rgba(111, 126, 147, 0.16); }\n\n.font-bold {\n  font-weight: bold; }\n\n.w20-px {\n  width: 20px; }\n\n.marker_static {\n  width: 5px;\n  height: 61px;\n  margin-right: 30;\n  background-color: #2be5ac; }\n\n.summary_box {\n  background-color: #effffa; }\n\n.title {\n  font-size: 18px;\n  color: #2be5ac; }\n\n.deadline_label {\n  color: #dd2556; }\n\n.align-button {\n  margin-top: -10px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: IssueboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueboardComponent", function() { return IssueboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IssueboardComponent = /** @class */ (function () {
    function IssueboardComponent(http, searchService, dataService, stateService, authService) {
        this.http = http;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
        this.authService = authService;
        this.icons = {
            search: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSearch"],
            calendar: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCalendar"],
            ellipsis: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEllipsisV"],
            angle_down: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faAngleDown"]
        };
        this.current_page = "issues";
        this.today = new Date();
        this.filter_to = new Date();
        this.filter_from = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() - 6);
        this.from_model = {
            date: {
                year: this.filter_from.getFullYear(),
                month: this.filter_from.getMonth() + 1,
                day: this.filter_from.getDate()
            }
        };
        this.to_model = {
            date: {
                year: this.filter_to.getFullYear(),
                month: this.filter_to.getMonth() + 1,
                day: this.filter_to.getDate()
            }
        };
        this.filter_user = '';
        this.filter_project = '';
        this.filter_status = '';
        this.from_yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.to_tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_from = {
            year: this.from_yesterday.getFullYear(),
            month: this.from_yesterday.getMonth() + 1,
            day: this.from_yesterday.getDate()
        };
        this.disabled_to = {
            year: this.to_tomorrow.getFullYear(),
            month: this.to_tomorrow.getMonth() + 1,
            day: this.to_tomorrow.getDate()
        };
        this.fromOptions = {
            dateFormat: 'mmm dd yyyy',
            disableSince: this.disabled_to
        };
        this.toOptions = {
            dateFormat: 'mmm dd yyyy',
            disableUntil: this.disabled_from
        };
    }
    IssueboardComponent.prototype.returnToDisplayHumanizeTime = function (data) {
        var humanize_time = data.issues[0].scrum_data.humanize_time.charAt(0).toUpperCase() + data.issues[0].scrum_data.humanize_time.slice(1);
        if (humanize_time == "Today" || humanize_time == "Tomorrow" || humanize_time == "Yesterday") {
            return humanize_time + " - ";
        }
        else {
            return "";
        }
    };
    IssueboardComponent.prototype.filteredExists = function (to_filter) {
        var _this = this;
        var x = to_filter.filter(function (x) {
            return x.scrum_data.user_username.search(new RegExp(_this.filter_user, 'i')) >= 0 &&
                x.scrum_data.project_name.search(new RegExp(_this.filter_project, 'i')) >= 0 &&
                x.status.search(new RegExp(_this.filter_status, 'i')) >= 0;
        });
        return x.length;
    };
    IssueboardComponent.prototype.searchSetter = function (keyword) {
        this.getIssues(keyword);
    };
    IssueboardComponent.prototype.ngOnInit = function () {
        this.logged_user = this.authService.authenticate();
        this.fetchIssues();
        this.fetchProjects();
        this.fetchUsers();
    };
    IssueboardComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.dataService.fetchIssues()
            .subscribe(function (data) {
            _this.issues = data;
            _this.filtered_issues = data;
        });
    };
    IssueboardComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.dataService.fetchUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    IssueboardComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.dataService.fetchProjects()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    IssueboardComponent.prototype.setDateFromFilter = function (from) {
        this.filter_from = new Date(from.date.year, from.date.month - 1, from.date.day);
        var yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.disabled_from.year = yesterday.getFullYear();
        this.disabled_from.month = yesterday.getMonth() + 1;
        this.disabled_from.day = yesterday.getDate();
    };
    IssueboardComponent.prototype.setDateToFilter = function (to) {
        this.filter_to = new Date(to.date.year, to.date.month - 1, to.date.day);
        var tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_to.year = tomorrow.getFullYear();
        this.disabled_to.month = tomorrow.getMonth() + 1;
        this.disabled_to.day = tomorrow.getDate();
    };
    IssueboardComponent.prototype.updateStatus = function (id, status) {
        this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__["UPDATE_ISSUE_STATUS"])(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
    };
    IssueboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__["UPDATE_ISSUE_DEADLINE"])(id), { "deadline": deadline })
                .subscribe();
        }
    };
    IssueboardComponent.prototype.getIssues = function (keyword) {
        this.filtered_issues = this.searchService.searchIssues(keyword, this.issues);
    };
    IssueboardComponent.prototype.getPending = function () {
        if (!this.issues) {
            return null;
        }
        return this.issues.filter(function (issue) {
            return issue.status == 'P';
        });
    };
    IssueboardComponent.prototype.isWithinDate = function (issue_date, filter_from, filter_to) {
        return (new Date(issue_date).setHours(0, 0, 0, 0) >= filter_from.setHours(0, 0, 0, 0) &&
            new Date(issue_date).setHours(0, 0, 0, 0) <= filter_to.setHours(0, 0, 0, 0));
    };
    IssueboardComponent.prototype.formatDateToPython = function (to_format_date) {
        // replacing all '/' occurence with '-' occurence which is acceptable in a url
        var year = to_format_date.getFullYear();
        var month = to_format_date.getMonth() + 1;
        var day = to_format_date.getDate();
        return year + '-' + month + '-' + day;
    };
    IssueboardComponent.prototype.producePDFReport = function () {
        // Producing pdf report
        // * means that all users will be filtered
        var filter_user = "*";
        if (this.filter_user) {
            filter_user = this.filter_user;
        }
        var filter_project = "*";
        if (this.filter_project) {
            filter_project = this.filter_project;
        }
        var filter_from = this.formatDateToPython(this.filter_from);
        var filter_to = this.formatDateToPython(this.filter_to);
        // Vanilla javascript so I can access the django template outside
        //   the angular scope
        var filter_status = '*';
        if (this.filter_status) {
            filter_status = this.filter_status;
        }
        window.location.href = Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__["ISSUE_RESULTS"])(filter_project, filter_user, filter_from, filter_to, filter_status);
    };
    IssueboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issueboard',
            template: __webpack_require__(/*! ./issueboard.component.html */ "./src/app/components/containers/issueboard/issueboard.component.html"),
            styles: [__webpack_require__(/*! ./issueboard.component.scss */ "./src/app/components/containers/issueboard/issueboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], IssueboardComponent);
    return IssueboardComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-navigation [current_page]=\"current_page\" (searchEvent)=\"searchSetter($event)\"></app-navigation>\n  <div class=\"row\">\n    <div class=\"col mt-2 ml-0\">\n      <div class=\"ml-5\">\n        <div class=\"message-box pt-2 pl-5 pb-4\" *ngIf=\"show_welcome_message\">\n          <div class=\"row d-flex justify-content-end p-0 pr-4 m-0\">\n            <p (click)=\"hideWelcomeMessage()\" class=\"close-welcome-message\">x</p>\n          </div>\n          <div class=\"row\">\n            <h1>Welcome back, {{logged_user}}!</h1>\n          </div>\n          <div class=\"row\">\n            <p class=\"less-emphasis\">There are {{ getPending()?.length }} issues and {{ getUrgent()?.length }} urgent tickets</p>\n          </div>\n        </div>\n        <hr *ngIf=\"show_welcome_message\">\n        <div class=\"row pt-4 pb-4\">\n          <div class=\"col d-flex flex-column\">\n            <div class=\"d-flex flex-row align-items-center\">\n              <span class=\"less-emphasis label-filter-project\">Select Project</span>\n              <div class=\"input-group\">\n                <select class=\"custom-select less-emphasis\" (change)=\"filter_project=select_project.value; filtered_scrum=scrums_bydate\" #select_project>\n                  <option selected value=\"\">All Projects</option>\n                  <option *ngFor=\"let project of projects\">{{ project.name }}</option>\n                </select>\n              </div>\n            </div>\n            <br>\n            <div class=\"d-flex flex-row align-items-center\">\n              <span class=\"less-emphasis label-filter-members\">Members</span>\n              <div class=\"input-group\">\n                <select class=\"custom-select less-emphasis\" (change)=\"filter_user=select_user.value; filtered_scrum=scrums_bydate\" #select_user>\n                  <option selected value=\"\">All Members</option>\n                  <option *ngFor=\"let user of users\">{{ user.username }}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col d-flex flex-column\">\n            <div class=\"d-flex flex-row-reverse align-items-center\">\n              <div class=\"input-group date_filters\">\n                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"to\" [(ngModel)]=\"to_model\" [options]=\"toOptions\" #to_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateToFilter($event); filtered_scrum=scrums_bydate\" />\n                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light less-emphasis grey-border\" (click)=\"to_dp.toggleCalendar()\">\n                                        <fa-icon [icon]=\"icons.calendar\"></fa-icon>\n                                    </button>\n                                </span>\n              </div>\n              <h3 class=\"m-0 mr-2 ml-2\">-</h3>\n              <div class=\"input-group date_filters\">\n                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"from\" [(ngModel)]=\"from_model\" [options]=\"fromOptions\" #from_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateFromFilter($event); filtered_scrum=scrums_bydate\" />\n                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light  less-emphasis grey-border\" (click)=\"from_dp.toggleCalendar()\">\n                                        <fa-icon [icon]=\"icons.calendar\"></fa-icon>\n                                    </button>\n                                </span>\n              </div>\n              <span class=\"less-emphasis mr-4 label-filter-date\">Date</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row pt-4\">\n          <div class=\"col-12 d-flex justify-content-between pl-3\">\n            <h4 class=\"font-lato-16 header-title-size font-color-black\">Stand up updates</h4>\n            <button (click)=\"producePDFReport()\" class=\"btn btn-primary align-button\"> Download PDF </button>\n          </div>\n        </div>\n        <div class=\"row mt-3 d-flex \">\n          <div class=\"offset-2 col-2 d-flex pl-4\">\n            <span class=\"category_label scrumboard-header-title\">Project Channel</span>\n          </div>\n          <div class=\"offset-2 col-2\">\n            <span class=\"category_label scrumboard-header-title\">Issues</span>\n          </div>\n          <div class=\"offset-2 col-2 pl-1\">\n            <span class=\"category_label scrumboard-header-title \">Total Hours</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4\" *ngFor=\"let date_group of filtered_scrum | groupScrums:'date_created'\">\n        <div *ngIf=\"isWithinDate(date_group.date, filter_from, filter_to) && filteredExists(date_group)\">\n          <div class=\"row mb-3 ml-5\">\n            <div class=\"col-sm-2 d-flex pl-0\">\n              <span class=\"align-self-center grey-border less-emphasis\">{{ date_group.date | date:'longDate'}}</span>\n            </div>\n            <div class=\"col-sm-10\">\n              <hr>\n            </div>\n          </div>\n          <div class=\"d-flex flex-column m-1 scrumlist\">\n            <div *ngFor=\"let scrum of date_group.scrums\">\n              <div *ngIf=\"((filter_user=='' || scrum.user==filter_user) && (filter_project=='' || scrum.project==filter_project))\" class=\"mt-1 scrumitem ml-3 box-shadow mb-2\">\n                <div class=\"d-flex clickable align-items-center\" (click)=\"scrum.open = !scrum.open\">\n                  <app-marker *ngIf=\"!scrum.open\" [project]=\"scrum.project\"></app-marker>\n                  <div class=\"ml-1 pl-4 col-2 d-flex\">\n                    <div class=\"pt-4\">\n                      <app-avatar [username]=\"scrum.user\" [id]=\"scrum.user\"></app-avatar>\n                    </div>\n                    <div class=\"ml-3 pt-4 mb-3 w-75\">\n                      <p class=\" mb-0 pb-0 user text-truncate w-100\">{{ scrum.user }}</p>\n                      <span class=\"less-emphasis category_label pt-0 mt-0\">{{ scrum.date_created | date:'shortTime'}} <span *ngIf=\"scrum.is_edited\">(edited)</span></span>\n                    </div>\n                  </div>\n                  <div class=\"col-2 d-flex pl-4\">\n                    <span class=\"project_label font-lato-16-height-19\" *ngIf=\"!scrum.open\">#{{ scrum.project }}</span>\n                  </div>\n                  <div class=\"col-2 offset-2\">\n                    <div *ngIf=\"!scrum.open\">\n                      <span class=\"less-emphasis inital-truncate mt-2 text-truncate font-lato-16-height-19 \" *ngIf=\"!hasPending(scrum)\">No issues <img class=\"ml-3\" src=\"static/img/confetti.png\"></span>\n                      <p class=\"less-emphasis inital-truncate mt-2 text-truncate font-lato-16-height-19 \" *ngIf=\"hasPending(scrum)\">{{ scrum.issue_logs[0].issue }}</p>\n                    </div>\n                  </div>\n                  <div class=\"col-2 offset-2\">\n                    <span class=\"hours-title\">{{ paddingZero(scrum.hours) }}</span>\n                  </div>\n                </div>\n                <div [collapse]=\"!scrum.open\">\n                  <div class=\"d-flex flex-column p-5 ml-4\">\n                    <div>\n                      <span class=\"project_label collapsable-box\">#{{ scrum.project }}</span>\n                    </div>\n                    <br>\n                    <div class=\"d-flex\">\n                      <div class=\"col pr-5\">\n                        <div class=\"row flex-column mb-5\">\n                          <p class=\"category_label\">Done</p>\n                          <div class=\"d-flex\" *ngFor=\"let log of scrum.done_logs\">\n                            <fa-icon [icon]=\"icons.check\" class=\"pr-3 pt-1 check\"></fa-icon>\n                            <p class=\"less-emphasis mb-2 collapsable-box font-lato-16\">{{ log.message }}</p>\n                          </div>\n                        </div>\n                        <div class=\"row flex-column\">\n                          <p class=\"category_label\">In progress</p>\n                          <div class=\"d-flex\" *ngFor=\"let log of scrum.wip_logs\">\n                            <fa-icon [icon]=\"icons.circle_notch\" class=\"pr-3 pt-1 wip\"></fa-icon>\n                            <p class=\"less-emphasis mb-2 collapsable-box font-lato-16\"> {{ log.message }}</p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col\">\n                        <div class=\"row flex-column mb-5 ml-0\">\n                          <p class=\"category_label\">Pending</p>\n                          <span class=\"less-emphasis font-lato-16\" *ngIf=\"!hasPending(scrum)\">No issues <img class=\"ml-3\" src=\"static/img/confetti.png\"></span>\n                          <div *ngFor=\"let issue of scrum.issue_logs\" class=\"box-shadow mb-3 d-flex\">\n                            <div class=\"redmarker align-self-center\"></div>\n                            <div class=\"d-flex flex-column flex-fill\">\n                              <div class=\"row d-flex flex-column pt-3 pl-4 pr-2 pb-0 ml-3 mr-2 mb-2 clickable\" (click)=\"issue.open = !issue.open\">\n                                <div class=\"d-flex justify-content-between\">\n                                  <p class=\"mb-1 ml-0 pl-0 issue-collapsable-box font-lato-16 font-color-black\">{{ issue.issue }}</p>\n                                  <div class=\"d-flex align-items-center\">\n                                    <p *ngIf=\"issue.is_urgent\" class=\"urgent p-1 mt-1 rounded-left rounded-right scrumbot-urgent mr-4 mr-5px\">Urgent</p>\n                                    <fa-icon [icon]=\"icons.angle_down\" class=\"less-emphasis ml-4\" *ngIf=\"!issue.open\"></fa-icon>\n                                    <fa-icon [icon]=\"icons.angle_up\" class=\"less-emphasis ml-4\" *ngIf=\"issue.open\"></fa-icon>\n                                  </div>\n                                </div>\n                                <div *ngIf=\"!issue.open\">\n                                  <div class=\"d-flex\" *ngIf=\"issue.deadline\">\n                                    <div class=\"mr-2\">\n                                      <img src=\"static/img/leave.png\" class=\"ml-2\">\n                                    </div>\n                                    <p class=\"less-emphasis category_label font-lato-16 override-14-px\">{{ issue.deadline | date:'longDate'}} - {{ issue.deadline | date:'shortTime'}}</p>\n                                  </div>\n                                </div>\n                              </div>\n                                <div class=\"ml-3 mr-2\" [collapse]=\"!issue.open\">\n                                  <div class=\"d-flex ml-4 mr-3\">\n                                    <div class=\"d-flex flex-column mr-2 col-6 p-0\">\n                                      <span class=\"label less-emphasis pb-2\">Date</span>\n                                      <div class=\"input-group\">\n                                        <input type=\"text\" bsDatepicker class=\"form-control border deadline_picker\" #deadline_date=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'MMMM D, YYYY' }\" [(ngModel)]=\"issue.deadline\" (bsValueChange)=\"updateDeadline(issue.id, issue.deadline)\" [minDate]=\"today\" />\n                                        <div class=\"input-group-append\">\n                                          <button class=\"btn btn-light border border-left-0\" (click)=\"deadline_date.toggle()\">\n                                            <fa-icon [icon]=\"icons.angle_down\" class=\"less-emphasis\"></fa-icon>\n                                          </button>\n                                        </div>\n                                      </div>\n                                    </div>\n                                    <div class=\"d-flex flex-column col-6 align-items-center\">\n                                      <span class=\"label less-emphasis pb-2\">Time</span>\n                                      <timepicker [(ngModel)]=\"issue.deadline\" [showSpinners]=\"false\" minuteStep='1' (isValid)=\"updateDeadline(issue.id, issue.deadline)\"></timepicker>\n                                    </div>\n                                  </div>\n                                <div class=\"mt-3 mb-3 ml-4 mr-3 d-flex \">\n                                  <button #rButton type=\"button\" class=\"statusbtn btn btn-outline-success col-6 mr-2\" (click)=\"updateStatus(issue.id, rButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"R\">Mark as Solved</button>\n                                  <button #cButton type=\"button\" class=\"statusbtn btn btn-outline-warning col-6\" (click)=\"updateStatus(issue.id, cButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"C\">Close</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3 col-md-12 col-sm-12 border-left issuelist p-0 pt-4\">\n      <div class=\"row mt-4 ml-4 mr-4 mb-0\">\n        <p class=\"category_label font-weight-bold\">Issues stream </p>\n      </div>\n      <div class=\"d-flex flex-column\">\n        <div *ngFor=\"let issue of issues\">\n          <div class=\"d-flex pl-4 pt-3 pb-3 hoverable clickable\" (click)=\"getIssue(issue.id)\" *ngIf=\"issue.status=='P'\">\n            <div class=\"d-flex\">\n              <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n            </div>\n            <div class=\"d-flex flex-fill flex-column ml-3 mr-2 overflow-x-hidden\">\n              <div class=\"d-flex justify-content-between mb-1 w-100\">\n                <p class=\"m-0 sidebar_username text-truncate\">{{ issue.scrum_data.user_username }}</p>\n                <p class=\"m-0 project_label text-truncate label\">#{{ issue.scrum_data.project_name }}</p>\n                <p class=\"m-0 less-emphasis project-time\">{{ issue.scrum_data.date_created | date:'shortTime'}} </p>\n              </div>\n              <div class=\"d-flex flex-fill justify-content-between mb-1 less-emphasis  \">\n                <span class=\"sidebar-issue mr-2\">{{ issue.issue }}</span>\n                <p *ngIf=\"issue.is_urgent\" class=\"urgent p-1 mt-1 rounded-left rounded-right scrumbot-urgent mr-4 mr-5px\">Urgent</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrumboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardComponent", function() { return ScrumboardComponent; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var app_services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ScrumboardComponent = /** @class */ (function () {
    function ScrumboardComponent(http, filterService, searchService, dataService, stateService, authService) {
        this.http = http;
        this.filterService = filterService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
        this.authService = authService;
        this.icons = {
            circle_notch: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCircleNotch"],
            check: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faCheck"],
            search: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSearch"],
            calendar: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCalendar"],
            angle_up: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faAngleUp"],
            angle_down: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faAngleDown"]
        };
        this.current_page = "scrumboard";
        this.show_welcome_message = true;
        this.today = new Date();
        this.filter_to = new Date();
        this.filter_from = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() - 6);
        this.from_model = {
            date: {
                year: this.filter_from.getFullYear(),
                month: this.filter_from.getMonth() + 1,
                day: this.filter_from.getDate()
            }
        };
        this.to_model = {
            date: {
                year: this.filter_to.getFullYear(),
                month: this.filter_to.getMonth() + 1,
                day: this.filter_to.getDate()
            }
        };
        this.filter_user = '';
        this.filter_project = '';
        this.logged_user = '';
        this.from_yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.to_tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_from = {
            year: this.from_yesterday.getFullYear(),
            month: this.from_yesterday.getMonth() + 1,
            day: this.from_yesterday.getDate()
        };
        this.disabled_to = {
            year: this.to_tomorrow.getFullYear(),
            month: this.to_tomorrow.getMonth() + 1,
            day: this.to_tomorrow.getDate()
        };
        this.fromOptions = {
            dateFormat: 'mmm dd yyyy',
            disableSince: this.disabled_to
        };
        this.toOptions = {
            dateFormat: 'mmm dd yyyy',
            disableUntil: this.disabled_from
        };
        this.model = { beginDate: this.from_model.date,
            endDate: this.to_model.date };
        this.show_object = {
            id: '',
            show: true,
        };
    }
    ScrumboardComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
        this.fetchScrums();
        this.fetchUsers();
        this.fetchProjects();
        this.logged_user = this.authService.getUser();
    };
    ScrumboardComponent.prototype.returnToDisplayHumanizeTime = function () {
    };
    ScrumboardComponent.prototype.searchSetter = function (keyword) {
        this.getScrum(keyword);
    };
    ScrumboardComponent.prototype.fetchScrums = function () {
        var _this = this;
        this.dataService.fetchScrums()
            .subscribe(function (data) {
            _this.scrums_bydate = data;
            var scrums = underscore__WEBPACK_IMPORTED_MODULE_0__["map"](_this.scrums_bydate, function (scrum) { return scrum.scrums; });
            _this.filtered_scrum = data;
        });
    };
    ScrumboardComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.dataService.fetchIssues()
            .subscribe(function (data) {
            _this.issues = data;
        });
    };
    ScrumboardComponent.prototype.hideWelcomeMessage = function () {
        this.show_welcome_message = false;
    };
    ScrumboardComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.dataService.fetchUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ScrumboardComponent.prototype.paddingZero = function (to_pad) {
        var str_to_pad = to_pad.toString();
        var array_to_pad = str_to_pad.split('.');
        try {
            if (array_to_pad[1].length == 1) {
                array_to_pad[1] += "0";
            }
            return array_to_pad[0] + ":" + array_to_pad[1];
        }
        catch (exception) {
            // catch index error
            return array_to_pad[0] + ":00";
        }
    };
    ScrumboardComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.dataService.fetchProjects()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    ScrumboardComponent.prototype.setDateFromFilter = function (from) {
        this.filter_from = new Date(from.date.year, from.date.month - 1, from.date.day);
        var yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.disabled_from.year = yesterday.getFullYear();
        this.disabled_from.month = yesterday.getMonth() + 1;
        this.disabled_from.day = yesterday.getDate();
    };
    ScrumboardComponent.prototype.setDateToFilter = function (to) {
        this.filter_to = new Date(to.date.year, to.date.month - 1, to.date.day);
        var tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_to.year = tomorrow.getFullYear();
        this.disabled_to.month = tomorrow.getMonth() + 1;
        this.disabled_to.day = tomorrow.getDate();
    };
    ScrumboardComponent.prototype.getIssue = function (id) {
        this.filtered_scrum = [this.scrums_bydate.find(function (scrum) {
                return scrum.issue_logs.find(function (issue) {
                    return issue.id == id;
                });
            })];
    };
    ScrumboardComponent.prototype.getUrgent = function () {
        if (!this.issues) {
            return null;
        }
        return this.issues.filter(function (issue) {
            return issue.is_urgent == true &&
                issue.status == 'P';
        });
    };
    ScrumboardComponent.prototype.getPending = function () {
        if (!this.issues) {
            return null;
        }
        return this.issues.filter(function (issue) {
            return issue.status == 'P';
        });
    };
    ScrumboardComponent.prototype.updateStatus = function (id, status) {
        this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__["UPDATE_ISSUE_STATUS"])(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
        var scrum_index = this.scrums_bydate.findIndex(function (scrum) {
            return scrum.issue_logs.find(function (issue) {
                return issue.id == id;
            });
        });
        var issue_index = this.scrums_bydate[scrum_index].issue_logs.findIndex(function (issue) {
            return issue.id == id;
        });
        this.scrums_bydate[scrum_index].issue_logs.splice(issue_index, 1);
    };
    ScrumboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__["UPDATE_ISSUE_DEADLINE"])(id), { "deadline": deadline })
                .subscribe();
        }
    };
    ScrumboardComponent.prototype.isWithinDate = function (scrum_date, filter_from, filter_to) {
        return (new Date(scrum_date).setHours(0, 0, 0, 0) >= filter_from.setHours(0, 0, 0, 0) &&
            new Date(scrum_date).setHours(0, 0, 0, 0) <= filter_to.setHours(0, 0, 0, 0));
    };
    ScrumboardComponent.prototype.getTotalHours = function (user, project, from, to) {
        var filtered_data = this.filterService.filterScrum(user, project, from, to, this.scrums_bydate);
        return filtered_data.map(function (scrum) { return scrum.hours; }).reduce(function (x, y) { return (+x) + (+y); }, 0);
    };
    ScrumboardComponent.prototype.filteredExists = function (to_filter) {
        // This filters the user and removes the date gui completely
        var exists = false;
        var remember_key = "";
        for (var key in to_filter.scrums) {
            if (this.filter_project == "" && this.filter_user == "") {
                exists = true;
                break;
            }
            else if (this.filter_project == to_filter.scrums[key].project && this.filter_user == "") {
                exists = true;
                break;
            }
            else if (this.filter_user == to_filter.scrums[key].user && this.filter_project == "") {
                exists = true;
                break;
            }
            else if (to_filter.scrums[key].user == this.filter_user && to_filter.scrums[key].project == this.filter_project) {
                exists = true;
                break;
            }
        }
        return exists;
    };
    ScrumboardComponent.prototype.getScrum = function (keyword) {
        this.filtered_scrum = this.searchService.searchScrums(keyword, this.scrums_bydate);
    };
    ScrumboardComponent.prototype.hasPending = function (scrum) {
        var pending = scrum.issue_logs.filter(function (issue) {
            return issue.status == 'P';
        });
        return (pending.length != 0);
    };
    ScrumboardComponent.prototype.goToIssues = function () {
        this.stateService.go('issuesboard');
    };
    ScrumboardComponent.prototype.formatDateToPython = function (to_format_date) {
        // replacing all '/' occurence with '-' occurence which is acceptable in a url
        var year = to_format_date.getFullYear();
        var month = to_format_date.getMonth() + 1;
        var day = to_format_date.getDate();
        return year + '-' + month + '-' + day;
    };
    ScrumboardComponent.prototype.producePDFReport = function () {
        // Producing pdf report
        // * means that all users will be filtered
        var filter_user = "*";
        if (this.filter_user) {
            filter_user = this.filter_user;
        }
        var filter_project = "*";
        if (this.filter_project) {
            filter_project = this.filter_project;
        }
        var filter_from = this.formatDateToPython(this.filter_from);
        var filter_to = this.formatDateToPython(this.filter_to);
        // Vanilla javascript so I can access the django template outside
        //   the angular scope
        window.location.href = Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__["OVERALL_RESULTS"])(filter_project, filter_user, filter_from, filter_to);
    };
    ScrumboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrumboard',
            template: __webpack_require__(/*! ./scrumboard.component.html */ "./src/app/components/containers/scrumboard/scrumboard.component.html"),
            styles: [__webpack_require__(/*! ./scrumboard.component.css */ "./src/app/components/containers/scrumboard/scrumboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            app_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"],
            app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], ScrumboardComponent);
    return ScrumboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center login_container flex-column\">\n    <h1 class=\"pb-4\">LOGIN TO SCRUMBOARD</h1>\n    <p *ngIf=\"invalid_message\" class=\"invalid_message\">{{invalid_message}}</p>\n    <form class=\"d-flex flex-column justify-content-center\">\n        <div class=\"form-group login_form\">\n            <label>Username</label>\n            <input (keypress)=\"invalid_message=''\" type=\"text\" class=\"form-control\" placeholder=\"Username\" #username>\n        </div>\n        <div class=\"form-group login_form\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input (keypress)=\"invalid_message=''\" type=\"password\" class=\"form-control\" placeholder=\"Password\" #password>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"login(username,password)\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/forms/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(stateService, authService) {
        this.stateService = stateService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if(localStorage.getItem('user')){
        //   this.stateService.go('scrumboard')
        // }
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        //. A log in promise
        var x = this.authService.loginUser({ "username": username.value, "password": password.value });
        x.then(function (data) {
            _this.stateService.go('scrumboard');
        })
            .catch(function (errors) {
            console.log(errors);
            if (errors.non_field_errors) {
                _this.invalid_message = errors.non_field_errors;
            }
            else {
                _this.invalid_message = "Please fill up the form!";
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/forms/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/forms/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom d-flex justify-content-between\">\n    <div class=\"m-3 ml-5 d-flex align-items-center w-50\">\n        <i class=\"less-emphasis fas fa-search border-0 m-1 mr-3\"></i>\n        <input type=\"text\" placeholder=\"Search\" class=\"border-0 less-emphasis searchbar\" (input)=\"getScrum(search.value)\" #search>\n    </div>\n    <div class=\"m-3 mr-5\">\n        <app-avatar></app-avatar>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/marker/marker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/marker/marker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marker mr-0 pr-0\" [style.background-color]= \"getColor(project)\">\n</div>"

/***/ }),

/***/ "./src/app/components/marker/marker.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/marker/marker.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/marker/marker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/marker/marker.component.ts ***!
  \*******************************************************/
/*! exports provided: MarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerComponent", function() { return MarkerComponent; });
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-to-color */ "./node_modules/string-to-color/index.js");
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_to_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerComponent = /** @class */ (function () {
    function MarkerComponent() {
    }
    MarkerComponent.prototype.ngOnInit = function () {
    };
    MarkerComponent.prototype.getColor = function (project) {
        if (!project) {
            project = 'light-green';
        }
        return string_to_color__WEBPACK_IMPORTED_MODULE_0__(project);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MarkerComponent.prototype, "project", void 0);
    MarkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marker',
            template: __webpack_require__(/*! ./marker.component.html */ "./src/app/components/marker/marker.component.html"),
            styles: [__webpack_require__(/*! ./marker.component.scss */ "./src/app/components/marker/marker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarkerComponent);
    return MarkerComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row border-bottom d-flex justify-content-between\">\n        <div class=\"m-3 d-flex align-items-center col-9\">\n            <div class=\"tabs clickable col-1 pt-3\">\n                 <p (click)=\"goToDashboard()\" class=\"navigation-text w-100\">Dashboard</p>\n            </div>\n            <div class=\"tabs clickable col-2 pt-3\">\n                 <p (click)=\"goToIssues()\" class=\"fix-align navigation-text w-100\">All Issues</p>\n            </div>\n            <div class=\"pl-0\">\n                <fa-icon [icon]=\"icons.search\" class=\"pr-2 color-custom-gray\"></fa-icon>\n                <input type=\"text\" placeholder=\"Search\" class=\"border-0 less-emphasis searchbar\" (input)=\"searchSetter(search.value)\" #search>\n            </div>\n        </div>\n        <div class=\"mt-4 mr-4  col-lg-1 col-md-1 col-sm-1  d-flex justify-content-end\" >\n            <app-avatar [username]=\"logged_user\" [id]=\"logged_user\" [satPopoverAnchorFor]=\"contactPopover\" (click)=\"contactPopover.toggle()\"></app-avatar>\n        </div>\n</div>\n\n<sat-popover #contactPopover verticalAlign=\"below\" horizontalAlign=\"end\" forceAlignment>\n    <div class=\"container-with-shadow container-margin\">\n        <a (click)=\"logOut()\" class=\"dropdown-item\">Logout</a>\n    </div>\n</sat-popover>\n\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(authService, searchService, stateService) {
        this.authService = authService;
        this.searchService = searchService;
        this.stateService = stateService;
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.icons = {
            search: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"]
        };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.logged_user = this.authService.authenticate();
    };
    NavigationComponent.prototype.goToDashboard = function () {
        this.stateService.go('scrumboard');
    };
    NavigationComponent.prototype.goToIssues = function () {
        this.stateService.go('issuesboard');
    };
    NavigationComponent.prototype.searchSetter = function (keyword) {
        this.searchEvent.emit(keyword);
    };
    NavigationComponent.prototype.logOut = function () {
        this.stateService.go('logout');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavigationComponent.prototype, "current_page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "searchEvent", void 0);
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            app_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/constants/config.ts":
/*!*************************************!*\
  !*** ./src/app/constants/config.ts ***!
  \*************************************/
/*! exports provided: TEAM_ID, AUTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEAM_ID", function() { return TEAM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
var TEAM_ID = 'T0R2RHDB8';
var AUTH_KEY = 'ncB4J9$9Avb_!fwY';


/***/ }),

/***/ "./src/app/constants/endpoints.ts":
/*!****************************************!*\
  !*** ./src/app/constants/endpoints.ts ***!
  \****************************************/
/*! exports provided: GET_LOGS, GET_ISSUES, GET_TEAM_MEMBERS, GET_TEAM_PROJECTS, UPDATE_ISSUE_STATUS, UPDATE_ISSUE_DEADLINE, LOGIN_USER, REFRESH_TOKEN, OVERALL_RESULTS, ISSUE_RESULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGS", function() { return GET_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ISSUES", function() { return GET_ISSUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAM_MEMBERS", function() { return GET_TEAM_MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAM_PROJECTS", function() { return GET_TEAM_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ISSUE_STATUS", function() { return UPDATE_ISSUE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ISSUE_DEADLINE", function() { return UPDATE_ISSUE_DEADLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERALL_RESULTS", function() { return OVERALL_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSUE_RESULTS", function() { return ISSUE_RESULTS; });
var GET_LOGS = function () { return '/api/scrum/'; };
var GET_ISSUES = function () { return '/api/scrum/issues/'; };
var GET_TEAM_MEMBERS = function () { return '/api/accounts/users/'; };
var GET_TEAM_PROJECTS = function () { return '/api/accounts/projects/'; };
var UPDATE_ISSUE_STATUS = function (id) { return '/api/scrum/update_status/' + id; };
var UPDATE_ISSUE_DEADLINE = function (id) { return '/api/scrum/update_deadline/' + id; };
var LOGIN_USER = function () { return '/api/accounts/login/'; };
var REFRESH_TOKEN = function () { return '/api/accounts/refresh/'; };
var OVERALL_RESULTS = function (project, members, from, to) {
    return '/api/reports/overall_report/' + project + '/' + members + '/' + from + '/' + to + '/';
};
var ISSUE_RESULTS = function (project, members, from, to, ticket_status) {
    return '/api/reports/issues_report/' + project + '/' + members + '/' + from + '/' + to + '/' + ticket_status + '/';
};


/***/ }),

/***/ "./src/app/pipes/group-issues.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/group-issues.pipe.ts ***!
  \********************************************/
/*! exports provided: GroupIssuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupIssuesPipe", function() { return GroupIssuesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupIssuesPipe = /** @class */ (function () {
    function GroupIssuesPipe() {
    }
    GroupIssuesPipe.prototype.transform = function (issues, date) {
        if (!issues) {
            return null;
        }
        var grouped_issues = issues.reduce(function (previous, current) {
            var date_index = new Date(current['scrum_data'][date]).toLocaleDateString();
            if (!previous[date_index]) {
                previous[date_index] = [current];
            }
            else {
                previous[date_index].push(current);
            }
            return previous;
        }, {});
        return Object.keys(grouped_issues).map(function (date) { return ({ date: date, issues: grouped_issues[date] }); });
    };
    GroupIssuesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupIssues'
        })
    ], GroupIssuesPipe);
    return GroupIssuesPipe;
}());



/***/ }),

/***/ "./src/app/pipes/group-scrums.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/group-scrums.pipe.ts ***!
  \********************************************/
/*! exports provided: GroupScrumsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupScrumsPipe", function() { return GroupScrumsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupScrumsPipe = /** @class */ (function () {
    function GroupScrumsPipe() {
    }
    GroupScrumsPipe.prototype.transform = function (scrum, date) {
        if (!scrum) {
            return null;
        }
        var grouped_scrums = scrum.reduce(function (previous, current) {
            var date_index = new Date(current[date]).toLocaleDateString();
            if (!previous[date_index]) {
                previous[date_index] = [current];
            }
            else {
                previous[date_index].push(current);
            }
            return previous;
        }, {});
        return Object.keys(grouped_scrums).map(function (date) { return ({ date: date, scrums: grouped_scrums[date] }); });
    };
    GroupScrumsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupScrums'
        })
    ], GroupScrumsPipe);
    return GroupScrumsPipe;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/config */ "./src/app/constants/config.ts");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(stateService, http) {
        this.stateService = stateService;
        this.http = http;
    }
    AuthenticationService.prototype.loginUser = function (credentials) {
        var _this = this;
        // Log in a user
        return this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_4__["LOGIN_USER"])(), credentials)
            .toPromise()
            .then(function (data) {
            _this.setToken(data);
            _this.setUser(credentials.username);
            return data;
        })
            .catch(function (errors) {
            return Promise.reject(errors.error);
        });
    };
    AuthenticationService.prototype.refreshToken = function () {
        var _this = this;
        // Refreshes the token which the jwt recommends to 
        //   make the token secure. {"token": EXISTING_TOKEN}
        return this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_4__["REFRESH_TOKEN"])(), this.getToken())
            .toPromise()
            .then(function (data) {
            _this.setToken(data);
            _this.setRefreshTokenCallState(false);
            return data;
        })
            .catch(function (errors) {
            _this.setRefreshTokenCallState(false);
            return Promise.reject(errors.error);
        });
    };
    AuthenticationService.prototype.setUser = function (username) {
        // Set user so there won't be any side effects on
        //   refactoring
        localStorage.setItem('user', username);
    };
    AuthenticationService.prototype.getUser = function () {
        return localStorage.getItem('user');
    };
    AuthenticationService.prototype.setToken = function (d) {
        // Setting token to the local storage
        window.localStorage[_constants_config__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]] = JSON.stringify(d);
        return d;
    };
    AuthenticationService.prototype.setRefreshTokenCallState = function (state) {
        window.localStorage['token_calling'] = state;
    };
    AuthenticationService.prototype.getRefreshTokenCallState = function () {
        var is_still_calling = window.localStorage['token_calling'];
        if (is_still_calling === null) {
            return false;
        }
        // since items from local storage are strings
        is_still_calling = (is_still_calling === 'true');
        return is_still_calling;
    };
    AuthenticationService.prototype.getToken = function () {
        var d = window.localStorage[_constants_config__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]];
        if (!d) {
            return null;
        }
        ;
        return JSON.parse(d);
    };
    AuthenticationService.prototype.rmToken = function () {
        window.localStorage.removeItem(_constants_config__WEBPACK_IMPORTED_MODULE_3__["AUTH_KEY"]);
        window.localStorage.removeItem('user');
    };
    AuthenticationService.prototype.authenticate = function () {
        if (!localStorage.getItem('user')) {
            this.stateService.go('login');
        }
        return localStorage.getItem('user');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.fetchScrums = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_LOGS"])());
    };
    DataService.prototype.fetchUsers = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_TEAM_MEMBERS"])());
    };
    DataService.prototype.fetchProjects = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_TEAM_PROJECTS"])());
    };
    DataService.prototype.fetchIssues = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_ISSUES"])());
    };
    DataService.prototype.getScrums = function () {
        return this.scrum_data;
    };
    DataService.prototype.getUsers = function () {
        return this.users;
    };
    DataService.prototype.getProjects = function () {
        return this.projects;
    };
    DataService.prototype.setScrums = function (scrum_data) {
        this.scrum_data = scrum_data;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterService = /** @class */ (function () {
    function FilterService() {
        this.log_type = '';
    }
    FilterService.prototype.filterScrum = function (username, project, from, to, scrums) {
        return scrums.filter(function (scrum) {
            var date = new Date(scrum.date_created);
            date.setHours(0, 0, 0, 0);
            return scrum.user.includes(username) &&
                scrum.project.includes(project) &&
                (date >= from && date <= to);
        });
    };
    FilterService.prototype.filterScrumSearch = function (keyword, scrums) {
        return scrums.filter(function (scrum) {
            var date = new Date(scrum.date_created);
            date.setHours(0, 0, 0, 0);
            var done_logs = scrum.done_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var wip_logs = scrum.wip_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var issue_logs = scrum.issue_logs.filter(function (log) {
                return log.issue.search(new RegExp(keyword, 'i')) >= 0 ||
                    log.status.search(new RegExp(keyword, 'i')) >= 0;
            });
            return scrum.user.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.project.search(new RegExp(keyword, 'i')) >= 0 ||
                done_logs.length != 0 || wip_logs.length != 0 ||
                issue_logs.length != 0;
        });
    };
    FilterService.prototype.filterIssues = function (status, dateFilterForm, username, project, issues) {
        if (status === 'ALL') {
            status = '';
        }
        if (username === 'ALL') {
            username = '';
        }
        if (project === 'ALL') {
            project = '';
        }
        var from = new Date(dateFilterForm.from.date.month + "/" + dateFilterForm.from.date.day + "/" + dateFilterForm.from.date.year);
        var to = new Date(dateFilterForm.to.date.month + "/" + dateFilterForm.to.date.day + "/" + dateFilterForm.to.date.year);
        return issues.filter(function (issue) {
            var date = new Date(issue.date_created);
            date.setHours(0, 0, 0, 0);
            return issue.status.includes(status) &&
                issue.user.includes(username) &&
                issue.project.includes(project) &&
                (date >= from && date <= to);
        });
    };
    FilterService.prototype.filterById = function (id, issues) {
        return issues.findIndex(function (issue) {
            return issue.id == id;
        });
    };
    FilterService.prototype.filterPending = function (issues) {
        return issues.find(function (issue) {
            issue.status == "Pending";
        });
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/interceptors/token-service.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/interceptors/token-service.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenService = /** @class */ (function () {
    function TokenService(auth, state) {
        this.auth = auth;
        this.state = state;
    }
    TokenService.prototype.intercept = function (r, n) {
        var _this = this;
        var req = r;
        if (this.auth.authenticate()) {
            req = r.clone({ headers: r.headers.set('Authorization', this.authtoken()) });
            // Refreshes the token 
            if (this.auth.getRefreshTokenCallState() === false) {
                this.auth.setRefreshTokenCallState(true);
                this.auth.refreshToken();
            }
        }
        return n.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (e) {
            if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"])
                return e;
        }, function (err) {
            console.log(err);
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                _this.checkPermission(err);
                return err;
            }
            ;
        }));
    };
    // Get user token from the local storage
    TokenService.prototype.authtoken = function () {
        var t = lodash__WEBPACK_IMPORTED_MODULE_0__["get"](this.auth.getToken(), ['token'], null);
        return 'JWT ' + t;
    };
    // let the user re-login to generate
    // a new authentication token.
    TokenService.prototype.flagToken = function () {
        // this.auth.rmToken();
        // this.state.go('login');
    };
    TokenService.prototype.checkPermission = function (err) {
        // This returns unauthorize error which flags the token
        console.log("401");
        if (err.status === 401) {
            this.flagToken();
        }
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/services/scrum-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/scrum-data.service.ts ***!
  \************************************************/
/*! exports provided: ScrumDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumDataService", function() { return ScrumDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrumDataService = /** @class */ (function () {
    function ScrumDataService(http) {
        this.http = http;
    }
    ScrumDataService.prototype.fetchScrums = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_LOGS"])());
    };
    ScrumDataService.prototype.getScrums = function () {
        return this.scrum_data;
    };
    ScrumDataService.prototype.setScrums = function (scrum_data) {
        this.scrum_data = scrum_data;
    };
    ScrumDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScrumDataService);
    return ScrumDataService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.searchScrums = function (keyword, scrums) {
        return scrums.filter(function (scrum) {
            var done_logs = scrum.done_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var wip_logs = scrum.wip_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var issue_logs = scrum.issue_logs.filter(function (log) {
                return log.issue.search(new RegExp(keyword, 'i')) >= 0;
            });
            return scrum.user.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.project.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.hours.toString().search(new RegExp(keyword, 'i')) >= 0 ||
                done_logs.length != 0 || wip_logs.length != 0
                || issue_logs.length != 0;
        });
    };
    SearchService.prototype.searchIssues = function (keyword, issues) {
        return issues.filter(function (issue) {
            return issue.scrum_data.user_username.search(new RegExp(keyword, 'i')) >= 0 ||
                issue.scrum_data.project_name.search(new RegExp(keyword, 'i')) >= 0 ||
                issue.issue.search(new RegExp(keyword, 'i')) >= 0;
        });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/utils/layouts.utils.ts":
/*!****************************************!*\
  !*** ./src/app/utils/layouts.utils.ts ***!
  \****************************************/
/*! exports provided: ContentOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
function ContentOnly(content) {
    return {
        content: content
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/earvingemenez/Projects/scrumbot/env/scrumbot/assets/fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map