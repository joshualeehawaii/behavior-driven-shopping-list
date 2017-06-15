var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var testVar = {};
  beforeEach(function() {
    testVar = new ShoppingListItem();
  });

  it('should be a class', function(){
    var classTest = testVar instanceof ShoppingListItem;
    expect(classTest).to.equal(true);

  });



});