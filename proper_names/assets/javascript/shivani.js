

var radioButtonContainer = document.getElementById('radioButtonContainer');
radioButtonContainer.style.display = 'none';

var twinscore= 0;


function check5() {
    if(document.getElementById("35").checked){
  document.getElementById("col5").src = "/static/assets/images/shivani/58.png";
  document.getElementById("col35").src = "/static/assets/images/shivani/50.png";  
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
  document.getElementById("35").disabled = true;
   document.getElementById("5").disabled = true;
    document.getElementById("35").checked = false;}
    else{
   document.getElementById("5").checked = true;}
}

function check35() {
    if(document.getElementById("5").checked){
  document.getElementById("col5").src = "/static/assets/images/shivani/58.png";
  document.getElementById("col35").src = "/static/assets/images/shivani/50.png"; 
    twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("35").disabled = true;
   document.getElementById("5").disabled = true;
    document.getElementById("5").checked = false;}
    else{
   document.getElementById("35").checked = true;}
}



function check8() {
    if(document.getElementById("48").checked){
  document.getElementById("col8").src = "/static/assets/images/shivani/91.png";
  document.getElementById("col48").src = "/static/assets/images/shivani/52.png";    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("8").disabled = true;
   document.getElementById("48").disabled = true;
    document.getElementById("45").checked = false;}
    else{
   document.getElementById("8").checked = true;}
}

function check48() {
    if(document.getElementById("8").checked){
  document.getElementById("col8").src = "/static/assets/images/shivani/91.png";
  document.getElementById("col48").src = "/static/assets/images/shivani/52.png";  
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
  document.getElementById("8").disabled = true;
   document.getElementById("48").disabled = true;
    document.getElementById("8").checked = false;}
    else{
   document.getElementById("48").checked = true;}
}

function check13() {
    if(document.getElementById("37").checked){
  document.getElementById("col13").src = "/static/assets/images/shivani/61.png";
   document.getElementById("col37").src = "/static/assets/images/shivani/53.png";    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
  document.getElementById("13").disabled = true;
   document.getElementById("37").disabled = true;
    document.getElementById("37").checked = false;}
    else{
   document.getElementById("13").checked = true;}
}

function check37() {
    if(document.getElementById("13").checked){
  document.getElementById("col13").src = "/static/assets/images/shivani/61.png";
   document.getElementById("col37").src = "/static/assets/images/shivani/53.png";  
    twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
  document.getElementById("13").disabled = true;
   document.getElementById("37").disabled = true;
    document.getElementById("13").checked = false;}
    else{
   document.getElementById("37").checked = true;}
}

function check44() {
    if(document.getElementById("20").checked){
  document.getElementById("col20").src = "/static/assets/images/shivani/54.png";
  document.getElementById("col44").src = "/static/assets/images/shivani/62.png";  
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
  document.getElementById("44").disabled = true;
   document.getElementById("20").disabled = true;
    document.getElementById("20").checked = false;}
    else{
   document.getElementById("44").checked = true;}
}

function check20() {
    if(document.getElementById("44").checked){
  document.getElementById("col20").src = "/static/assets/images/shivani/54.png";
  document.getElementById("col44").src = "/static/assets/images/shivani/62.png"; 
    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("44").disabled = true;
   document.getElementById("20").disabled = true;
    document.getElementById("44").checked = false;}
    else{
   document.getElementById("20").checked = true;}
}

function check43() {
    if(document.getElementById("18").checked){
  document.getElementById("col43").src = "/static/assets/images/shivani/55.png";
  document.getElementById("col18").src = "/static/assets/images/shivani/90.jpg";
    twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("43").disabled = true;
   document.getElementById("18").disabled = true;
    document.getElementById("18").checked = false;}
    else{
   document.getElementById("43").checked = true;}
}

function check18() {
    if(document.getElementById("43").checked){
  document.getElementById("col43").src = "/static/assets/images/shivani/55.png";
  document.getElementById("col18").src = "/static/assets/images/shivani/90.jpg";
    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("43").disabled = true;
   document.getElementById("18").disabled = true;
    document.getElementById("43").checked = false;}
    else{
   document.getElementById("18").checked = true;}
}

function check19() {
    if(document.getElementById("49").checked){
  document.getElementById("col19").src = "/static/assets/images/shivani/56.png";
  document.getElementById("col49").src = "/static/assets/images/shivani/57.png";  
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("19").disabled = true;
   document.getElementById("49").disabled = true;
    document.getElementById("49").checked = false;}
    else{
   document.getElementById("19").checked = true;}
}

function check49() {
    if(document.getElementById("19").checked){
  document.getElementById("col19").src = "/static/assets/images/shivani/56.png";
  document.getElementById("col49").src = "/static/assets/images/shivani/57.png"; 
    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("19").disabled = true;
   document.getElementById("49").disabled = true;
    document.getElementById("19").checked = false;}
    else{
   document.getElementById("49").checked = true;}
}

function check7() {
    if(document.getElementById("23").checked){
  document.getElementById("col7").src = "/static/assets/images/shivani/51.jpg";
  document.getElementById("col23").src = "/static/assets/images/shivani/59.png";  
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("7").disabled = true;
   document.getElementById("23").disabled = true;
    document.getElementById("23").checked = false;}
    else{
   document.getElementById("7").checked = true;}
}

function check23() {
    if(document.getElementById("7").checked){
  document.getElementById("col7").src = "/static/assets/images/shivani/51.jpg";
  document.getElementById("col23").src = "/static/assets/images/shivani/59.png"; 
    
  twinscore= twinscore+ 3;
  $('.shivani .space span').text("score: "+twinscore);
   document.getElementById("7").disabled = true;
   document.getElementById("23").disabled = true;
    document.getElementById("7").checked = false;}
    else{
   document.getElementById("23").checked = true;}
}


var shivani = function(object){
  object.getscore = function(){
    return twinscore;
  };
  console.log("called");
};
