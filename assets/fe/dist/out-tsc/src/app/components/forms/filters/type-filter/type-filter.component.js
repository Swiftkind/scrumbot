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
var filter_service_1 = require("../../../../services/filter.service");
var TypeFilterComponent = /** @class */ (function () {
    function TypeFilterComponent(filterService) {
        this.filterService = filterService;
    }
    TypeFilterComponent.prototype.ngOnInit = function () {
    };
    TypeFilterComponent.prototype.setFilter = function (type) {
        // this.filterService.filterByType(type.value)
    };
    TypeFilterComponent = __decorate([
        core_1.Component({
            selector: 'app-type-filter',
            templateUrl: './type-filter.component.html',
            styleUrls: ['./type-filter.component.css']
        }),
        __metadata("design:paramtypes", [filter_service_1.FilterService])
    ], TypeFilterComponent);
    return TypeFilterComponent;
}());
exports.TypeFilterComponent = TypeFilterComponent;
//# sourceMappingURL=type-filter.component.js.map