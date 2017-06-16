import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TriviaComponent} from './trivia/trivia.component';
import {TriviaNewComponent} from './trivia/trivia-new/trivia-new.component';
import {TriviaListComponent} from './trivia/trivia-list/trivia-list.component';
import {TriviaShowComponent} from './trivia/trivia-show/trivia-show.component';


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {path: 'trivia', component: TriviaComponent, children: [
    {path: 'list', component: TriviaListComponent},
    {path: 'new', component: TriviaNewComponent},
    {path: 'show/:id', component: TriviaShowComponent}

  ]},


];
export const routing = RouterModule.forRoot(APP_ROUTES);
