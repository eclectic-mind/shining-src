const form = document.querySelector("#form");
const submitButton = form.querySelector("#send");
const emailField = form.querySelector("#email");
const phoneField = form.querySelector("#telephone");
const messageField = form.querySelector("#text");
const success = document.querySelector("#success-msg");
const patternMail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/;
const patternPhone = /^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;

const checkEmail = (val) => {
  return (val.length > 0 && !!patternMail.test(val)) ? true : false;
};

const checkPhone = (val) => {
  return (val.length > 0 && !!patternPhone.test(val)) ? true : false;
};

const checkText = (val) => {
  return val.length > 0 ? true : false;
};

const validateForm = () => {
  let userEmail = emailField.value;
  let userPhone = phoneField.value;
  let userMessage = messageField.value;

  if (!!checkEmail(userEmail) && !!checkPhone(userPhone) && !!checkText(userMessage)) {
    success.classList.remove("invisible");
    form.classList.add("invisible");
  } else if (!checkEmail(userEmail)) {
    emailField.setCustomValidity("Ошибка в e-mail");
    emailField.classList.add("wrong");
  } else if (!checkPhone(userPhone)) {
    phoneField.setCustomValidity("Ошибка в номере телефона");
    phoneField.classList.add("wrong");
  } else if (!checkText(userMessage)) {
    messageField.setCustomValidity("Что-то не так с сообщением");
    messageField.classList.add("wrong");
  } else {
    return;
  }
};
/* 
const send = (event, php) => {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  let req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); // internet explorer 11
      console.log(json);

      if (json.result == "success") {
        // Если сообщение отправлено
        alert("Сообщение отправлено");
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
      // Если не удалось связаться с php файлом
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
};
*/
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  validateForm();
})