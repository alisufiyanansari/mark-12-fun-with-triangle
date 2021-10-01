const sides = document.querySelectorAll(".side-input");
const Hypotenusebtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  //   console.log(sumOfSquares);
  return sumOfSquares;
}
function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText = "The length of the hypotenus is " + lengthOfHypotenuse
}

Hypotenusebtn.addEventListener("click", calculateHypotenuse);
