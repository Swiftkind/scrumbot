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
var colorGen = require("string-to-color");
var core_1 = require("@angular/core");
var scrum_data_service_1 = require("../../services/scrum-data.service");
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(scrumDataService) {
        this.scrumDataService = scrumDataService;
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent.prototype.getColor = function (id) {
        if (!id) {
            id = 'blue';
        }
        return colorGen(id);
    };
    AvatarComponent.prototype.getUsername = function (username) {
        if (!username) {
            return 'CS';
        }
        // try{
        if (username.indexOf('.') == -1) {
            return username.charAt(0).toUpperCase() +
                username.charAt(1).toUpperCase();
        }
        var avatar_name = username.split('.');
        return avatar_name[0].charAt(0).toUpperCase() +
            avatar_name[1].charAt(0).toUpperCase();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "username", void 0);
    AvatarComponent = __decorate([
        core_1.Component({
            selector: 'app-avatar',
            templateUrl: './avatar.component.html',
            styleUrls: ['./avatar.component.css']
        }),
        __metadata("design:paramtypes", [scrum_data_service_1.ScrumDataService])
    ], AvatarComponent);
    return AvatarComponent;
}());
exports.AvatarComponent = AvatarComponent;
//# sourceMappingURL=avatar.component.js.map