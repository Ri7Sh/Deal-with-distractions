


var can_play = true;
var words = new Array("ARMAGEDDON","MALEFICENT","RATATOUILLE","HANNIBAL","STARDUST");
var hints = new Array("A 1998 science fiction disaster film starring Bruce Wills.","A 2014 dark fantasy film starring Angelina Jolie.","Rats can cook too, you know!","A sequel to the 1991 Academy Award winning film:'The silence of the lambs'","A 2007 romantic fantasy adventure film based on a novel by the same name.");
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;
var pop = 0;

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

$('.hangman .state').text("Well done, you get "+ 3 +" points! click on start to play again");

$('#score').text(calcscore());

can_play = false;
}
}
else
{
	
// incortect letter guess
wrong_guesses += 1;
console.log(wrong_guesses)

// eval("document.hm.src=\"hm" + wrong_guesses + ".gif\"");
 
if (wrong_guesses == 8)
{
// lost
$('.hangman .state').text("Sorry, you have lost, click on start again");
can_play = false;
}
}
}
 
function reset(i)
{
	pop++;
	if(pop==6){
		$('#hang').attr('disabled','diasabled');
	}
$('.hangman .state').text(" ");
i = (i || 0);
// $('#hang').attr('disabled','diasabled');
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
log.push(wrong_guesses);

	// alert(wrong_guesses+"score has been deducted");
	$('.hangman #score').text(3*count);
	// alert(30);

wrong_guesses = 0;
// document.hm.src="hmstart.gif";

}
 
function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
$('.hangman .hint').text(hints[random_number]);
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
	if(count<=7){
		return count*3;
	}
	return 0;
}

//Quick fix!

var hangman = function(object){
	object.getscore = function(){
		return calcscore();
	}
}