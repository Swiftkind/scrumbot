"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var scrum_data_service_1 = require("./scrum-data.service");
describe('ScrumDataService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [scrum_data_service_1.ScrumDataService]
        });
    });
    it('should be created', testing_1.inject([scrum_data_service_1.ScrumDataService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=scrum-data.service.spec.js.map