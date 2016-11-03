//620058252
//info2180

"use strict";

var div;
var blink;
var spaceY = '300px';
var spaceX = '300px';


//the browser loading function
window.onload = function ()  
{
	var puzzlearea = document.getElementById('puzzlearea');
	
	div = puzzlearea.getElementsByTagName('div');

	for (var i=0; i<div.length; i++) 
	{
		div[i].style.backgroundImage="url('smiley_face.jpg')"; //adds image to the tiles
		div[i].className = 'puzzlepiece';
		div[i].style.left = (i%4*100)+'px'; // separates the tiles
		div[i].style.top = (parseInt(i/4)*100) + 'px';
		div[i].style.backgroundPosition= '-' + div[i].style.left + ' ' + '-' + div[i].style.top;
		
		div[i].onmouseover = function()
		{
			if (moveableTile(parseInt(this.innerHTML))) //a check to see which tile can be moved by calling the moveableTile func.
			{
				this.style.border = "2px solid red"; //color of tile border changes to red if can be swapped & the number change to pink
				this.style.color = "#FF18CB";
			}
		};


		div[i].onmouseout = function()    //once the tiles are moveable, the border & number colors change back to its original hue
		{
			this.style.border = "2px solid black";
			this.style.color = "#000000";
		};


		div[i].onclick = function() //when you click the tile, it swap position with the empty space nearby
		{
			if (moveableTile(parseInt(this.innerHTML)))
			{
				swap(this.innerHTML-1);
				if (checkFinish())
				{
					youWin(); //if all tiles are correctly swapped the function youWin is run
				}
				return;
			}
		};
	}



						function youWin() //create a funcion youWin which changes the background-color to yellow & blinks
					{
						var body = document.getElementsByTagName('body');
						body[0].style.backgroundColor = "#E8AE0C";
						blink = 10;
						timer = setTimeout(Blink, 100);
					}

					function checkFinish() //checks to see if the game completes
					{
						var flag = true;
						for (var i = 0; i < div.length; i++) {
							var y = parseInt(div[i].style.top);
							var x = parseInt(div[i].style.left);

							if (x != (i%4*100) || y != parseInt(i/4)*100)
							{
								flag = false;
								break;
							}
						}
						return flag;
					}


//checks to see if a space is available to be exchanged/swapped with a tile
function swap (pos) {
	var temp = div[pos].style.top;
	div[pos].style.top = spaceY;
	spaceY = temp;

	temp = div[pos].style.left;
	div[pos].style.left = spaceX;
	spaceX = temp;
}


	//the tiles are randomly swapped, occupying different positions
	var shufflebutton = document.getElementById('shufflebutton');
	shufflebutton.onclick = function()
	{

		for (var i=0; i<250; i++)
		{
			var rand = parseInt(Math.random()* 100) %4;
			if (rand == 0)
			{
				var tmp = calcUp(spaceX, spaceY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}
			if (rand == 1)
			{
				var tmp = calcDown(spaceX, spaceY);
				if ( tmp != -1) 
				{
					swap(tmp);
				}
			}

			if (rand == 2)
			{
				var tmp = calcLeft(spaceX, spaceY);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}

			if (rand == 3)
			{
				var tmp = calcRight(spaceX, spaceY);
				if (tmp != -1)
				{
					swap(tmp);
				}
			}
		}
	};
};




function moveableTile(pos) //checks to see if tiles can be moved
{
	if (calcLeft(spaceX, spaceY) == (pos-1))
	{
		return true;
	}

	if (calcDown(spaceX, spaceY) == (pos-1))
	{
		return true;
	}

	if (calcUp(spaceX, spaceY) == (pos-1))
	{
		return true;
	}

	if (calcRight(spaceX, spaceY) == (pos-1))
	{
		return true;
	}
}

var timer;


function Blink() //allows the background color to change according to the timer
{
	blink --;
	if (blink == 0)
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FFFFFF";
		alert('you win');
		return;
	}
	if (blink % 2)
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#00FF00";	
	}
	else
	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FF0000";
	}
	timer = setTimeout(Blink, 100);
}


			function calcLeft(x, y)
			{
				var xx = parseInt(x);
				var yy = parseInt(y);

				if (xx > 0)
				{
					for (var i = 0; i < div.length; i++) 
					{
						if (parseInt(div[i].style.left) + 100 == xx && parseInt(div[i].style.top) == yy)
						{
							return i;
						} 
					}
				}
				else 
				{
					return -1;
				}
			}

			function calcRight (x, y) {
				var xx = parseInt(x);
				var yy = parseInt(y);
				if (xx < 300)
				{
					for (var i =0; i<div.length; i++){
						if (parseInt(div[i].style.left) - 100 == xx && parseInt(div[i].style.top) == yy) 
						{
							return i;
						}
					}
				}
				else
				{
					return -1;
				} 
			}

			function calcUp (x, y) {
				var xx = parseInt(x);
				var yy = parseInt(y);
				if (yy > 0)
				{
					for (var i=0; i<div.length; i++)
					{
						if (parseInt(div[i].style.top) + 100 == yy && parseInt(div[i].style.left) == xx) 
						{
							return i;
						}
					} 
				}
				else 
				{
					return -1;
				}
			}

			function calcDown (x, y)
			{
				var xx = parseInt(x);
				var yy = parseInt(y);
				if (yy < 300)
				{
					for (var i=0; i<div.length; i++)
					{
						if (parseInt(div[i].style.top) - 100 == yy && parseInt(div[i].style.left) == xx) 
						{
							return i;
						}
					}
				}
				else
				{
					return -1;
				} 
			}


	
