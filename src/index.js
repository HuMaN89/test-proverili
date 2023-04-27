import "./index.css";

const root = document.querySelector("#root");
const cities = [
  "Краснодар",
  "Екатеринбург",
  "Ростов-на-Дону",
  "Нижний новгород",
  "Новосибирск",
  "Москва",
  "Санкт-Петербург",
  "Самара",
  "Пермь",
];
const cashe = {
  step1: null,
  step2: "Москва",
  step3: null,
  step4: null,
  step5: null,
  step6: null,
  step7: null,
  step8: null,
  step9: null,
};

const quizContainer = document.querySelector(".quiz-container");
const sitySelect = document.querySelector(".sity-select");
const selectList = document.querySelector(".select-list");
let activSity = "Москва";
const sityName = document.querySelector(".sity-name");
const nextButtons = document.querySelectorAll(".btn");
let offset = 0;
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");

step1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step1 = e.target.id;
    nextButtons[0].disabled = false;
  }
});
step2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
  if (e.target.tagName === "LABEL") {
    cashe.step1 = e.target.id;
    nextButtons[0].disabled = false;
  }
});
const initSities = () => {
  sityName.innerHTML = activSity;
  selectList.innerHTML = `<div class="select-item active">${activSity}</div>`;
  cities.forEach((sity) => {
    sity !== activSity
      ? (selectList.innerHTML += `<div class="select-item">${sity}</div>`)
      : null;
  });
  initSitiesList();
};
const initSitiesList = () => {
  selectList.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      activSity = child.innerHTML;
      console.log(child.innerHTML);
      toggleElement(selectList);
      initSities();
    });
  });
};
initSitiesList();

const toggleElement = (element) => {
  element.classList.toggle("show");
};
sitySelect.addEventListener("click", () => {
  toggleElement(selectList);
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "Далее") {
      offset += -576;
      quizContainer.style.transform = `translateX(${offset}px)`;
    } else {
      offset += 576;
      quizContainer.style.transform = `translateX(${offset}px)`;
    }
  });
});
