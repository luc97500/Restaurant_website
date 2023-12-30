import React from 'react';
import './style.css';
import Menu from './menuApi.js';
  import MenuCard from './MenuCard';
import Alert from './Alert';
// import { useState } from 'react';
const Rainyroof = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const filterItem=(category)=>{
    const updatedList =Menu.filter((curElem)=>{
          return curElem.category===category
    })
    setMenuData(updatedList)
  }
  return <>
  <nav className='navbar'>
      <div className='btn-group'>
        <button className='btn-group__item' onClick={()=>filterItem('Breakfast')}>Breakfast</button>
        <button className='btn-group__item' onClick={()=>filterItem('Lunch')}>Lunch</button>
        <button className='btn-group__item'onClick={()=>filterItem('Evening')}>Evening </button>
        <button className='btn-group__item'onClick={()=>filterItem('Dinner')}>Dinner </button>
      </div>
  </nav>
  <MenuCard menuData={menuData} />
  <Alert/>
  </>
};
export default Rainyroof;
