import { Component, OnInit } from '@angular/core';
import { Joke } from '../../models';
import { JokesService } from '../../service/jokes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent implements OnInit {
  joke$!: Observable<Joke>;
  joke!: Joke;

  canShare: boolean = false;

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.getRandomJoke();
    this.canShare = !!navigator.canShare();
  }

  getRandomJoke(): void {
    this.joke$ = this.jokesService.getRandomJoke();
  }

  share(joke: Joke) {
    let message: string = `${joke.setup} >>> ${joke.punchline}`;
    console.log(message);

    const data: any = {
      title: joke.id,
      text: message,
    };
    navigator
      .share(data)
      .then((result) => alert('Done sharing joke!'))
      .catch((error) => alert(`Error on sharing joke! ${error}`));
  }
}
