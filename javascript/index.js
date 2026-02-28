// Sao Paulo
function updateTime() {
  let saopauloElement = document.querySelector("#saopaulo");
  if (saopauloElement) {
    let saopauloDateElement = saopauloElement.querySelector(".date");
    let saopauloTimeElement = saopauloElement.querySelector(".time");
    let saopauloTime = moment().tz("America/Sao_Paulo");
    saopauloDateElement.innerHTML = saopauloTime.format("MMMM Do YYYY");
    saopauloTimeElement.innerHTML = saopauloTime.format(
      "h:mm[<small>]A[</small>]",
    );
  }

  let limaElement = document.querySelector("#lima");
  if (limaElement) {
    let limaDateElement = limaElement.querySelector(".date");
    let limaTimeElement = limaElement.querySelector(".time");
    let limaTime = moment().tz("America/Lima");
    limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");
    limaTimeElement.innerHTML = limaTime.format("h:mm [<small>]A[</small>]");
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

  let bogotaElement = document.querySelector("#bogota");
  if (bogotaElement) {
    let bogotaDateElement = bogotaElement.querySelector(".date");
    let bogotaTimeElement = bogotaElement.querySelector(".time");
    let bogotaTime = moment().tz("America/Bogota");
    bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
    bogotaTimeElement.innerHTML = bogotaTime.format(
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
}

function updateCity(event) {
  const selected = event.target.value;
  const timeZone = selected === "current" ? moment.tz.guess() : selected;
  const cityTime = moment().tz(timeZone);
  const cityName = timeZone.split("/").pop().replace(/_/g, " ");

  document.querySelector("#cities").innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm")} 
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#continent-select");
citiesSelectElement.addEventListener("change", updateCity);
