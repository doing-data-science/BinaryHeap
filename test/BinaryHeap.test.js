'use strict';

const assert = require('assert');
const BinaryHeap = require('..').Constructor;

describe('Constructor heap', function() {
  it('minimum Constructor list should be a empty array', function() {
    var binaryHeap = new BinaryHeap();
    assert.equal(binaryHeap.size(), 0);
  });
  it('capacity Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap(5);
    assert.equal(binaryHeap.capacity, 5);
  });
  it('comparator Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap(function(a, b) {
      return b - a;
    });
    assert.equal(binaryHeap.comparator(2, 1), -1);
  });
  it('capacity and comparator Constructor list should be success', function() {
    var binaryHeap = new BinaryHeap(5, function(a, b) {
      return b - a;
    });
    assert.equal(binaryHeap.capacity, 5);
    assert.equal(binaryHeap.comparator(2, 1), -1);
    assert.equal(binaryHeap.isMinHeap, true);
  });
});

describe('add or insert to heap', function() {
  it('should add an item', function() {
    var binaryHeap = new BinaryHeap(3);
    binaryHeap.insert(1);
    binaryHeap.add(1);
    assert.equal(binaryHeap.size(), 2);
  });
  it('should add an item', function() {
    var binaryHeap = new BinaryHeap(3);
    try {
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
      binaryHeap.insert(1);
    } catch (e) {
    }
    assert.equal(binaryHeap.size(), 3);
  });
});

describe('clear heap', function() {
  it('should be an empty query', function() {
    var binaryHeap = new BinaryHeap();
    binaryHeap.insert(1);
    binaryHeap.insert(1);
    binaryHeap.insert(1);
    binaryHeap.clear();
    assert.equal(binaryHeap.size(), 0);
  });
});

describe('get and peek', function() {
  it('should be the element on top of heap', function() {
    var binaryHeap = new BinaryHeap();
    binaryHeap.add(1);
    binaryHeap.add(2);
    binaryHeap.add(3);
    assert.equal(binaryHeap.get(), 1);
    assert.equal(binaryHeap.peek(), 1);
  });
});

describe('clear method, isEmpty method, isFull method', function() {
  it('should be success', function() {
    var binaryHeap = new BinaryHeap();
    binaryHeap.clear();
    binaryHeap = new BinaryHeap(2);
    binaryHeap.add(1);
    binaryHeap.add(1);
    assert.ok(binaryHeap.isFull());
  });
});

describe('pop method', function() {
  it('should success', function() {
    var binaryHeap = new BinaryHeap(3);
    binaryHeap.add(1);
    binaryHeap.add(2);
    binaryHeap.add(3);
    assert.equal(binaryHeap.pop(), 1);
    assert.equal(binaryHeap.pop(), 2);
  });
});

describe('size method, toString method and contains method', function() {
  it('should be a number', function() {
    var binaryHeap = new BinaryHeap(3);
    assert.equal(binaryHeap.size(), 0);
    binaryHeap.add(1);
    binaryHeap.add(2);
    binaryHeap.add(3);
    assert(binaryHeap.toString(), '[1,2,3]');
    assert.ok(binaryHeap.contains(1));
    assert.equal(binaryHeap.contains(0), false);
  });
});

describe('iterator method', function() {
  it('should', function() {
    var binaryHeap = new BinaryHeap(3);
    var iterator = binaryHeap.iterator();
    assert.equal(binaryHeap.size(), 0);
  });
});

describe('grow method', function() {
  it('should increases after grow', function() {
    var binaryHeap = new BinaryHeap(3);
    try {
      binaryHeap.add(1);
      binaryHeap.add(2);
      binaryHeap.add(3);
      binaryHeap.add(4);
    } catch (e) {
    }
    assert.equal(binaryHeap.size(), 3);
    binaryHeap.grow();
    try {
      binaryHeap.add(4);
      binaryHeap.add(5);
    } catch (e) {
    }
    assert.equal(binaryHeap.size(), 4);
  });
});

describe('main function', function() {
  it('pop should success', function() {
    var binaryHeap = new BinaryHeap();
    var arr = [5, 4, 3, 2, 1];
    arr.forEach(function(i) {
      binaryHeap.add(i);
    });
    assert.equal(binaryHeap.list.toString(), '1,2,4,5,3');
    var result = [];
    while (binaryHeap.size() > 0) {
      result.push(binaryHeap.pop());
    }
    assert.equal(result.toString(), arr.reverse().toString());
  });
  it('huge number', function() {
    var binaryHeap = new BinaryHeap();
    var total = 100;
    while (total --) {
      binaryHeap.add(total);
    }
    var result = [];
    while (binaryHeap.size() > 0) {
      result.push(binaryHeap.pop());
    }
    total = 100;
    while (total --) {
      assert.equal(result[total], total);
    }
  });
});
