

var width = $('.poonam').width() - 127;
    var height = $('.poonam').height() - 111;

    function run() {
      setTimeout(function(){
      var top = Math.random() * height + 'px';
      var left = Math.random() * width + 'px';
      $('#nemo').animate({'top': top,'left': left},200);}, 300);
    }

    var poonampoints = 0;
    $(document).ready(function() {
      
      $('#nemo').mouseover(run);
      $('#nemo').mousemove(run);
  
      $('#nemo').click(function(){
        poonampoints+=3;
        $('.poonam p').html("score: "+poonampoints);
        if(poonampoints >=21){
          $('.finding-nemo span').text("You've won!");
          $('#nemo').remove();
        }
        
      });
    });

  var poonam = function(object){
    object.getscore = function(){
      return poonampoints;
      
    }
  }