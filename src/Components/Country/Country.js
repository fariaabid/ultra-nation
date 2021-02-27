import React from 'react';

const Country = (props) => {
    // console.log(props.country.name);
    const {name,population,region,flag} = props.country;
    // console.log(props.country);
    const flagStyle = {height:'50px'};
    const countryStyle = {border:'1px solid red',margin:'20px',padding:'10px',alignItems:'center'}
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>this is {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;