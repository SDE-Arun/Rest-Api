/// <reference types="multer" />
import { Response } from 'express';
import { StorageService } from 'src/storage/storage.service';
export declare class MediaController {
    private storageService;
    constructor(storageService: StorageService);
    uploadMedia(file: Express.Multer.File, mediaId: string): Promise<void>;
    downloadMedia(mediaId: string, res: Response): Promise<void>;
}
