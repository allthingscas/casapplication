//array of questions
var Proposalquestions = [
  new Question("1. Give your CAS activity a descriptive title and date."),
  new Question("2. Describe your idea in detail, including your roles and responsibilities."),
  new Question("3. Are you collaborating with anyone?  Please list their names."),
  new Question("4. Is this experience Creativity, Activity, Service, or multiple?  Explain."),
  new Question("5. Predict which of the 7 learning outcomes you will meet. (see CAS guide)"),
  new Question("6. What, specifically, do you hope to accomplish?"),
  new Question("7. Determine the steps necessary to accomplish your goals and give yourself an approximate deadline."),
  new Question("8. Determine where you can go for assistance, advice, and information.  (people or resources)"),
  new Question("9. Who will supervise this CAS experience?  (review guidelines if necessary)"),
  new Question("10. Are there any risks involved with this experience?  Explain"),
  new Question("11. How will you document your project?  (journals, spreadsheets, photos, videos, feedback from others, etc.)")
 ]

//making vars for buttons
var nextb = document.getElementById("btn1");
var backb = document.getElementById("btn0");
var homeb = document.getElementById("btn2");

function newProposal() {
  //makes new proposal
  var proposal = new Proposal(Proposalquestions);
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
  "<button id=\"btn5\">Make another Proposal</button>"+
  "<button id=\"btn6\">Go to Main Menu</button>"+
  "<button id=\"btn7\">Copy to Clipboard</button>";

  var element = document.getElementById("Question");
  element.innerHTML = "This is your completed proposal.\n Use the buttons below to renavigate.\n"
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
    window.location.href = "proPage.html";
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
 
newProposal();
