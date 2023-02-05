const question=document.getElementById("question");
const scelta=Array.from(document.getElementsByClassName("scelta-text"));

const progressText=document.querySelector('#progressText');
const PunteggioText=document.querySelector('#Punteggio');
const progressBarFull=document.querySelector('#progressBarFull');

let Domanda = {};
let Risposta = false;
let Punteggio = 0;
let ContaDomanda = 0;
let QuanteDomande = [];
let questions=[
    {
      question: "What does CPU stand for?",
      scelta1:"Central Process Unit",
      scelta2:"Central Processing Unit",
      scelta3:"Computer Personal Unit",
      scelta4:"Central Processor Unit",
      answer: 1,
    },
    {
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        scelta1:"Public",
        scelta2:"Private",
        scelta3:"Static",
        scelta4:"Final",
        answer:4,
      },
      {
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        scelta1:".jpg",
        scelta2:".svg",
        scelta3:".png",
        scelta4:".img",
        answer:2,
      },
      {
        question: "Which programming language shares its name with an island in Indonesia??",
        
        scelta1:"SQL",
        scelta2:"JAVA",
        scelta3:"C#",
        scelta4:"Phyton",
        answer:2,
      },
      {
        question: "On Twitter, what is the character limit for a Tweet?",
        
        scelta1:"34",
        scelta2:"120",
        scelta3:"11",
        scelta4:"140",
        answer:4,
      },
      {
        question: "What does CPU stand for?",
        scelta1:"Central Process Unit",
        scelta2:"Central Processing Unit",
        scelta3:"Computer Personal Unit",
        scelta4:"Central Processor Unit",
        answer: 1,
      },
      {
          question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
          scelta1:"Public",
          scelta2:"Private",
          scelta3:"Static",
          scelta4:"Final",
          answer:4,
        },
        {
          question: "What is the most preferred image format used for logos in the Wikimedia database?",
          scelta1:".jpg",
          scelta2:".svg",
          scelta3:".png",
          scelta4:".img",
          answer:2,
        },
        {
          question: "Which programming language shares its name with an island in Indonesia??",
          
          scelta1:"SQL",
          scelta2:"JAVA",
          scelta3:"C#",
          scelta4:"Phyton",
          answer:2,
        },
        {
          question: "On Twitter, what is the character limit for a Tweet?",
          
          scelta1:"34",
          scelta2:"120",
          scelta3:"11",
          scelta4:"140",
          answer:4,
        },
  ]

  const PUNTEGGIO = 10;
  const MAX_QUESTIONS = 10;

  startGame = () => {
    ContaDomanda = 0;
    Punteggio = 0
    QuanteDomande=[...questions];
    console.log(QuanteDomande);
    getNewQuestion()
  }

  getNewQuestion = () => {
    if (QuanteDomande.length === 0 || ContaDomanda > MAX_QUESTIONS){
        return window.location.assign('./end.html')
    }


    ContaDomanda++;

	progressText.innerText =  `Domanda numero ${ContaDomanda} di ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(ContaDomanda/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random()*QuanteDomande.length);
	localStorage.setItem('PunteggioRecente', Punteggio);
    Domanda=QuanteDomande[questionIndex];
    question.innerText = Domanda.question;

    scelta.forEach( scelta => {
        const number = scelta.dataset['number'];
        scelta.innerText=Domanda['scelta' + number];
    })

    QuanteDomande.splice(questionIndex, 1);
    Risposta=true;
};


scelta.forEach(scelta => {
    scelta.addEventListener('click', e => {
        if(!Risposta) return;

        Risposta=false;
        const selectedscelta=e.target;
        const selectedAnswer=selectedscelta.dataset['number'];

        let classToApply=selectedAnswer == Domanda.answer ? 'correct':
        'incorrect'
        if(classToApply === 'correct'){
            incrementPunteggio(PUNTEGGIO)
        }
        selectedscelta.parentElement.classList.add(classToApply);
        setTimeout(() =>{
      selectedscelta.parentElement.classList.remove(classToApply);
      getNewQuestion();},1000);  
    });

});

incrementPunteggio = num =>{
    Punteggio=Punteggio +num;
    PunteggioText.innerText = Punteggio;
}




 
  startGame();