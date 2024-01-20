import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TouristService } from '../tourist.service';
import { Tour } from '../tour';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  t: Tour = new Tour();

  constructor(
    private p: TouristService,
    private route: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      destination: ['', Validators.required],
      persons: ['', Validators.required],
      packages: ['', Validators.required]
    });
  }

  onSubmit(): void {
    
    console.log('form submitted');
    
    if (this.myForm.valid) {
      this.p.postDetails(this.myForm.value).subscribe(
        (response) => {
          this.t = response;
          console.log("successfully added",response);
this.goToupdateProduct();
        },
        (error) => console.log(error)
      );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  


    
  }

  goToupdateProduct() {
    this.route.navigate(['home']);
  }
  
}
