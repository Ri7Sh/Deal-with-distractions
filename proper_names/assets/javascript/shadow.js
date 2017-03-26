var shadowpoints= 0;

var shadow = function(object){
    object.getscore = function(){
        return shadowpoints;
    }
   }

$('.shadow button').click(function(event){
    event.preventDefault();

    $(this).attr('disabled','disabled');
    $(this).text('Submitted');
    $('.close_shadow').text("You may close the window");
    //var str = "Visit astroboy!"; 
    var win = 0;
    var s1 =document.getElementById("a3").value;
    var n1 = s1.search(/astro\s{0,1}boy/i);
   // document.getElementById("demo").innerHTML = n;
    var s2 =document.getElementById("b3").value;
    var n2 = s2.search(/bat\s{0,1}man/i);
     var s3 =document.getElementById("c3").value;
    var n3 = s3.search(/buzz\s{0,1}lightyear/i);
     var s4 =document.getElementById("d3").value;
    var n4 = s4.search(/(stevie\s{0,1}griffin)|(stewie\s{0,1}griffin)|(stewart\s{0,1}gilligan\s{0,1}griffin)/i);
     var s5 =document.getElementById("e3").value;
    var n5 = s5.search(/marge\s{0,1}simpson/i);
     var s6 =document.getElementById("f3").value;
    var n6 = s6.search(/mojo\s{0,1}jojo/i);
     var s7 =document.getElementById("g3").value;
    var n7 = s7.search(/olive\s{0,1}oyl/i);
     var s8 =document.getElementById("h3").value;
    var n8 = s8.search(/pink\s{0,1}panther/i);
     var s9 =document.getElementById("i3").value;
    var n9 = s9.search(/(johnny\s{0,1}bravo)|(johny\s{0,1}bravo)/i);
    //checking
    if(n1!=-1)
    {win=win+2;}
     if(n2!=-1)
    {win=win+2;}
     if(n3!=-1)
    {win=win+2;}
     if(n4!=-1)
    {win=win+2;}
     if(n5!=-1)
    {win=win+2;} 
    if(n6!=-1)
    {win=win+2;}
     if(n7!=-1)
    {win=win+2;}
     if(n8!=-1)
    {win=win+2;}
     if(n9!=-1)
    {win=win+2;}
     
    shadowpoints = win;
    $('.shadow .shadowpoints').text(win);


});