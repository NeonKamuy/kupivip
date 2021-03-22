import React from "react";

export const FooterPayments: React.FC<{}> = () => {
	return (
		<div className="footer__payments">
			<div className="container container--large">
				<div className="footer__payments-wrapper">
					<figure className="footer__payments-image">
						<img src="/assets/img/card.png" alt="" />
					</figure>
					<article className="footer__payments-description">
						Вы можете оплачивать заказы банковскими картами или
						наличными при получении
					</article>
				</div>
			</div>
		</div>
	);
};
