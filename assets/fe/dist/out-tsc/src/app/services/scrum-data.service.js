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
var ScrumDataService = /** @class */ (function () {
    function ScrumDataService(http) {
        this.http = http;
    }
    ScrumDataService.prototype.fetchScrums = function () {
        return this.http.get(endpoints_1.GET_LOGS());
    };
    ScrumDataService.prototype.getScrums = function () {
        return this.scrum_data;
    };
    ScrumDataService.prototype.setScrums = function (scrum_data) {
        this.scrum_data = scrum_data;
    };
    ScrumDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ScrumDataService);
    return ScrumDataService;
}());
exports.ScrumDataService = ScrumDataService;
//# sourceMappingURL=scrum-data.service.js.map