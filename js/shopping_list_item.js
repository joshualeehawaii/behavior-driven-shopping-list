/*jshint esversion: 6 */

//Creating the class Shopping List Item
class ShoppingListItem {

  constructor(name, description) {

    this.name = name;
    this.description = description;
    this.is_done = false;

  }

  check(){
    this.is_done = true;
  }

}

module.exports = ShoppingListItem;