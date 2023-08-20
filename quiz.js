// We can then select these HTML elements and store references to them in variables like so:

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

// need a way to build a quiz, show results, and put it all together. We can start by laying out our functions, and we’ll fill them in as we go:

//Displaying the Quiz Questions
//object literals to represent the indiidual questions
//array to hold all of the questions that make up the quiz. 
    //-using an array will make the questions easier to iterate over

//switch up my questions to trivia: Office, Friends, AEW
//these are listed in order of how they are added, if want them presented in a sorted way will have to sort the array of objects in JS. 
const myQuestions = [
    {
        question: "1. Who is the owner of AEW?",

        answers: {
            a: "Nick Khan",
            b: "Tony Khan",
            c: "Genghis Khan"
        },
        correctAnswer: "b"
    },

    {
        question: "2. Which show airs on Wednesday Night?", 

        answers: {
            a: "Collision",
            b: "Rampage",
            c: "Dynamite"
        }, 
        correctAnswer: "c"
    },

    {
        question: "3. When was AEW created?", 

        answers: {
            a: "2019",
            b: "2022",
            c: "2016",
    },
        correctAnswer: "a"
    }
];


//createQuiz = buildQuiz
//this will run immediately 
//this will store the HTML output
function createQuiz() {
    const output = [];

//for each question...
//this is us looping through each question 
myQuestions.forEach( //the code we want to run for each question goes here 
    (currentQuestion, questionNumber) => {//to help with brevity use arrow function 
        //we get the current value, the index, & the array as parameters
        
        //variable to store the list of possible answers
        const answers = []; 

        //and for each available answer...
        for(letter in currentQuestion.answers) {

            //...add an HTML radio button, can change the button type if want. 
            //enclose the HTML radio button in a label element- this lets the user be able to click anywhere on the answer to select that answer this helps with accessibility so that the user doesn't have to click exactly on the radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}"> 
                ${letter} : 
                ${currentQuestion.answers[letter]}
                </label>`
            );
        } 
    //add this question and it's answer to the output
    //by using the join we can put together the list of answers into one string that can go to the answers div
        output.push(
           `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers">${answers.join('')} </div>
           </div>`
        );
    }
);

//finally we combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join(''); 
}



//displayResults = showResults 
//this will run when our user clicks the submit button 
//this will loop over the answers, check them, and show results
function displayResults() {
    //gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    let numberCorrect = 0; 

    //for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];//look inside the answer container for the current question 
        const selector = `input[name=question${questionNumber}]:checked`; //this will let us define a CSS selector that will let us find which radio button is checked
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;//querySelector to search for defined CSS selector
        //.value gets the value of that answer
            //By adding || and {} which is or and an empty array this will catch if an user leaves the answer blank

        //this part evaluates the answers & displays the results
        //if answer is correct
        if(userAnswer === currentQuestion.correctAnswer) {
            //add to the number of correct answers
            numberCorrect++;//if the user's answer matches increase the number of Correct by one

            //color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen'; 
        }
            //if answer is wrong or blank
            else {
            //color the answers red
            answerContainers[questionNumber].style.color = 'red'; 
            }
    });
        //show number of correct answers out of total
        resultsContainer.innerHTML = `${numberCorrect} out of ${myQuestions.length}`;
}
//what the above code does: find selected answer in HTML, handle what happens if answer is correct, handle what happens if answer is wrong


//display quiz right away
createQuiz(); 

//on submit, show results
submitButton.addEventListener('click', displayResults); 


