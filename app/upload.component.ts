import { Component } from '@angular/core';
import { FileInfo } from '@progress/kendo-angular-upload';

@Component({
  selector: 'my-upload',
  template: `
  <kendo-upload
    [saveUrl]="uploadSaveUrl"
    [removeUrl]="uploadRemoveUrl"
    [showFileList]="false"
    (select)="selectEventHandler($event)">
  </kendo-upload>

  <h4>Files:</h4>
  <div *ngFor="let file of myFiles">
    <p>Name: {{ file.name }}</p>
  </div>
  `
})
export class UploadComponent {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  myFiles: Array<FileInfo> = [];

  selectEventHandler(e: SelectEvent) {
    e.files.forEach((file) => this.myFiles.push(file));
  }
}
