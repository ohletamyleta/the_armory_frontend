const endPoint = "http://localhost:3000/api/v1/weapons";

document.addEventListener("DOMContentLoaded", () => {
  getWeapons();
});

function getWeapons() {
  fetch(endPoint)
    .then((res) => res.json())
    .then(weapons => {
       weapons.data.forEach(weapon => {
         const weaponMarkup = `
         <div data-id=${weapon.id}>
          <h3>${weapon.attributes.name}</h3
          <p>${weapon.attributes.category.name}</p>

          <a href="${weapon.attributes.video_url}">See it in action!</a>
         
          <button data-id=${weapon.id}>edit</button>
        </div>
        <br><br>`;

       document.querySelector('#weapon-container').innerHTML += weaponMarkup
    })
})
}


