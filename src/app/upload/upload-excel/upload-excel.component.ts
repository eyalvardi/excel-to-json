import { Component, OnInit } from '@angular/core';
import readXlsxFile from 'read-excel-file'

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit {

  data:any;
  constructor() { }

  ngOnInit(): void {
  }

  readXlsFile($event: Event) {
    const input : HTMLInputElement = $event.target as HTMLInputElement;
    // @ts-ignore
    const file = input?.files[0] ;

    readXlsxFile(file).then((rows) => {
      this.data = rows;
      console.table(rows);
    })
  }
}
