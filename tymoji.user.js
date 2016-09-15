// ==UserScript==
// @name        Tymojis
// @namespace   https://scratch.mit.edu/users/Tymewalk
// @description Tymewalk's Emojis for use on the Scratch forums. All in one handy userscript.
// @include     http://scratch.mit.edu/discuss/*
// @include     https://scratch.mit.edu/discuss/*
// @include     https://scratch.mit.edu/accounts/settings/*
// @include     http://scratch.mit.edu/accounts/settings/*
// @include     https://scratch.mit.edu/accounts/password_change/*
// @include     http://scratch.mit.edu/accounts/password_change/*
// @include     https://scratch.mit.edu/accounts/email_change/*
// @include     http://scratch.mit.edu/accounts/email_change/*
// @version     0.2-dev013
// @updateURL   https://www.github.com/Tymewalk/Tymoji/raw/master/tymoji.user.js
// @grant       metadata
// ==/UserScript==

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

var tymojiURL = "https://cdn.rawgit.com/Tymewalk/Tymoji/master/img/tymoji/png/";
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
 ["~fireworks~", "fireworks.png", "~fireworks~"],
 ["~grimacing~", "grimacing.png", "~grimacing~"],
 ["~astonished~", "astonished.png", "~astonished~"],
 ["~cowboy~", "cowboy.png", "~cowboy~"],
 ["~neutral_face~", "neutral_face.png", "~neutral_face~"],
 ["~sweat~", "sweat.png", "~sweat~ (face with cold sweat)"],
];

// Note that EmojiOne uses codepoints rather than shortname filenames
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
 ["~fireworks~", "1f386.svg", "~fireworks~"],
 ["~grimacing~", "1f62c.svg", "~grimacing~"],
 ["~astonished~", "1f632.svg", "~astonished~"],
 ["~cowboy~", "1f920.svg", "~cowboy~"],
 ["~neutral_face~", "1f610.svg", "~neutral_face~"],
 ["~sweat~", "1f613.svg", "~sweat~ (face with cold sweat)"],
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
 // GitHub does not have the money_mouth emoji (but Apple does)
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
 ["~fireworks~", "fireworks.png", "~fireworks~"],
 ["~grimacing~", "grimacing.png", "~grimacing~"],
 ["~astonished~", "astonished.png", "~astonished~"],
 // GitHub (or rather, Apple) does not have a cowboy emoji
 ["~neutral_face~", "neutralface.png", "~neutral_face~"],
 ["~sweat~", "sweat.png", "~sweat~ (face with cold sweat)"],
];

// Twitter also uses codepoints instead of shortnames, but does so with .png rather than .svg
var twitterURL = "https://raw.githubusercontent.com/twitter/twemoji/gh-pages/2/72x72/"
var twitterData = [
 ["~slight_smile~", "1f642.png", "~slight_smile~"],
 ["~slight_frown~", "1f641.png", "~slight_frown~"],
 ["~upside_down~", "1f643.png", "~upside_down~"],
 ["~no_mouth~", "1f636.png", "~no_mouth~"],
 ["~rage~", "1f621.png", "~rage~"],
 ["~open_mouth~", "1f62e.png", "~open_mouth~"],
 ["~stuck_out_tongue~", "1f61b.png", "~stuck_out_tongue~"],
 ["~cry~", "1f622.png", "~cry~"],
 ["~stuck_out_tongue_winking_eye~", "1f61c.png", "~stuck_out_tongue_winking_eye~"],
 ["~money_mouth~", "1f911.png", "~money_mouth~"],
 ["~sleeping~", "1f634.png", "~sleeping~"],
 ["~wink~", "1f609.png", "~wink~"],
 ["~package~", "1f4e6.png", "~package~"],
 ["~yum~", "1f60b.png", "~yum~"],
 ["~frowning2~", "2639.png", "~frowning2~"],
 ["~grinning~", "1f600.png", "~grinning~"],
 ["~frowning~", "1f626.png", "~frowning~"],
 ["~angry~", "1f620.png", "~angry~"],
 ["~hushed~", "1f62f.png", "~hushed~"],
 ["~smile~", "1f604.png", "~smile~"],
 ["~joy~", "1f602.png", "~joy~"],
 ["~innocent~", "1f607.png", "~innocent~"],
 ["~fireworks~", "1f386.png", "~fireworks~"],
 ["~grimacing~", "1f62c.png", "~grimacing~"],
 ["~astonished~", "1f632.png", "~astonished~"],
 ["~cowboy~", "1f920.png", "~cowboy~"],
 ["~neutral_face~", "1f610.png", "~neutral_face~"],
 ["~sweat~", "1f613.png", "~sweat~ (face with cold sweat)"],
];


var emojisData = tymojiData;
var emojiType = "tymoji";
var emojiURL = tymojiURL;
var emojiSources = {"emojione": [emojioneData, emojioneURL, "EmojiOne"], "tymoji": [tymojiData, tymojiURL, "Tymoji"], "github": [githubData, githubURL, "GitHub"], "twitter": [twitterData, twitterURL, "Twitter"]};

if (!localStorage.tymojiEmojisType) {
	localStorage.tymojiEmojisType = "tymoji";
}
if (!localStorage.tymojiEnabled) {
	localStorage.tymojiEnabled = "true";
}

