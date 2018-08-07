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
var endpoints_1 = require("app/constants/endpoints");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.fetchScrums = function () {
        return this.http.get(endpoints_1.GET_LOGS());
    };
    DataService.prototype.fetchUsers = function () {
        return this.http.get(endpoints_1.GET_TEAM_MEMBERS());
    };
    DataService.prototype.fetchProjects = function () {
        return this.http.get(endpoints_1.GET_TEAM_PROJECTS());
    };
    DataService.prototype.fetchIssues = function () {
        return this.http.get(endpoints_1.GET_ISSUES());
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
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map