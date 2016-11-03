# skitts.github.io-info2180-project2


# /*
CSE 190 M, Spring 2009, Marty Stepp
Homework 6 (Fifteen Puzzle) style sheet
*/

body {
	background-color: white;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size: 14px;
}

#controls,
#overall,
#puzzlearea {
	width: 400px;
}

#controls {
	padding-top: 10px;
	text-align: center;
}

h1 {
	margin: 10px 0px;
	text-align: center;
}

/* Used to center the puzzle. */
#overall {
	margin-left: auto;
	margin-right: auto;
}

/* The area that holds the 15 puzzle pieces. */
#puzzlearea {
	font-size: 32px;
	height: 400px;
	padding: 0px;
	position: relative;
}

/* This class should be applied to each of the 15 puzzle pieces. */
.puzzlepiece {
	background-image: url(background.jpg);
	border: 2px solid black;
	height: 96px;
	line-height: 96px;
	position: absolute;
	text-align: center;
	vertical-align: middle;
	width: 96px;
}

/* This class should be applied to a puzzle piece that can be moved. */
.movablepiece:hover {
	border-color: red;
	color: #006600;
	text-decoration: underline;
}

#w3c {
	text-align: right;
}

#w3c img {
	border: none;
}
