"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1.default.address.cityName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude(23, 34, 0)),
            lng: parseFloat(faker_1.default.address.longitude(24, 33, 1))
        };
        console.log("".concat(this.name, " - ").concat(this.location));
    }
    return User;
}());
exports.default = User;
