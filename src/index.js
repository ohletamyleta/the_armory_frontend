const endPoint = "http://localhost:3000/api/v1/weapons";

function pageReload() {
  window.location.reload(true);
}

document.addEventListener("DOMContentLoaded", () => {
  getWeapons()

  const createWeaponForm = document.querySelector('#create-weapon-form')

  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e) )

  const deleteWeaponTrigger = document.querySelector('#weapon-container')
  
  deleteWeaponTrigger.addEventListener("click", (e) => deleteWeapon(e))

 
});

function getWeapons() {
  fetch(endPoint)
    .then(res => res.json())
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
  
  const bodyData = {name, description, video_url, image_url, origin, category_id};

   fetch("http://localhost:3000/api/v1/weapons", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(bodyData),
   })
     .then((response) => response.json())
     .then((weapon) => {
       const newWeapon = new Weapon(weapon.data.id, weapon.data.attributes);

       document.querySelector(
         "#weapon-container"
       ).innerHTML += newWeapon.renderWeaponCard();
     });
     pageReload();
  }
    
  function deleteWeapon(e) {

    const id = parseInt(e.target.dataset.id);
    const weapon = Weapon.findById(id);
      
    fetch(`http://localhost:3000/api/v1/weapons/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      pageReload(true);
      
     })
    // 
     
  }




