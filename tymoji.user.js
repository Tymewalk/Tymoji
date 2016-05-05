// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Emojis on the Scratch forums! By Tymewalk.
// @include     https://scratch.mit.edu/discuss/*
// @version     0.1
// @grant       none
// ==/UserScript==
var text = document.getElementsByClassName('post_body_html');
/*
var code = document.getElementsByClassName('code'); // Code blocks
// Remove all the code blocks from the text to run through
text = text.filter( function( el ) {
  return code.indexOf( el ) < 0;
} );
*/

var emojisData = [
 [":scratchsmile:", "https://cdn.scratch.mit.edu/scratchr2/static/__02ce1f3dc9988283d4bd0be0ce46fe4f__/djangobb_forum/img/smilies/smile.png", ":scratchsmile:"],
 [":smile:", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/smile.png", ":smile:"], 
 [":frown:", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/frown.png", "frown:"],  
 [":elims:", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/elims.png", ":elims:"], 
 [":nomouth:", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/nomouth.png", ":nomouth:"],  
];

var doEmojis = function() {
for (var i = 0, l = text.length; i < l; i++) {
  var el = text[i];
  for (var j = 0, n = emojisData.length; j < n; j++) {
    var matching = new RegExp(emojisData[j][0], "g");
    var replaceString = '<img src="' + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
    el.innerHTML = el.innerHTML.replace(matching, replaceString);
  };
  
};
};

doEmojis();
