import { Node } from '../../utils/helpers/node.helpers';

export class Filter {
	constructor() {
		this.nodeList = Node.getAll('.filter');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.handleOpen();
		this.handleClose();
	}

	handleOpen() {
		this.nodeList.forEach((nodeEl) => {
			const filterIcon = nodeEl.querySelector('.filter__icon');
			const filterCollapse = nodeEl.querySelector('.filter__collapse');
			filterIcon.addEventListener('click', () => {
				filterCollapse.classList.remove('hidden');

				document.body.classList.add('lock');
			});
		});
	}

	handleClose() {
		this.nodeList.forEach((nodeEl) => {
			const filterButtonClose = nodeEl.querySelector('.filter__button-close');
			const filterCollapse = nodeEl.querySelector('.filter__collapse');
			filterButtonClose.addEventListener('click', () => {
				filterCollapse.classList.add('hidden');

				document.body.classList.remove('lock');
			});
		});
	}
}
