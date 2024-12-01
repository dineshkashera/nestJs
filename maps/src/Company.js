"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker_1 = require("@faker-js/faker");
var Company = /** @class */ (function () {
    function Company() {
        this.name = faker_1.fakerEN.company.name();
        this.catchPhrase = faker_1.fakerEN.company.catchPhrase();
        this.location = {
            lat: faker_1.fakerEN.location.latitude(),
            lng: faker_1.fakerEN.location.longitude()
        };
        console.log("".concat(this.name, " - ").concat(JSON.stringify(this.location)));
    }
    return Company;
}());
exports.Company = Company;
