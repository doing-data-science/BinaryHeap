;(function($, P, BinaryHeap, undefined){
  // fetch docs
  $.ajax({
    url : './README.md',
    dataType : 'html',
    scriptCharset: 'utf-8',
    success : function(d) {
      $('#docs').html(marked(d));
    }
  });
  // init heap
  var TOTAL = 400;
  var binaryHeap = new BinaryHeap();
  var result;
  var total;
  function initHeap() {
    result = [];
    total = TOTAL;
    binaryHeap.clear();
    while (total--) {
      binaryHeap.add(total);
    }
    total = TOTAL;
  }
  initHeap();
  // init demonstrate
  var capacity = 2 / 3;
  var WIDTH = TOTAL;
  var HEIGHT = TOTAL * capacity;
  var Screen = P.Screen;
  var Timer = P.Timer;
  var screen = new Screen({
    container: 'screen',
    width: WIDTH,
    height: HEIGHT,
    x: 0,
    y: 0
  });
  screen.update(function() {
    if(!total) {
      initHeap()
    };
    result.push(binaryHeap.pop());
    var current = [];
    var ctx = this.context;
    ctx.lineWidth = 1;
    current = current.concat(result);
    current = current.concat(binaryHeap.list);
    current.forEach(function(i, k) {
      ctx.beginPath();
      ctx.moveTo(k, i * capacity);
      ctx.lineTo(k, HEIGHT);
      ctx.stroke();
    });
    total--;
  });
  var timer = new Timer(screen);
  timer.start();
})(jQuery, pillow, BinaryHeap.Constructor);
