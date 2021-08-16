import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-bookappoinment',
  templateUrl: './bookappoinment.component.html',
  styleUrls: ['./bookappoinment.component.scss']
})
export class BookappoinmentComponent {
  bookappoForm: FormGroup;
    submitted = false;
    
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.bookappoForm = this.formBuilder.group({
            firstName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
            lastName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(15)]],
            mobile:['',[Validators.required,Validators.maxLength(10),Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)]],
            email: ['', [Validators.required, Validators.email,Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
           type:['',Validators.required],
           service:['',Validators.required],
           date:['',Validators.required],
           time:['',Validators.required],
           address:['',Validators.required],
           state:['',Validators.required],
           city:['',Validators.required],
            msg: ['', [Validators.required, Validators.maxLength(1000)]]
            
        
        })
    }

    // convenience getter for easy access to form fields
    get f() { return this.bookappoForm.controls; }

    onSubmit() {
        this.submitted = true;
console.log(this.bookappoForm.value)
        // stop here if form is invalid
        if (this.bookappoForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookappoForm.value, null, 4));
        this.onReset();
    }

    onReset() {
        this.submitted = false;
        this.bookappoForm.reset('');
    }
      
  

}
