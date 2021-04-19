class Category {
  constructor(id, categoryAttributes) {
    this.id = id;
    this.name = categoryAttributes.name;
    
    Category.all.push(this);
  }

  loadOptions() {
    const categories = Category.all

    categories.forEach(category => {
    let sel = document.getElementById('categories');
    let opt = document.createElement('option');
    // debugger;
    opt.appendChild( document.createTextNode(this.name));
    opt.value = this.id
    sel.appendChild(opt);
  })
}

}

 Category.all = [];