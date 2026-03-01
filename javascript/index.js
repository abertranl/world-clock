// Update ALL cities across continents (expanded for Europe example)
function updateTime() {
  // America cities
  let saopauloElement = document.querySelector("#saopaulo");
  if (saopauloElement) {
    let saopauloDateElement = saopauloElement.querySelector(".date");
    let saopauloTimeElement = saopauloElement.querySelector(".time");
    let saopauloTime = moment().tz("America/Sao_Paulo");
    saopauloDateElement.innerHTML = saopauloTime.format("MMMM Do YYYY");
    saopauloTimeElement.innerHTML = saopauloTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let newyorkElement = document.querySelector("#newyork");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");
    newyorkDateElement.innerHTML = newyorkTime.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let mexicoElement = document.querySelector("#mexico");
  if (mexicoElement) {
    let mexicoDateElement = mexicoElement.querySelector(".date");
    let mexicoTimeElement = mexicoElement.querySelector(".time");
    let mexicoTime = moment().tz("America/Mexico_City");
    mexicoDateElement.innerHTML = mexicoTime.format("MMMM Do YYYY");
    mexicoTimeElement.innerHTML = mexicoTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  // Africa cities (add more as needed)
  let algiersElement = document.querySelector("#algiers");
  if (algiersElement) {
    let algiersDateElement = algiersElement.querySelector(".date");
    let algiersTimeElement = algiersElement.querySelector(".time");
    let algiersTime = moment().tz("Africa/Algiers");
    algiersDateElement.innerHTML = algiersTime.format("MMMM Do YYYY");
    algiersTimeElement.innerHTML = algiersTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let capetownElement = document.querySelector("#capetown");
  if (capetownElement) {
    let capetownDateElement = capetownElement.querySelector(".date");
    let capetownTimeElement = capetownElement.querySelector(".time");
    let capetownTime = moment().tz("Africa/Johannesburg");
    capetownDateElement.innerHTML = capetownTime.format("MMMM Do YYYY");
    capetownTimeElement.innerHTML = capetownTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");
    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  // Asia cities (add more as needed)
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm [<small>]A[</small>]");
  }

  let beijingElement = document.querySelector("#beijing");
  if (beijingElement) {
    let beijingDateElement = beijingElement.querySelector(".date");
    let beijingTimeElement = beijingElement.querySelector(".time");
    let beijingTime = moment().tz("Asia/Shanghai");
    beijingDateElement.innerHTML = beijingTime.format("MMMM Do YYYY");
    beijingTimeElement.innerHTML = beijingTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkokTimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");
    bangkokDateElement.innerHTML = bangkokTime.format("MMMM Do YYYY");
    bangkokTimeElement.innerHTML = bangkokTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  // Europe cities (add more as needed)
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm [<small>]A[</small>]");
  }

  let bucharestElement = document.querySelector("#bucharest");
  if (bucharestElement) {
    let bucharestDateElement = bucharestElement.querySelector(".date");
    let bucharestTimeElement = bucharestElement.querySelector(".time");
    let bucharestTime = moment().tz("Europe/Bucharest");
    bucharestDateElement.innerHTML = bucharestTime.format("MMMM Do YYYY");
    bucharestTimeElement.innerHTML = bucharestTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  // Oceania cities (add more as needed)
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let wellingtonElement = document.querySelector("#wellington");
  if (wellingtonElement) {
    let wellingtonDateElement = wellingtonElement.querySelector(".date");
    let wellingtonTimeElement = wellingtonElement.querySelector(".time");
    let wellingtonTime = moment().tz("Pacific/Auckland");
    wellingtonDateElement.innerHTML = wellingtonTime.format("MMMM Do YYYY");
    wellingtonTimeElement.innerHTML = wellingtonTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }

  let portmoresbyElement = document.querySelector("#portmoresby");
  if (portmoresbyElement) {
    let portmoresbyDateElement = portmoresbyElement.querySelector(".date");
    let portmoresbyTimeElement = portmoresbyElement.querySelector(".time");
    let portmoresbyTime = moment().tz("Pacific/Port_Moresby");
    portmoresbyDateElement.innerHTML = portmoresbyTime.format("MMMM Do YYYY");
    portmoresbyTimeElement.innerHTML = portmoresbyTime.format(
      "h:mm [<small>]A[</small>]",
    );
  }
}

// NEW: Show/hide continents based on select
function showContinent(event) {
  const value = event.target.value; // "america", "europe", etc.
  const continents = document.querySelectorAll(".continent");

  // Hide all continents
  continents.forEach((c) => {
    c.style.display = "none";
  });

  // Show selected continent
  if (value) {
    const toShow = document.getElementById(`${value}-cities`);
    if (toShow) {
      toShow.style.display = "block";
    }
  }
}

// NEW: Show/hide continents based on select
function showContinent(event) {
  const value = event.target.value; // "america", "europe", etc.
  const continents = document.querySelectorAll(".continent");

  // Hide all continents
  continents.forEach((c) => {
    c.style.display = "none";
  });

  // Show selected continent
  if (value) {
    const toShow = document.getElementById(`${value}-cities`);
    if (toShow) {
      toShow.style.display = "block";
    }
  }
}

// Initialize: Start with America visible, update times
updateTime();
document.getElementById("america-cities").style.display = "block"; // Default
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#continent-select");
citiesSelectElement.addEventListener("change", showContinent);
