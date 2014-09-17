/* ================================================================
 * BinaryHeap by xdf(xudafeng[at]126.com)
 *
 * first created at : Wed Aug 20 2014 10:35:14 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2014 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

;(function(root, factory){
  'use strict';
  /* amd like aml https://github.com/xudafeng/aml.git */
  if (typeof define === 'function' && define.amd) {
    return define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else{
    /* browser */
    factory(root['BinaryHeap'] || (root['BinaryHeap'] = {}));
  }
})(this, function(exports, undefined) {
  /**
   * @constructor BinaryHeap
   * @param {Number} capacity
   * @param {Boolean} isMinHeap
   * @param {Array} comparator
   */
  function Constructor() {
    var args = arguments;
    var capacity = Infinity;
    var comparator = function(a, b) {
      return a - b;
    };
    var isMinHeap = true;

    if (typeof args[2] !== 'undefined') {
      capacity = args[0];
      isMinHeap = args[1];
      comparator = args[2];
    } else {
      if (typeof args[1] !== 'undefined') {

        if (typeof args[0] === 'number' && typeof args[1] === 'boolean') {
          capacity = args[0];
          isMinHeap = args[1];
        } else if (typeof args[0] === 'boolean' && typeof args[1] === 'function') {
          isMinHeap = args[0];
          comparator = args[1];
        } else if (typeof args[0] === 'number' && typeof args[1] === 'function') {
          capacity = args[0];
          comparator = args[1];
        }
      } else {

        if (typeof args[0] === 'number') {
          capacity = args[0];
        } else if (typeof args[0] === 'function'){
          comparator = args[0];
        } else if (typeof args[0] === 'boolean'){
          isMinHeap = args[0];
        }
      }
    }

    // create heap
    this.list = [];
    this.isMinHeap = isMinHeap;
    this.capacity = capacity;
    this.comparator = comparator;
  }

  var proto = Constructor.prototype;

  /**
   * Adds an object to this heap. Same as insert(Object).
   * @method add
   */
  proto.add = function(object) {
    return this.insert(object);
  }

  /**
   * Clears all elements from queue.
   * @method clear
   */
  proto.clear = function() {
    this.list = [];
    return this;
  }

  /**
   * Returns the priority element. Same as peek().
   * @method get
   */
  proto.get = function() {
    return this.peek();
  }

  /**
   * Inserts an element into queue.
   * @method insert
   * @param {Object} object
   * @return {Boolean}
   */
  proto.insert = function(object) {

    if (this.isFull()) {
      throw('Error: insert is not success due to the lack of capacity.');
    } else {
      this.list.push(object);
      this.percolateUp(this.size() - 1);
    }
    return true;
  }
  /**
   * Tests if queue is empty.
   * @method isEmpty
   * @return {Boolean}
   */
  proto.isEmpty = function() {
    return this.size() === 0;
  }

  /**
   * Tests if queue is full.
   * @method isFull
   * @return {Boolean}
   */
  proto.isFull = function() {
    return this.size() === this.capacity;
  }

  /**
   * Returns an iterator over this heap's elements.
   * @method iterator
   * @return {Object}
   * TODO
   */
  proto.iterator = function() {
    return this;
  }
  /**
   * Returns the element on top of heap but don't remove it.
   * @method peek
   * @return {Object}
   */
  proto.peek = function() {
    return this.isEmpty()? null: this.list[0];
  }

  /**
   * Returns the element on top of heap and remove it.
   * @method pop
   * @return {Object}
   */
  proto.pop = function() {
    var heapTop = this.list[0];
    var heapEnd = this.list.pop();
    // sink down it
    if (!this.isEmpty()) {
      this.list[0] = heapEnd;
      this.percolateDown(0);
    }
    return heapTop;
  }

  /**
   * Removes the priority element. Same as pop().
   * @method remove
   */
  proto.remove = function() {
    return this.pop();
  }

  /**
   * Returns the number of elements in this heap.
   * @method size
   * @return {Number}
   */
  proto.size = function() {
    return this.list.length;
  }
  /**
   * Returns a string representation of this heap.
   * @method toString
   * @return {String}
   */
  proto.toString = function() {
    return JSON.stringify(this.list);
  }

  /**
   * Tests if queue contains item.
   * @method contains
   * @return {Boolean}
   */
  proto.contains = function(object) {
    return !!~this.list.indexOf(object);
  }

  /**
   * Increases the size of the heap to support additional elements
   * @method grow
   */
  proto.grow = function() {
    this.capacity ++;
    return this;
  }

  /**
   * Percolates element up heap from from the position given by the index.
   * @method percolateUp
   */
  proto.percolateUp = function(index) {
    // last element
    var currentNode = this.list[index];

    while (index > 0) {
      /**
       * parent node index is Math.floor((index + 1) / 2) - 1
       * because the first index is 1
       */
      var parentIndex = Math.floor((index + 1) / 2) - 1,
      parentNode = this.list[parentIndex];

      var temp = this.comparator(currentNode, parentNode);
      temp = this.isMinHeap? temp > 0: temp < 0;
      if (temp) break;
      // swap the parent node with the currentNode
      this.list[parentIndex] = currentNode;
      this.list[index] = parentNode;
      index = parentIndex;
    }
    return this;
  }

  /**
   * Percolates element down heap from the position given by the index.
   * @method percolateDown
   */
  proto.percolateDown = function(index) {
    var currentNode = this.list[index];

    while (true) {
      var childRightIndex = (index + 1) * 2;
      var childLeftIndex = childRightIndex - 1;
      var swap = null;

      if (childLeftIndex < this.size()) {
        var childLeft = this.list[childLeftIndex];
        var temp = this.comparator(childLeft, currentNode);
        temp = this.isMinHeap? temp < 0: temp > 0;
        if (temp) swap = childLeftIndex;
      }

      if (childRightIndex < this.size()) {
        var childRight = this.list[childRightIndex];
        var temp = this.comparator(childRight, swap === null ? currentNode : childLeft);
        temp = this.isMinHeap? temp < 0: temp > 0;

        if (temp) swap = childRightIndex;
      }

      if (swap == null) break;
      this.list[index] = this.list[swap];
      this.list[swap] = currentNode;
      index = swap;
    }
    return this;
  }

  exports.Constructor = Constructor;
  exports.version = '0.1.0';
});
/* vim: set sw=4 ts=4 et tw=80 : */
