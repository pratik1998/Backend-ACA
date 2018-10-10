import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FileUploadService } from '../services/file-upload.service';
import { FileUploadComponent } from './file-upload/file-upload.component';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  title = 'New World of Angular JS';
  public step = 0;

  constructor(public dialog: MatDialog, public uploadService: FileUploadService) {}

  ngOnInit(): void {
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(FileUploadComponent, { width: '50%', height: '50%' });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
