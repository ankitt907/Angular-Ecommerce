import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadComponentComponent } from './fileupload-component/fileupload-component.component';


@NgModule({
  declarations: [
    FileuploadComponentComponent
  ],
  imports: [
    CommonModule,
    FileuploadRoutingModule
  ],
  exports:[FileuploadComponentComponent]
})
export class FileuploadModule { }
