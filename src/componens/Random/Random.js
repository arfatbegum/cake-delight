import React from 'react';

const Random = ({random }) => {
    const { name } =random;
    return (
        <div>
        <h2>{name}</h2>
        </div>
    );
};

export default Random;