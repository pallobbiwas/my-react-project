import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, region, flags} =
    props.country;
  return (
    <div className="design">
      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <h2>Capital: {capital ? capital:'unknown'}</h2>
      <h2>Region: {region}</h2>
    </div>
  );
};

export default Country;
