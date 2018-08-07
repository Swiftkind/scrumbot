"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var filter_service_1 = require("./filter.service");
describe('FilterService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [filter_service_1.FilterService]
        });
    });
    it('should be created', testing_1.inject([filter_service_1.FilterService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=filter.service.spec.js.map