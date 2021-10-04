const outputMsg = document.getElementById("output-message")

const isTriangleForm = document.getElementById("is-triangle-form")
if (isTriangleForm) {
  const onSubmit = function (event) {
    event.preventDefault()
    const angle1 = Number(document.getElementById("angle1").value)
    const angle2 = Number(document.getElementById("angle2").value)
    const angle3 = Number(document.getElementById("angle3").value)
    if (angle1 + angle2 + angle3 === 180) {
      outputMsg.innerHTML = "Its a triangle"
    } else {
      outputMsg.innerHTML = "Its not a triangle"
    }
    outputMsg.scrollIntoView({ behavior: "smooth" })
  }

  isTriangleForm.addEventListener("submit", onSubmit)
}

const quizForm = document.getElementById("quiz-form")
if (quizForm) {
  const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
  ]
  const onSubmit = function (event) {
    event.preventDefault()
    const formResults = new FormData(quizForm)
    let score = 0,
      index = 0
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1
      }
      index = index + 1
    }
    outputMsg.innerHTML = "The score is " + score
    outputMsg.scrollIntoView({ behavior: "smooth" })
  }

  quizForm.addEventListener("submit", onSubmit)
}

const hypotenuseForm = document.getElementById("hypotenuse-form")
if (hypotenuseForm) {
  const onSubmit = function (event) {
    event.preventDefault()
    const base = Number(document.getElementById("base").value)
    const heigth = Number(document.getElementById("height").value)
    const sumOfSquare = base * base + heigth * heigth
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare)
    outputMsg.innerText =
      "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(2)
    outputMsg.scrollIntoView({ behavior: "smooth" })
  }
  hypotenuseForm.addEventListener("submit", onSubmit)
}

const areaForm = document.getElementById("area-form")
if (areaForm) {
  const onSubmit = function (event) {
    event.preventDefault()
    const firstSideValue = Number(document.getElementById("side1").value)
    const secondSideValue = Number(document.getElementById("side2").value)
    const thirdSideValue = Number(document.getElementById("side3").value)
    if (
      firstSideValue + secondSideValue > thirdSideValue &&
      secondSideValue + thirdSideValue > firstSideValue &&
      firstSideValue + thirdSideValue > secondSideValue
    ) {
      const semiPerimeter =
        (firstSideValue + secondSideValue + thirdSideValue) / 2

      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSideValue) *
          (semiPerimeter - secondSideValue) *
          (semiPerimeter - thirdSideValue)
      ).toFixed(4)
      outputMsg.innerText = `Area of a triangle using heron's formula is ${result} units`
    } else {
      outputMsg.innerText =
        "Enter valid side lengths such that each side lengths"
    }
    outputMsg.scrollIntoView({ behavior: "smooth" })
  }
  areaForm.addEventListener("submit", onSubmit)
}
