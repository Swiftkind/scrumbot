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
var DateFilterComponent = /** @class */ (function () {
    function DateFilterComponent() {
        this.myDatePickerOptions = {
            dateFormat: 'dd.mm.yyyy',
            width: '150'
        };
        this.from_model = { date: { year: 2018, month: 10, day: 9 } };
        this.to_model = { date: { year: 2018, month: 10, day: 9 } };
    }
    DateFilterComponent.prototype.ngOnInit = function () {
    };
    DateFilterComponent.prototype.setFilter = function (dateFilterForm) {
        console.log(dateFilterForm.value.from.date);
        console.log(dateFilterForm.value.to.date);
    };
    DateFilterComponent = __decorate([
        core_1.Component({
            selector: 'app-date-filter',
            templateUrl: './date-filter.component.html',
            styleUrls: ['./date-filter.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DateFilterComponent);
    return DateFilterComponent;
}());
exports.DateFilterComponent = DateFilterComponent;
//# sourceMappingURL=date-filter.component.js.map