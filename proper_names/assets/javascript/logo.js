

var logo = function(object){
     var points =0;
    object.getscore = function(){
        return points;
        }
  
$('.logo button').click(function(event){
    event.preventDefault();
    //var str = "Visit astroboy!"; 
    var win = 0;
    var s1 =document.getElementById("a").value;
    var n1 = s1.search(/bmw/i);
   // document.getElementById("demo").innerHTML = n;
    var s2 =document.getElementById("b").value;
    var n2 = s2.search(/louis\s{0,1}vuitton/i);
     var s3 =document.getElementById("c").value;
    var n3 = s3.search(/burger\s{0,1}king/i);
     var s4 =document.getElementById("d").value;
    var n4 = s4.search(/(l'oreal\s{0,1}paris)|(loreal\s{0,1}paris)|(loreal)/i);
     var s5 =document.getElementById("e").value;
    var n5 = s5.search(/ibm/i);
     var s6 =document.getElementById("f").value;
    var n6 = s6.search(/pizza\s{0,1}hut/i);
     var s7 =document.getElementById("g").value;
    var n7 = s7.search(/canon/i);
     var s8 =document.getElementById("h").value;
    var n8 = s8.search(/(levi's)|(levis)/i);
     var s9 =document.getElementById("i").value;
    var n9 = s9.search(/fanta/i);
    var s10 =document.getElementById("j").value;
    var n10 = s10.search(/telenor/i);
    var s11 =document.getElementById("k").value;
    var n11 = s11.search(/versace/i);
    var s12 =document.getElementById("l").value;
    var n12= s12.search(/maggi/i);
    //checking
    
    if(n1!=-1)
    {win=win+10;}
     if(n2!=-1)
    {win=win+10;}
     if(n3!=-1)
    {win=win+10;}
     if(n4!=-1)
    {win=win+10;}
     if(n5!=-1)
    {win=win+10;} 
    if(n6!=-1)
    {win=win+10;}
     if(n7!=-1)
    {win=win+10;}
     if(n8!=-1)
    {win=win+10;}
     if(n9!=-1)
    {win=win+10;}
    if(n10!=-1)
    {win=win+10;}
    if(n11!=-1)
    {win=win+10;}
    if(n12!=-1)
    {win=win+10;}
     
   points = win;
   $('.logo #score').text(win);

}
);

}