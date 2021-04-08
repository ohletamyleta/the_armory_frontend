const endPoint = "http://localhost:3000/api/v1/weapons";

document.addEventListener("DOMContentLoaded", () => {
  getWeapons()

  const createWeaponForm = document.querySelector('#create-weapon-form')

  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e) )

  const weaponContainer = document.querySelector('#weapon-container')
  
  weaponContainer.addEventListener('click', e => {
     const id = parseInt(e.target.dataset.id);
     const weapon = Weapon.findById(id);
     document.querySelector("#update-weapon").innerHTML = weapon.renderUpdateForm();
   });
    document.querySelector('#update-weapon').addEventListener('submit', e => updateFormHandler(e))

});

function getWeapons() {
  fetch(endPoint)
    .then((res) => res.json())
    .then(weapons => {
       weapons.data.forEach(weapon => {

        const newWeapon = new Weapon(weapon.id, weapon.attributes)

        document.querySelector("#weapon-container").innerHTML += newWeapon.renderWeaponCard();
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
 postWeapon(nameInput, descriptionInput, videoInput, imageInput, originInput, categoryInput);

}

function postWeapon(name, description, video_url, image_url, origin, category_id) {
  
  let bodyData = {name, description, video_url, image_url, origin, category_id};

   fetch(endPoint, {
    
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(bodyData)
   })
     .then(response => response.json())
     .then((weapon) => {

     
        const newWeapon = new Weapon(weapon.data.id, weapon.data.attributes);

        document.querySelector("#weapon-container").innerHTML += newWeapon.renderWeaponCard();
    
    });

    
function updateFormHandler(e) {
  e.preventDefault();
  debugger;
  const id = parseInt(e.target.dataset.id);
  const weapon = Weapon.findById(id);
  const name = document.querySelector("#input-name").value;
  const description = document.querySelector("#input-description").value;
  const video_url = document.querySelector("#input-video").value;
  const image_url = document.querySelector("#input-image").value;
  const origin = document.querySelector("#input-origin").value;
  const category = document.querySelector("#categories").value;
  const categoryId = parseInt(categoryInput);
  
  patchWeapon(name, description, video_url, image_url, origin, category_id)
}
 
function patchWeapon(name, description, video_url, image_url, origin, category_id) {
  const bodyJSON = { name, description, video_url, image_url, origin, category_id }
  fetch('http://localhost3000:api/v1/weapons/${weapon.id', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyJSON),
  })
    .then(res => res.json())
    .then(updatedWeapon => console.log(updatedWeapon));
  };



}