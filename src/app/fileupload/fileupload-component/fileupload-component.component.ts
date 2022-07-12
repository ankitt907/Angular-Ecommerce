import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-fileupload-component',
  templateUrl: './fileupload-component.component.html',
  styleUrls: ['./fileupload-component.component.css']
})
export class FileuploadComponentComponent implements OnInit {
shortLink:string="";
loading:boolean=true;
file!:File;

  constructor(private fileService:FileUploadService) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    this.file=event.target.files[0];
  }

  onUpload(){
    this.loading=!this.loading;
   
    this.fileService.upload(this.file).subscribe((event:any)=>{
      if(typeof(event)==='object'){
     console.log("it matched");
     
        this.shortLink=event.link;
        this.loading=false;
      }
    })
    
  }

}
