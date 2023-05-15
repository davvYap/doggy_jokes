import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

import { Joke } from '../models';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  joke = new Subject<Joke>();

  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    return this.http
      .get<Joke>('https://official-joke-api.appspot.com/random_joke')
      .pipe(
        tap((joke) => console.log(joke.setup)),
        tap((joke) => this.joke.next(joke))
      );
  }
}
