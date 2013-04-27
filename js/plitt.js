// ==UserScript==
// @name	PLITT
// @namespace	 ryenus.toys
// @include		 http://www.google.tld/*
// @include		 https://www.google.tld/*
// @include		 http://www.google.co.tld/*
// @include		 https://www.google.co.tld/*
// @include		 http://www.google.com.tld/*
// @include		 https://www.google.com.tld/*
// @Description allow visiting search result without the redirection overhead
// ==/UserScript==

(function(d) {
	if (! (d.forms[0] && d.forms[0].action.match(/search/))) return;
	var t = 0;
	d.addEventListener('DOMSubtreeModified', function() {
		if (t == 0) t = setTimeout(function() {
			var r = d.getElementsByClassName('r');
			if (r.length > d.getElementsByClassName('plitt').length) {
				for (var i = 0; i < r.length; i++) {
					var l = r[i].getElementsByTagName('a')[0];
					if (l.previousElementSibling) continue;
					l.insertAdjacentHTML("beforebegin",
						"<a href='" + l.href + "' target='_blank' class='plitt'>[#" + i + "]</a>&nbsp;");
				}
			}
			t = 0;

			var plus_icons = d.getElementsByClassName('th');
			for (var j = 0; j < plus_icons.length; j++) {
				var icon = plus_icons[j];
				var summary_with_plus = icon.parentNode.parentNode;
				summary_with_plus.removeChild(summary_with_plus.firstChild);
				var summary_content = summary_with_plus.firstChild;
				summary_content.setAttribute('style', '');
			}

		}, 500);
	}, false);
})(document);
