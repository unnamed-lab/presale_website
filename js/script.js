"use strict";

(function () {
  const second = 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const countdown = new Date("12/25/2023").getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdown - now;
    const timer = document.querySelector("#timer");
    const showDays = Math.floor(distance / day),
      showHrs = Math.floor((distance % day) / hour),
      showMins = Math.floor((distance % hour) / minutes),
      showSeconds = Math.floor((distance % minutes) / second);
    const message = `${showHrs > 0 ? `${showDays}days ` : ""}${
      showHrs > 0 ? `${showHrs}hrs ` : ""
    }${showMins > 0 ? `${showMins}mins ` : ""}${
      showSeconds > 0 ? `${showSeconds}secs ` : ""
    } left!`;

    if (distance < 0) {
      timer.textContent = "The Sales Are Over!";
      clearInterval(x);
    } else timer.textContent = message;
  });
})();

/*  Price Data  */
const icoPriceLabel = document.querySelector("#ico-price");
const presalePriceLabel = document.querySelector("#presale-price");
const priceArr = [0.6, 0.25];
icoPriceLabel.textContent = `$${priceArr[0]}`;
presalePriceLabel.textContent = `$${priceArr[1]}`;


/*  Token Allocation  */
const allocation = [
  {
    title: "Team",
    colour: "#0023ff",
    percentage: "5%",
  },
  {
    title: "Marketing",
    colour: "#5af30f",
    percentage: "15%",
  },
  {
    title: "Liquidity",
    colour: "#00fdff",
    percentage: "10%",
  },
  {
    title: "Private",
    colour: "#afad4f",
    percentage: "3%",
  },
  {
    title: "Pre-Sale",
    colour: "#7088ff",
    percentage: "7%",
  },
  {
    title: "Public",
    colour: "#aa08ff",
    percentage: "60%",
  },
];

const allocationBar = document.querySelector(".allocation-bar");
const allocationList = document.querySelector(".allocation-list");

const tokenAllocation = function (data) {
  data.forEach(el => {
    const bar = `<div class="bar" style="background-color: ${el.colour}; flex: ${el.percentage};"></div>`;
    const item = `<div class="value"><i style="background-color: ${el.colour};"></i>${el.title} (${el.percentage})</div>`;
    allocationBar.insertAdjacentHTML("beforeend", bar);
    allocationList.insertAdjacentHTML("beforeend", item)
  });
};

tokenAllocation(allocation);
