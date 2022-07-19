export const Node = {
	getAll(selector) {
		return document.querySelectorAll(selector);
	},

	getOne(selector) {
		return document.querySelector(selector);
	},
};
