import React from 'react';
import cardsMenuData from './datahome';
import CardsMenuItem from './CardsMenuItem';

const CardsMenu = () => cardsMenuData.length > 0 && (
  <>
    {cardsMenuData.map((data, index) => (
      <CardsMenuItem datahome={data} key={index}/>
    ))}
  </>
)

export default CardsMenu;
