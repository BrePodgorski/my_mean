import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia-list',
  templateUrl: './trivia-list.component.html',
  styleUrls: ['./trivia-list.component.css']
})
export class TriviaListComponent implements OnInit {
  questions:Array<any>;
  user: any;
  constructor(private _triviaService: TriviaService, private _router: Router) { }

  ngOnInit() {
    this.componentGetAllQuestions();
    this.getCurrentUser();
  }
  componentGetAllQuestions(){
    this._triviaService.serviceGetAllQuestions()
    .then((questionsFromServer)=>this.questions=questionsFromServer)
    .catch((err)=>console.log(err))
  }
  getCurrentUser(){
    this._triviaService.getCurrentUser()
    .then( (user)=> this.user=user)
    .catch((err)=>this._router.navigate(['/login']))
  }
}
