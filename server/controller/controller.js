var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Comment = mongoose.model('Comment');

module.exports = {
  loginReg: (req, res)=>{
    //try to find user before creating one
    User.findOne({name: req.body.name}, (err, user)=>{
    //if user does not exist
    if(user == null){
      let user = new User(req.body);
      user.save((err, savedUser)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Error in saving user")
        }else{
          req.session.user = savedUser;
          console.log(savedUser)
          //this is how we use session
          return res.json(savedUser);
        }
      })

    }else{
      //if user does exist
      req.session.user = user;
      console.log("*******");
      console.log(user);
      return res.json(user);
    }
  })
  },
  logout: (req, res)=>{
    req.session.destroy();
    res.redirect('/');
  },

  addQuestion: (req, res)=>{
    if(!req.session.user){
      return res.sendStatus(401);
    }else{
      let question = new Question(req.body);
      question._user = req.session.user._id;
      question.save((err, newQuestion)=> {
        if(err){
          console.log(err);
          return res.status(500).send("Error in saving question")
        }else{
          console.log(newQuestion);
          return res.json(newQuestion);
        }
      })
    }
  },
  getAllQuestions: (req, res)=>{
    Question.find({}).populate('_user').exec( (err, questions)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error getting questions")
      }else{
        return res.json(questions);
      }
    })
  },
  current: (req, res)=>{
    if(!req.session.user){
      res.status(401).send("nah")
    }else{
      console.log(req.session.user.name);
      console.log('#############');
      return res.json(req.session.user);
    }
  },
  getSingleQuestion: (req, res)=>{
    console.log("in the method");
    Question.findOne({_id: req.params.id}).populate('_user').populate({path: 'comments', populate: {path: '_user'}}).exec((err, question)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error in finding question")
      }else{
        console.log("*********");
        return res.json(question);
      }
    })
  },
  createComment: (req, res)=>{
    console.log("Create comment");
    if(!req.session.user){
      return res.sendStatus(401);
    }
    Question.findOne({_id: req.params.question_id}, (err, question)=>{
      if(err){
        console.log(err);
        return res.sendStatus(500);
      }else{
        let comment = new Comment(req.body);
        comment._user = req.session.user._id;
        comment.save( (err, savedComment)=>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }else{
            question.comments.push(savedComment._id);
            question.save( (err, savedQuestion)=>{
              console.log(savedComment);
            })
          }
        })
      }
    })
  }


}
















//end
