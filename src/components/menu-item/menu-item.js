import React from "react";

const MenuItem = ({ props }) => {
  const { id, imageSrc, name, description, price, currency } = props;
  return (
    <article className='menu__item menu-item' data-id={id}>
      <div className='menu-item__image-wrapper'>
        <img className='menu-item__image' src={imageSrc} alt={name} />
      </div>

      <div className='menu-item__content'>
        <div className='menu-item__text'>
          <h3 className='menu-item__title'>{name}</h3>
          <p className='menu-item__description'>{description}</p>
        </div>

        <h3 className='menu-item__price'>
          {currency}
          {price}
        </h3>
      </div>
    </article>
  );
};

export default MenuItem;
