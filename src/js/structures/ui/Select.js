import { Node } from '../../utils/helpers/node.helpers';

export class Select {
	constructor(el) {
		this.nodeList = Node.getAll(el);
	}

	onMounted() {
		if (!this.nodeList) return;

		this.nodeList.forEach((nodeEl) => {
			const selectCurrent = nodeEl.querySelector('.select__current');
			const selectInput = nodeEl.querySelector('.select__input');
			const selectList = nodeEl.querySelector('.select__list');
			const selectItem = nodeEl.querySelectorAll('.select__item');

			if (selectCurrent && selectList) {
				selectCurrent.addEventListener('click', () => {
					selectList.classList.toggle('show');
				});
			}

			if (selectCurrent && selectInput && selectItem) {
				selectItem.forEach((item) => {
					item.addEventListener('click', () => {
						selectInput.value = item.getAttribute('data-value');
						selectCurrent.textContent = item.textContent;
						selectList.classList.remove('show');
					});
				});
			}

			document.addEventListener('mouseup', (e) => {
				if (!nodeEl.contains(e.target)) {
					selectList.classList.remove('show');
				}
			});
		});
	}
}
