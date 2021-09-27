"use strict";
const reg = document.querySelector(".reg");
const register = document.querySelector(".register");
const inputName = document.querySelector(".inputn");
const inputUsername = document.querySelector(".usern");
const inputpassword = document.querySelector(".passn");
const signUp = document.querySelector(".complete");
const back = document.querySelector(".back");
const mov = document.querySelector(".movements");
const labelBalance = document.querySelector(".balance__value");
const containerMovements = document.querySelector(".movements");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const inputTransferAmount = document.querySelector(".form__input--amount");
const welcomm = document.querySelector(".welcomm");

reg.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".infi").style.opacity = 0;
  setInterval(() => {
    document.querySelector(".infi").innerHTML = "";
  }, 500);
  register.style.opacity = 100;
});

const movements = [
  4000,
  -378,
  Math.trunc(Math.random() * 1000 + 1),
  Math.trunc(Math.random() * 1000 + 1),
  Math.trunc(Math.random() * -1000 + 1),
  Math.trunc(Math.random() * 1000 + 1),
  Math.trunc(Math.random() * -1000 + 1),
];

const updateUI = function () {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
  <div class="movements__date">2 days ago</div>
      <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function () {
  const total = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${total.toFixed(2)}€`;
};
calcDisplayBalance();

signUp.addEventListener("click", function () {
  const account = {
    owner: inputName.value,
    user: inputUsername.value,
    password: inputpassword.value,
  };

  const total = movements.reduce((acc, cur) => acc + cur);
  const owner = account.owner.split(" ")[0];
  calcDisplayBalance();
  updateUI();

  back.style.opacity = 100;
  back.textContent = `Hello there ${owner},`;
  document.querySelector(".register").innerHTML = "";
  mov.classList.remove("display");
  document.querySelector(".logo").style.transform =
    "translateX(575px) translateY(-183px)";
  document.querySelector(".back").style.transform =
    "translateX(-5px) translateY(-105px)";
  document.querySelector(".display").classList.remove("display");
  document.querySelector(".removelogo").innerHTML = "";
  btnTransfer.addEventListener("click", function (e) {
    updateUI();
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    console.log(amount);
    movements.push(-amount);
    calcDisplayBalance();
  });
});

document.querySelector(".open").addEventListener("click", function () {
  alert("Bruh this is fake login what do you expect");
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const inputLoanAmount = +document.querySelector(".form__input--loan-amount")
    .value;
  console.log(inputLoanAmount);
  movements.push(inputLoanAmount);
  calcDisplayBalance();
  updateUI();
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +document.querySelector(".with").value;
  console.log(amount);
  movements.push(-amount);
  updateUI();
  calcDisplayBalance();
  document.querySelector(".ew").style.opacity = 100;
  document.querySelector(".eww").style.opacity = 100;
  document.querySelector(
    ".eww"
  ).textContent = `Your withdraw of ${amount}, has been sent click here to view your`;
});
