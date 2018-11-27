import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  beforeEach(() => {
    component = new FormComponent(new FormBuilder());
  })
  it('should contain the property name', () => {
    expect(component.form.contains('name')).toBeTruthy();
  })
  it('should contain the property email', () => {
    expect(component.form.contains('email')).toBeTruthy();
  })
  it('should check if value of input field is valid', () => {
    const formInput = component.form.get('name');
    formInput.setValue('');
    expect(formInput.valid).toBeFalsy();
  })
})
