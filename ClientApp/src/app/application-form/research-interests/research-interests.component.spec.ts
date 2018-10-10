import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchInterestsComponent } from './research-interests.component';

describe('ResearchInterestsComponent', () => {
  let component: ResearchInterestsComponent;
  let fixture: ComponentFixture<ResearchInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
