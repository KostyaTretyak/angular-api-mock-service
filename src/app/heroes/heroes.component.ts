import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@ng-stack/forms';

import { Hero } from '../hero';

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private bsSimples = new BehaviorSubject<Hero>(null);
  isLoading: boolean;
  isAdding: boolean;
  simples$ = this.bsSimples.asObservable();
  form: FormGroup<Hero>;
  message: string;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group<Hero>({
      id: [undefined],
      name: [null, Validators.required],
    });
    this.isLoading = true;
    this.bsSimples.next(undefined);
    this.getSimples();
  }

  private getSimples() {
    if (!this.isLoading) {
      this.message = 'getting...';
    }
    this.httpClient.get<Hero>(`/api/heroes`).subscribe(result => {
      this.message = '';
      this.isLoading = false;
      this.bsSimples.next(result);
    });
  }

  save() {
    this.message = 'saving...';
    if (this.form.invalid) {
      this.showFormErrors();
      return;
    }
    const id = this.form.get('id').value || undefined;
    this.form.get('id').setValue(id);
    this.httpClient.post<Hero>(`/api/heroes`, this.form.value).subscribe(() => {
      this.message = 'saved!';
      this.isAdding = false;
      this.form.reset();
      this.getSimples();
    });
  }

  delete(id: number) {
    this.message = 'deleting...';
    this.httpClient.delete(`/api/heroes/${id}`).subscribe(() => this.getSimples());
  }

  private showFormErrors() {
    if (this.form.get('name').getError('required')) {
      this.message = 'name is required';
      return;
    }
  }

  getError404(id?: number) {
    this.bsSimples.next(undefined);

    this.httpClient.get<Hero>(`/non-existing-route`).subscribe();
  }
}
