define(['jquery'], function($) {
  
  function trim($ele) {
    $ele.bind('input propertychange', function() {
      var $this = $(this)
      $this.val($.trim($this.val()))
    })
  }

  return trim  
});