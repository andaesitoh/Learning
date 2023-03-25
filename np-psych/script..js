"use strict";

// QUERY SELECTORS

// const demographicVariables = function() {

// }

document.addEventListener("DOMContentLoaded", function (event) {
  const scoreInput = document.querySelector("#score-entered");
  const resultsDiv = document.querySelector("#result");
  const submit = document.querySelector(".submit-btn");

  // GENERAL

  const calcZScore = (score, mean, sd) => (score - mean) / sd;

  // RAVLTL

  submit.addEventListener("click", function (event) {
    const age = parseInt(document.querySelector("#age").value);
    const sex = document.querySelector("#sex option:checked").value;
    const education = document.querySelector("#education option:checked").value;
    const zScore = calcZScore(scoreInput.value, 53.4, 5.4);
    console.log(age);
    resultsDiv.textContent = zScore;
  });
});
