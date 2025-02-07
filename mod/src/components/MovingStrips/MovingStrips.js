import React from 'react';
import './MovingStrips.css';

const MovingStrips = () => {
  return (
    <div className="moving-strips-container">
      <div className="strip blue">
        <div className="strip-content">
          <span>
            DEDICATED SUPPORT 24/7  •  FLEXIBLE PRICING  •  TOP-NOTCH EXPERTS  •  ALL-INCLUSIVE SERVICES
          </span>
          <span>
            DEDICATED SUPPORT 24/7  •  FLEXIBLE PRICING  •  TOP-NOTCH EXPERTS  •  ALL-INCLUSIVE SERVICES
          </span>
        </div>
      </div>
      <div className="strip black">
        <div className="strip-content">
          <span>
            FLEXIBLE PRICING • TOP-NOTCH EXPERTS • DEDICATED SUPPORT 24/7 • ALL-INCLUSIVE SERVICES
          </span>
          <span>
            FLEXIBLE PRICING • TOP-NOTCH EXPERTS • DEDICATED SUPPORT 24/7 • ALL-INCLUSIVE SERVICES
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovingStrips;