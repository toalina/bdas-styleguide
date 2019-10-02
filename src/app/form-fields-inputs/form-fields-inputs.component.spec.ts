import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsInputsComponent } from './form-fields-inputs.component';

describe('FormFieldsInputsComponent', () => {
  let component: FormFieldsInputsComponent;
  let fixture: ComponentFixture<FormFieldsInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldsInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldsInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
