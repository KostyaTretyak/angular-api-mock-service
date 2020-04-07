import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({ login: null, password: null });
  }

  login() {
    this.message = 'processing...';
    this.httpClient.post(`/api/login`, this.form.value).subscribe(() => {
      this.message = 'done!';
      this.form.reset();
    });
  }
}
