"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const CreateFolder_dto_1 = require("./dtos/CreateFolder.dto");
const CreateFolder_dto_2 = require("./dtos/CreateFolder.dto");
const CreateFolder_dto_3 = require("./dtos/CreateFolder.dto");
const CreateFolder_dto_4 = require("./dtos/CreateFolder.dto");
const CreateFolder_dto_5 = require("./dtos/CreateFolder.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    create_folder(CreateFolder) {
        return this.appService.createFolder(CreateFolder.folder_name), 'Folder Created successfully';
    }
    search_folder(Search) {
        return this.appService.searchFolder(Search.name);
    }
    save_file(createfile) {
        return this.appService.saveFile(createfile.file_name, createfile.file_actual_name, createfile.file_MIME_Type, createfile.folder_id), 'File saved successfully';
    }
    Files_in_directory(Files) {
        return this.appService.listFiles(Files.folder_id);
    }
    Generate_Url(gener) {
        return this.appService.generatePublicUrl(gener.folder_id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('create_folder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFolder_dto_2.CreateFolder]),
    __metadata("design:returntype", Object)
], AppController.prototype, "create_folder", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFolder_dto_3.Search]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "search_folder", null);
__decorate([
    (0, common_1.Post)('save_file'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFolder_dto_1.CreateFile]),
    __metadata("design:returntype", Object)
], AppController.prototype, "save_file", null);
__decorate([
    (0, common_1.Post)('list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFolder_dto_4.Files]),
    __metadata("design:returntype", Object)
], AppController.prototype, "Files_in_directory", null);
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFolder_dto_5.generate_url]),
    __metadata("design:returntype", Object)
], AppController.prototype, "Generate_Url", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map