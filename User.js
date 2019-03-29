"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(firstName, secondName, homeWorks, id) {
        if (id === void 0) { id = Math.floor(Math.random() * 10000); }
        this.firstName = firstName;
        this.secondName = secondName;
        this.homeWorks = homeWorks;
        this.id = id;
    }
    return User;
}());
exports.default = User;
