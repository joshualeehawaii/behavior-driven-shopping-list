/*jshint esversion: 6 */

//Creating the class Shopping List
var ShoppingListItem = require('../js/shopping_list_item.js');

class ShoppingList {


  constructor() {

    this.items = [];

  }

  addItem(item) {
    if(item instanceof ShoppingListItem ){
      this.items.push(item);
    } else {
      throw new Error('ENTER AN ITEM!!!!! AHHHHH!!!! IT BURNS!!!!');
    }
  }

  removeItem(item) {
    if(item instanceof ShoppingListItem ){
      this.items.splice(this.items.indexOf(item), 1);

    } else if( item === undefined && this.items.length > 0) {
      this.items.pop();

    } else {
      throw new Error('ARE YOU CRAZY!!!! YOU CANT REMOVE ITEMS YOU DONT HAVE');
    }
  }
}

module.exports = ShoppingList;