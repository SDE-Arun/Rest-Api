type PartialDriveFile = {
    id: string;
    name: string;
};
export declare class AppService {
    getHello(): string;
    private driveClient;
    private driveClientId;
    private driveClientSecret;
    private driveRedirectUrl;
    private driveRefreshToken;
    constructor();
    createDriveClient(): any;
    createFolder(folderName: string): Promise<PartialDriveFile>;
    searchFolder(folderName: string): Promise<any>;
    saveFile(fileName: string, file: string, fileMimeType: string, folderId?: string): any;
    listFiles(fileId?: string): Promise<any>;
    generatePublicUrl(fileId: string): Promise<any>;
}
export {};
