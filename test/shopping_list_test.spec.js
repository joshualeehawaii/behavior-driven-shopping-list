var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var ShoppingListItem = require('../js/shopping_list_item.js');

describe('ShoppingListItem Class', function(){

  var testItem = {};
  var testName = 'eggs';
  var testDescription = 'protein';

  beforeEach(function() {
    testItem = new ShoppingListItem(testName, testDescription);
  });

  //ShoppingListItem is a class
  it('should be a class', function(){
    var classTest = testItem instanceof ShoppingListItem;
    expect(classTest).to.equal(true);
  });

  //ShoppingListItem has a name
  it('should have a name', function(){
    expect(testItem.name).to.exist;
  });

  //ShoppingListItem has a description
  it('should have a description', function(){
    expect(testItem.description).to.exist;
  });

  //ShoppingListItem has a property named is_done
  it('should have a property named is_done', function(){
    expect(testItem.is_done).to.exist;
  });

  //ShoppingListItem has a constructor sets name and description
  it('should take in two parameters name and description', function(){
    var randomItem = new ShoppingListItem(testName, testDescription);
    expect(randomItem.name).to.equal(testName);
    expect(randomItem.description).to.equal(testDescription);
  });

  it('should have a method named check', function(){
    expect(testItem.check).to.exist;
  });

  it('check should set is_done to true', function(){
    var newItem = new ShoppingListItem('egg', 'proten');
    expect(newItem.is_done).to.equal(false);
    newItem.check();
    expect(newItem.is_done).to.not.equal(false);

  });

  it('should have a method named uncheck', function(){
    expect(testItem.uncheck).to.exist;
  });

  it('uncheck should set is_done to false', function(){
    var newItem = new ShoppingListItem('egg', 'protein');
    newItem.check();
    expect(newItem.is_done).to.not.equal(false);
    newItem.uncheck();
    expect(newItem.is_done).to.equal(false);

  });

  it('should have a method named render', function(){
    expect(testItem.render).to.exist;
  });

  it('should render a <li> as a string', function(){
    expect( testItem.render() ).to.be.an('string');
  });

});

var ShoppingList = require('../js/shopping_list.js');

describe('ShoppingList Class', function(){

  beforeEach(function() {
    testItem = new ShoppingList();
  });

  //ShoppingList is a class
  it('should be a class', function(){
    var classTest = testItem instanceof ShoppingList;
    expect(classTest).to.equal(true);
  });

});