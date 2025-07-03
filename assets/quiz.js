// const form = document.querySelector("#quizForm");
// const answers = {};

// const questions = [{
//         name: "bike_type",
//         text: "What Type of bike are you looking for?",
//         options: ["City Bike", "Mountain Bike", "Hybrid"],
//     },
//     {
//         name: "gears",
//         text: "How many gears do you need?",
//         options: ["3", "12", "24"],
//     },
//     {
//         name: "color",
//         text: "What's your favorite color?",
//         options: ["Red", "Blue", "Green"],
//     },
// ];

// let currentQuestionIndex = 0;

// const prev_btn = document.getElementById("prev-button");
// const next_btn = document.getElementById("next-button");

// next_btn.addEventListener("click", function() {
//     currentQuestionIndex++;
//     displayQuestion(currentQuestionIndex);

//     updateButtonStates(currentQuestionIndex);
// });

// prev_btn.addEventListener("click", function() {
//     currentQuestionIndex--;
//     displayQuestion(currentQuestionIndex);

//     updateButtonStates(currentQuestionIndex);
// });

// function updateButtonStates(index) {
//     prev_btn.disabled = (index === 0);
//     next_btn.classList.toggle("hidden", index === questions.length - 1)
//     finish_btn.classList.toggle("hidden", index !== questions.length - 1)
// }



// updateAnswers(currentQuestionIndex);
// // console.log(currentQuestionIndex);


// function displayQuestion(index) {
//     // console.log("hello from displayquestion", index)
//     let current_question = questions[index];

//     let selected_answer = answers[current_question.name] || '';


//     let question_html = `
//     <h2>${current_question?.text}</h2>
//     <div class="label-container">
// ${current_question.options.map(option => `
//     <h1>
//     // OPTION: ${option.value}; ANSWER ${selected_answer}
//     // </h1>
//     <input ${option===selected_answer? "checked":""} type="radio" id="${option.value}" name="${current_question.name}" value="${option.value}">
//       <label for="${option.value}">
//         <div class="img-wrap">
//           <img src="${option.img}">
//         </div>
//         <span>A new ${option.label}</span>
//       </label>

//     `).join('')}

//     </div>
//     `;
//     quiz_form.innerHTML = question_html;
// }

// //initialize
// displayQuestion(currentQuestionIndex);
// updateButtonStates(currentQuestionIndex);


// quiz_form.addEventListener('change', updateAnswers);

// function updateAnswers(event) {
//     //code to store answers

//     let input = event.target;
//     answers[input.name] = input.value;

//     // console.log("answers: ", answers);
//     // // console.log("something changed ", event.target);
// }


// //print function
// const answers_html_container = document.getElementById("answers_container");

// function displayAnswers(quizAnswers) {
//     answers_html_container.textContent = JSON.stringify(quizAnswers, null, 2);
// }




document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#quizForm");
    const answers = {};


    const questions = [{ name: "bike_type", text: "What type of bike are you looking for?", options: ["City Bike", "Mountain Bike", "Hybrid"], }, { name: "gears", text: "How many gears do you need?", options: ["3", "12", "24"], }, { name: "color", text: "What's your favorite color?", options: ["Red", "Blue", "Green"], }, ];


    let currentQuestionIndex = 0;


    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");
    const finishBtn = document.getElementById("finish-button");
    const answersContainer = document.getElementById("answers_container");

    // Initialize

    displayQuestion(currentQuestionIndex);
    updateButtonStates(currentQuestionIndex);

    // Event listeners

    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        updateButtonStates(currentQuestionIndex);
    });


    prevBtn.addEventListener("click", () => {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        updateButtonStates(currentQuestionIndex);
    });


    // finishBtn.addEventListener("click", () => { displayAnswers(answers); });

    finishBtn.addEventListener("click", () => {
        // Save the answers object to localStorage
        if (answers.product_type && answers.bike_type && answers.color) {
            alert("Here are your answers:" + JSON.stringify(answers))
        } else {
            alert("Please answer all questions");
        }
        // localStorage.setItem("quizAnswers", JSON.stringify(answers));


        // // Keep the existing functionality to display answers on the page
        // displayAnswers(answers);
    });


    form.addEventListener("change", (event) => { if (event.target.name) { answers[event.target.name] = event.target.value; } });

    // Functions

    function displayQuestion(index) {
        const question = questions[index];
        const selected = answers[question.name] || "";

        const optionsHTML = question.options.map((option) => { const isChecked = option === selected ? "checked" : ""; return `
     <div class="option">
      <input type="radio" name="${question.name}" id="${option}" value="${option}" ${isChecked}>
      <label for="${option}">${option}</label>
     </div>
    `; }).join("");


        form.innerHTML = `
   <h2>${question.text}</h2>
   <div class="label-container">
    ${optionsHTML}
   </div>
  `;
    }


    function updateButtonStates(index) {
        prevBtn.disabled = index === 0;
        nextBtn.classList.toggle("hidden", index === questions.length - 1);
        finishBtn.classList.toggle("hidden", index !== questions.length - 1);
    }


    function displayAnswers(data) { answersContainer.textContent = JSON.stringify(data, null, 2); }
});