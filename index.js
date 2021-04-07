const endPoint = "http://localhost:3000/api/v1/weapons";

document.addEventListener("DOMContentLoaded", () => {
  getWeapons()

  let createWeaponForm = document.querySelector('#create-weapon-form')

  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e) )
});

function getWeapons() {
  fetch(endPoint)
    .then((res) => res.json())
    .then(weapons => {
       weapons.data.forEach(weapon => {
         const weaponMarkup = `
         <div data-id=${weapon.id}>
          <h3>${weapon.attributes.name}</h3>
          <p>${weapon.attributes.category.name}</p>
          <img src="${weapon.attributes.image_url}" height="200" width="250">
          <a href="${weapon.attributes.video_url}">See it in action!</a>
         
          <button data-id=${weapon.id}>edit</button>
        </div>
        <br><br>`;

       document.querySelector('#weapon-container').innerHTML += weaponMarkup
    })
})
}

function createFormHandler(e) {
 e.preventDefault();
 const nameInput = document.querySelector("#input-name").value;
 const descriptionInput = document.querySelector("#input-description").value;
 const videoInput = document.querySelector("#input-video").value;
 const imageInput = document.querySelector("#input-image").value;
 const originInput = document.querySelector("#input-origin").value;
 const categoryInput = document.querySelector("#categories").value;
 const categoryId = parseInt(categoryInput);
 postSyllabus(nameInput, descriptionInput, videoInput, imageInput, originInput, categoryInput);

}
