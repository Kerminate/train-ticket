import React from 'react';
import switchImg from './imgs/switch.svg';
import './Journey.css';

const Journey = (props) => {
  const { from, to, exchangeFromTo, showCitySelector  } = props;
  return (
    <div className="journey">
      <div className="journey-station" onClick={() => showCitySelector(true)}>
        <input
          className="journey-input journey-from"
          type="text"
          readOnly
          name="from"
          value={from}
        />
      </div>
      <div className="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} alt="switch" width="70" height="40" />
      </div>
      <div className="journey-station" onClick={() => showCitySelector(false)}>
        <input
          className="journey-input journey-to"
          type="text"
          readOnly
          name="to"
          value={to}
        />
      </div>
    </div>
  );
};

export default Journey;
