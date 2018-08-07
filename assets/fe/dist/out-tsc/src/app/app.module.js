"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ANGULAR MODULES
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// INSTALLED MODULES
var angular_6_datatable_1 = require("angular-6-datatable");
var angular_1 = require("@uirouter/angular");
var ngx_mydatepicker_1 = require("ngx-mydatepicker");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var collapse_1 = require("ngx-bootstrap/collapse");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var timepicker_1 = require("ngx-bootstrap/timepicker");
var sat_popover_1 = require("@ncstate/sat-popover");
var animations_1 = require("@angular/platform-browser/animations");
// IMPORTED FROM PROJECT
var app_states_1 = require("app/app.states");
var app_component_1 = require("app/app.component");
var create_team_component_1 = require("app/components/forms/create-team/create-team.component");
var join_team_component_1 = require("app/components/prompts/join-team/join-team.component");
var slack_login_component_1 = require("app/components/prompts/slack-login/slack-login.component");
var scrumboard_component_1 = require("app/components/containers/scrumboard/scrumboard.component");
var avatar_component_1 = require("app/components/avatar/avatar.component");
var issueboard_component_1 = require("app/components/containers/issueboard/issueboard.component");
var header_component_1 = require("app/components/header/header.component");
var marker_component_1 = require("app/components/marker/marker.component");
var groupby_date_pipe_1 = require("./pipes/groupby-date.pipe");
var login_component_1 = require("./components/forms/login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                join_team_component_1.JoinTeamComponent,
                create_team_component_1.CreateTeamComponent,
                slack_login_component_1.SlackLoginComponent,
                scrumboard_component_1.ScrumboardComponent,
                avatar_component_1.AvatarComponent,
                issueboard_component_1.IssueboardComponent,
                header_component_1.HeaderComponent,
                marker_component_1.MarkerComponent,
                groupby_date_pipe_1.GroupbyDatePipe,
                login_component_1.LoginComponent,
            ],
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                sat_popover_1.SatPopoverModule,
                collapse_1.CollapseModule.forRoot(),
                datepicker_1.BsDatepickerModule.forRoot(),
                timepicker_1.TimepickerModule.forRoot(),
                http_1.HttpClientXsrfModule.withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken',
                }),
                angular_1.UIRouterModule.forRoot(app_states_1.APP_STATES),
                forms_1.FormsModule,
                angular_6_datatable_1.DataTableModule,
                ngx_mydatepicker_1.NgxMyDatePickerModule.forRoot(),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map