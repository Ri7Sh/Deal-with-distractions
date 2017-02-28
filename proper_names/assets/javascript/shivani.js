var shivani = (function(){

var radioButtonContainer = document.getElementById('radioButtonContainer');
radioButtonContainer.style.display = 'none';

var x = 0;


function check5() {
    if(document.getElementById("35").checked){
  document.getElementById("col5").src = "58.png";
  document.getElementById("col35").src = "50.png";  
  x = x + 100;
    document.getElementById("35").checked = false;}
    else{
   document.getElementById("5").checked = true;}
}

function check35() {
    if(document.getElementById("5").checked){
  document.getElementById("col5").src = "58.png";
  document.getElementById("col35").src = "50.png"; 
    x = x + 100;
  
    document.getElementById("5").checked = false;}
    else{
   document.getElementById("35").checked = true;}
}



function check8() {
    if(document.getElementById("48").checked){
  document.getElementById("col8").src = "48.jpg";
  document.getElementById("col48").src = "52.png";    
  x = x + 100;
    document.getElementById("45").checked = false;}
    else{
   document.getElementById("8").checked = true;}
}

function check48() {
    if(document.getElementById("8").checked){
  document.getElementById("col8").src = "48.jpg";
  document.getElementById("col48").src = "52.png";  
  x = x + 100;
    document.getElementById("8").checked = false;}
    else{
   document.getElementById("48").checked = true;}
}

function check13() {
    if(document.getElementById("37").checked){
  document.getElementById("col13").src = "61.png";
   document.getElementById("col37").src = "53.png";    
  x = x + 100;
    document.getElementById("37").checked = false;}
    else{
   document.getElementById("13").checked = true;}
}

function check37() {
    if(document.getElementById("13").checked){
  document.getElementById("col13").src = "61.png";
   document.getElementById("col37").src = "53.png";  
    x = x + 100;
  
    document.getElementById("13").checked = false;}
    else{
   document.getElementById("37").checked = true;}
}

function check44() {
    if(document.getElementById("20").checked){
  document.getElementById("col20").src = "54.png";
  document.getElementById("col44").src = "62.png";  
  x = x + 100;
    document.getElementById("20").checked = false;}
    else{
   document.getElementById("44").checked = true;}
}

function check20() {
    if(document.getElementById("44").checked){
  document.getElementById("col20").src = "54.png";
  document.getElementById("col44").src = "62.png"; 
    
  x = x + 100;
    document.getElementById("44").checked = false;}
    else{
   document.getElementById("20").checked = true;}
}

function check43() {
    if(document.getElementById("18").checked){
  document.getElementById("col43").src = "55.png";
    x = x + 100;
  
    document.getElementById("18").checked = false;}
    else{
   document.getElementById("43").checked = true;}
}

function check18() {
    if(document.getElementById("43").checked){
  document.getElementById("col43").src = "55.png";
    
  x = x + 100;
    document.getElementById("43").checked = false;}
    else{
   document.getElementById("18").checked = true;}
}

function check19() {
    if(document.getElementById("49").checked){
  document.getElementById("col19").src = "56.png";
  document.getElementById("col49").src = "57.png";  
  x = x + 100;
    document.getElementById("49").checked = false;}
    else{
   document.getElementById("19").checked = true;}
}

function check49() {
    if(document.getElementById("19").checked){
  document.getElementById("col19").src = "56.png";
  document.getElementById("col49").src = "57.png"; 
    
  x = x + 100;
    document.getElementById("19").checked = false;}
    else{
   document.getElementById("49").checked = true;}
}

function check7() {
    if(document.getElementById("23").checked){
  document.getElementById("col7").src = "51.jpg";
  document.getElementById("col23").src = "59.png";  
  x = x + 100;
    document.getElementById("23").checked = false;}
    else{
   document.getElementById("7").checked = true;}
}

function check23() {
    if(document.getElementById("7").checked){
  document.getElementById("col7").src = "51.jpg";
  document.getElementById("col23").src = "59.png"; 
    
  x = x + 100;
    document.getElementById("7").checked = false;}
    else{
   document.getElementById("23").checked = true;}
}

});
