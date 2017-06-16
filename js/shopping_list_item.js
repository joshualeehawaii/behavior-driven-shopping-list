/*jshint esversion: 6 */

//Creating the class Shopping List Item
class ShoppingListItem {
  constructor(name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }
}
module.exports = ShoppingListItem;