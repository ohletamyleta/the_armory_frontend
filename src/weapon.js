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
            <div data-id=${this.id}>
              <h3>${this.name}</h3>
              <p>${this.category.name}</p>
              <p>${this.origin}</p>
              <img src=${this.image_url} alt="Just imagine..."  height="200" width="250">
              <a href="${this.video_url}">See it in action!</a>
              <button data-id=${this.id}>edit</button>
            </div>
            <br><br>`;
  }
 
    static findById = id => {
      return this.all.find((weapon) => parseInt(weapon.id) === id);
    }

    renderUpdateForm() {
      return `
      <form data-id=${this.id} >
        <h3>Modify A Weapon!</h3>

        <label>Name</label>
        <input id='input-name' type="text" name="name" value'"${this.name}" class="input-text">
        <br><br>

        <label>Origin</label>
        <textarea id='input-name' type="text" name="name" rows="4" cols="40" value="">${this.origin}</textarea>
        <br><br>

        <label>Description</label>
        <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
        <br><br>

        <label>Video Link</label>
        <input id='input-url' type="text" name="image" value="${this.video_url}" class="input-text">
        <br><br>
      
        <label>Image Link</label>
        <input id='input-url' type="text" name="image" value="${this.image_url}" class="input-text">
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