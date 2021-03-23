import React from "react";

export const HeaderBottomMain: React.FC<{}> = () => {
	return (
		<>
			<div className="phone">8 495 888 88 88</div>
			<div className="logo">
				<a href="#">
					<svg id="icon-logo-ru" viewBox="0 0 202 37">
						<path d="M114.279.015h-5.655v35.793h5.655V.015zM171.792.015h-5.672v35.81h5.672V.015zM0 35.813h5.711L5.69.073H0v35.74zM27.496 35.824l.03.03 7.93-.006L13.703 13.85 28.948.072h-7.716L5.77 13.842l21.726 21.982zM154.392.02L140.17 28.939l-.066-.413L125.819.018h-6.548l18.201 35.742h5.175L161.141.02h-6.749zM52.686 37c4.65-.005 9.11-1.88 12.398-5.213 3.289-3.333 5.139-7.852 5.145-12.566V.072h-5.757l-.032 19.356c0 3.16-1.238 6.19-3.443 8.425-2.204 2.234-5.194 3.49-8.31 3.49-3.118 0-6.108-1.256-8.312-3.49-2.204-2.235-3.443-5.265-3.443-8.425V.072h-5.758l-.03 19.149c.005 4.714 1.855 9.233 5.144 12.566S48.036 36.995 52.686 37zM91.215 0L78.968.015v35.8h5.666V19.59h6.592c2.562 0 5.019-1.031 6.83-2.868 1.813-1.836 2.83-4.327 2.83-6.924 0-2.597-1.017-5.088-2.83-6.924-1.811-1.837-4.268-2.868-6.83-2.868L91.215 0zm-.09 13.829h-6.491V5.752h6.501c1.057 0 2.07.425 2.817 1.183.747.757 1.167 1.784 1.167 2.855s-.42 2.099-1.167 2.856c-.747.757-1.76 1.183-2.817 1.183h-.01zM192.339 0l-12.247.015v35.8h5.653V19.59h6.594c2.562 0 5.019-1.031 6.831-2.868 1.812-1.836 2.83-4.327 2.83-6.924 0-2.597-1.018-5.088-2.83-6.924-1.812-1.837-4.269-2.868-6.831-2.868V0zm-.093 13.829h-6.501V5.752h6.501c1.057 0 2.07.425 2.817 1.183.748.757 1.167 1.784 1.167 2.855s-.419 2.099-1.167 2.856c-.747.757-1.76 1.183-2.817 1.183z" />
					</svg>
				</a>
			</div>

			<div className="actions">
				<ul className="actions__list">
					<li className="actions__item actions__item--questions">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="22"
							viewBox="0 0 20 22"
						>
							<g fill-rule="evenodd">
								<path
									fill-rule="nonzero"
									d="M12.659 16.857H18V2H2v14.857h6.37l2.144 2.246 2.145-2.246zm7.341 2h-6.486l-3 3.143-3-3.143H0V0h20v18.857z"
								/>
								<path d="M9.086 11.482V9.508h.938c.784 0 1.386-.378 1.386-1.26 0-.854-.602-1.274-1.162-1.274-.56 0-1.12.392-1.12 1.274H7C7 6.442 8.386 5 10.248 5c1.862 0 3.29 1.442 3.29 3.248 0 1.806-1.442 3.234-3.514 3.234h-.938zm.882 3.682c-.84 0-1.512-.672-1.512-1.512 0-.49.21-.896.56-1.176h1.904c.336.28.56.686.56 1.176 0 .84-.672 1.512-1.512 1.512z" />
							</g>
						</svg>
						<div className="dropdown dropdown--right dropdown--questions">
							<div className="dropdown__content dropdown__content--right dropdown__content--questions">
								<ul className="questions__list">
									<li className="questions__item">
										<a href="" className="questions__link">
											Центр поддержки
										</a>
									</li>
									<li className="questions__item">
										<a href="" className="questions__link">
											Доставка
										</a>
									</li>
									<li className="questions__item">
										<a href="" className="questions__link">
											Оплата
										</a>
									</li>
									<li className="questions__item">
										<a href="" className="questions__link">
											Возврат
										</a>
									</li>
									<li className="questions__item">
										<a href="" className="questions__link">
											Таблицы размеров
										</a>
									</li>
									<li className="questions__item">
										<a
											href=""
											className="questions__link questions__link--line"
										>
											Обратный звонок с сайта
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="actions__item actions__item--cart">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="22"
							viewBox="0 0 20 22"
						>
							<g fill-rule="nonzero">
								<path d="M18 20V5h2v17H0V5h2v15z"></path>
								<path d="M13 2v5h2V0H5v7h2V2z"></path>
							</g>
						</svg>
						<div className="dropdown dropdown--right dropdown--cart">
							<div className="dropdown__content dropdown__content--right dropdown__content--cart">
								Ваша корзина пуста
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};
