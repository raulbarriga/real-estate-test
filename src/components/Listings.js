import React from 'react'

import Card from './Card/Card'

const Listings = ({dataForSale, visibleItems}) => {
  return (
    <div id="card-columns" className="col-md">
        <div className="row">
        {dataForSale.slice(0, visibleItems).map((property, index) => (
          <Card property={property} key={index} />
        ))} 
        </div>
    </div>
  )
}

export default Listings