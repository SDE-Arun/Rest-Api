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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const { google } = require('googleapis');
const dotenv = require("dotenv");
dotenv.config();
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    constructor() {
        this.driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
        this.driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
        this.driveRedirectUrl = process.env.GOOGLE_DRIVE_REDIRECT_URL;
        this.driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;
        this.driveClient = this.createDriveClient();
    }
    createDriveClient() {
        const client = new google.auth.OAuth2(this.driveClientId, this.driveClientSecret, this.driveRedirectUrl, this.driveRefreshToken);
        client.setCredentials({ refresh_token: this.driveRefreshToken });
        return google.drive({
            version: 'v3',
            auth: client,
        });
    }
    createFolder(folderName) {
        return this.driveClient.files.create({
            resource: {
                name: folderName,
                mimeType: 'application/vnd.google-apps.folder',
            },
            fields: 'id, name',
        });
    }
    async searchFolder(folderName) {
        const files = [];
        try {
            const res = await this.driveClient.files.list({
                q: `name contains '${folderName}'`,
                fields: 'files(id, name)',
            });
            if (res.data.files.length === 0) {
                return 'This file doesn\'t exist';
            }
            else
                return res.data.files;
        }
        catch (err) {
            console.log(`file has an error : ${err}`);
            return [];
        }
    }
    saveFile(fileName, file, fileMimeType, folderId) {
        const filepath = path.resolve(__dirname, '../../', file);
        return this.driveClient.files.create({
            requestBody: {
                name: fileName,
                mimeType: fileMimeType,
                parents: folderId ? [folderId] : [],
            },
            media: {
                mimeType: fileMimeType,
                body: fs.createReadStream(filepath),
            },
        });
    }
    async listFiles(fileId) {
        let res;
        if (fileId) {
            res = await this.driveClient.files.list({
                includeRemoved: false,
                spaces: 'drive',
                fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
                q: `'${fileId}' in parents`
            });
        }
        else {
            res = await this.driveClient.files.list({
                includeRemoved: false,
                spaces: 'drive',
                fields: 'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
            });
        }
        const files = res.data.files;
        if (files.length === 0) {
            return 'No files found.';
        }
        return files;
    }
    ;
    async generatePublicUrl(fileId) {
        try {
            console.log(fileId);
            await this.driveClient.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            });
            const result = await this.driveClient.files.get({
                fileId: fileId,
                fields: 'webViewLink,webContentLink'
            });
            return result.data;
        }
        catch (error) {
            return error;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map