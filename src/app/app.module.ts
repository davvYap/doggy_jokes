import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DogsService } from './service/dogs.service';
import { JokesService } from './service/jokes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DogsComponent } from './component/dogs/dogs.component';
import { JokesComponent } from './component/jokes/jokes.component';

@NgModule({
  declarations: [AppComponent, DogsComponent, JokesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DogsService, JokesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
