import { Node } from '../../utils/helpers/node.helpers';
import { Select } from './Select';

export class Form {
	constructor(el) {
		this.nodeList = Node.getAll(el);
		this.sumbitButton = Node.getOne('#order-button-submit');
		this.required = Node.getAll('.required');
		this.select = new Select(`${el} .select`);
	}

	onMounted() {
		if (!this.nodeList || !this.select || !this.sumbitButton) return;

		this.select.onMounted();

		this.sumbitButton.addEventListener('click', (event) => {
			event.preventDefault();

			if (!this.required) return;

			this.required.forEach((field) => {
				field.closest('.form__control')
					.querySelector('.form__label')
					.classList.remove('error');
			});

			if (this.isFormValid()) {
				console.log('VALID');

				// Post Request
			}
		});
	}

	isFormValid() {
		const errors = [];

		this.required.forEach((field) => {
			switch (field.type) {
				case 'text':
					if (!field.value.trim()) {
						field.closest('.form__control')
							.querySelector('.form__label')
							.classList.add('error');
						errors.push(true);
					}
					break;
				case 'tel':
					if (!/^(\+380|0)\d{9}$/.test(field.value)) {
						field.closest('.form__control')
							.querySelector('.form__label')
							.classList.add('error');
						errors.push(true);
					}
					break;
				case 'hidden':
					if (!field.value.trim()) {
						field.closest('.form__control')
							.querySelector('.form__label')
							.classList.add('error');
						errors.push(true);
					}
					break;
				default:
					break;
			}
		});

		return errors.length <= 0;
	}
}
