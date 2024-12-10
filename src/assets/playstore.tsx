import React from 'react';

const PlayStore = ({ color = '#000000', size = 64 }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke={color}
      fill="none"
      width={size}
      height={size}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12.36,53.33V10.67a1,1,0,0,1,1.56-.91L51.11,31a1,1,0,0,1,0,1.81L13.93,54.24A1.05,1.05,0,0,1,12.36,53.33Z"></path>
        <line x1="12.36" y1="10.67" x2="42.07" y2="38.02"></line>
        <line x1="12.36" y1="53.33" x2="41.24" y2="25.35"></line>
      </g>
    </svg>
  );
};

export default PlayStore;
