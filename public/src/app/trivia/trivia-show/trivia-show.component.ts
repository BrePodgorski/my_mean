import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service';
//import router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trivia-show',
  templateUrl: './trivia-show.component.html',
  styleUrls: ['./trivia-show.component.css']
})
export class TriviaShowComponent implements OnInit {
  question: any;
  question_id: String;

  constructor(private _triviaService:TriviaService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
        //when somethign changes, this page is notified
        this.question_id = param.id;
      })
      this.componentGetSingleQuestion(this.question_id)

}
componentGetSingleQuestion(theIdFromTheUrl){
  console.log(theIdFromTheUrl);
  this._triviaService.serviceGetSingleQuestion(theIdFromTheUrl)
  .then((questionFromServer) => this.question = questionFromServer)
  .catch((err)=>console.log(err))
}
createComment(formData, question_id){
  console.log(formData.value);
  this._triviaService.createComment(formData.value, question_id)
  .then( ()=>{
    this.componentGetSingleQuestion(question_id);
  })
  .catch(err => console.log(err))
  formData.reset();
}


}