addEmojis = function(additional) {
	emojisData = emojiSources[localStorage.tymojiEmojisType][0] || emojiSources.tymoji[0];
	emojiURL = emojiSources[localStorage.tymojiEmojisType][1] || emojiSources.tymoji[1];

    var addToElems = function(elems) {
        for (var i = 0, l = elems.length; i < l; i++) {
            var el = elems[i];
            // Now loop through every emoji
            for (var j = 0, n = emojisData.length; j < n; j++) {
                var matching = new RegExp(emojisData[j][0], "g");
                var replaceString = '<img src="' + emojiURL + emojisData[j][1] + '" class="tymoji-image" data-emojiname="' + emojisData[j][2].replace(/~/g, "") + '" title="' + emojisData[j][2] + '" width="16" height="16"></img>';
                // Replace ~emoji~ with an emoji image
                el.innerHTML = el.innerHTML.replace(matching, replaceString);
            }
        }
    };

    addToElems(document.getElementsByClassName('post_body_html'));
    addToElems(document.getElementsByClassName('postsignature'));
    addToElems(additional || []);
    for (var errorImage = document.querySelector("pre > img:not([ismap])"); errorImage != null; errorImage = document.querySelector("pre > img:not([ismap])")) {
        errorImage.width = 0;
        errorImage.height = 0;
        errorImage.isMap = "false";
        errorImage.parentElement.insertBefore(document.createTextNode(errorImage.title), errorImage);
    }
};

removeEmojis = function() {
    var els = document.getElementsByClassName("tymoji-image");
    for (var x = 0, l = els.length; x < l; x++) {
        els = document.getElementsByClassName("tymoji-image");
        els[0].outerHTML = '~' + els[0].dataset.emojiname + '~';
    }
};

if (localStorage.tymojiEnabled !== "false") {
    console.log("[TYMOJI] Tymoji is enabled, adding emojis to page");
    addEmojis();
}
else {
    console.log("[TYMOJI] Tymoji is disabled, emojis will not be added");
}

if ((window.location.pathname == "/accounts/password_change/") || (window.location.pathname == "/accounts/email_change/") || (window.location.pathname == "/accounts/settings/")) {
    var setTab = function(tab_id) {
		var tabs = document.querySelector(".tabs-index").children[0].children;
		for (var x = 0; x < tabs.length; x++) {
			tabs[x].classList.remove("active");
		}
		tabs[tab_id].classList.add("active");
	};
    var loadSampleEmoji = function() {
        removeEmojis();
        addEmojis(document.getElementsByClassName("tymoji-sample-space"));
    };
	var setEmojiType = function(type) {
		localStorage.tymojiEmojisType = type.toLowerCase();
		console.log("[TYMOJI] Set Emoji Type to " + type);
	};
    var tymojiSettings = function() {
        setTab(3);
        document.querySelector("#main-content").innerHTML = "<h4>Tymoji Settings</h4><br><form class=\"tymoji-settings\"><div class=\"field-wrapper\"><label>Enable Tymoji</label><select class=\"tymoji-enable-disable\"><option value=\"Enabled\">Enabled</option><option value=\"Disabled\">Disabled</option></select><br><label>Emoji Type</label><div class=\"tymoji-sample-space\">~slight_smile~ ~slight_frown~ ~open_mouth~ ~package~ ~smile~ ~stuck_out_tongue_winking_eye~ ~wink~ ~joy~</div><select class=\"tymoji-emoji-selection\"><option value=\"Tymoji\">Tymoji</option><option value=\"EmojiOne\">EmojiOne</option><option value=\"GitHub\">GitHub</option><option value=\"Twitter\">Twitter</option></select></div></form>";
        loadSampleEmoji();
        document.getElementsByClassName("tymoji-emoji-selection")[0].value = emojiSources[localStorage.tymojiEmojisType][2] || emojiSources.tymoji[2];
        document.getElementsByClassName("tymoji-emoji-selection")[0].onchange = function(){setEmojiType(document.getElementsByClassName("tymoji-emoji-selection")[0].value); loadSampleEmoji();};
        document.getElementsByClassName("tymoji-enable-disable")[0].value = (localStorage.tymojiEnabled === "true") ? ("Enabled") : ((localStorage.tymojiEnabled === "false") ? ("Disabled") : ("Enabled"));
        document.getElementsByClassName("tymoji-enable-disable")[0].onchange = function(){var value = document.getElementsByClassName("tymoji-enable-disable")[0].value; localStorage.tymojiEnabled = (value === "Enabled") ? ("true") : ((value === "Disabled") ? ("false") : ("true"));}
   }
    // checkForHash checks if we've enabled the hash so we can just check when we press the button.
    var checkForHash = function() {
        if (window.location.hash == "#tymojiSettings") {
            tymojiSettings();
        }
    }
    var doSettings = function() {
        window.location.hash = "#tymojiSettings";
        checkForHash();
    }
	var tabs_box = document.querySelector(".tabs-index").children[0];
	tabs_box.innerHTML = tabs_box.innerHTML + '<li id="tymojiSettingsButton" class=""><a href="#tymojiSettings">Tymoji Settings</a></li>';
    var button = document.getElementById("tymojiSettingsButton")
    button.onclick = doSettings;
    checkForHash();
}

if (window.location.pathname.split('/')[1] == 'discuss') {
    document.getElementById('brdmenu').children[1].innerHTML = document.getElementById('brdmenu').children[1].innerHTML + '<li id="tymoji-settings"><a href="/accounts/settings/#tymojiSettings">Tymoji Settings</a></li>';
}
