import { Node } from '../helpers/node.helpers';

export class Cutter {
	constructor(el) {
		this.nodeList = Node.getAll(el);
	}

	cut(length, endOfLine = '') {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			nodeEl.innerText = this.mutatingString(nodeEl.innerText, length, endOfLine);
		});
	}

	mutatingString(string, length, endOfLine) {
		string = `${string[0].toUpperCase() + string.slice(1, length)} ${endOfLine}`;
		return string;
	}
}
