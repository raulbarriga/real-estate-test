import React from "react";

import './Card.css';

const Card = ({ property }) => {
  return (
    <div
      className="card"
      // key={}
    >
      <a href="/" className="router-link">
        <img
          src={property.photo}
          className="card-img-top img-fluid"
          alt="..."
        />
        <div id="card-body" className="card-body">
          <div className="row d-flex justify-content-between">
            <div className="col-sm-auto">
              <h5 className="card-title price">{property.price}</h5>
            </div>
            <div className="col-sm-auto">
              <h6 className="card-title details">
                {/* <FontAwesomeIcon className="fas" icon={faBed} /> */}
                {/* {" "} */}
                <span>{property.beds} bds</span>
                {/* &#124; */}{" "}
                {/* <FontAwesomeIcon className="fas" icon={faToilet} /> */}{" "}
                <span>{property.baths} ba</span>
                {/* &#124; */} 
                <span>
                {property.lot_size}
                </span>
              </h6>
            </div>
          </div>
          <span className="text-dark">
            <strong className="card-text">
              {/* <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} /> */}{" "}
              <span>
                {property.address_new.line}, {property.address_new.city},{" "}
                {property.address_new.state_code}{" "}
                {property.address_new.postal_code}
              </span>
            </strong>
          </span>
        </div>
        <div className="card-footer text-muted">
          For {property.prop_status === "for_sale" ? "For Sale" : "For Rent"}
        </div>
      </a>
    </div>
  );
};

export default Card;
