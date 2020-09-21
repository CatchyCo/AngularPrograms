import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormValidationComponent } from './template-drive-form-validation.component';

describe('TemplateDriveFormValidationComponent', () => {
  let component: TemplateDriveFormValidationComponent;
  let fixture: ComponentFixture<TemplateDriveFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDriveFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDriveFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
