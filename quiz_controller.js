function Proposal(questions){
  this.fulltext = " ";
  this.questions = questions;
  this.questionIndex = 0;
}

Proposal.prototype.getQuestion = function() {
  return.this.questions[this.questionIndex];
}

Proposal.prototype.isEnded = function() {
  return this.questions.length - 1 === this.questionIndex;
}

Proposal.prototype.addAnswer = function() {
  this.fulltext += this.getQuestion + " " + answer;
  return;
}

Proposal.prototype.buildAnswer = function() {
  var endString = " ";
  for (var i = 0; i < this.questions.length; i++){
    endString += this.questions[i].text + " ";
    endString += this.questions[i].answer + " ";
  }
}

return endString;
