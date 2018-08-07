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
var angular_1 = require("@uirouter/angular");
// import { API_CREATE } from '../constants/endpoints';
var ApiService = /** @class */ (function () {
    function ApiService(http, stateService) {
        this.http = http;
        this.stateService = stateService;
        this.users = {};
    }
    ApiService.prototype.set_list = function (endpoint) {
        var _this = this;
        this.http.get(endpoint)
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ApiService.prototype.get_list = function () {
        return this.users;
    };
    ApiService.prototype.create = function (api_name, data) {
        // var request = this.http.post(API_CREATE(api_name),data)
        // this.http.post(API_CREATE(api_name), data)
        // .subscribe(
        //     data => console.log(data),
        //     error => this.stateService.go('join-team')
        // );
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            angular_1.StateService])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map