export class CreateFolder{
    folder_name:string;
}
export class CreateFile{
    
    file_name:string;
    file_actual_name:string;
    file_MIME_Type:string;
    folder_id:string;
}
export class Search{
    name:string;
}
export class Files{
    folder_id:string;
}
export class generate_url{
    folder_id:string;
}