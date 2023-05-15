import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Dog } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  dogGenerated = new Subject<Dog>();

  constructor(private http: HttpClient) {}

  // https://dog.ceo/api/breeds/image/random

  getDogs(): Observable<Dog> {
    return this.http.get<Dog>('https://dog.ceo/api/breeds/image/random').pipe(
      tap((dog) => {
        console.log(dog.message);
      }),
      tap((dog) => {
        this.dogGenerated.next(dog);
      })
    );
  }
}
