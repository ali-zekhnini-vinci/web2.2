import React, { useState } from 'react';

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox: React.FC = () => {
    const [colorIndex, setColorIndex] = useState(0);

    const nextColor = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    };

    return (
        <div style={{ backgroundColor: colors[colorIndex], width: '200px', height: '200px', padding: '20px', margin: '10px' }}>
            <button onClick={nextColor}>
                {colors[(colorIndex + 1) % colors.length]}
            </button>
            <p>{colors[colorIndex]}</p>
        </div>
    );
};

export default ColorBox;
