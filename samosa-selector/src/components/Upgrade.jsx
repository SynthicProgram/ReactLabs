import {useState} from 'react';

const Upgrade = (props) => {
    return (
        <div className="upgrade">
          <h3>{props.upgradeName}</h3>
          <p>{props.upgradeMult}x per Click</p>
          <button onClick={props.upgradeFunct}>{props.upgradeCost} samosas</button>
        </div>
    )
}

export default Upgrade;