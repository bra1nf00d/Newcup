import { Node } from '../../utils/helpers/node.helpers';

export class ButtonCross {
	constructor(el) {
		this.nodeList = Node.getAll(el);
	}

	onClick(handle) {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			nodeEl.addEventListener('click', handle);
		});
	}
}
