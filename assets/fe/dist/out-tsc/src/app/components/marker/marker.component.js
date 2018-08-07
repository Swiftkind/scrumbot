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
var MarkerComponent = /** @class */ (function () {
    function MarkerComponent() {
    }
    MarkerComponent.prototype.ngOnInit = function () {
    };
    MarkerComponent.prototype.getColor = function (project) {
        if (!project) {
            project = 'light-green';
        }
        return colorGen(project);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MarkerComponent.prototype, "project", void 0);
    MarkerComponent = __decorate([
        core_1.Component({
            selector: 'app-marker',
            templateUrl: './marker.component.html',
            styleUrls: ['./marker.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], MarkerComponent);
    return MarkerComponent;
}());
exports.MarkerComponent = MarkerComponent;
//# sourceMappingURL=marker.component.js.map