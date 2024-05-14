// TreeComponent.jsx
import React from 'react';

const TreeComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Tree Container */}
      <div className="flex-1 flex justify-center items-center bg-black">
        <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#DBE5F3" strokeWidth="1">
            {/* Main Trunk */}
            <line x1="400" y1="500" x2="400" y2="350" />
            {/* Primary Branches */}
            <line x1="400" y1="350" x2="300" y2="300" />
            <line x1="400" y1="350" x2="500" y2="300" />
            {/* Secondary Branches */}
            <line x1="300" y1="300" x2="250" y2="250" />
            <line x1="300" y1="300" x2="350" y2="250" />
            <line x1="500" y1="300" x2="450" y2="250" />
            <line x1="500" y1="300" x2="550" y2="250" />
            {/* Tertiary Branches */}
            <line x1="250" y1="250" x2="200" y2="200" />
            <line x1="250" y1="250" x2="300" y2="200" />
            <line x1="350" y1="250" x2="300" y2="200" />
            <line x1="350" y1="250" x2="400" y2="200" />
            <line x1="450" y1="250" x2="400" y2="200" />
            <line x1="450" y1="250" x2="500" y2="200" />
            <line x1="550" y1="250" x2="500" y2="200" />
            <line x1="550" y1="250" x2="600" y2="200" />
            {/* Nodes */}
            <circle cx="400" cy="350" r="4" fill="red" />
            <circle cx="300" cy="300" r="4" fill="red" />
            <circle cx="500" cy="300" r="4" fill="red" />
            <circle cx="250" cy="250" r="4" fill="red" />
            <circle cx="350" cy="250" r="4" fill="red" />
            <circle cx="450" cy="250" r="4" fill="red" />
            <circle cx="550" cy="250" r="4" fill="red" />
            <circle cx="200" cy="200" r="4" fill="red" />
            <circle cx="300" cy="200" r="4" fill="red" />
            <circle cx="400" cy="200" r="4" fill="red" />
            <circle cx="500" cy="200" r="4" fill="red" />
            <circle cx="600" cy="200" r="4" fill="red" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TreeComponent;
