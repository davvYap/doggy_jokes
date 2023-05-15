import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../service/dogs.service';
import { Dog } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent implements OnInit {
  dog$!: Observable<Dog>;

  constructor(private dogService: DogsService) {}

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dog$ = this.dogService.getDogs();
    //this.dog$.subscribe();
  }
}
