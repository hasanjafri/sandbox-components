import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAutoCompleteComponent } from './sb-auto-complete.component';

describe('SbAutoCompleteComponent', () => {
  let component: SbAutoCompleteComponent;
  let fixture: ComponentFixture<SbAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
