// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
// @include     http://scratch.mit.edu/discuss/*
// @include     https://scratch.mit.edu/discuss/*
// @include     https://scratch.mit.edu/accounts/settings/*
 // @include  http://scratch.mit.edu/accounts/settings/*
// @include  https://scratch.mit.edu/accounts/settings/?tymoji=1
// @version     0.1
// @grant       metadata
// ==/UserScript==
function GetUrlValue(VarSearch){
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for(var i = 0; i < VariableArray.length; i++){
        var KeyValuePair = VariableArray[i].split('=');
        if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
        }
    }
}
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
 ["~slight_smile~", "slight_smile.png", "~slight_smile~"], 
 ["~slight_frown~", "slight_frown.png", "~slight_frown~"],  
 ["~upside_down~", "upside_down.png", "~upside_down~"], 
 ["~no_mouth~", "no_mouth.png", "~no_mouth~"],  
 ["~rage~", "rage.png", "~rage~"],  
 ["~open_mouth~", "open_mouth.png", "~open_mouth~"],  
 ["~stuck_out_tongue~", "stuck_out_tongue.png", "~stuck_out_tongue~"],
 ["~cry~", "cry.png", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "stuck_out_tongue_winking_eye.png", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "money_mouth.png", "~money_mouth~"],
 ["~sleeping~", "sleeping.png", "~sleeping~"],
 ["~wink~", "wink.png", "~wink~"],
 ["~package~", "package.png", "~package~"],
 ["~yum~", "yum.png", "~yum~"],
 ["~frowning2~", "frowning2.png", "~frowning2~"],
 ["~grinning~", "grinning.png", "~grinning~"],
 ["~frowning~", "frowning.png", "~frowning~"],
 ["~angry~", "angry.png", "~angry~"],
 ["~hushed~", "hushed.png", "~hushed~"],
 ["~smile~", "smile.png", "~smile~"],
 ["~joy~", "joy.png", "~joy~"],
 ["~innocent~", "innocent.png", "~innocent~"],
];

var emojioneURL = "http://emojione.com/wp-content/uploads/assets/emojis/";
var emojioneData = [
 ["~slight_smile~", "1f642.svg", "~slight_smile~"],
 ["~slight_frown~", "1f641.svg", "~slight_frown~"],  
 ["~upside_down~", "1f643.svg", "~upside_down~"], 
 ["~no_mouth~", "1f636.svg", "~no_mouth~"],  
 ["~rage~", "1f621.svg", "~rage~"],  
 ["~open_mouth~", "1f62e.svg", "~open_mouth~"],  
 ["~stuck_out_tongue~", "1f61b.svg", "~stuck_out_tongue~"],
 ["~cry~", "1f622.svg", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "1f61c.svg", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "1f911.svg", "~money_mouth~"],
 ["~sleeping~", "1f634.svg", "~sleeping~"],
 ["~wink~", "1f609.svg", "~wink~"],
 ["~package~", "1f4e6.svg", "~package~"],
 ["~yum~", "1f60b.svg", "~yum~"],
 ["~frowning2~", "2639.svg", "~frowning2~"],
 ["~grinning~", "1f600.svg", "~grinning~"],
 ["~frowning~", "1f626.svg", "~frowning~"],
 ["~angry~", "1f620.svg", "~angry~"],
 ["~hushed~", "1f62f.svg", "~hushed~"],
 ["~smile~", "1f604.svg", "~smile~"],
 ["~joy~", "1f602.svg", "~joy~"],
 ["~innocent~", "1f607.svg", "~innocent~"],
];

