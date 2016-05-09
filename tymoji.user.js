// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
// @include     https://scratch.mit.edu/discuss/*
// @version     0.1-dev
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
var posts = document.getElementsByClassName( 'post_body_html') ;
var sigs = document.getElementsByClassName( 'postsignature' );
/*
var code = document.getElementsByClassName('code'); // Code blocks
// Remove all the code blocks from the text to run through
text = text.filter( function( el ) {
  return code.indexOf( el ) < 0;
} );
*/

var tymojiData = [
 ["~slight_smile~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/slight_smile.png", "~slight_smile~"], 
 ["~slight_frown~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/slight_frown.png", "~slight_frown~"],  
 ["~upside_down~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/upside_down.png", "~upside_down~"], 
 ["~no_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/no_mouth.png", "~no_mouth~"],  
 ["~rage~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/rage.png", "~rage~"],  
 ["~open_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/open_mouth.png", "~open_mouth~"],  
 ["~stuck_out_tongue~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/stuck_out_tongue.png", "~stuck_out_tongue~"],
 ["~cry~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/cry.png", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/stuck_out_tongue_winking_eye.png", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/money_mouth.png", "~money_mouth~"],
 ["~sleeping~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/sleeping.png", "~sleeping~"],
 ["~wink~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/wink.png", "~wink~"],
 ["~package~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/package.png", "~package~"],
 ["~yum~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/yum.png", "~yum~"],
];

var emojioneData = [
 ["~slight_smile~", "http://emojione.com/wp-content/uploads/assets/emojis/1f642.svg", "~slight_smile~"], // For testing
 ["~slight_frown~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/slight_frown.png", "~slight_frown~"],  
 ["~upside_down~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/upside_down.png", "~upside_down~"], 
 ["~no_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/no_mouth.png", "~no_mouth~"],  
 ["~rage~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/rage.png", "~rage~"],  
 ["~open_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/open_mouth.png", "~open_mouth~"],  
 ["~stuck_out_tongue~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/stuck_out_tongue.png", "~stuck_out_tongue~"],
 ["~cry~", "http://emojione.com/wp-content/uploads/assets/emojis/1f622.svg", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/stuck_out_tongue_winking_eye.png", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/money_mouth.png", "~money_mouth~"],
 ["~sleeping~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/sleeping.png", "~sleeping~"],
 ["~wink~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/wink.png", "~wink~"],
 ["~package~", "http://emojione.com/wp-content/uploads/assets/emojis/1f4e6.svg", "~package~"],
 ["~yum~", "https://raw.githubusercontent.com/Tymewalk/Tymoji/master/img/yum.png", "~yum~"],
];

var emojisData = tymojiData;
var emojiType = "tymoji";

var checkerVal = GM_getValue("emojisType", false);
if (!checkerVal) {
 GM_setValue("emojisType", "tymoji");
}
var doEmojis = function() {
  emojiType = GM_getValue("emojisType", "tymoji");
  if (emojiType === "emojione") {
    emojisData = emojioneData;
  } else {
    emojisData = tymojiData;
  };

  for (var i = 0, l = posts.length; i < l; i++) {
    var el = posts[i];
    for (var j = 0, n = emojisData.length; j < n; j++) {
      var matching = new RegExp(emojisData[j][0], "g");
      var replaceString = '<img src="' + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
      el.innerHTML = el.innerHTML.replace(matching, replaceString);
    };  
  };

  for (var i = 0, l = sigs.length; i < l; i++) {
    var el = sigs[i];
    for (var j = 0, n = emojisData.length; j < n; j++) {
      var matching = new RegExp(emojisData[j][0], "g");
      var replaceString = '<img src="' + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
      el.innerHTML = el.innerHTML.replace(matching, replaceString);
    };
  };
};

doEmojis();

var settingsPopup = $('<div><p>What kind of emojis would you like?</p><button id="tymojiSetter">Tymoji</button><br /><button id="emojioneSetter">EmojiOne</button></div>');

var newHTML         = document.createElement('div');
newHTML.innerHTML   = '<div id="settingsPage">             \
        <p>Tymoji Settings</p>       \
        <button id="tymojiSetter">Use Tymojis</button><button id="emojioneSetter">Use EmojiOne</button> \
    </div>                          \
';
document.body.appendChild(newHTML);

/*$('#showPopUp').click(function () {
    settingsPopup.dialog();
});
*/
$('#tymojiSetter').click(function () {
    GM_setValue("emojisType", "tymoji");
    
});

$('#emojioneSetter').click(function () {
    GM_setValue("emojisType", "emojione");
});
