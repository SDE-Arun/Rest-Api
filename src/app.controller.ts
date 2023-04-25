import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateFileDTO } from './dtos/CreateFolder.dto';
import { CreateFolderDTO } from './dtos/CreateFolder.dto';
import { SearchDTO } from './dtos/CreateFolder.dto';
import { FilesDTO } from './dtos/CreateFolder.dto';
import { generate_urlDTO } from './dtos/CreateFolder.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create_folder')
  async create_folder(@Body() CreateFolder: CreateFolderDTO): Promise<any> {
    return (
      this.appService.createFolder(CreateFolder.folder_name),
      'Folder Created successfully'
    );
  }
  @Post('search')
  search_folder(@Body() Search: SearchDTO) {
    return this.appService.searchFolder(Search.name);
  }

  @Post('save_file')
  save_file(@Body() createfile: CreateFileDTO): any {
    return (
      this.appService.saveFile(
        createfile.file_name,
        createfile.file_actual_name,
        createfile.file_MIME_Type,
        createfile.folder_id,
      ),
      'File saved successfully'
    );
  }

  @Post('list')
  Files_in_directory(@Body() Files: FilesDTO): any {
    return this.appService.listFiles(Files.folder_id);
  }
  @Post('generate')
  Generate_Url(@Body() gener: generate_urlDTO): any {
    return this.appService.generatePublicUrl(gener.folder_id);
  }
}
