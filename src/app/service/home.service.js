"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
var http_1 = require("@angular/http");
var httpOptions = {
    headers: new http_1.Headers({ 'Content-Type': 'application/json' })
};
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getUsers = function () {
        return this.http.get("http://localhost:8080/eTradeREST/users"); //.catch(this._serverError); ;
    };
    HomeService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        return this.http.put("http://localhost:8080/eTradeREST/users/update/" + user.id, body, httpOptions);
    };
    HomeService = __decorate([
        core_1.Injectable()
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map