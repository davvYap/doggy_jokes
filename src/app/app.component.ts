import { Component, ViewChild, OnInit } from '@angular/core';
import { DogsComponent } from './component/dogs/dogs.component';
import { JokesComponent } from './component/jokes/jokes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'workshop';
  webShare: boolean = false;
  webLink: string = 'https://doggyjokes.vercel.app/';

  @ViewChild(DogsComponent)
  dogComponent!: DogsComponent;

  @ViewChild(JokesComponent)
  jokesComponent!: JokesComponent;

  ngOnInit(): void {
    this.webShare = !!navigator.canShare();
  }

  next(): void {
    this.dogComponent.getDogs();
    this.jokesComponent.getRandomJoke();
  }

  love(): void {
    alert('Thanks 🥰');
  }

  shareLink(): void {
    const data: any = {
      title: 'Dogs & Jokes',
      text: 'Enjoy the Dogs & Jokes',
      url: this.webLink,
    };
    console.log(data);
    navigator
      .share(data)
      .then((result) => alert('Done sharing!'))
      .catch((error) => alert(`Error on sharing!`));
  }
}
