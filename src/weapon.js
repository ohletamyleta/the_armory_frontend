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
            <img src=${this.image_url} class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-text">${this.name}</h3>
              <h4 class="card-text"><em>Category: ${this.category.name}</em></h4>
              <h5 class="card-text">Origin: ${this.origin}</h5>
              <p class="card-text">${this.description}</p>
              <a href="${this.video_url}">See it in action!</a>
               <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">

                 <button type="button" class="btn btn-primary" data-id=${this.id}>Delete</button>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>`;
  }


  static findById = (id) => {
    return this.all.find((weapon) => parseInt(weapon.id) === id);
  };

}

Weapon.all = [];