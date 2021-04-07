const endPoint = "http://localhost:3000/api/v1/weapons";

document.addEventListener("DOMContentLoaded", () => {
  getWeapons();
});

function getWeapons() {
  fetch(endPoint)
    .then((res) => res.json())
    .then((json) => console.log(json));
}