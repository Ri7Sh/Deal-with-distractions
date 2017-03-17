


var can_play = true;
var words = new Array("SOURCECODESTER", "ARTICLE", "BLOG", "TUTORIALS", "PROGRAMMING", "CODES");
 
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;

var log = new Array();
var count= 0;
 
function selectLetter(l)
{
if (can_play == false)
{
return;
}
 
if (used_letters.indexOf(l) != -1)
{
return;
}
 
used_letters += l;
document.game.usedLetters.value = used_letters;
 
if (to_guess.indexOf(l) != -1)
{
 // correct letter guess
pos = 0;
temp_mask = display_word;
 
while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);         
end = pos + 1;
 
start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);
 
temp_mask = start_text + l + end_text;
pos = end;
}
 
display_word = temp_mask;
document.game.displayWord.value = display_word;
 
if (display_word.indexOf("#") == -1)
{
// won
count++;

// alert("Well done, you get "+count*10 - wrong_guesses +"points!");

$('#score').text(calcscore());
reset(1);

can_play = false;
}
}
else
{
	
// incortect letter guess
wrong_guesses += 1;

eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
 
if (wrong_guesses == 10)
{
// lost
alert("Sorry, you have lost!");
can_play = false;
}
}
}
 
function reset(i)
{

i = (i || 0);
$('#hang').attr('disabled','diasabled');
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
log.push(wrong_guesses);
if(i){
	// alert(wrong_guesses+"score has been deducted");
	$('.hangman #score').text(30*count);
	// alert(30);
}
else{
wrong_guesses = 0;
document.hm.src="hmstart.gif";
}
}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
//document.game.theWord.value = to_guess;
 
// display masked word
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}
 
function createMask(m)
{
mask = "";
word_lenght = m.length;
 
for (i = 0; i < word_lenght; i ++)
{
mask += "#";
}
return mask;
}


function calcscore(){
	return count?30:0;
}

//Quick fix!

var hangman = function(object){
	object.getscore = function(){
		return calcscore();
	}
}