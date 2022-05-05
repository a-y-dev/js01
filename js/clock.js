let uname = prompt("İsim - Soyisim");

const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");

myName.textContent = uname;

function showTime() {
  const d = new Date();
  myClock.innerHTML = `${d.toLocaleTimeString()}`;
}

setInterval(showTime, 1000);