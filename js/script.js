let count = 0;
let stepValue = 1;
let maxValue = 100;
let minValue = 1;
let maxLength = 3;

// HTML Elements
let counterBox = createHtmlElement("div", "counterBox", "");

let title = createHtmlElement("h1", "title", "JavaScript Counter");

let counter = createHtmlElement("div", "counter", count);

let buttonContainer = createHtmlElement("div", "buttonContainer", "");

let plusButton = createHtmlElement("div", "plusButton", "<span>+</span>");
plusButton.classList.add("button", "prevent-select");

let stepBox = createHtmlElement(
  "div",
  "stepBox",
  `<input type="number" id="step" name="step" min="${minValue}" max="${maxValue}" maxlength="${maxLength}" value="${stepValue}" />`
);
stepBox.classList.add("button", "prevent-select");

let minusButton = createHtmlElement("div", "minusButton", "<span>-</span>");
minusButton.classList.add("button", "prevent-select");

document.body.insertAdjacentElement("afterbegin", counterBox);

counterBox.appendChild(title);
counterBox.appendChild(counter);
counterBox.appendChild(buttonContainer);
buttonContainer.appendChild(plusButton);
buttonContainer.appendChild(stepBox);
buttonContainer.appendChild(minusButton);

// Event listeners
plusButton.addEventListener("click", () => updateCounter("+"));
minusButton.addEventListener("click", () => updateCounter("-"));

// Core functions
function createHtmlElement(element, id, content) {
  let theEl = document.createElement(element);
  theEl.setAttribute("id", id);
  theEl.innerHTML = content;
  return theEl;
}

function updateCounter(op) {
  let value = parseInt(step.value);
  if (value == undefined || value == null || isNaN(value)) {
    step.value = 1;
    value = 1;
  }

  switch (op) {
    case "+":
      counter.innerHTML = count += value;
      break;
    case "-":
      counter.innerHTML = count -= value;
      break;
  }
}
