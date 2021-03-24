import React from 'react';
import DiretaFilho from './DiretaFilho';


export default props => {
  return (
    <div>
      <DiretaFilho nome="Heleno" idade={20} nerd={true} />
      <DiretaFilho nome="Matheus" idade={17} nerd={false} />
    </div>
  );
}