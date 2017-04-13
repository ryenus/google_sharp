// ==UserScript==
// @name  PLITT
// @version    1.1
// @namespace  ryenus.toys
// @include    http://www.google.tld/*
// @include    https://www.google.tld/*
// @include    http://www.google.co.tld/*
// @include    https://www.google.co.tld/*
// @include    http://www.google.com.tld/*
// @include    https://www.google.com.tld/*
// @description allow visiting search result without the redirection overhead
// @grant      none
// ==/UserScript==

(function(d, t) {
  if (! (d.forms[0] && d.forms[0].action.match(/search/))) return;
  d.addEventListener('DOMSubtreeModified', function() {
    if (t === 0) t = setTimeout(function() {
      Array.from(d.getElementsByClassName('r'), function(r, i) {
          if (r.children.length == 1) {
              r.insertAdjacentHTML("afterbegin",
                "<a href='" + r.lastChild.href + "' target='_blank' class='plitt'>[#" + i +"]</a>&nbsp;");
          }
      });
      t = 0;
    }, 500);
  }, false);
})(document, 0);
