"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.name = faker_1.fakerEN.company.name();
        this.catchPhrase = faker_1.fakerEN.company.catchPhrase();
        this.location = {
            lat: faker_1.fakerEN.location.latitude(),
            lng: faker_1.fakerEN.location.longitude()
        };
        console.log(`${this.name} - ${JSON.stringify(this.location)}`);
    }
}
exports.Company = Company;
