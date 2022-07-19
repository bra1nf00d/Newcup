import { Node } from '../../utils/helpers/node.helpers';

export class ProductCard {
	constructor() {
		this.nodeList = Node.getAll('.product-card');
	}

	onMounted() {
		if (!this.nodeList) return;

		this.openInfo();
		this.openAdditives();
		this.onClose();
	}

	openInfo() {
		this.nodeList.forEach((nodeEl) => {
			const buttonInfo = nodeEl.querySelector('.button-info');
			const buttonAdd = nodeEl.querySelector('.button-add');
			const buttonAmount = nodeEl.querySelector('.button-amount');
			const productTitle = nodeEl.querySelector('.product-title');
			const productTopContent = nodeEl.querySelector('.product-card__top-content');
			const contentInfo = nodeEl.querySelector('.content-info');
			const contentAdditives = nodeEl.querySelector('.content-additives');

			buttonInfo.addEventListener('click', () => {
				buttonAmount.classList.add('hidden');
				buttonAdd.classList.remove('hidden');
				productTitle.classList.remove('hidden');
				productTopContent.classList.remove('hidden');
				contentInfo.classList.remove('hidden');
				contentAdditives.classList.add('hidden');
			});
		});
	}

	openAdditives() {
		this.nodeList.forEach((nodeEl) => {
			const buttonAdd = nodeEl.querySelector('.button-add');
			const buttonAmount = nodeEl.querySelector('.button-amount');
			const productTitle = nodeEl.querySelector('.product-title');
			const productTopContent = nodeEl.querySelector('.product-card__top-content');
			const contentInfo = nodeEl.querySelector('.content-info');
			const contentAdditives = nodeEl.querySelector('.content-additives');

			buttonAdd.addEventListener('click', () => {
				buttonAmount.classList.remove('hidden');
				buttonAdd.classList.add('hidden');
				productTitle.classList.add('hidden');
				productTopContent.classList.remove('hidden');
				contentInfo.classList.add('hidden');
				contentAdditives.classList.remove('hidden');
			});
		});
	}

	onClose() {
		this.nodeList.forEach((nodeEl) => {
			const buttonCross = nodeEl.querySelector('.button-cross');
			const buttonAdd = nodeEl.querySelector('.button-add');
			const buttonAmount = nodeEl.querySelector('.button-amount');
			const productTitle = nodeEl.querySelector('.product-title');
			const productTopContent = nodeEl.querySelector('.product-card__top-content');

			buttonCross.addEventListener('click', () => {
				buttonAmount.classList.add('hidden');
				buttonAdd.classList.remove('hidden');
				productTitle.classList.remove('hidden');
				productTopContent.classList.add('hidden');
			});
		});
	}
}
