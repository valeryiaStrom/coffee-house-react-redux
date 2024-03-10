import React, { useState } from "react";
import Tabs from "../../base/tabs/tabs";
import Tab from "../../base/tab/tab";

const MenuItemModal = ({ data, isOpen }) => {
  const [selectedSizeId, setSelectedSizeId] = useState(0);
  const [selectedAdditivesIds, setSelectedAdditivesIds] = useState([]);

  const { id, imageSrc, name, description, currency, sizes, additives } = data;

  const handleSizeClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = parseFloat(clickedTab.getAttribute("data-id"));
      if (selectedSizeId !== clickedTabId) {
        setSelectedSizeId(clickedTabId);
      }
    }
  };

  const handleAdditiveClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = parseFloat(clickedTab.getAttribute("data-id"));
      const isAlreadySelected = selectedAdditivesIds.includes(clickedTabId);

      if (isAlreadySelected) {
        const newSelectedAdditives = selectedAdditivesIds.filter(
          (id) => id !== clickedTabId
        );
        setSelectedAdditivesIds(newSelectedAdditives);
      } else {
        setSelectedAdditivesIds([...selectedAdditivesIds, clickedTabId]);
      }
    }
  };

  const getTotalPrice = (data) => {
    const { price, sizes, additives } = data;
    const initialPrice = parseFloat(price);

    const selectedSizeData = sizes.find(({ id }) => id === selectedSizeId);
    const selectedSizeAddPrice = parseFloat(selectedSizeData["add-price"]);

    let totalSelectedAdditivesAddPrice = 0;

    if (selectedAdditivesIds.length) {
      const selectedAdditivesData = additives.filter((additive) => {
        return selectedAdditivesIds.includes(additive.id);
      });

      const selectedAdditivesAddPrices = selectedAdditivesData.map((additive) =>
        parseFloat(additive["add-price"])
      );

      totalSelectedAdditivesAddPrice = selectedAdditivesAddPrices.reduce(
        (sum, value) => sum + value,
        0
      );
    }

    const totalPrice =
      initialPrice + selectedSizeAddPrice + totalSelectedAdditivesAddPrice;

    return totalPrice;
  };

  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  const totalPrice = getTotalPrice(data);
  const totalPriceFormatted = formatPrice(totalPrice);

  return (
    <div
      className='overlay'
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) {
          isOpen(false);
        }
      }}
    >
      <div className='modal' data-id={id}>
        <div className='modal__image-wrapper'>
          <img src={imageSrc} alt={name} className='modal__image' />
        </div>

        <div className='modal__content'>
          <div className='modal__text'>
            <h3 className='modal__title'>{name}</h3>
            <p className='modal__description'>{description}</p>
          </div>

          <div className='modal__sizes'>
            <span className='modal__sizes-label'>Size</span>

            <Tabs cn={"modal__sizes-tabs"} onTabClick={handleSizeClick}>
              {sizes.map((sizeData) => {
                return (
                  <Tab
                    key={sizeData.id}
                    id={sizeData.id}
                    isActive={selectedSizeId === sizeData.id}
                    iconText={sizeData.label}
                    tabText={sizeData.size}
                  />
                );
              })}
            </Tabs>
          </div>

          <div className='modal__additivies'>
            <span className='modal__additivies-label'>Additives</span>

            <Tabs
              cn={"modal__additivies-tabs"}
              onTabClick={handleAdditiveClick}
            >
              {additives.map((additiveData, i) => {
                return (
                  <Tab
                    key={additiveData.id}
                    id={additiveData.id}
                    isActive={selectedAdditivesIds.includes(additiveData.id)}
                    iconText={i + 1}
                    tabText={additiveData.name}
                  />
                );
              })}
            </Tabs>
          </div>

          <div className='modal__total'>
            <span className='modal__total-label'>Total:</span>
            <h3 className='modal__total-price'>
              {currency}
              {totalPriceFormatted}
            </h3>
          </div>

          <div className='modal__alert'>
            <object
              type='image/svg+xml'
              data='/src/assets/images/icons/modal-icon-alert.svg'
              width='16'
              height='16'
            ></object>
            <span className='modal__alert-text'>
              The cost is not final. Download our mobile app to see the final
              price and place your order. Earn loyalty points and enjoy your
              favorite coffee with up to 20% discount.
            </span>
          </div>

          <button className='modal__close-btn' onClick={() => isOpen(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemModal;
