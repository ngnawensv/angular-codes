import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueTranslateComponent } from './dynamique-translate.component';

describe('DynamiqueTranslateComponent', () => {
  let component: DynamiqueTranslateComponent;
  let fixture: ComponentFixture<DynamiqueTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
