import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import {CreateFile} from './dtos/CreateFolder.dto'
import {CreateFolder} from './dtos/CreateFolder.dto'
import {Search} from './dtos/CreateFolder.dto'
import {Files} from './dtos/CreateFolder.dto'
import {generate_url} from './dtos/CreateFolder.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create_folder')
  create_folder(@Body() CreateFolder: CreateFolder): any {
    return this.appService.createFolder(CreateFolder.folder_name),'Folder Created successfully';
  }
  @Post('search')
  search_folder(@Body() Search: Search) {
    return this.appService.searchFolder(Search.name);
  }

  @Post('save_file')
  save_file(@Body() createfile: CreateFile): any {
    return this.appService.saveFile(createfile.file_name,createfile.file_actual_name,createfile.file_MIME_Type,createfile.folder_id),'File saved successfully';
  }

  @Post('list')
  Files_in_directory(@Body() Files: Files): any {
    return this.appService.listFiles(Files.folder_id);
  }
  @Post('generate')
  Generate_Url(@Body() gener: generate_url): any {
    return this.appService.generatePublicUrl(gener.folder_id);
  }
  

}
