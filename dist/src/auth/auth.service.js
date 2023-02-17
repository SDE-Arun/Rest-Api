"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor() {
        this.authors = ['this', 'that'];
        this.author = [{
                id: 1,
                name: 'ABC'
            }, {
                id: 2,
                name: 'no-one'
            }
        ];
    }
    findAll() {
        return this.authors;
    }
    create(item) {
        this.authors.push(item);
    }
    signup() {
        return { msg: 'I am signed up' };
    }
    signin() {
        return { msg: 'I am signed in my account' };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)({})
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map