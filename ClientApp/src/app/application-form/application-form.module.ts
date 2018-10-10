import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationFormComponent } from './application-form.component';
import { FileUploadComponent } from 'src/app/application-form/file-upload/file-upload.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ResearchInterestsComponent } from './research-interests/research-interests.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRadioModule, MatDialogModule, MatListModule, MatProgressBarModule, MatSelectModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  declarations: [
    ApplicationFormComponent,
    EducationDetailsComponent,
    FileUploadComponent,
    PersonalDetailsComponent,
    ResearchInterestsComponent
  ],
  entryComponents: [FileUploadComponent],
  exports: [ApplicationFormComponent]
})
export class ApplicationFormModule { }
