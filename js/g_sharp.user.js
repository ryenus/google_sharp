// ==UserScript==
// @name        Google Sharp
// @namespace   ryenus.toys
// @description Prefix google search results with `#n` for direct links
// @copyright   2014+ (https://github.com/ryenus)
// @license     MIT
// @version     1.3.2

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
    if (t !== 0) return;
	t = setTimeout(function() {
      Array.from(d.querySelectorAll('.r > a:first-child:not(.g_sharp), .s > a:first-child:not(.g_sharp)'), function(a, i) {
        a.insertAdjacentHTML("beforebegin", "<a href='" + a.href +
          "' target='_blank' rel='noopener noreferrer' class='g_sharp'><span style='font-size:18px'>[#" +
          i + "]</span></a>&nbsp;");
      });
      t = 0;
    }, 500);
  }, false);
})(document, 0);
