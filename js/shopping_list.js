/*jshint esversion: 6 */

//Creating the class Shopping List
var ShoppingListItem = require('../js/shopping_list_item.js');

class ShoppingList {


  constructor() {

    this.items = [];

  }

  addItem(item) {
    //will do some stuff
    if(item instanceof ShoppingListItem ){
      this.items.push(item);
    } else {
      throw new Error('ENTER AN ITEM!!!!! AHHHHH!!!! IT BURNS!!!!');
    }
  }

}

module.exports = ShoppingList;