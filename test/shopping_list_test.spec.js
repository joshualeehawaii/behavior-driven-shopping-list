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
    testList = new ShoppingList();
  });

  //ShoppingList is a class
  it('should be a class', function(){
    var classTest = testList instanceof ShoppingList;
    expect(classTest).to.equal(true);
  });

  it('should have a property called name', function(){

    expect(testList.items).to.exist;
    var randomList = new ShoppingList();
    expect(randomList.items).to.deep.equal([]);

  });

  it('should have a method named addItem', function(){
    expect(testList.addItem).to.exist;
  });

  it('should add ShoppingListItem to items array or throw error', function(){

    var item1 = new ShoppingListItem('eggs', 'protein');
    var item2 = new ShoppingListItem('bacon', 'protein');
    var item3 = 'mcflurry';

    testList.addItem(item1);
    testList.addItem(item2);
    expect(testList.items.length).to.be.equal(2);

    (function(){testList.addItem(item3);}).should.throw(Error, 'AHHHH');

  });

  it('should have a method named removeItem', function(){
    expect(testList.removeItem).to.exist;
  });

  it('should remove ShoppingListItem from the array or throw error', function(){

    var item1 = new ShoppingListItem('eggs', 'protein');
    var item2 = new ShoppingListItem('bacon', 'protein');
    var item3 = 'mcflurry';

    testList.addItem(item1);
    testList.addItem(item2);
    testList.removeItem(item1);
    testList.removeItem(item2);

    expect(testList.items.length).to.not.be.equal(2);
    expect(testList.items).to.be.deep.equal([]);
    (function(){testList.removeItem();}).should.not.throw(Error, 'CRAZY');
    (function(){testList.removeItem(item3);}).should.throw(Error, 'CRAZY');

  });

  it('should have a method named render', function(){
    expect(testList.render).to.exist;
  });

  it('should concatenate the results in the items arry, wrap data in ul tags , and return an html formatted string ', function(){

    var item1 = new ShoppingListItem('eggs', 'protein');
    var item2 = new ShoppingListItem('bacon', 'protein');
    var item3 = 'mcflurry';

    testList.addItem(item1);
    testList.addItem(item2);
    testList.removeItem(item1);
    testList.removeItem(item2);

    expect(testList.items.length).to.not.be.equal(2);
    expect(testList.items).to.be.deep.equal([]);
    (function(){testList.removeItem();}).should.not.throw(Error, 'CRAZY');
    (function(){testList.removeItem(item3);}).should.throw(Error, 'CRAZY');

  });

});