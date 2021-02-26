import React from 'react';

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: '18px',
  };
  return (
    <div>
      <p style={contentStyle}>{children}</p>
    </div>
  );
};

export default ColorfulMessage;
