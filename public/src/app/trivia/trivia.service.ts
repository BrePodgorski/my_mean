import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class TriviaService {

  constructor(private _http: Http) { }

  addQuestionInService(questionObjectFromComponent){
    return this._http.post('/api/scores', questionObjectFromComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  serviceGetAllQuestions(){
    return this._http.get('/api/questions')
    .map( (responseFromTheServer: Response)=> responseFromTheServer.json())
    .toPromise()
  }
  getCurrentUser(){
    return this._http.get('/api/current')
    .map(( user: Response)=> user.json())
    .toPromise()
  }

  serviceGetSingleQuestion(theQuestionIdFromTheComponent){
    return this._http.get('/api/questions/' + theQuestionIdFromTheComponent)
    .map( (responseFromTheServer: Response) => responseFromTheServer.json())
    .toPromise()
  }
  createComment(comment, id){
    return this._http.post('/api/comments/'+ id, comment)
    .map(( comments: Response)=> comments.json())
    .toPromise()
  }


}
