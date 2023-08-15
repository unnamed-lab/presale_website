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

/*  Nav Bar Mobile View */
const toggleBtn = document.querySelector(".toggle-bar");
const toggleOverlay = document.querySelector("#nav-overlay");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("hidden")
  if (toggleBtn.classList.contains("hidden")) {
    toggleOverlay.classList.remove("hidden");
    navMenu.classList.remove("hidden");
  } else {
    toggleOverlay.classList.add("hidden");
    navMenu.classList.add("hidden");
  }
});

toggleOverlay.addEventListener("click", function () {
  toggleBtn.classList.remove("hidden");
  toggleOverlay.classList.add("hidden");
    navMenu.classList.add("hidden");
});


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



const tg = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M28.59 4.29a2.23 2.23 0 0 0-2.27-.36L3.41 13.1a1.83 1.83 0 0 0 0 3.38l1.48.61a1 1 0 0 0 1.31-.53 1 1 0 0 0-.54-1.31l-1.1-.45 22.51-9a.22.22 0 0 1 .23 0 .24.24 0 0 1 .08.23l-4.11 19.18a.4.4 0 0 1-.26.3.39.39 0 0 1-.39-.06l-8-6.24 7.83-7.91a1 1 0 0 0-1.22-1.56l-11.48 6.8a1 1 0 1 0 1 1.72l4.83-2.85-2.35 2.39a2 2 0 0 0 .2 3.08l8 6.15a2.4 2.4 0 0 0 1.47.5 2.47 2.47 0 0 0 .83-.15 2.37 2.37 0 0 0 1.52-1.75l4.08-19.16a2.23 2.23 0 0 0-.74-2.18Z" data-name="telegram social media network chat" fill="#ffffff" class="fill-000000"></path></svg>`;

const tw = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M28.77 8.11a.87.87 0 0 0-.23-.2A4.69 4.69 0 0 0 29 6.54a1 1 0 0 0-.44-1 1 1 0 0 0-1.1 0 6.42 6.42 0 0 1-2.28.92 6.21 6.21 0 0 0-7.08-1A6.07 6.07 0 0 0 15 12.2a1 1 0 0 0 2-.4 4.08 4.08 0 0 1 2-4.52 4.24 4.24 0 0 1 5.12 1 1 1 0 0 0 .88.28h.25a1 1 0 0 0 .34 1.62 1 1 0 0 0-.36.88 13.07 13.07 0 0 1-4.89 11.24 12.75 12.75 0 0 1-12.65 2.31 9.06 9.06 0 0 0 4.54-2.18 1 1 0 0 0 .15-1.09 1 1 0 0 0-.93-.57 4 4 0 0 1-3-1.39 3.63 3.63 0 0 0 1-.35A1 1 0 0 0 10 18a1 1 0 0 0-.76-.84 4.42 4.42 0 0 1-3-2.48c.24 0 .48.05.74.06a1 1 0 0 0 1-.62A1 1 0 0 0 7.67 13C6 11.48 5.59 9.85 5.83 8.7a13.88 13.88 0 0 0 7 4 1 1 0 1 0 .38-2 12.1 12.1 0 0 1-6.82-4.39 1 1 0 0 0-.75-.38 1 1 0 0 0-.78.33 5.34 5.34 0 0 0-.31 6h-.09a1 1 0 0 0-.52.81 5.84 5.84 0 0 0 1.95 4.47 1 1 0 0 0-.18 1 6.63 6.63 0 0 0 3.18 3.57A13.89 13.89 0 0 1 4 23a1 1 0 0 0-.5 1.86 16.84 16.84 0 0 0 8.5 2.49 15.16 15.16 0 0 0 9.6-3.57 15.12 15.12 0 0 0 5.69-12.42 4.62 4.62 0 0 0 1.62-2.25 1 1 0 0 0-.14-1Z" data-name="twitter bird social media trending" fill="#ffffff" class="fill-000000"></path></svg>`;

const discord = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g data-name="discord group forum message"><path d="M9.82 17.41a3.1 3.1 0 0 0 2.9 3.26 3.1 3.1 0 0 0 2.89-3.26 3.11 3.11 0 0 0-2.89-3.27 3.11 3.11 0 0 0-2.9 3.27Zm3.79 0c0 .68-.41 1.26-.89 1.26s-.9-.58-.9-1.26.41-1.27.9-1.27.89.58.89 1.27ZM19.28 14.14a3.11 3.11 0 0 0-2.89 3.27 3.1 3.1 0 0 0 2.89 3.26 3.1 3.1 0 0 0 2.9-3.26 3.11 3.11 0 0 0-2.9-3.27Zm0 4.53c-.48 0-.89-.58-.89-1.26s.41-1.27.89-1.27.9.58.9 1.27-.41 1.26-.9 1.26Z" fill="#ffffff" class="fill-000000"></path><path d="m26.63 10.53-.07-.09v-.1a12.15 12.15 0 0 0-6.8-4.15 1 1 0 1 0-.48 1.94 10.19 10.19 0 0 1 5.65 3.39A24.87 24.87 0 0 1 27 21.33a10 10 0 0 1-5 2.52v-.51a13.48 13.48 0 0 0 3.43-1.95 1 1 0 0 0-1.25-1.57 12.83 12.83 0 0 1-8.18 2.6 12.83 12.83 0 0 1-8.11-2.6 1 1 0 0 0-1.25 1.57 13.36 13.36 0 0 0 3.41 1.95v.51a10 10 0 0 1-5-2.52 24.87 24.87 0 0 1 2.09-9.81 10.19 10.19 0 0 1 5.65-3.39 1 1 0 0 0-.48-1.94 12.15 12.15 0 0 0-6.8 4.15s0 .07 0 .1l-.07.09c-1.94 4-2.16 7.65-2.37 11.14a1 1 0 0 0 .29.77A12 12 0 0 0 11 26a1 1 0 0 0 .7-.29A1 1 0 0 0 12 25v-1a17.56 17.56 0 0 0 8 0v1a1 1 0 0 0 .3.71 1 1 0 0 0 .7.29 12 12 0 0 0 7.74-3.51 1 1 0 0 0 .29-.77c-.24-3.54-.46-7.15-2.4-11.19Z" fill="#ffffff" class="fill-000000"></path><path d="M23.49 11.72a1 1 0 0 0-.43-1.35A15.47 15.47 0 0 0 16 8.87a15.47 15.47 0 0 0-7.06 1.5 1 1 0 0 0-.43 1.35 1 1 0 0 0 1.35.42A13.55 13.55 0 0 1 16 10.87a13.55 13.55 0 0 1 6.14 1.27 1 1 0 0 0 .46.12 1 1 0 0 0 .89-.54Z" fill="#ffffff" class="fill-000000"></path></g></svg>`;

const icons = [tg, tw, discord];
const socialLink = document.querySelectorAll(".social-link");

socialLink.forEach((el, key) => el.innerHTML = icons[key]);

// console.log(socialLink);
// const addIcon = function(icons) {
//   socialLink.map((el, key) => {
//     el.innerHTML = icons[key]
//   })
// }
// addIcon(socialIcons);