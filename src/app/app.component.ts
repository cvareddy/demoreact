import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 signupForm: FormGroup;
 genders = ['male', 'female'];
 ngOnInit() {
  this.signupForm = new FormGroup({
   userData: new FormGroup({
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null , [Validators.required, Validators.email] )
   }),
   'gender': new FormControl(''),
   'hobbies': new FormArray([])
  });
 }
 onSubmit() {
   console.log(this.signupForm.value);
 }
 onAddHobby() {
   const control = new FormControl(null, Validators.required);
      (<FormArray>this.signupForm.get('hobbies')).push(control);
 }
}
