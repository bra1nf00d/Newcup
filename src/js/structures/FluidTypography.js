import { Node } from '../utils/helpers/node.helpers';

export class FluidTypography {
	constructor() {
		this.nodeList = Node.getAll('[data-fluid-typography]');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			const fontSize = (nodeEl.offsetWidth * 0.05).toFixed(2);

			nodeEl.style.fontSize = `${fontSize}px`;
		});
	}

	onResize() {
		if (!this.nodeList) return;

		window.addEventListener('resize', () => {
			this.onMounted();
		});
	}
}
