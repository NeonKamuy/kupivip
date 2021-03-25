import React, { useCallback, useState } from "react";

export const ProductDeliveryButton: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleIsActive = useCallback(()=>setIsActive(e => !e), []);

    return (
        <div className="product__delivery__button__container">
            <div className={getButtonClassName(isActive)} onClick={toggleIsActive}>
                <span>Доставка и возврат</span>
                <span>{isActive ? "-" : "+"}</span>
            </div>

            <div className={getDescriptionClassName(isActive)}>
                <span>
                    Бесплатная доставка по России при покупке от 20 000 ₽ Вы можете
                    отказаться от заказанного товара в любое время до его получения,
                    в момент передачи товара курьером, а также после получения — в
                    течение 14 календарных дней. Читать условия полностью.
                </span>
            </div>
        </div>
    );
};

function getButtonClassName(isActive: boolean): string {
  return isActive ? ButtonClassName.active : ButtonClassName.default;
}

function getDescriptionClassName(isActive: boolean): string {
  return isActive ? DescriptionClassName.active : DescriptionClassName.default;
}

const ButtonClassName = {
    default: "product__delivery__button",
    active: "product__delivery__button active"
};

const DescriptionClassName = {
    default: "product__delivery__button__description",
    active: "product__delivery__button__description active"
};
