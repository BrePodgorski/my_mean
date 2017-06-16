let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let QuestionSchema = new Schema({
  question: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  rightAnswer: {type: String, required: true},
  // optionOneNumber: {type: Number, required: true},
  wrongAnswer1: {type: String, required: true},
  // optionTwoNumber: {type: Number, required: true},
  wrongAnswer2: {type: String, required: true},

  createdAt: {type: Date},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]

}, {timestamps: true})

mongoose.model('Question', QuestionSchema)
