const inputs = document.querySelectorAll(".angle-input");
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");

function calculatesumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  //   console.log(sumOfAngles);
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculatesumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    output.innerText = "Yay, the angles form a triangle";
  } else {
    output.inneText = "Oh Oh ! the angles don't form a triangle";
  }
}

isTrianglebtn.addEventListener("click", isTriangle);
