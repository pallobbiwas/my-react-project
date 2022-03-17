import { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country/Country";

const Countries = () => {
  return (
    <div>
      <h1>i am Countries</h1>
      <LoadData></LoadData>
    </div>
  );
};
//load data from api
const LoadData = () => {
  const [countris, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(datas => setCountries(datas))
  },[])
  return (<div className="pranetDiv">
      {
          countris.map(country => <Country
            country = {country}
            key={country.cca3}
          ></Country>)
          
      }
  </div>);
};

export default Countries;
