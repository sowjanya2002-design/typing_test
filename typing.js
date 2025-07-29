let speedTypigTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let counter = 0;
spinnerEl.classList.toggle("d-none");

function startCounting() {
    counter = counter + 1;
    timerEl.textContent = counter + " seconds";
    console.log(counter);

}
let counterVal = setInterval(startCounting, 1000);

function getQuestions() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(request) {
            return request.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
            console.log(jsonData.content);
        });
}
getQuestions();
startCounting();

submitBtnEl.onclick = function() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(counterVal);
        resultEl.textContent = "You typed In " + counter + " seconds ";

    } else {
        resultEl.textContent = "You typed Incorrect sentence";
    }
};

resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQuestions();
    startCounting();
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.textContent = "";
}