import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms'

import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  email = 'ash@gmail.com';
  password = '';
  isError = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }
  
}
