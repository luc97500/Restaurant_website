import React from 'react'

const MenuCard = ({menuData}) => {
    console.log(menuData);

    const Alert =() =>{
  alert("Order Placed Successfully")
    
    };
  return (
    <>
    <br></br>
    <center>
    <div>
    <h1 className='heading'>WELCOME TO RAINYROOF RESTAURANT MENU !! </h1>
    </div>
    <div>
      <h1 className='title'>
        @ Menu Cards Are Here !
      </h1>
    </div>
   
    {/* </font> */}
    </center>
   
    <section className='main-card--cointainer'>
    {menuData.map((curElem) =>{
      return(
        <>
        <div className='card-container' key={curElem.id}>
        <div className='card'>
          <div className='card-body'>
            <span className='card-number card-circle subtle'>{curElem.id}</span>
            <span className='card-author subtle'>{curElem.name}</span>
            <h2 className='card-title'>{curElem.name}</h2>
            <span className='card-description subtle'>{curElem.description}
            </span>
            <div className='card-read'>read</div>
            </div>
            <img src={curElem.image} alt='images' className='card-media'/>
            <span className='card-tag subtle'onClick= {Alert} >PLACE ORDER</span>
          </div>
        </div>  
        </>
      )
    })}
    </section>
    </>
  );
};
export default MenuCard

