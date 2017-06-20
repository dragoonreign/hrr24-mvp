"use strict";

/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
	$.extend($.easing, {
		easeIn: function easeIn(x, t, b, c, d) {
			return $.easing.easeInQuad(x, t, b, c, d);
		},
		easeOut: function easeOut(x, t, b, c, d) {
			return $.easing.easeOutQuad(x, t, b, c, d);
		},
		easeInOut: function easeInOut(x, t, b, c, d) {
			return $.easing.easeInOutQuad(x, t, b, c, d);
		},
		expoin: function expoin(x, t, b, c, d) {
			return $.easing.easeInExpo(x, t, b, c, d);
		},
		expoout: function expoout(x, t, b, c, d) {
			return $.easing.easeOutExpo(x, t, b, c, d);
		},
		expoinout: function expoinout(x, t, b, c, d) {
			return $.easing.easeInOutExpo(x, t, b, c, d);
		},
		bouncein: function bouncein(x, t, b, c, d) {
			return $.easing.easeInBounce(x, t, b, c, d);
		},
		bounceout: function bounceout(x, t, b, c, d) {
			return $.easing.easeOutBounce(x, t, b, c, d);
		},
		bounceinout: function bounceinout(x, t, b, c, d) {
			return $.easing.easeInOutBounce(x, t, b, c, d);
		},
		elasin: function elasin(x, t, b, c, d) {
			return $.easing.easeInElastic(x, t, b, c, d);
		},
		elasout: function elasout(x, t, b, c, d) {
			return $.easing.easeOutElastic(x, t, b, c, d);
		},
		elasinout: function elasinout(x, t, b, c, d) {
			return $.easing.easeInOutElastic(x, t, b, c, d);
		},
		backin: function backin(x, t, b, c, d) {
			return $.easing.easeInBack(x, t, b, c, d);
		},
		backout: function backout(x, t, b, c, d) {
			return $.easing.easeOutBack(x, t, b, c, d);
		},
		backinout: function backinout(x, t, b, c, d) {
			return $.easing.easeInOutBack(x, t, b, c, d);
		}
	});
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXJ0Ym9vdHN0cmFwLW5ldy1hZ2UtNC1kZXYvdmVuZG9yL2pxdWVyeS1lYXNpbmcvanF1ZXJ5LmVhc2luZy5jb21wYXRpYmlsaXR5LmpzIl0sIm5hbWVzIjpbIiQiLCJleHRlbmQiLCJlYXNpbmciLCJlYXNlSW4iLCJ4IiwidCIsImIiLCJjIiwiZCIsImVhc2VJblF1YWQiLCJlYXNlT3V0IiwiZWFzZU91dFF1YWQiLCJlYXNlSW5PdXQiLCJlYXNlSW5PdXRRdWFkIiwiZXhwb2luIiwiZWFzZUluRXhwbyIsImV4cG9vdXQiLCJlYXNlT3V0RXhwbyIsImV4cG9pbm91dCIsImVhc2VJbk91dEV4cG8iLCJib3VuY2VpbiIsImVhc2VJbkJvdW5jZSIsImJvdW5jZW91dCIsImVhc2VPdXRCb3VuY2UiLCJib3VuY2Vpbm91dCIsImVhc2VJbk91dEJvdW5jZSIsImVsYXNpbiIsImVhc2VJbkVsYXN0aWMiLCJlbGFzb3V0IiwiZWFzZU91dEVsYXN0aWMiLCJlbGFzaW5vdXQiLCJlYXNlSW5PdXRFbGFzdGljIiwiYmFja2luIiwiZWFzZUluQmFjayIsImJhY2tvdXQiLCJlYXNlT3V0QmFjayIsImJhY2tpbm91dCIsImVhc2VJbk91dEJhY2siLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7QUFVQSxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUNaQSxHQUFFQyxNQUFGLENBQVVELEVBQUVFLE1BQVosRUFDQTtBQUNDQyxVQUFRLGdCQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7QUFDaEMsVUFBT1IsRUFBRUUsTUFBRixDQUFTTyxVQUFULENBQW9CTCxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCQyxDQUE3QixFQUFnQ0MsQ0FBaEMsQ0FBUDtBQUNBLEdBSEY7QUFJQ0UsV0FBUyxpQkFBVU4sQ0FBVixFQUFhQyxDQUFiLEVBQWdCQyxD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Q0ksQ0FoREosRUFnRE04QixNQWhETiIsImZpbGUiOiJqcXVlcnkuZWFzaW5nLmNvbXBhdGliaWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogRWFzaW5nIENvbXBhdGliaWxpdHkgdjEgLSBodHRwOi8vZ3NnZC5jby51ay9zYW5kYm94L2pxdWVyeS9lYXNpbmdcbiAqXG4gKiBBZGRzIGNvbXBhdGliaWxpdHkgZm9yIGFwcGxpY2F0aW9ucyB0aGF0IHVzZSB0aGUgcHJlIDEuMiBlYXNpbmcgbmFtZXNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMDcgR2VvcmdlIFNtaXRoXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKi9cblxuKGZ1bmN0aW9uKCQpe1xuJC5leHRlbmQoICQuZWFzaW5nLFxue1xuXHRlYXNlSW46IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VJblF1YWQoeCwgdCwgYiwgYywgZCk7XG5cdH0sXG5cdGVhc2VPdXQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VPdXRRdWFkKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRlYXNlSW5PdXQ6IGZ1bmN0aW9uICh4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VJbk91dFF1YWQoeCwgdCwgYiwgYywgZCk7XG5cdH0sXG5cdGV4cG9pbjogZnVuY3Rpb24oeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAkLmVhc2luZy5lYXNlSW5FeHBvKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRleHBvb3V0OiBmdW5jdGlvbih4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VPdXRFeHBvKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRleHBvaW5vdXQ6IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZUluT3V0RXhwbyh4LCB0LCBiLCBjLCBkKTtcblx0fSxcblx0Ym91bmNlaW46IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZUluQm91bmNlKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRib3VuY2VvdXQ6IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZU91dEJvdW5jZSh4LCB0LCBiLCBjLCBkKTtcblx0fSxcblx0Ym91bmNlaW5vdXQ6IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZUluT3V0Qm91bmNlKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRlbGFzaW46IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZUluRWxhc3RpYyh4LCB0LCBiLCBjLCBkKTtcblx0fSxcblx0ZWxhc291dDogZnVuY3Rpb24oeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAkLmVhc2luZy5lYXNlT3V0RWxhc3RpYyh4LCB0LCBiLCBjLCBkKTtcblx0fSxcblx0ZWxhc2lub3V0OiBmdW5jdGlvbih4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VJbk91dEVsYXN0aWMoeCwgdCwgYiwgYywgZCk7XG5cdH0sXG5cdGJhY2tpbjogZnVuY3Rpb24oeCwgdCwgYiwgYywgZCkge1xuXHRcdHJldHVybiAkLmVhc2luZy5lYXNlSW5CYWNrKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRiYWNrb3V0OiBmdW5jdGlvbih4LCB0LCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuICQuZWFzaW5nLmVhc2VPdXRCYWNrKHgsIHQsIGIsIGMsIGQpO1xuXHR9LFxuXHRiYWNraW5vdXQ6IGZ1bmN0aW9uKHgsIHQsIGIsIGMsIGQpIHtcblx0XHRyZXR1cm4gJC5lYXNpbmcuZWFzZUluT3V0QmFjayh4LCB0LCBiLCBjLCBkKTtcblx0fVxufSk7fSkoalF1ZXJ5KTtcbiJdfQ==