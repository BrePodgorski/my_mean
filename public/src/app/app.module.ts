import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//add routing import
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { TriviaComponent } from './trivia/trivia.component';
import { TriviaService } from './trivia/trivia.service';
import { TriviaListComponent } from './trivia/trivia-list/trivia-list.component';
import { TriviaNewComponent } from './trivia/trivia-new/trivia-new.component';
import { TriviaShowComponent } from './trivia/trivia-show/trivia-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TriviaComponent,
    TriviaListComponent,
    TriviaNewComponent,
    TriviaShowComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
