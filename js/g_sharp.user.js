// ==UserScript==
// @name        Google Sharp
// @namespace   ryenus.toys
// @description Prefix google search results with `#n` for direct links
// @copyright   2014+ (https://github.com/ryenus)
// @license     The MIT License (https://opensource.org/licenses/MIT)
// @version     1.3.1

// @homepageURL https://github.com/ryenus/g_sharp
// @homepageURL https://openuserjs.org/scripts/ryenus/Google_Sharp

// @updateURL   https://openuserjs.org/meta/ryenus/Google_Sharp.meta.js
// @downloadURL https://openuserjs.org/install/ryenus/Google_Sharp.min.user.js

// @include     http://www.google.tld/*
// @include     https://www.google.tld/*
// @include     http://www.google.co.tld/*
// @include     https://www.google.co.tld/*
// @include     http://www.google.com.tld/*
// @include     https://www.google.com.tld/*
// @grant       none
// ==/UserScript==

(function(d, t) {
  if (!(d.forms[0] && d.forms[0].action.match(/search/))) return;
  d.addEventListener('DOMSubtreeModified', function() {
    if (t === 0) t = setTimeout(function() {
      Array.from(d.getElementsByClassName('r'), function(r, i) {
        var a = r.getElementsByTagName('a');
        if (a.length == 1) {
          r.insertAdjacentHTML("afterbegin", "<a href='" + a[0].href +
            "' target='_blank' rel='noopener noreferrer' class='g_sharp _ogd'>[#" +
            i + "]</a>");
        }
      });
      t = 0;
    }, 500);
  }, false);
})(document, 0);
