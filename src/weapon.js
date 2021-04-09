class Weapon {
  constructor(id, weaponAttributes) {
    this.id = id;
    this.name = weaponAttributes.name;
    this.description = weaponAttributes.description;
    this.image_url = weaponAttributes.image_url;
    this.video_url = weaponAttributes.video_url;
    this.origin = weaponAttributes.origin;
    this.category = weaponAttributes.category;
    Weapon.all.push(this);
  }

  renderWeaponCard() {
    return `
    <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
            // `<div data-id=${this.id}>
            //   <h3>${this.name}</h3>
            //   <p>${this.category.name}</p>
            //   <p>${this.origin}</p>
            //   <img src=${this.image_url} alt="Just imagine..."  height="200" width="250">
            //   <a href="${this.video_url}">See it in action!</a>
            //   <button data-id=${this.id}>edit</button>
            // </div>
            // <br><br>`;

  }
 
    static findById = id => {
      return this.all.find((weapon) => parseInt(weapon.id) === id);
    }

    renderUpdateForm = () => {
      console.log(`${this.name}`)
      return `
      <form data-id=${this.id} >
        <h3>Modify A Weapon!</h3>

        <label>Name</label>
        <input id='update-name' type="text" name="name" value="${this.name}" class="input-text">
        <br><br>

        <label>Origin</label>
        <textarea id='update-origin' type="text" name="name" rows="4" cols="40" value="">${this.origin}</textarea>
        <br><br>

        <label>Description</label>
        <textarea id='update-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
        <br><br>

        <label>Video Link</label>
        <input id='update-video-url' type="text" name="image" value="${this.video_url}" class="input-text">
        <br><br>
      
        <label>Image Link</label>
        <input id='update-image-url' type="text" name="image" value="${this.image_url}" class="input-text">
        <br><br>
      
        <label>Category</label>
        <select id="categories" name="categories" value="${this.category.name}">
        <option value="1">Blunt</option>
        <option value="2">Sharp</option>
        <option value="3">Projectile</option>
        <option value="4">Legendary</option>
        <option value="5">Nonconformist</option>
        </select>
        <br><br>

      <input id='edit-button' type="submit" name="submit" value="Modify Weapon" class="submit">
    </form>
      `;
    }
}

Weapon.all = [];