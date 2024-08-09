import "./popup.css"
import React, { useState } from 'react';

const PopUp = ({toCount,onClose}) =>{
  const [used, setUsed] = useState('');
  const handleAddClick = () => {
    toCount(used);
  };
    return (
            <div className="popup">
              <div className="popup-inner">
                <h2>Сколько использовано?</h2>
                <div className="settings">
                  <input id='used' type="number" value={used} onChange={(e) => setUsed(e.target.value)} placeholder='количество' />
                </div>
                <button onClick={handleAddClick} >Добавить</button>
                <button onClick={onClose} className="close-button">Закрыть</button>
              </div>
            </div>
          );
        }

        export default PopUp;