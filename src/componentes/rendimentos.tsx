import React, { useState } from 'react';
import { ButtonGroup, FormControl, InputGroup, ToggleButton } from 'react-bootstrap';
import './rendimentos.css';


function Rendimentos() {

    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Bruto', value: '1' },
      { name: 'Liquido', value: '2' },
    ];
  
  return (
    <div className="rendimento">
        <label htmlFor="tipoRendimento">Rendimento</label>
        <div className="buttonGroup mt-3">
            <ButtonGroup>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant='outline-dark'
                        name="tipoRendimento"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
        <div className="formRendimento mt-2" >
            <label htmlFor="aporteInicial">Aporte Inicial</label>
            <InputGroup className="mb-2">
                <FormControl aria-label="aporte"/>
            </InputGroup>
            <label htmlFor="aporteInicial">Prazo (em meses)</label>
            <InputGroup className="mb-2">
                <FormControl aria-label="prazo" />
            </InputGroup>
            <label htmlFor="aporteInicial">IPCA (ao ano)</label>
            <InputGroup className="mb-2">
                <FormControl aria-label="ipca" />
            </InputGroup>
        </div>        

    </div>
  );
}

export default Rendimentos;
