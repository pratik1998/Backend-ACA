import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-research-interests',
  templateUrl: './research-interests.component.html',
  styleUrls: ['./research-interests.component.css']
})
export class ResearchInterestsComponent implements OnInit {

  @Input() public step;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
    this.childEvent.emit(this.step);
  }

  nextComponent() {
    this.step++;
    this.childEvent.emit(this.step);
  }

  prevComponent() {
    this.step--;
    this.childEvent.emit(this.step);
  }
}
