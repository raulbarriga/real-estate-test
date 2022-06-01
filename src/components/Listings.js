import React from 'react'

import Card from './Card/Card'

const Listings = ({currentProperties, propertiesPerPage}) => {
  return (
    <div id="card-columns" className="col-md">
        <div className="row">
        {currentProperties.slice(0, propertiesPerPage).map((property, index) => (
          <Card property={property} key={index} />
        ))} 
        </div>
    </div>
  )
}

export default Listings