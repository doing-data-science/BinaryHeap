# Class BinaryHeap

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/binaryheapx.svg?style=flat-square
[npm-url]: https://npmjs.org/package/binaryheapx
[travis-image]: https://img.shields.io/travis/xudafeng/BinaryHeap.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/BinaryHeap
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/BinaryHeap.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/BinaryHeap?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/binaryheapx.svg?style=flat-square
[download-url]: https://npmjs.org/package/binaryheapx

> JavaScript Implementation of the Binary Heap.

## Constructor Detail

### BinaryHeap()

Constructs a new minimum binary heap, Minimum heap is default;

### BinaryHeap(Boolean isMinHeap)

Constructs a new minimum binary heap.

` Parameters: `

* isMinHeap - true to use the order imposed by the given comparator; false to reverse that order

### BinaryHeap(Function comparator)

Constructs a new BinaryHeap that will use the given comparator to order its elements.

` Parameters: `

* capacity - the initial capacity for the heap

### BinaryHeap(Number capacity)

Constructs a new minimum binary heap with the specified initial capacity.

` Parameters: `

* capacity - The initial capacity for the heap. This value must be greater than zero.

` Throws: `

* IllegalArgumentException - if capacity is <= 0

### BinaryHeap(Number capacity, Boolean isMinHeap, Function comparator)

Constructs a new BinaryHeap.

` Parameters: `

* capacity - the initial capacity for the heap
* isMinHeap - true to use the order imposed by the given comparator; false to reverse that order
* comparator - the comparator used to order the elements, null means use natural order

` Throws: `

* IllegalArgumentException - if capacity is <= 0


## Method Detail

### void clear()

Clears all elements from queue.

### boolean isEmpty()

Tests if queue is empty.

` Returns: `

* true if queue is empty; false otherwise.

### boolean isFull()

Tests if queue is full.

` Returns: `

* true if queue is full; false otherwise.

### void insert(Object element)

Inserts an element into queue.

` Parameters: `

* element - the element to be inserted

### object peek()

Returns the element on top of heap but don't remove it.

` Returns: `

* the element at top of heap

` Throws: `

* NoSuchElementException - if isEmpty() == true

### object pop()

Returns the element on top of heap and remove it.

` Returns: `

* the element at top of heap

` Throws: `

* NoSuchElementException - if isEmpty() == true


### string toString()

Returns a string representation of this heap.

` Returns: `

* a string representation of this heap

### object iterator()

Returns an iterator over this heap's elements.

` Returns: `

* an iterator over this heap's elements

### boolean add(Object object)

Adds an object to this heap. Same as insert(Object).

` Parameters: `

* object - the object to add

` Returns: `

* true, always

### object get()

Returns the priority element. Same as peek().

` Returns: `

* the priority element

` Throws: `

* BufferUnderflowException - if this heap is empty

### object remove()

Removes the priority element. Same as pop().

` Returns: `

* the removed priority element

` Throws: `

* BufferUnderflowException - if this heap is empty

### number size()

Returns the number of elements in this heap.

` Returns: `

* the number of elements in this heap

## License

The MIT License (MIT)

Copyright (c) 2013 xdf
