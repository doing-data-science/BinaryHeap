/* ================================================================
 * BinaryHeap by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Aug 20 2014 10:35:14 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var BinaryHeap = require('../').BinaryHeap;

describe('Constructor heap', function(){
  it('minimum Constructor list should be a empty array', function() {
    var binaryHeap = new BinaryHeap();
    binaryHeap.size().should.equal(0);
  });
  it('capacity Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap(5);
    binaryHeap.capacity.should.equal(5);
  });
  it('comparator Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    binaryHeap.size().should.equal(3);
  });
  it('capacity and comparator Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap(5, [1, 2, 3]);
    binaryHeap.capacity.should.equal(5);
    binaryHeap.size().should.equal(3);
  });
});

describe('add or insert to heap', function(){
  it('should add an item', function() {
    var binaryHeap = new BinaryHeap(3);
    binaryHeap.insert(1);
    binaryHeap.add(1);
    binaryHeap.size().should.equal(2);
  });
  it('should add an item', function() {
    var binaryHeap = new BinaryHeap(3);
    try {
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
    }catch (e){
    }
    binaryHeap.size().should.equal(3);
  });
});

describe('clear heap', function(){
  it('should be an empty query', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    binaryHeap.clear();
    binaryHeap.size().should.equal(0);
  });
});

describe('get and peek', function(){
  it('should be the element on top of heap', function() {
    var binaryHeap = new BinaryHeap();
    binaryHeap.add(1);
    binaryHeap.add(2);
    binaryHeap.add(3);
    binaryHeap.get().should.equal(3);
    binaryHeap.peek().should.equal(3);
  });
});

describe('clear method, isEmpty method, isFull method', function() {
  it('should be success', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    binaryHeap.clear();
    binaryHeap.isEmpty.should.be.a.boolean;
    binaryHeap = new BinaryHeap(2, [1]);
    binaryHeap.add(1);
    binaryHeap.isFull().should.be.true;
  });
});

describe('pop method', function() {
  it('should success', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    binaryHeap.pop().should.equal(3);
    binaryHeap.size().should.equal(2);
  });
});

describe('size method, toString method and contains method', function() {
  it('should be a number', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    binaryHeap.size().should.equal(3);
    binaryHeap.add([1,2]);
    binaryHeap.toString().should.equal('[1,2,3,[1,2]]');
    binaryHeap.contains(2).should.be.true;
    binaryHeap.contains(0).should.be.false;
  });
});

describe('iterator method', function() {
  it('should', function() {
    var binaryHeap = new BinaryHeap([1, 2, 3]);
    var iterator = binaryHeap.iterator();
    binaryHeap.size().should.equal(3);
  });
});

