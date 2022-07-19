import { debounce } from './utils/throttle/debounce';
import { FluidTypography } from './structures/FluidTypography';
import { ResponsiveImage } from './structures/ResponsiveImage';
import { ButtonAmount } from './structures/ui/ButtonAmount';
import { ButtonCross } from './structures/ui/ButtonCross';
import { Cutter } from './utils/enums/cutter.enums';
import { Select } from './structures/ui/Select';
import { Form } from './structures/ui/Form';
import { Menu } from './structures/ui/Menu';
import { Filter } from './structures/ui/Filter';
import { ProductCard } from './structures/ui/ProductCard';
import { CorrectViewport } from './structures/CorrectViewport';

const listening = debounce(() => {
	const fluidTypography = new FluidTypography();
	fluidTypography.onMounted();
	fluidTypography.onResize();

	const correctViewport = new CorrectViewport();
	correctViewport.onMounted();
	correctViewport.onResize();

	const responsiveImage = new ResponsiveImage();
	responsiveImage.onMounted();

	const appMenu = new Menu();
	appMenu.onMounted();

	const appFilter = new Filter();
	appFilter.onMounted();

	const buttonAmount = new ButtonAmount();
	buttonAmount.onMounted();

	const cartButtonCross = new ButtonCross('.cart .button-cross');
	cartButtonCross.onClick((event) => {
		event.currentTarget.closest('.cart__column').remove();
	});

	const orderForm = new Form('.order__form');
	orderForm.onMounted();

	const productCard = new ProductCard();
	productCard.onMounted();

	const cutterProductTitle = new Cutter('.product-title');
	cutterProductTitle.cut(36, '...');

	const cutterCategoryTitle = new Cutter('.category-title');
	cutterCategoryTitle.cut(27);

	console.log('App JS listening...');
}, 0, false);

listening();
