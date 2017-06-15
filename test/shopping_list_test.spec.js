var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){
  var testVar = {};
  beforeEach(function() {
    testVar = new ShoppingListItem('thing', 'it is stuff');
  });

  it('should be a class', function(){
    var classTest = testVar instanceof ShoppingListItem;
    expect(classTest).to.equal(true);

  });

  it('should have a name', function(){
    expect(testVar.name).to.equal('thing');
  });

  it('should have a description', function(){
    expect(testVar.description).to.equal('it is stuff');
  });



});