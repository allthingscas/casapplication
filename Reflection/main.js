//array of questions
var Reflectionquestions = [
  new Question("Describe the experience itself. (Location, your resonsibilities, etc.)"),
  new Question("Discuss what you learned about yourself and about others. "),
  new Question("Discuss what abilities and what you developed. If no abilities were developed then type none"),
  new Question("Discuss how the experience affected you emotionally or changed your prespective"),
  new Question("If there was a moment of discovery then describe it. If not then type none."),
  new Question("Overall what would you rate this experience and why?")
 ]

//making vars for buttons
var nextb = document.getElementById("btn1");
var backb = document.getElementById("btn0");
var homeb = document.getElementById("btn2");

function newReflection() {
  //makes new proposal
  var proposal = new Proposal(Reflectionquestions);
  var element = document.getElementById("Question");
  //replaces Question space with next question
  element.innerHTML = proposal.getQuestion().text;
  
  var area = document.getElementById("answerArea");
  area.placeholder = "Type your answer here...";
  
  homeb.onclick = function(){
     window.location.href = "../index.html";
  }  
  
  nextb.onclick = function() {
    if (proposal.isEnded()){
      proposal.getQuestion().answered = true;
      proposal.getQuestion().storeAnswer(area.value);
      endProposal(proposal);
    }
    else{
      proposal.getQuestion().answered = true;
      proposal.getQuestion().storeAnswer(area.value);
      proposal.questionIndex++;
      element.innerHTML = proposal.getQuestion().text;
      document.getElementById("box").innerHTML = "<textarea id=\"answerArea\" placeholder=\"Type your answer here...\"></textarea>";
      area = document.getElementById("answerArea");
      if(proposal.getQuestion().answered === false)
      {
        area.prototype = "Type your answer here...";
      }
      else {
        area.innerHTML = proposal.getQuestion().answer;
      }
    }
  }
  
  backb.onclick = function() {
    if(proposal.questionIndex > 0)
    {
      proposal.questionIndex--;
      element.innerHTML = proposal.getQuestion().text;
      area.innerHTML = proposal.getQuestion().Answer();
    }
    else {
      window.location.href = "../index.html";
    }
  }
  }  
  
  function endProposal(x)
  {
  document.getElementById("box").innerHTML = "<textarea id=\"answerArea\" placeholder=\"Type your answer here...\"></textarea>";
  area = document.getElementById("answerArea");
  var buttonArea = document.getElementById("redirect");
  buttonArea.innerHTML = "<button id=\"btn3\">Go to ManageBac</button>"+
  "<button id=\"btn4\">Go to Gmail</button>"+
    "<button id=\"btn8\">Go to Google Docs</button>"+
  "<button id=\"btn5\">Make another Reflection</button>"+
  "<button id=\"btn6\">Go to Main Menu</button>"+
  "<button id=\"btn7\">Copy to Clipboard</button>";

  var element = document.getElementById("Question");
  element.innerHTML = "This is your completed reflection.\n Use the buttons below to renavigate.\n"
  + "Don't forget to copy your work before leaving the page.";

  var area = document.getElementById("answerArea");
  area.innerHTML = x.buildAnswer();

  var MBut = document.getElementById("btn3");
  var GBut = document.getElementById("btn4");
  var SOBut = document.getElementById("btn5");
  var mainBut = document.getElementById("btn6");
  var clipBut = document.getElementById("btn7");
  var GDBut = document.getElementById("btn8");


  MBut.onclick = function(){
    window.open("https://stonypoint.managebac.com/login");
    window.focus();
  }
    
  GBut.onclick = function(){
    window.open("https://mail.google.com/mail/ca/u/0/#inbox");
    window.focus();
  } 

  mainBut.onclick = function() {
    window.location.href = "../index.html";
  }

  SOBut.onclick = function() {
    window.location.href = "reflPage.html";
  }
    
  clipBut.onclick = function() {
    var area = document.getElementById("answerArea");
    area.select();
    document.execCommand("copy");
  }
    
  GDBut.onclick = function() {
    window.open("https://drive.google.com/drive/my-drive");
    window.focus();
  }   
  } 
 
newReflection();
