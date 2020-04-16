import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishDateComponent } from './publish-date.component';

describe('PublishDateComponent', () => {
  let component: PublishDateComponent;
  let fixture: ComponentFixture<PublishDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
