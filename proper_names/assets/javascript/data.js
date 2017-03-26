var gamedata = [{
	description:"Yaaay ! Tetris !!!<br>Can you earn 21 points in this game? Oh! remember each line has 3 points.",
	information:"Use left , right , down arrow keys to navigate . Use UP arrow key to rotate",

},
{
	description:"Hola!!! Snake Game !!!<br>Oh! Remember this from your old phone. Feed your snake to make it grow. Earn 1 point for each swallow.",
	information:"To move the snake left, right, up & down, use the arrow keys.",

},
{
	description:"Woohoo! Tic Tac Toe !!! You can try 20 times.<br>Oh! You get 2 points if you win and 1 if it's a draw for each game.",
	information:"Click on the cell you want to fill. Complete a row, column or diagonal with your sign before me!!!",

},
{
	description:" Find My Twin !!! <br>Find the lucky ones who have twins.",
	information:"Click one letter and then on its twin.<br>Happy gaming!",
},
{
	description:"Hey, I am back with JIG SAW PUZZLE!<br>Win this game to earn 20 points.",
	information:"Use your eyes and mouse to move the block in empty space.",

},
{
	description:"Here It Comes! Memory Game !!!<br>Do you have a incredible memory? Match the pairs",
	information:"Use your memory and mouse to find them all.<br>Win 1 point for each matching pair",

},
{
	description:"Nemo is Here!!! It's Finding Nemo.<br>Catch Nemo if you can.",
	information:"Try to earn 21 points from this game.<br>Click on the Nemo to catch him but he is too fast....",

},
{
	description:"Hey! I am back again with Hangman.<br>Find the movie before you are hanged",
	information:"Click on start button .Guess the word to win 3 points. 8 wrong guesses and you are hanged. ",

},
{
	description:"Remember you played this game on your phone. IT'S BOUNCE!!",
	information:"Win 5 points for each complete journey.Dont fall into the red lake. Use arrow keys to move.",

},{
	description:"Now It’s Time for SHADOW GAME !!!<br>Remember these cartoon characters. Can you identify them from their shadows now...",
	information:"Try and submit to earn 2 point for each correct name. You can submit only once",

},
{
	description:"Let's check your knowledge about brands!! It's LOGO GAME !!!",
	information:"Identify as many brands you can ..<br>Earn 2 point for each correct brand name.You can submit only once",

},
]


