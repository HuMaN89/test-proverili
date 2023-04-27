import "./index.css";

const root = document.querySelector("#root");
const sities = [
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

const professions = [
  "Любая",
  "Экономика",
  "Философия",
  "Социология",
  "Юриспруденция",
  "Менеджмент",
  "Екатеринбург",
  "Краснодар",
];
const cashe = {
  step1: null,
  step2: "Москва",
  step3: null,
  step4: null,
  step5: null,
  step6: null,
  step7: "Любая",
  step8: null,
  step9: {
    name: null,
    phone: null,
    email: null,
  },
};

const quizContainer = document.querySelector(".quiz-container");

const sitiesList = document.querySelector("#sities-list");
const selectList = document.querySelector(".select-list");
let activSity = "Москва";
const sityName = document.querySelector(".sity-name");

const profSelect = document.querySelector("#professions-select");
const professionsList = document.querySelector("#professions-list");
let avtivProf = "Любая";
const profName = document.querySelector("#prof-name");

const nextButtons = document.querySelectorAll(".btn");
let offset = 0;
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const step5 = document.querySelector("#step5");
const step6 = document.querySelector("#step6");
const step7 = document.querySelector("#step7");
const step8 = document.querySelector("#step8");
const firstname = document.querySelector("#firstname");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");

step1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step1 = e.target.id;
    nextButtons[0].disabled = false;
  }
});
step2.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("select-item")) {
    cashe.step2 = e.target.innerHTML;
  }
});
step3.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step3 = e.target.id;
    nextButtons[4].disabled = false;
  }
});
step4.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step4 = e.target.id;
    nextButtons[6].disabled = false;
  }
});
step5.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step5 = e.target.id;
    nextButtons[8].disabled = false;
  }
});
step6.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step6 = e.target.id;
    nextButtons[10].disabled = false;
  }
});
step8.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.tagName === "LABEL") {
    cashe.step8 = e.target.id;
    nextButtons[14].disabled = false;
  }
});

// step 2
const initSities = () => {
  sityName.innerHTML = activSity;
  selectList.innerHTML = `<div class="select-item active">${activSity}</div>`;
  sities.forEach((sity) => {
    sity !== activSity
      ? (selectList.innerHTML += `<div class="select-item">${sity}</div>`)
      : null;
  });
  initSitiesList();
};
const initSitiesList = () => {
  console.log(sitiesList);
  selectList.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      activSity = child.innerHTML;
      toggleElement(selectList);
      initSities();
    });
  });
};
initSitiesList();

const toggleElement = (element) => {
  element.classList.toggle("show");
};
sitiesList.addEventListener("click", () => {
  toggleElement(selectList);
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "Далее") {
      offset += -562;
      quizContainer.style.transform = `translateX(${offset}px)`;
    } else {
      offset += 562;
      quizContainer.style.transform = `translateX(${offset}px)`;
    }
  });
});

//step 7
