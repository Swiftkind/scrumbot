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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());
exports.FilterService = FilterService;
//# sourceMappingURL=filter.service.js.map