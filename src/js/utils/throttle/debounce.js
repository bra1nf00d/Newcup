export const debounce = (func, wait, immediate) => {
	let timeout;

	return function () {
		const context = this;
		const args = arguments;

		const next = () => {
			timeout = null;

			if (!immediate) func.apply(context, args);
		};

		const itNow = immediate && !timeout;

		clearTimeout(timeout);

		timeout = setTimeout(next, wait);

		if (itNow) func.apply(context, args);
	};
};
