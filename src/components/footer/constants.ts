export const NavItems: Record<string, INavItem[] | undefined> = {
	Покупателям: [
		{ text: "Центр поддержки" },
		{ text: "Доставка" },
		{ text: "Заказ" },
	],
	Компания: [{ text: "О нас" }, { text: "Наши Магазины" }],
	Телефоны: [
		{ text: "Россия: ", phone: "8-800-100-44-99" },
		{ text: "Москва: ", phone: "8-800-100-44-99" },
	],
};

// Interfaces
export interface INavItem {
	text: string;
	phone?: string;
}

export interface INavList {
	items: INavItem[];
	text: string;
}
