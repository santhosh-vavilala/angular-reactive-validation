import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reactive';

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      height: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      leftEyePower: ['', Validators.required],
      rightEyePower: ['', Validators.required],
    });
    this.updateValidators();
  }

  updateValidators(){
    this.rightEyePowerForm.setValidators([Validators.required, Validators.min(this.leftEyePowerForm.value + 0.1)]);
    this.rightEyePowerForm.updateValueAndValidity();
  }

  get leftEyePowerForm() {
    return this.myForm.get('leftEyePower') as FormControl;
  }

  get rightEyePowerForm() {
    return this.myForm.get('rightEyePower') as FormControl;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
