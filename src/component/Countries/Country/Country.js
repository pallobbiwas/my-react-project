import React from 'react';

const Country = (props) => {
    console.log(props.country);
    return (
        <div>
            <h2>i am child of countries</h2>
        </div>
    );
};

export default Country;