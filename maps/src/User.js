"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker_1 = require("@faker-js/faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.fakerEN.person.fullName();
        this.location = {
            lat: faker_1.fakerEN.location.latitude(),
            lng: faker_1.fakerEN.location.longitude()
        };
        console.log("".concat(this.name, " - ").concat(JSON.stringify(this.location)));
    }
    return User;
}());
exports.User = User;
