// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
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
 ["~smile~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/smile.png", "~smile~"], 
 ["~frown~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/frown.png", "frown~"],  
 ["~elims~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/elims.png", "~elims~"], 
 ["~nomouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/nomouth.png", "~nomouth~"],  
 ["~frownangry~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/frownangry.png", "~frownangry~"],  
 ["~openmouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/openmouth.png", "~openmouth~"],  
 ["~smiletongue~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/smiletongue.png", "~smiletongue~"],
 ["~frowntear~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/frowntear.png", "~frowntear~"],
 ["~smilewinktongue~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/smilewinktongue.png", "~smilewinktongue~"],
 ["~moneymouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/moneymouth.png", "~moneymouth~"],
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
