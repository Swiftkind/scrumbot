"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var data_service_1 = require("app/services/data.service");
var search_service_1 = require("app/services/search.service");
var endpoints_1 = require("app/constants/endpoints");
var angular_1 = require("@uirouter/angular");
var IssueboardComponent = /** @class */ (function () {
    function IssueboardComponent(http, searchService, dataService, stateService) {
        this.http = http;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
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
    IssueboardComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
        this.fetchProjects();
        this.fetchUsers();
    };
    IssueboardComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.dataService.fetchIssues()
            .subscribe(function (data) {
            _this.issues = data;
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
        this.http.post(endpoints_1.UPDATE_ISSUE_STATUS(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
    };
    IssueboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(endpoints_1.UPDATE_ISSUE_DEADLINE(id), { "deadline": deadline })
                .subscribe();
        }
    };
    IssueboardComponent.prototype.isWithinDate = function (scrum_date, filter_from, filter_to) {
        return (new Date(scrum_date).setHours(0, 0, 0, 0) >= filter_from.setHours(0, 0, 0, 0) &&
            new Date(scrum_date).setHours(0, 0, 0, 0) <= filter_to.setHours(0, 0, 0, 0));
    };
    IssueboardComponent.prototype.goToDashboard = function () {
        this.stateService.go('scrumboard');
    };
    IssueboardComponent = __decorate([
        core_1.Component({
            selector: 'app-issueboard',
            templateUrl: './issueboard.component.html',
            styleUrls: ['./issueboard.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            search_service_1.SearchService,
            data_service_1.DataService,
            angular_1.StateService])
    ], IssueboardComponent);
    return IssueboardComponent;
}());
exports.IssueboardComponent = IssueboardComponent;
//# sourceMappingURL=issueboard.component.js.map