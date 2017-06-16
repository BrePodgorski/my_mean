var controller = require('./../controller/controller');
module.exports = app => {
  app.post('/api/login', controller.loginReg);
  app.get('/logout', controller.logout);
  app.post('/api/scores', controller.addQuestion);
  app.get('/api/questions', controller.getAllQuestions);
  app.get('/api/current', controller.current);
  app.get('/api/questions/:id', controller.getSingleQuestion);
  app.post('/api/comments/:question_id', controller.createComment);

}
