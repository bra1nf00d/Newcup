import { Node } from '../utils/helpers/node.helpers';

export class ResponsiveImage {
	constructor() {
		this.nodeList = Node.getAll('[data-responsive-image]');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			if (!nodeEl.querySelector('img')) return;

			nodeEl.style.backgroundImage = `url(${nodeEl.querySelector('img').getAttribute('src')})`;
		});
	}
}
