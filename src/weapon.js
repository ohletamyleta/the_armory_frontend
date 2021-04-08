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

  static findById(id) {
    return this.all.find((weapon) => weapon.id === id);
  }
}

Weapon.all = [];