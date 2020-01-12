module.exports = (scrollPos, windowHeight) => {
	if (scrollPos < 0) {
		scrollPos = -scrollPos;
	}

	// HACK: This was left in in case we don't like the halfway fade.
	let halfwayFade = true;
	let transparency = 0.0;
	if (halfwayFade) {
		scrollPos -= windowHeight / 2;
		if (scrollPos < 0) {
			scrollPos = 0;
		}

		transparency = (2 * scrollPos) / windowHeight;
	} else {
		transparency = scrollPos / windowHeight;
	}

	if (transparency > 1.0) {
		transparency = 1.0;
	}

	return { backgroundColor: "rgba(0, 0, 0, " + transparency + ")" };
};