var githubURL = "http://u.cubeupload.com/git/";
var githubData = [
 ["~slight_smile~", "grinning.png", "~slight_smile~"], 
 ["~slight_frown~", "frowning.png", "~slight_frown~"],  
 ["~no_mouth~", "nomouth.png", "~no_mouth~"],  
 ["~rage~", "rage.png", "~rage~"],  
 ["~open_mouth~", "openmouth.png", "~open_mouth~"],  
 ["~stuck_out_tongue~", "stuckouttongue.png", "~stuck_out_tongue~"],
 ["~cry~", "cry.png", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "stuckouttonguewinkin.png", "~stuck_out_tongue_winking_eye~"],
 ["~sleeping~", "sleeping.png", "~sleeping~"],
 ["~wink~", "wink.png", "~wink~"],
 ["~package~", "package.png", "~package~"],
 ["~yum~", "yum.png", "~yum~"],
 ["~frowning2~", "frowning.png", "~frowning2~"],
 ["~grinning~", "grinning.png", "~grinning~"],
 ["~frowning~", "frowning.png", "~frowning~"],
 ["~angry~", "angry.png", "~angry~"],
 ["~hushed~", "hushed.png", "~hushed~"],
 ["~smile~", "smile.png", "~smile~"],
 ["~joy~", "joy.png", "~joy~"],
 ["~innocent~", "innocent.png", "~innocent~"],
];

var emojisData = tymojiData;
var emojiType = "tymoji";
var emojiURL = tymojiURL;

if (!localStorage.tymojiEmojisType) {
  console.log("[TYMOJI] Setting localStorage emoji type to Tymoji for first-time setup");
  localStorage.tymojiEmojisType = "tymoji";
};

var addEmojis = function() {
  console.log("[TYMOJI] Adding emojis to page");
  emojiType = localStorage.tymojiEmojisType;
  if (emojiType === "emojione") {
    emojisData = emojioneData;
    emojiURL = emojioneURL;
  } else if (emojiType === "github") {
    emojisData = githubData;
    emojiURL = githubURL;
  } else { // Tymoji should be the default
    emojisData = tymojiData;
    emojiURL = tymojiURL;
  };
  // Loop through every post
  for (var i = 0, l = posts.length; i < l; i++) {
    var el = posts[i];
    // Now loop through every emoji
    for (var j = 0, n = emojisData.length; j < n; j++) {
      var matching = new RegExp(emojisData[j][0], "g");
      var replaceString = '<img src="' + emojiURL + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
      // Replace ~emoji~ with an emoji image
      el.innerHTML = el.innerHTML.replace(matching, replaceString);
    };  
  };

  // Loop through every sig, too
  for (var i = 0, l = sigs.length; i < l; i++) {
    var el = sigs[i];
    // Now loop through every emoji
    for (var j = 0, n = emojisData.length; j < n; j++) {
      var matching = new RegExp(emojisData[j][0], "g");
      var replaceString = '<img src="' + emojiURL + emojisData[j][1] + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
      // Replace ~emoji~ with an emoji image
      el.innerHTML = el.innerHTML.replace(matching, replaceString);
    };  
  };

};

addEmojis();


console.log(GetUrlValue("tymoji"));
if (GetUrlValue("tymoji")=="1") {
  // Create the settings
var tymojiSettings = document.createElement("div");
tymojiSettings.innerHTML = "<p>Tymoji Settings</p>";
$("#main-content").append(tymojiSettings);


var setTymojis = function() {
    localStorage.tymojiEmojisType = "tymoji";
    //addEmojis();
    console.log("[TYMOJI] Set Emoji Type to Tymoji");
};

var tymojiButton = document.createElement("input");
tymojiButton.type="button";
tymojiButton.value="Use Tymojis";
tymojiButton.onclick = setTymojis;
$("#main-content").append(tymojiButton);

var setEmojiOne = function() {
    localStorage.tymojiEmojisType = "emojione";
    //addEmojis();
    console.log("[TYMOJI] Set Emoji Type to EmojiOne");
};

var emojiOneButton = document.createElement("input");
emojiOneButton.type="button";
emojiOneButton.value="Use EmojiOne";
emojiOneButton.onclick = setEmojiOne;
$("#main-content").append(emojiOneButton);


var setGithub = function() {
    localStorage.tymojiEmojisType = "github";
    //addEmojis();
    console.log("[TYMOJI] Set Emoji Type to GitHub");
};

var githubButton = document.createElement("input");
githubButton.type="button";
githubButton.value="Use GitHub Emojis";
githubButton.onclick = setGithub;
$("#main-content").append(githubButton);

  
}
