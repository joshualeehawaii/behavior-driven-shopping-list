var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var testVar = {};
  beforeEach(function() {
    testVar = new ShoppingListItem('eggs', 'protein', 'true');
  });
  //ShoppingListItem is a class
  it('should be a class', function(){
    var classTest = testVar instanceof ShoppingListItem;
    expect(classTest).to.equal(true);
  });
  //ShoppingListItem has a name
  it('should have a name', function(){
    expect(testVar.name).to.equal('eggs');
  });
  //ShoppingListItem has a description
  it('should have a description', function(){
    expect(testVar.description).to.equal('protein');
  });

  //ShoppingListItem has a property named is_done
  it('should have a property named is_done', function(){
    expect(testVar.is_done).to.equal('true');
  });

});