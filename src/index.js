const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const christmas = new Date("2024-12-25");
  const today = new Date();
  const remainingTime = christmas - today;

  const remDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const remHours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const remMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const remSeconds = Math.floor((remainingTime / 1000) % 60);

  clockTitle.innerText = `${remDays}d ${remHours}h ${remMinutes}m ${remSeconds}s`;
}

getClock();
setInterval(getClock, 1000);
