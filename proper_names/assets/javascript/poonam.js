

var width = $('.poonam').width() - 127;
    var height = $('.poonam').height() - 111;

    function run() {
      var top = Math.random() * height + 'px';
      var left = Math.random() * width + 'px';
      $('#nemo').animate({'top': top,'left': left},300);
    }
    var poonampoints = 0;
    $(document).ready(function() {
      $('#nemo').mouseover(run);
      $('#nemo').mousemove(run);
      $('#nemo').click(function(){
        $('#nemo').removeAttr('mousemove');
         $('#nemo').removeAttr('mouseover');
         $('.finding-nemo span').text("you won!");
              poonampoints = 50;
               });
    });

  var poonam = function(object){
    object.getscore = function(){
      return poonampoints;
      
    }
  }