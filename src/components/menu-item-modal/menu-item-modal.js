import React, { useState } from "react";

const MenuItemModal = ({ data, isOpen }) => {
  const { id, imageSrc, name, description, price, currency, sizes, additives } =
    data;

  const [selectedSizeId, setSelectedSizeId] = useState(0);
  const [selectedAdditivesIds, setSelectedAdditivesIds] = useState([]);

  const handleSizeClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = Number(clickedTab.getAttribute("data-id"));
      if (selectedSizeId !== clickedTabId) {
        setSelectedSizeId(clickedTabId);
      }
    }
  };

  const handleAdditiveClick = (e) => {
    if (e.target.closest(".tab")) {
      const clickedTab = e.target.closest(".tab");
      const clickedTabId = Number(clickedTab.getAttribute("data-id"));
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
            <div className='modal__sizes-tabs tabs' onClick={handleSizeClick}>
              {sizes.map((sizeData) => {
                return (
                  <>
                    <div
                      key={sizeData.id}
                      className={
                        selectedSizeId === sizeData.id
                          ? "tab tab_active"
                          : "tab"
                      }
                      data-id={sizeData.id}
                      data-addprice={sizeData["add-price"]}
                    >
                      <span className='tab__icon'>
                        <span className='icon'>{sizeData.label}</span>
                      </span>
                      <span className='tab__text'>{sizeData.size}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className='modal__additivies'>
            <span className='modal__additivies-label'>Additives</span>

            <div
              className='modal__additivies-tabs tabs'
              onClick={handleAdditiveClick}
            >
              {additives.map((additiveData, i) => {
                return (
                  <>
                    <div
                      key={additiveData.id}
                      className={
                        selectedAdditivesIds.includes(additiveData.id)
                          ? "tab tab_active"
                          : "tab"
                      }
                      data-id={additiveData.id}
                      data-addprice={additiveData["add-price"]}
                    >
                      <span className='tab__icon'>
                        <span className='icon'>{i + 1}</span>
                      </span>
                      <span className='tab__text'>{additiveData.name}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className='modal__total'>
            <span className='modal__total-label'>Total:</span>
            <h3 className='modal__total-price'>
              {currency}
              {price}
            </h3>
          </div>

          <div className='modal__alert'>
            <object
              type='image/svg+xml'
              data='/src/assets/images/icons/modal-icon-alert.svg'
              width='16'
              height='16'
            >
              {" "}
            </object>
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
