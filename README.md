# Class BinaryHeap

> JavaScript Implementation of the Binary Heap.
> Author: xdf

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

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
