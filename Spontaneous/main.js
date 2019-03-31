//array of questions
var SponProposalquestions = [
  new Question("1. Give your CAS experience a descriptive title and date."),
  new Question("2. Describe your experience in detail, including roles and respolsibilities."),
  new Question("3. Did you work with anyone?  Please list their names."),
  new Question("4. Was this experience Creativity, Activity, Service, or multiple?  Explain."),
  new Question("5. Which of the 7 learning outcomes did you meet, and how?"),
  new Question("6. Who can act as the supervisor for this experience?  "),
  new Question("7. Were there any risks involved with this experience?  Explain."),
  new Question("8.	How did you document this experience?")
 ]

//making vars for buttons
var nextb = document.getElementById("btn1");
var backb = document.getElementById("btn0");
var homeb = document.getElementById("btn2");

function newProposal() {
  //makes new proposal
  var proposal = new Proposal(SponProposalquestions);
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
  "<button id=\"btn5\">Make another Spon Proposal</button>"+
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
    window.location.href = "sponPage.html";
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
