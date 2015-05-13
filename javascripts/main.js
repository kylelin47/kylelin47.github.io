(function(){
  var mp = new Mprogress({
    template: 2,
    parent: '#mprogressContainer'
  });
  function bindEvent() {
    $('#startProgress').click(function() {
      mp.start();
    });
  }
  bindEvent();
}())
