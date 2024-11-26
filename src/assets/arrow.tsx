import React from 'react';

const Arrow = ({ size = 24, color = '#2196F3', rotate = 0 }) => {
  return (
    <svg
      style={{ transform: `rotate(${rotate}deg)` }}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z" />
    </svg>
  );
};

export default Arrow;
