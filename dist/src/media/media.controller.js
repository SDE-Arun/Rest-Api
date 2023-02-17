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
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const storage_service_1 = require("../storage/storage.service");
let MediaController = class MediaController {
    constructor(storageService) {
        this.storageService = storageService;
    }
    async uploadMedia(file, mediaId) {
        await this.storageService.save('media/' + mediaId, file.mimetype, file.buffer, [{ mediaId: mediaId }]);
    }
    async downloadMedia(mediaId, res) {
        let storageFile;
        try {
            storageFile = await this.storageService.get('media/' + mediaId);
        }
        catch (e) {
            if (e.message.toString().includes('No such object')) {
                throw new common_1.NotFoundException('image not found');
            }
            else {
                throw new common_1.ServiceUnavailableException('internal error');
            }
        }
        res.setHeader('Content-Type', storageFile.contentType);
        res.setHeader('Cache-Control', 'max-age=60d');
        res.end(storageFile.buffer);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: {
            files: 1,
            fileSize: 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "uploadMedia", null);
__decorate([
    (0, common_1.Get)('/:mediaId'),
    __param(0, (0, common_1.Param)('mediaId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "downloadMedia", null);
MediaController = __decorate([
    (0, common_1.Controller)('media'),
    __metadata("design:paramtypes", [storage_service_1.StorageService])
], MediaController);
exports.MediaController = MediaController;
//# sourceMappingURL=media.controller.js.map