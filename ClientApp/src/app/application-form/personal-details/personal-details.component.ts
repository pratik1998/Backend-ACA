import { Component, OnInit, Output, Input, EventEmitter, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../../data-models/Address'
import { PersonalInfo } from '../../data-models/PersonalInfo';
import { ContactInfo } from '../../data-models/ContactInfo';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})

export class PersonalDetailsComponent implements OnInit {

  @Input() public step;
  @Output() public childEvent = new EventEmitter();
  states = ['Gujarat','Punjab','Kolkata'];
  @ViewChild('file') imageFile;
  imageFilePath: string;

  http: HttpClient;
  baseUrl: string;
  address = new Address('Jay shah','cscs','cdcd','cdcd','Gujarat','decdec');
  cInfo = new ContactInfo('','','','');
  personalId = new PersonalInfo('','','','',this.address,this.cInfo);

  constructor(http: HttpClient) { 
    this.http = http;
    this.baseUrl = 'https://localhost:5001/api/SampleData/';
  }

  ngOnInit() {
  }

  addImage() {
    this.imageFile.nativeElement.click();
  }

  onImageAdded(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (loadEvent: any) => {
        this.imageFilePath = loadEvent.target.result;
        console.log(this.imageFilePath);
      }
    }
  }

  setStep(index: number) {
    this.step = index;
    this.childEvent.emit(this.step);
  }

  nextComponent() {
    this.step++;
    this.childEvent.emit(this.step);
    let json:string = JSON.stringify(this.personalId);
    console.log(json);
    this.http.post(this.baseUrl+"address",this.address)
    .subscribe(
        data => {
            console.log("POST Request is successful ",data);
        },
        error => {
            console.log("Error", error);
        }
    );
    this.http.post(this.baseUrl+"personalInfo",this.personalId)
    .subscribe(
        data => {
            console.log("POST Request is successful ",data);
        },
        error => {
            console.log("Error", error);
        }
    );
  }

  prevComponent() {
    this.step--;
    this.childEvent.emit(this.step);
  }
}