var questionData = [
	{
		meta:"<h1>Quidditch Gambling</h1>",
		data:'	<p>The Quidditch League is here! The Weasley twins are up with their mischief and this time they are offering a deal - <br>&quot;If we offer an odd of 10/1 on a particular team, it means that for every one Galleon that the gambler puts at stake, he/she will earn ten Galleons in addition to the original stake. If your team does not win then of course you will lose your stake and take home nothing!&quot; <br>So Lee Jordan, the quidditch commentator, has announced that the odds of a team which is expected to win is worse off. He calls it an &#39;upset&#39; when a team beats an opposing team which has better chances of winning.<br><br> Jordan said, &quot;Match 1 is between Chudley Cannons and Appleby Arrows. Cannons, a team with still a few faithful supporters is looking at the odds of 10/1 whereas Arrows seem to be in the race for the top with their odds as 1/4.&quot;<br><br>&quot;Match 2 is between Tutshill Tornadoes and Puddlemere United. Both have been good teams, with Tornadoes winning five consecutive tournaments while United is ahead with 22 wins. But this time, Tornadoes is running on a low with odds of 7/2 while Puddlemere with their all time favourite keeper Oliver Wood, who played alongside famous Harry Potter is seeing the odds of 2/5.&quot;<br><br>&quot;Match 3 is between Holyhead Harpies, the one and only all-girls team and Falmouth Falcons, known for its aggressive and often devious approach. This time, the Harpies led by Gwenog Jones has addition of Ginny Weasley, who is debuting as a Chaser. Don&#39;t get swayed by&#39;&#39;All-Girls Team&#39;&#39;- they are one of the most ferocious teams on field with an odd of 1/5. The Falcons with the odds of 20/1 should either pick up drastically on their technique or hope for a miracle to fight the girl power.&quot;</p>',
		mcq:'01.  James put 100 galleons at stake in each of the three matches(one team per match). What is the maximum possible amount that he can receive, if there is only one match that results in an upset?		<label><input type="radio" name="q1" value="a" />2365</label><label><input type="radio" name="q1" value="b" />2745</label><label><input type="radio" name="q1" value="c" />2435</label><label><input type="radio" name="q1" value="d" />2565</label><br>02.  If John was no upset in any of the three matches and Neville bet 20 galleons, 40 galleons and 60 galleons in each match (in any order) and he ended up earning the maximum possible amount, then what are his total earnings?<label><input type="radio" name="q2" value="a" />158</label><label><input type="radio" name="q2" value="b" />162</label><label><input type="radio" name="q2" value="c" />170</label><label><input type="radio" name="q2" value="d" />188</label><br>03. If Alice bets equal amounts on all the six teams, which results are more favourable to him if there are 2 upsets? (Pick the options with the winning teams.)		<label><input type="radio" name="q3" value="a" />Chudley Cannons,Puddlemere United,Falmouth Falcons</label><label><input type="radio" name="q3" value="b" />Appleby Arrows,Tutshill Tornadoes,Falmouth Falcons</label><label><input type="radio" name="q3" value="c" />Chudley Cannons,Tutshill Tornadoes,Falmouth Falcons</label><label><input type="radio" name="q3" value="d" />Chudley Cannons,Puddlemere United,Holyhead Harpies</label><br>04.  Edward has a strong feeling that team Holyhead Harpies will win and he bought stake worth 50 galleons for it. He bought a stake of 50 galleons in one of the teams playing match II. What is the difference between the maximum and minimum earnings? ?<label><input type="radio" name="q4" value="a" />285</label><label><input type="radio" name="q4" value="b" />250</label><label><input type="radio" name="q4" value="c" />265</label><label><input type="radio" name="q4" value="d" />295 </label>'
	},
	{
		meta:"<h1>The SIG's of ACM</h1>",
		data:"<p>ACM's 37 Special Interest Groups (SIGs) represent virtually every major area of computing. SIGs offer a wealth of resources including conferences, proceedings and newsletters covering a broad spectrum of technical expertise and providing firsthand knowledge of the latest development trends. <br>Let’s talk about the special interests of Meera Bhawan, BITS Pilani girls, What say?!! Narrowing down to Tech Ladies, each of them like at-least one among the four Special Interest Groups known as SIG's of ACM-SIGMM-Multimedia, SIGMOD-Management Of Data, SIGDA-Design Automation, and SIGCHI-Computer Human Interaction. <br><br>Number of girls who like only SIGMOD & SIGMM is 6; those who like only SIGMM & SIGDA is 20; those who like SIGDA & SIGMOD is 40; while those who like only SIGMOD & SIGCHI is 14 and those who like only SIGMM and SIGCHI is 20. 65 girls like SIGMM but not SIGMOD while 4 like only SIGMOD. 19 girls like SIGMOD and SIGCHI but not SIGMM while 35 of them like SIGCHI and SIGMM but not SIGMOD.15 girls like SIGMOD ,SIGMM and SIGDA but not SIGCHI which is same as  the sum of girls who like only SIGDA and only SIGCHI. Finally 8 girls like all 4 of them.</p>",
		mcq:'01. How many of the girls like both SIGCHI and SIGDA but not all the four?<label><input type="radio" name="q1" value="a" />60</label><label><input type="radio" name="q1" value="b" />37</label><label><input type="radio" name="q1" value="c" />30</label><label><input type="radio" name="q1" value="d" />44</label><br>02.What is the total number of Tech Ladies?<label><input type="radio" name="q2" value="a" />146</label><label><input type="radio" name="q2" value="b" />150</label><label><input type="radio" name="q2" value="c" />160</label><label><input type="radio" name="q2" value="d" />156</label><br>03. How many girls like only SIGMM and SIGDA?<label><input type="radio" name="q3" value="a" />5</label><label><input type="radio" name="q3" value="b" />6</label><label><input type="radio" name="q3" value="c" />10</label><label><input type="radio" name="q3" value="d" />7</label><br>04.If 25 girls like only SIGMOD or only SIGCHI, then how many like SIGMM or SIGDA?		<label><input type="radio" name="q4" value="a" />122</label><label><input type="radio" name="q4" value="b" />135</label><label><input type="radio" name="q4" value="c" />142</label><label><input type="radio" name="q4" value="d" />131</label>',
	},
	{
		meta:"<h1>Women in Space</h1>",
		data:"<p>Not only our world…..The outer space has also been outlived by <b>THE GREAT WOMEN ASTRONOMERS.</b><br>Peggy Whitson right now on her third space mission woman in space and also had spent an incredible number of 377 days in space earlier. She is intended to be the commander of Expedition 51. With the launch of Expedition 50/51 with her on it, Whitson, at age 56, became the oldest woman to fly into space. By the end of the scheduled mission she would have spent more time in space than any other US Astronaut, surpassing the previous record of 534 days set by Jeff Williams.<br>The count of the days is increasing by ‘1’ as each day is passing by until MAY,2017 when the current space mission comes to an end.<br>A team of 10 female astronomers who belong to the Astro Centre have successfully made to space. As an attempt to improvise the the mode of communication by breaking the ice, the 10 astronauts,<br>Tippy, Tappy, Tangy, Timmy, Tango, Tony, Tommy, Tweety, Toby and Tenny<br>wish to use the new wireless communication device.<br>There are three kinds of message transfer modes between them, namely<ol><li>Only sending messages.</li><li>Only receiving messages and</li><li>Both sending and receiving messages.</li></ol>The only messages sending modes (and the message receiving modes) are as follows:<br>Tweety to Timmy, Toby to Tangy, Tappy to Tony, Tangy to Tippy and Tony, Tony to Tenny, Tango to Toby, Tommy to Tony, Tony to Tango.<br>The message sending and receiving modes are as given below:<br>Tangy and Timmy, Toby and Tappy, Tango and Tommy, Tippy and Tweety, Tenny and Tommy.</p>",
		mcq:'01. If Tenny wants to send a message to Tippy, then through how many least number of other astronauts must the message pass?		<label><input type="radio" name="q1" value="a" />6</label><label><input type="radio" name="q1" value="b" />5</label><label><input type="radio" name="q1" value="c" />4</label><label><input type="radio" name="q1" value="d" />3</label><br>02. In which of the following choices can all the ten astronauts be included, (without repeating any astronaut) while sending the message?<label><input type="radio" name="q2" value="a" />Tenny to Toby</label><label><input type="radio" name="q2" value="b" />Tony to Tweety</label><label><input type="radio" name="q2" value="c" />Tangy to Timmy</label><label><input type="radio" name="q2" value="d" />Timmy to Tappy</label><br>03. If Tony works on the other aspects of their space mission at one point of time, then in which of the following choices is it not possible for a message to be send from the first astronaut to the second given that the message can be passed through a astronaut only once?<label><input type="radio" name="q3" value="a" />Tommy to Timmy</label><label><input type="radio" name="q3" value="b" />Tango to Tweety</label><label><input type="radio" name="q3" value="c" />Tangy to Toby</label><label><input type="radio" name="q3" value="d" />Tenny to Tappy</label><br>  04. If all the one-way message –sending routes reverse (eg. Tweety to Timmy now becomes ‘Timmy to Tweety’, and so on) then which of the following message sending sequences will include all the ten astronauts?		<label><input type="radio" name="q4" value="a" />Tenny to Timmy</label><label><input type="radio" name="q4" value="b" />Toby to Tweety</label><label><input type="radio" name="q4" value="c" />Tappy to Tippy</label><label><input type="radio" name="q4" value="d" />Tony to Tommy</label>',
	},
	{
		meta:"<h1>Women Mathematicians</h1>",
		data:"<p><p>Okay! So let us know more about women in tech…Let’s date back to the day of invention of the first computer.<br>Do you know who was the first to write the computer programme such as the one’s running behind the ongoing Deal With Distractions challenge… it’s again a woman.<br>A woman called ADA LOVELACE is the first computer programmer who collaborated with CHARLES BABBAGE, the father of computers. <br>It is EMMY NOETHER yet another woman who laid many mathematical foundations for the profound Einestein’s theory of relativity.<br>One such mathematical genius is here with her observations on expenses of six friends who have recently gone on a trip to Goa . Each of them spent a different amount. All this compilation of her’s is tampered with only bits of it being legible. The left over bits read the following information. Complete it with reference to the questions asked. <ol><li>Piyush spent  &#8377 3783.</li><li>Saketh spent &#8377 4640 which &#8377 600 more than how much Uday spent.</li><li>The difference between the expenses of Uday and Tomar is &#8377 535.</li><li>The maximum difference between the expenses of any two of the six is &#8377 1135, whereas the minimum difference between the expenses of any two persons is &#8377 167.</li><li>The difference between the expenses of Qureishi and Raina is &#8377 246.</li><li>Raina spent &#8377 4227.</li></p></p>",
		mcq:'01.  How much did Qureishi spent?<label><input type="radio" name="q1" value="a" />&#8377 4473</label><label><input type="radio" name="q1" value="b" />&#8377 4493</label><label><input type="radio" name="q1" value="c" />&#8377 3981</label><label><input type="radio" name="q1" value="d" />&#8377 4040</label><br>02.  Whose expense was the highest?		<label><input type="radio" name="q2" value="a" />Qureishi</label><label><input type="radio" name="q2" value="b" />Saket</label><label><input type="radio" name="q2" value="c" />Raina</label><label><input type="radio" name="q2" value="d" />Tomar</label><br>03. What is the difference between the expenses of raina and uday?		<label><input type="radio" name="q3" value="a" />&#8377 167</label><label><input type="radio" name="q3" value="b" />&#8377 246</label><label><input type="radio" name="q3" value="c" />&#8377 187</label><label><input type="radio" name="q3" value="d" />&#8377 257</label><br>04.  Which of them spend the third least amount ?<label><input type="radio" name="q4" value="a" />Tomar</label><label><input type="radio" name="q4" value="b" />Uday</label><label><input type="radio" name="q4" value="c" />Raina</label><label><input type="radio" name="q4" value="d" />Qureishi </label>',
	},
]