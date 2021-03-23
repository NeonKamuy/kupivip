// Constants
export const CarouselItems: IListItem[] = [
  {img: "/assets/img/coat.jpg", text: "Куртки"},
  {img: "/assets/img/shirt.jpg", text: "Джемперы и пуловеры"},
  {img: "/assets/img/jeans.jpg", text: "Ботинки"},
  {img: "/assets/img/jamper.jpg", text: "Рубашки"},
  {img: "/assets/img/shoes.jpg", text: "Джинсы"},
  {img: "/assets/img/sneackers.jpg", text: "Кроссовки и кеды"}
];

export const ServiceItems: IServiceItem[] = [
  {img: "/assets/img/delivery.svg", text: "Бесплатная доставка", description: "От определённой для региона суммы заказа"},
  {img: "/assets/img/return.svg", text: "30 дней на возврат товара", description: "Курьером, через постаматы или почтой"},
  {img: "/assets/img/headset.svg", text: "Круглосуточная поддержка", description: "В чате на сайте или по телефону"}
];

// Interfaces
export interface IListItem {
  img: string;
  text: string;
}

export interface IServiceItem extends IListItem {
  description: string;
}