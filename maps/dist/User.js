"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.name = faker_1.fakerEN.person.fullName();
        this.location = {
            lat: faker_1.fakerEN.location.latitude(),
            lng: faker_1.fakerEN.location.longitude()
        };
        console.log(`${this.name} - ${JSON.stringify(this.location)}`);
    }
}
exports.User = User;
