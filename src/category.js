class Category {
  constructor(id, categoryAttributes) {
    this.id = id;
    this.name = categoryAttributes.name;
    
    Category.all.push(this);
  }

}

 Category.all = [];