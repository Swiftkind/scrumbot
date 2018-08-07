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
                scrum.hours.search(new RegExp(keyword, 'i')) >= 0 ||
                done_logs.length != 0 || wip_logs.length != 0
                || issue_logs.length != 0;
        });
    };
    SearchService.prototype.searchIssues = function (keyword, issues) {
        return issues.filter(function (issue) {
            var scrums = issue.scrum_data.filter(function (scrum) {
                return scrum.user_username.search(new RegExp(keyword, 'i')) >= 0 ||
                    scrum.project_name.search(new RegExp(keyword, 'i')) >= 0;
            });
            return issue.status.search(new RegExp(keyword, 'i')) >= 0 ||
                issue.issue.search(new RegExp(keyword, 'i')) >= 0 ||
                scrums.length != 0;
        });
    };
    SearchService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map