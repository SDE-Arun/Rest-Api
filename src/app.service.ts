import { Injectable } from '@nestjs/common';
// import { GoogleDriveService } from './googleDriveService';
import * as fs from 'fs';
import * as path from 'path';
import { google } from 'googleapis';
import * as dotenv from 'dotenv';
// import { oauth2 } from 'googleapis/build/src/apis/oauth2';

dotenv.config();

type PartialDriveFile = {
  id: string;
  name: string;
};

// type SearchResultResponse = {
//   kind: 'drive#fileList';
//   nextPageToken: string;
//   incompleteSearch: boolean;
//   files: PartialDriveFile[];
// };

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getfile():any{
  //   return this.GoogleDriveService.getfiles();
  // }
  private driveClient;

  private driveClientId = process.env.GOOGLE_DRIVE_CLIENT_ID;
  private driveClientSecret = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
  private driveRedirectUrl = process.env.GOOGLE_DRIVE_REDIRECT_URL;
  private driveRefreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;
  public constructor() {
    this.driveClient = this.createDriveClient();
  }

  createDriveClient() {
    const client = new google.auth.OAuth2(
      this.driveClientId,
      this.driveClientSecret,
      this.driveRedirectUrl,
    );

    client.setCredentials({ refresh_token: this.driveRefreshToken });

    return google.drive({
      version: 'v3',
      auth: client,
    });
  }

  createFolder(folderName: string): Promise<PartialDriveFile> {
    return this.driveClient.files.create({
      resource: {
        name: folderName,
        mimeType: 'application/vnd.google-apps.folder',
      },
      fields: 'id, name',
    });
  }

  async searchFolder(folderName: string) {
    // const files = [];
    try {
      const res = await this.driveClient.files.list({
        // q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}'`,
        // q: `mimeType= name contains ${folderName}'`,
        q: `name contains '${folderName}'`,
        // q: "mimeType=\'image/jpeg\'",
        fields: 'files(id, name)',
      });
      if (res.data.files.length === 0) {
        return "This file doesn't exist";
      } else return res.data.files;
    } catch (err) {
      console.log(`file has an error : ${err}`);
      return [];
    }
  }

  saveFile(
    fileName: string,
    file: string,
    fileMimeType: string,
    folderId?: string,
  ) {
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

  async listFiles(fileId?: string) {
    let res;
    if (fileId) {
      res = await this.driveClient.files.list({
        includeRemoved: false,
        spaces: 'drive',
        fields:
          'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',

        q: `'${fileId}' in parents`,
      });
    } else {
      res = await this.driveClient.files.list({
        includeRemoved: false,
        spaces: 'drive',
        fields:
          'nextPageToken, files(id, name, parents, mimeType, modifiedTime)',
      });
    }
    // return
    const files = res.data.files;
    if (files.length === 0) {
      return 'No files found.';
    }

    return files;
    // console.log('Files:');
    // files.map((file) => {
    //   console.log(`${file.name} (${file.id})`);
    // });
  }

  async generatePublicUrl(fileId: string) {
    try {
      // const fileId='1aOFQDn5C8F4DSR5FpEbm9SYqCYe7qfTx';
      console.log(fileId);
      // Giving the permission to file make the URL
      await this.driveClient.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });

      const result = await this.driveClient.files.get({
        fileId: fileId,
        // This function returns many things but we want only two below
        fields: 'webViewLink,webContentLink',
      });
      // we are printing the above function data
      return result.data;
    } catch (error) {
      return error;
    }
  }
}
