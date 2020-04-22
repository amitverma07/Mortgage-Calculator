let loanAmount = document.querySelector('#loanValue').value;
let interestValue = document.querySelector('#iRValue').value;
let monthsData = document.querySelector('#months').value;
let button = document.querySelector('#myBtn');

button.addEventListener("click",function(e){
  e.preventDefault();
  let interest = (loanAmount * (interestValue * 0.01)) / monthsData;
  let result = ((loanAmount / monthsData) + interest).toFixed(2);
  document.querySelector('#demo').innerHTML = `Monthly Payment = ${result}`;
  document.querySelector('#loanValue').value = "";
  document.querySelector('#iRValue').value = "";
  document.querySelector('#months').value = "";
});