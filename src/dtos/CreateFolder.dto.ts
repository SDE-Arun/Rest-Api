export class CreateFolderDTO {
  folder_name: string;
}
export class CreateFileDTO {
  file_name: string;
  file_actual_name: string;
  file_MIME_Type: string;
  folder_id: string;
}
export class SearchDTO {
  name: string;
}
export class FilesDTO {
  folder_id: string;
}
export class generate_urlDTO {
  folder_id: string;
}
