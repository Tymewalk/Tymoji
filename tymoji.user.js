// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
// @include     http://scratch.mit.edu/discuss/*
// @include     https://scratch.mit.edu/discuss/*
// @version     0.3-dev
// ==/UserScript==

var posts = document.getElementsByClassName('post_body_html');
var sigs = document.getElementsByClassName('postsignature');

/*var code = document.getElementsByClassName('code'); // Code blocks
// Disabled due to problems.
// Remove all the code blocks from the text to run through
var posts = posts.filter( function( el ) {
  return code.indexOf( el ) < 0;
} );
var sigs = sigs.filter( function( el ) {
  return code.indexOf( el ) < 0;
} );
*/
var tymojiURL = "https://cdn.rawgit.com/Tymewalk/Tymoji/master/img/tymoji/";
var tymojiData = [
 ["~slight_smile~", tymojiURL+"slight_smile.png", "~slight_smile~"], 
 ["~slight_frown~", tymojiURL+"slight_frown.png", "~slight_frown~"],  
 ["~upside_down~", tymojiURL+"upside_down.png", "~upside_down~"], 
 ["~no_mouth~", tymojiURL+"no_mouth.png", "~no_mouth~"],  
 ["~rage~", tymojiURL+"rage.png", "~rage~"],  
 ["~open_mouth~", tymojiURL+"open_mouth.png", "~open_mouth~"],  
 ["~stuck_out_tongue~", tymojiURL+"stuck_out_tongue.png", "~stuck_out_tongue~"],
 ["~cry~", tymojiURL+"cry.png", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", tymojiURL+"stuck_out_tongue_winking_eye.png", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", tymojiURL+"money_mouth.png", "~money_mouth~"],
 ["~sleeping~", tymojiURL+"sleeping.png", "~sleeping~"],
 ["~wink~", tymojiURL+"wink.png", "~wink~"],
 ["~package~", tymojiURL+"package.png", "~package~"],
 ["~yum~", tymojiURL+"yum.png", "~yum~"],
 ["~frowning2~", tymojiURL+"frowning2.png", "~yum~"],
 ["~grinning~", tymojiURL+"grinning.png", "~grinning~"],
 ["~frowning~", tymojiURL+"frowning.png", "~frowning~"],
 ["~angry~", tymojiURL+"angry.png", "~angry~"],
 ["~hushed~", tymojiURL+"hushed.png", "~hushed~"],
];

var emojioneData = [
 ["~slight_smile~", "http://emojione.com/wp-content/uploads/assets/emojis/1f642.svg", "~slight_smile~"],
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
 ["~frowning2~", "http://emojione.com/wp-content/uploads/assets/emojis/2639.svg", "~frowning2~"],
 ["~grinning~", "http://emojione.com/wp-content/uploads/assets/emojis/1f600.svg", "~grinning~"],
 ["~frowning~", "http://emojione.com/wp-content/uploads/assets/emojis/1f626.svg", "~frowning~"],
 ["~angry~", "http://emojione.com/wp-content/uploads/assets/emojis/1f620.svg", "~angry~"],
 ["~hushed~", "http://emojione.com/wp-content/uploads/assets/emojis/1f62f.svg", "~hushed~"],
];

var emojisData = tymojiData;
var emojiType = "tymoji";

if (!localStorage.tymojiEmojisType) {
  console.log("[TYMOJI] Setting localStorage emoji type to Tymoji for first-time setup");
  localStorage.tymojiEmojisType = "tymoji";
};

var addEmojis = function() {
  console.log("[TYMOJI] Adding emojis to page");
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

  // Do the same for signatures
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

// Create the settings
var tymojiSettings = document.createElement("div");
tymojiSettings.innerHTML = "<p>Tymoji Settings</p>";
document.body.appendChild(tymojiSettings);

var setTymojis = function() {
    localStorage.tymojiEmojisType = "tymoji";
    addEmojis();
    console.log("[TYMOJI] Set Emoji Type to Tymoji");
};

var tymojiButton = document.createElement("input");
tymojiButton.type="button";
tymojiButton.value="Use Tymojis";
tymojiButton.onclick = setTymojis;
document.body.appendChild(tymojiButton);

var setEmojiOne = function() {
    localStorage.tymojiEmojisType = "emojione";
    addEmojis();
    console.log("[TYMOJI] Set Emoji Type to EmojiOne");
};

var emojiOneButton = document.createElement("input");
emojiOneButton.type="button";
emojiOneButton.value="Use EmojiOne";
emojiOneButton.onclick = setEmojiOne;
document.body.appendChild(emojiOneButton);
