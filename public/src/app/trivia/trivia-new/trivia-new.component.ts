import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trivia-new',
  templateUrl: './trivia-new.component.html',
  styleUrls: ['./trivia-new.component.css']
})
export class TriviaNewComponent implements OnInit {

  constructor(private _triviaService:TriviaService, private _router: Router) { }

  ngOnInit() {
  }
  addQuestionInNewComponent(formData){
    this._triviaService.addQuestionInService(formData.value)
    .then((response)=>{
      console.log(response);
      this._router.navigate(['/trivia/list'])

    })
    .catch((err)=> console.log(err) )
    formData.reset()


  }

}
