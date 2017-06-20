"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(['jquery'], function ($) {
			return factory($);
		});
	} else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
		exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
})(function ($) {

	// Preserve the original jQuery "swing" easing as "jswing"
	$.easing.jswing = $.easing.swing;

	var pow = Math.pow,
	    sqrt = Math.sqrt,
	    sin = Math.sin,
	    cos = Math.cos,
	    PI = Math.PI,
	    c1 = 1.70158,
	    c2 = c1 * 1.525,
	    c3 = c1 + 1,
	    c4 = 2 * PI / 3,
	    c5 = 2 * PI / 4.5;

	// x is the fraction of animation progress, in the range 0..1
	function bounceOut(x) {
		var n1 = 7.5625,
		    d1 = 2.75;
		if (x < 1 / d1) {
			return n1 * x * x;
		} else if (x < 2 / d1) {
			return n1 * (x -= 1.5 / d1) * x + 0.75;
		} else if (x < 2.5 / d1) {
			return n1 * (x -= 2.25 / d1) * x + 0.9375;
		} else {
			return n1 * (x -= 2.625 / d1) * x + 0.984375;
		}
	}

	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function swing(x) {
			return $.easing[$.easing.def](x);
		},
		easeInQuad: function easeInQuad(x) {
			return x * x;
		},
		easeOutQuad: function easeOutQuad(x) {
			return 1 - (1 - x) * (1 - x);
		},
		easeInOutQuad: function easeInOutQuad(x) {
			return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
		},
		easeInCubic: function easeInCubic(x) {
			return x * x * x;
		},
		easeOutCubic: function easeOutCubic(x) {
			return 1 - pow(1 - x, 3);
		},
		easeInOutCubic: function easeInOutCubic(x) {
			return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
		},
		easeInQuart: function easeInQuart(x) {
			return x * x * x * x;
		},
		easeOutQuart: function easeOutQuart(x) {
			return 1 - pow(1 - x, 4);
		},
		easeInOutQuart: function easeInOutQuart(x) {
			return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
		},
		easeInQuint: function easeInQuint(x) {
			return x * x * x * x * x;
		},
		easeOutQuint: function easeOutQuint(x) {
			return 1 - pow(1 - x, 5);
		},
		easeInOutQuint: function easeInOutQuint(x) {
			return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
		},
		easeInSine: function easeInSine(x) {
			return 1 - cos(x * PI / 2);
		},
		easeOutSine: function easeOutSine(x) {
			return sin(x * PI / 2);
		},
		easeInOutSine: function easeInOutSine(x) {
			return -(cos(PI * x) - 1) / 2;
		},
		easeInExpo: function easeInExpo(x) {
			return x === 0 ? 0 : pow(2, 10 * x - 10);
		},
		easeOutExpo: function easeOutExpo(x) {
			return x === 1 ? 1 : 1 - pow(2, -10 * x);
		},
		easeInOutExpo: function easeInOutExpo(x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
		},
		easeInCirc: function easeInCirc(x) {
			return 1 - sqrt(1 - pow(x, 2));
		},
		easeOutCirc: function easeOutCirc(x) {
			return sqrt(1 - pow(x - 1, 2));
		},
		easeInOutCirc: function easeInOutCirc(x) {
			return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
		},
		easeInElastic: function easeInElastic(x) {
			return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
		},
		easeOutElastic: function easeOutElastic(x) {
			return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
		},
		easeInOutElastic: function easeInOutElastic(x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
		},
		easeInBack: function easeInBack(x) {
			return c3 * x * x * x - c1 * x * x;
		},
		easeOutBack: function easeOutBack(x) {
			return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
		},
		easeInOutBack: function easeInOutBack(x) {
			return x < 0.5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
		},
		easeInBounce: function easeInBounce(x) {
			return 1 - bounceOut(1 - x);
		},
		easeOutBounce: bounceOut,
		easeInOutBounce: function easeInOutBounce(x) {
			return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ZlbmRvci9qcXVlcnktZWFzaW5nL2pxdWVyeS5lYXNpbmcuanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsIiQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsImpRdWVyeSIsImVhc2luZyIsImpzd2luZyIsInN3aW5nIiwicG93IiwiTWF0aCIsInNxcnQiLCJzaW4iLCJjb3MiLCJQSSIsImMxIiwiYzIiLCJjMyIsImM0IiwiYzUiLCJib3VuY2VPdXQiLCJ4IiwibjEiLCJkMSIsImV4dGVuZCIsImRlZiIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJlYXNlSW5DdWJpYyIsImVhc2VPdXRDdWJpYyIsImVhc2VJbk91dEN1YmljIiwiZWFzZUluUXVhcnQiLCJlYXNlT3V0UXVhcnQiLCJlYXNlSW5PdXRRdWFydCIsImVhc2VJblF1aW50IiwiZWFzZU91dFF1aW50IiwiZWFzZUluT3V0UXVpbnQiLCJlYXNlSW5TaW5lIiwiZWFzZU91dFNpbmUiLCJlYXNlSW5PdXRTaW5lIiwiZWFzZUluRXhwbyIsImVhc2VPdXRFeHBvIiwiZWFzZUluT3V0RXhwbyIsImVhc2VJbkNpcmMiLCJlYXNlT3V0Q2lyYyIsImVhc2VJbk91dENpcmMiLCJlYXNlSW5FbGFzdGljIiwiZWFzZU91dEVsYXN0aWMiLCJlYXNlSW5PdXRFbGFzdGljIiwiZWFzZUluQmFjayIsImVhc2VPdXRCYWNrIiwiZWFzZUluT3V0QmFjayIsImVhc2VJbkJvdW5jZSIsImVhc2VPdXRCb3VuY2UiLCJlYXNlSW5PdXRCb3VuY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7QUFRQSxDQUFDLFVBQVVBLE9BQVYsRUFBbUI7QUFDbkIsS0FBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxPQUFPQyxHQUEzQyxFQUFnRDtBQUMvQ0QsU0FBTyxDQUFDLFFBQUQsQ0FBUCxFQUFtQixVQUFVRSxDQUFWLEVBQWE7QUFD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QUFFLElBQUlELFVBQVcsSUFBSUMsQ0FBSixHQUFRLENBQW5CLENBQU4sSUFBaUMsQ0FGbEM7QUFHQTtBQWhIRixFQURBO0FBb0hDLENBN0pEIiwiZmlsZSI6ImpxdWVyeS5lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogalF1ZXJ5IEVhc2luZyB2MS40LjEgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmcvXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuXG4gKiBDb3B5cmlnaHQgwqkgMjAwOCBHZW9yZ2UgTWNHaW5sZXkgU21pdGhcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2dkc21pdGgvanF1ZXJ5LWVhc2luZy9tYXN0ZXIvTElDRU5TRVxuKi9cblxuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoJCkge1xuXHRcdFx0cmV0dXJuIGZhY3RvcnkoJCk7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHRleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xuXHR9XG59KShmdW5jdGlvbigkKXtcblxuLy8gUHJlc2VydmUgdGhlIG9yaWdpbmFsIGpRdWVyeSBcInN3aW5nXCIgZWFzaW5nIGFzIFwianN3aW5nXCJcbiQuZWFzaW5nLmpzd2luZyA9ICQuZWFzaW5nLnN3aW5nO1xuXG52YXIgcG93ID0gTWF0aC5wb3csXG5cdHNxcnQgPSBNYXRoLnNxcnQsXG5cdHNpbiA9IE1hdGguc2luLFxuXHRjb3MgPSBNYXRoLmNvcyxcblx0UEkgPSBNYXRoLlBJLFxuXHRjMSA9IDEuNzAxNTgsXG5cdGMyID0gYzEgKiAxLjUyNSxcblx0YzMgPSBjMSArIDEsXG5cdGM0ID0gKCAyICogUEkgKSAvIDMsXG5cdGM1ID0gKCAyICogUEkgKSAvIDQuNTtcblxuLy8geCBpcyB0aGUgZnJhY3Rpb24gb2YgYW5pbWF0aW9uIHByb2dyZXNzLCBpbiB0aGUgcmFuZ2UgMC4uMVxuZnVuY3Rpb24gYm91bmNlT3V0KHgpIHtcblx0dmFyIG4xID0gNy41NjI1LFxuXHRcdGQxID0gMi43NTtcblx0aWYgKCB4IDwgMS9kMSApIHtcblx0XHRyZXR1cm4gbjEqeCp4O1xuXHR9IGVsc2UgaWYgKCB4IDwgMi9kMSApIHtcblx0XHRyZXR1cm4gbjEqKHgtPSgxLjUvZDEpKSp4ICsgMC43NTtcblx0fSBlbHNlIGlmICggeCA8IDIuNS9kMSApIHtcblx0XHRyZXR1cm4gbjEqKHgtPSgyLjI1L2QxKSkqeCArIDAuOTM3NTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbjEqKHgtPSgyLjYyNS9kMSkpKnggKyAwLjk4NDM3NTtcblx0fVxufVxuXG4kLmV4dGVuZCggJC5lYXNpbmcsXG57XG5cdGRlZjogJ2Vhc2VPdXRRdWFkJyxcblx0c3dpbmc6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nWyQuZWFzaW5nLmRlZl0oeCk7XG5cdH0sXG5cdGVhc2VJblF1YWQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0UXVhZDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4gMSAtICggMSAtIHggKSAqICggMSAtIHggKTtcblx0fSxcblx0ZWFzZUluT3V0UXVhZDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQyICogeCAqIHggOlxuXHRcdFx0MSAtIHBvdyggLTIgKiB4ICsgMiwgMiApIC8gMjtcblx0fSxcblx0ZWFzZUluQ3ViaWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggKiB4ICogeDtcblx0fSxcblx0ZWFzZU91dEN1YmljOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxIC0gcG93KCAxIC0geCwgMyApO1xuXHR9LFxuXHRlYXNlSW5PdXRDdWJpYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQ0ICogeCAqIHggKiB4IDpcblx0XHRcdDEgLSBwb3coIC0yICogeCArIDIsIDMgKSAvIDI7XG5cdH0sXG5cdGVhc2VJblF1YXJ0OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4ICogeCAqIHggKiB4O1xuXHR9LFxuXHRlYXNlT3V0UXVhcnQ6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBwb3coIDEgLSB4LCA0ICk7XG5cdH0sXG5cdGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4IDwgMC41ID9cblx0XHRcdDggKiB4ICogeCAqIHggKiB4IDpcblx0XHRcdDEgLSBwb3coIC0yICogeCArIDIsIDQgKSAvIDI7XG5cdH0sXG5cdGVhc2VJblF1aW50OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4ICogeCAqIHggKiB4ICogeDtcblx0fSxcblx0ZWFzZU91dFF1aW50OiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxIC0gcG93KCAxIC0geCwgNSApO1xuXHR9LFxuXHRlYXNlSW5PdXRRdWludDogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQxNiAqIHggKiB4ICogeCAqIHggKiB4IDpcblx0XHRcdDEgLSBwb3coIC0yICogeCArIDIsIDUgKSAvIDI7XG5cdH0sXG5cdGVhc2VJblNpbmU6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBjb3MoIHggKiBQSS8yICk7XG5cdH0sXG5cdGVhc2VPdXRTaW5lOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiBzaW4oIHggKiBQSS8yICk7XG5cdH0sXG5cdGVhc2VJbk91dFNpbmU6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIC0oIGNvcyggUEkgKiB4ICkgLSAxICkgLyAyO1xuXHR9LFxuXHRlYXNlSW5FeHBvOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4ID09PSAwID8gMCA6IHBvdyggMiwgMTAgKiB4IC0gMTAgKTtcblx0fSxcblx0ZWFzZU91dEV4cG86IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDEgPyAxIDogMSAtIHBvdyggMiwgLTEwICogeCApO1xuXHR9LFxuXHRlYXNlSW5PdXRFeHBvOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiB4ID09PSAwID8gMCA6IHggPT09IDEgPyAxIDogeCA8IDAuNSA/XG5cdFx0XHRwb3coIDIsIDIwICogeCAtIDEwICkgLyAyIDpcblx0XHRcdCggMiAtIHBvdyggMiwgLTIwICogeCArIDEwICkgKSAvIDI7XG5cdH0sXG5cdGVhc2VJbkNpcmM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIDEgLSBzcXJ0KCAxIC0gcG93KCB4LCAyICkgKTtcblx0fSxcblx0ZWFzZU91dENpcmM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHNxcnQoIDEgLSBwb3coIHggLSAxLCAyICkgKTtcblx0fSxcblx0ZWFzZUluT3V0Q2lyYzogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQoIDEgLSBzcXJ0KCAxIC0gcG93KCAyICogeCwgMiApICkgKSAvIDIgOlxuXHRcdFx0KCBzcXJ0KCAxIC0gcG93KCAtMiAqIHggKyAyLCAyICkgKSArIDEgKSAvIDI7XG5cdH0sXG5cdGVhc2VJbkVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOlxuXHRcdFx0LXBvdyggMiwgMTAgKiB4IC0gMTAgKSAqIHNpbiggKCB4ICogMTAgLSAxMC43NSApICogYzQgKTtcblx0fSxcblx0ZWFzZU91dEVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOlxuXHRcdFx0cG93KCAyLCAtMTAgKiB4ICkgKiBzaW4oICggeCAqIDEwIC0gMC43NSApICogYzQgKSArIDE7XG5cdH0sXG5cdGVhc2VJbk91dEVsYXN0aWM6IGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHggPT09IDAgPyAwIDogeCA9PT0gMSA/IDEgOiB4IDwgMC41ID9cblx0XHRcdC0oIHBvdyggMiwgMjAgKiB4IC0gMTAgKSAqIHNpbiggKCAyMCAqIHggLSAxMS4xMjUgKSAqIGM1ICkpIC8gMiA6XG5cdFx0XHRwb3coIDIsIC0yMCAqIHggKyAxMCApICogc2luKCAoIDIwICogeCAtIDExLjEyNSApICogYzUgKSAvIDIgKyAxO1xuXHR9LFxuXHRlYXNlSW5CYWNrOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiBjMyAqIHggKiB4ICogeCAtIGMxICogeCAqIHg7XG5cdH0sXG5cdGVhc2VPdXRCYWNrOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxICsgYzMgKiBwb3coIHggLSAxLCAzICkgKyBjMSAqIHBvdyggeCAtIDEsIDIgKTtcblx0fSxcblx0ZWFzZUluT3V0QmFjazogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQoIHBvdyggMiAqIHgsIDIgKSAqICggKCBjMiArIDEgKSAqIDIgKiB4IC0gYzIgKSApIC8gMiA6XG5cdFx0XHQoIHBvdyggMiAqIHggLSAyLCAyICkgKiggKCBjMiArIDEgKSAqICggeCAqIDIgLSAyICkgKyBjMiApICsgMiApIC8gMjtcblx0fSxcblx0ZWFzZUluQm91bmNlOiBmdW5jdGlvbiAoeCkge1xuXHRcdHJldHVybiAxIC0gYm91bmNlT3V0KCAxIC0geCApO1xuXHR9LFxuXHRlYXNlT3V0Qm91bmNlOiBib3VuY2VPdXQsXG5cdGVhc2VJbk91dEJvdW5jZTogZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geCA8IDAuNSA/XG5cdFx0XHQoIDEgLSBib3VuY2VPdXQoIDEgLSAyICogeCApICkgLyAyIDpcblx0XHRcdCggMSArIGJvdW5jZU91dCggMiAqIHggLSAxICkgKSAvIDI7XG5cdH1cbn0pO1xuXG59KTtcbiJdfQ==