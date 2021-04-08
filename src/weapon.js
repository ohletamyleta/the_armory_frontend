class Weapon {
  constructor(id, weaponAttributes) {
    this.id = id;
    this.name = weaponAttributes.name;
    this.description = weaponAttributes.description;
    this.image_url = weaponAttributes.image_url;
    this.video_url = weaponAttributes.video_url;
    this.origin = weaponAttributes.origin;
    this.category = weaponAttributes.category;
    weapon.all.push(this);
  }




  Weapon.all = [];