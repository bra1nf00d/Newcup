import { Node } from '../../utils/helpers/node.helpers';

export class Menu {
	constructor() {
		this.nodeList = Node.getAll('.menu');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.targetToggle();
	}

	targetToggle() {
		this.nodeList.forEach((nodeEl) => {
			let isOpened = false;

			nodeEl.addEventListener('click', () => {
				isOpened = !isOpened;

				if (nodeEl.querySelector('.menu__collapse')) {
					nodeEl.querySelector('.menu__collapse')
						.classList.toggle('hidden');

					document.body.classList.toggle('lock');
				}

				if (nodeEl.querySelector('.menu__title')) {
					nodeEl.querySelector('.menu__title')
						.innerText = isOpened ? 'закрыть' : 'menu';
				}

				if (nodeEl.querySelector('.menu__icon')) {
					nodeEl.querySelector('.menu__icon i')
						.classList.toggle('i-menu');

					nodeEl.querySelector('.menu__icon i')
						.classList.toggle('i-close');
				}

				if (Node.getOne('.app-background')) {
					Node.getOne('.app-background')
						.style.zIndex = isOpened ? '99' : '-99';
				}
			});
		});
	}
}
