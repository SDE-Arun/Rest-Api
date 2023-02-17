import { AppService } from './app.service';
import { CreateFile } from './dtos/CreateFolder.dto';
import { CreateFolder } from './dtos/CreateFolder.dto';
import { Search } from './dtos/CreateFolder.dto';
import { Files } from './dtos/CreateFolder.dto';
import { generate_url } from './dtos/CreateFolder.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    create_folder(CreateFolder: CreateFolder): any;
    search_folder(Search: Search): Promise<any>;
    save_file(createfile: CreateFile): any;
    Files_in_directory(Files: Files): any;
    Generate_Url(gener: generate_url): any;
}
