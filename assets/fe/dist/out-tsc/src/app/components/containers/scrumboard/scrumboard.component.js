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
var filter_service_1 = require("app/services/filter.service");
var search_service_1 = require("app/services/search.service");
var authentication_service_1 = require("app/services/authentication.service");
var angular_1 = require("@uirouter/angular");
var endpoints_1 = require("app/constants/endpoints");
var ScrumboardComponent = /** @class */ (function () {
    function ScrumboardComponent(http, filterService, searchService, dataService, stateService, authService) {
        this.http = http;
        this.filterService = filterService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
        this.authService = authService;
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
        this.a;
        this.logged_user = localStorage.getItem('user');
        this.fetchIssues();
        this.fetchScrums();
        this.fetchUsers();
        this.fetchProjects();
    };
    ScrumboardComponent.prototype.fetchScrums = function () {
        var _this = this;
        this.dataService.fetchScrums()
            .subscribe(function (data) {
            _this.scrums_bydate = data;
            // this.scrums.map(date_group => {
            //   date_group.scrums.map(scrum => {
            //     scrum.issue_logs.map(issue => {
            //                     issue.open = false
            //                 })
            //     return scrum
            //   })
            // })
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
    ScrumboardComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.dataService.fetchUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
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
    ScrumboardComponent.prototype.updateStatus = function (id, status) {
        this.http.post(endpoints_1.UPDATE_ISSUE_STATUS(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
        var group_index = this.scrums_bydate.findIndex(function (scrum) {
            return scrum.scrums.find(function (scrum) {
                return scrum.issue_logs.find(function (issue) {
                    return issue.id == id;
                });
            });
        });
        var scrum_index = this.scrums_bydate[group_index].scrums.findIndex(function (scrum) {
            return scrum.issue_logs.find(function (issue) {
                return issue.id == id;
            });
        });
        var issue_index = this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.findIndex(function (issue) {
            return issue.id == id;
        });
        this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.splice(issue_index, 1);
    };
    ScrumboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(endpoints_1.UPDATE_ISSUE_DEADLINE(id), { "deadline": deadline })
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
    ScrumboardComponent.prototype.getScrum = function (keyword) {
        this.filtered_scrum = this.searchService.searchScrums(keyword, this.scrums_bydate);
    };
    // hasIssues(scrum){
    //   var pending = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Pending'
    //                 })
    //   var resolved = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Resolved'
    //                 })
    //   var closed = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Closed'
    //                 })
    //   return (this.filter_pending && pending.length!=0) ||
    //           (this.filter_resolved && resolved.length!=0) ||
    //           (this.filter_closed && closed.length!=0)
    // }
    ScrumboardComponent.prototype.hasPending = function (scrum) {
        var pending = scrum.issue_logs.filter(function (issue) {
            return issue.status == 'P';
        });
        return (pending.length != 0);
    };
    ScrumboardComponent.prototype.goToIssues = function () {
        this.stateService.go('issuesboard');
    };
    ScrumboardComponent = __decorate([
        core_1.Component({
            selector: 'app-scrumboard',
            templateUrl: './scrumboard.component.html',
            styleUrls: ['./scrumboard.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            filter_service_1.FilterService,
            search_service_1.SearchService,
            data_service_1.DataService,
            angular_1.StateService,
            authentication_service_1.AuthenticationService])
    ], ScrumboardComponent);
    return ScrumboardComponent;
}());
exports.ScrumboardComponent = ScrumboardComponent;
//# sourceMappingURL=scrumboard.component.js.map