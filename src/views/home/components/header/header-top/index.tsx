import React from "react";

export const HeaderTop: React.FC<{}> = () => {
	return (
		<div className="header__top">
			<nav className="nav">
				<div className="container container--large container--nav__list">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#" className="nav__link">
								<img src="/assets/img/user.svg" alt="" />
								Стать партнёром
							</a>
							<div className="dropdown dropdown--left">
								<div className="dropdown__content dropdown__content--left">
									<article>
										Становитесь партнером нашего
										маркетплейса.
									</article>
									<a href="#">Подробнее</a>
								</div>
							</div>
						</li>

						<li className="nav__item">
							<span>Дополнительная скидка 5%</span>
							<div className="dropdown dropdown--right">
								<div className="dropdown__content dropdown__content--right">
									<article>Удобно и выгодно!</article>
									<article>
										Оплатите ваш заказ картой на сайте и
										получите дополнительную скидку 5%.
									</article>
								</div>
							</div>
						</li>

						<li className="nav__item nav__item--delivery">
							<span>
								<img src="/assets/img/delivery.svg" alt="" />
								Бесплатная доставка
							</span>
							<div className="dropdown dropdown--right">
								<div className="dropdown__content dropdown__content--right dropdown__content--delivery">
									<article>
										Бесплатная доставка - при выкупе заказа
										от 5 999 руб. или при онлайн оплате
										заказа от 2 999 руб.
									</article>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
