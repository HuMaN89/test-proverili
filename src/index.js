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
    firstname: null,
    phone: null,
    email: null,
  },
};

const quizContainer = document.querySelector(".quiz-container");

const sitiesSelect = document.querySelector("#sitiesSelect");
const sitiesList = document.querySelector("#sitiesList");
let activSity = "Москва";
const sityName = document.querySelector("#sityName");

const profSelect = document.querySelector("#professionsSelect");
const professionsList = document.querySelector("#professionsList");
let avtivProf = "Любая";
const profName = document.querySelector("#profName");

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

//butons events
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
step7.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("select-item")) {
    cashe.step7 = e.target.innerHTML;
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
  sitiesList.innerHTML = `<div class="select-item active">${activSity}</div>`;
  sities.forEach((sity) => {
    sity !== activSity
      ? (sitiesList.innerHTML += `<div class="select-item">${sity}</div>`)
      : null;
  });

  initSitiesList();
};
const initSitiesList = () => {
  sitiesList.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      activSity = child.innerHTML;
      cashe.step2 = activSity;
      toggleElement(sitiesList);
      initSities();
    });
  });
};
initSitiesList();
initSities();
const toggleElement = (element) => {
  element.classList.toggle("show");
};
sitiesSelect.addEventListener("click", () => {
  toggleElement(sitiesList);
});

//step 7

const initProfessions = () => {
  profName.innerHTML = avtivProf;
  professionsList.innerHTML = `<div class="select-item active">${avtivProf}</div>`;
  professions.forEach((prof) => {
    prof !== avtivProf
      ? (professionsList.innerHTML += `<div class="select-item">${prof}</div>`)
      : null;
  });

  initProfessionsList();
};
const initProfessionsList = () => {
  professionsList.childNodes.forEach((child) => {
    child.addEventListener("click", () => {
      avtivProf = child.innerHTML;
      cashe.step7 = avtivProf;

      toggleElement(professionsList);
      initProfessions();
    });
  });
};
initProfessionsList();
initProfessions();

profSelect.addEventListener("click", () => {
  toggleElement(professionsList);
});

//step 9

[firstname, phone, email].forEach((el) => {
  el.addEventListener("input", (e) => {
    cashe.step9[el.id] = e.target.value;

    if (cashe.step9.email && cashe.step9.firstname && cashe.step9.phone) {
      nextButtons[nextButtons.length - 1].disabled = false;
    }
  });
});

nextButtons[nextButtons.length - 1].addEventListener("click", () => {
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");
  document.body.append(modalWrapper);

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
1: ${cashe.step1} </br>
2: ${cashe.step2} </br>
3: ${cashe.step3} </br>
4: ${cashe.step4} </br>
5: ${cashe.step5} </br>
6: ${cashe.step6} </br>
7: ${cashe.step7} </br>
8: ${cashe.step8} </br>
9 1 Имя: ${cashe.step9.firstname} </br>
9 2 Телефон: ${cashe.step9.phone} </br>
9 3 Почта: ${cashe.step9.email} </br>`;
  modalWrapper.append(modal);

  modalWrapper.addEventListener("click", () => {
    modalWrapper.classList.add("hide");
  });
});
