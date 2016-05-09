// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
// @include     https://scratch.mit.edu/discuss/*
// @version     0.1-dev
// ==/UserScript==

var tymojiSettings = document.createElement("div");
tymojiSettings.innerHTML = "<p>Tymoji Settings</p>";
document.body.appendChild(tymojiSettings);

var setTymojis = function() {
    localStorage.tymojiEmojisType = "tymoji";
    console.log("[TYMOJI] Set Emoji Type to Tymoji");
};

var tymojiButton = document.createElement("input");
tymojiButton.type="button";
tymojiButton.value="Use Tymojis";
tymojiButton.onclick = setTymojis;
document.body.appendChild(tymojiButton);

var setEmojiOne = function() {
    localStorage.tymojiEmojisType = "emojione";
    console.log("[TYMOJI] Set Emoji Type to EmojiOne");
};

var emojiOneButton = document.createElement("input");
emojiOneButton.type="button";
emojiOneButton.value="Use EmojiOne";
emojiOneButton.onclick = setEmojiOne;
document.body.appendChild(emojiOneButton);

var posts = document.getElementsByClassName('post_body_html');
var sigs = document.getElementsByClassName('postsignature');
/*
var code = document.getElementsByClassName('code'); // Code blocks
// Remove all the code blocks from the text to run through
  var text = text.filter( function( el ) {
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
 ["~slight_frown~", "http://emojione.com/wp-content/uploads/assets/emojis/1f641.svg", "~slight_frown~"],  
 ["~upside_down~", "http://emojione.com/wp-content/uploads/assets/emojis/1f643.svg", "~upside_down~"], 
 ["~no_mouth~", "http://emojione.com/wp-content/uploads/assets/emojis/1f636.svg", "~no_mouth~"],  
 ["~rage~", "http://emojione.com/wp-content/uploads/assets/emojis/1f621.svg", "~rage~"],  
 ["~open_mouth~", "http://emojione.com/wp-content/uploads/assets/emojis/1f62e.svg", "~open_mouth~"],  
 ["~stuck_out_tongue~", "http://emojione.com/wp-content/uploads/assets/emojis/1f61b.svg", "~stuck_out_tongue~"],
 ["~cry~", "http://emojione.com/wp-content/uploads/assets/emojis/1f622.svg", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "http://emojione.com/wp-content/uploads/assets/emojis/1f61c.svg", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "http://emojione.com/wp-content/uploads/assets/emojis/1f911.svg", "~money_mouth~"],
 ["~sleeping~", "http://emojione.com/wp-content/uploads/assets/emojis/1f634.svg", "~sleeping~"],
 ["~wink~", "http://emojione.com/wp-content/uploads/assets/emojis/1f609.svg", "~wink~"],
 ["~package~", "http://emojione.com/wp-content/uploads/assets/emojis/1f4e6.svg", "~package~"],
 ["~yum~", "http://emojione.com/wp-content/uploads/assets/emojis/1f60b.svg", "~yum~"],
];

var emojisData = tymojiData;
var emojiType = "tymoji";

if (!localStorage.tymojiEmojisType) {
  console.log("[TYMOJI] Setting localStorage emoji type to Tymoji for first-time setup");
  localStorage.tymojiEmojisType = "tymoji";
};

var addEmojis = function() {
  console.log("[TYMOJI] Adding emojis");
  emojiType = localStorage.tymojiEmojisType;
  if (emojiType === "emojione") {
    emojisData = emojioneData;
  } else {
    emojisData = tymojiData;
  };

  // Loop through every post
  for (var i = 0, l = posts.length; i < l; i++) {
    var el = posts[i];
    // Now loop through every emoji
    for (var j = 0, n = emojisData.length; j < n; j++) {
      var matching = new RegExp(emojisData[j][0], "g");
      var replaceString = '<img src="' + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
      // Replace ~emoji~ with an emoji image
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

addEmojis();
