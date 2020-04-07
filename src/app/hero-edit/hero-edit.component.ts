import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@ng-stack/forms';

import { Hero } from '../hero';

@Component({
  templateUrl: './hero-edit.component.html'
})
export class HeroEditComponent implements OnInit {
  form: FormGroup<Hero>;
  message: string;
  get id() {
    return this.form.get('id').value;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.message = 'loading...';
    this.form = this.formBuilder.group({ id: 0, name: '' });

    const id: number = this.activatedRoute.snapshot.params.id;
    this.httpClient.get<Hero[]>(`/api/heroes/${id}`).subscribe(result => {
      this.message = '';
      this.form = this.formBuilder.group(result[0]);
    });
  }

  save() {
    const id = this.form.get('id').value;
    this.message = 'saving...';
    this.httpClient.patch<Hero>(`/api/heroes/${id}`, this.form.value).subscribe(() => {
      this.message = 'saved!';
    });
  }
}
