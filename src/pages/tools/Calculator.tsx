import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [pendingOperator, setPendingOperator] = useState('');
  const [pendingValue, setPendingValue] = useState(0);
  const [computed, setComputed] = useState(false);

  const handleDigitButtonClick = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
    
    if (computed) {
      setComputed(false);
      setPendingOperator('');
      setPendingValue(0);
    }
  };

  const handlePointButtonClick = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const handleOperatorButtonClick = (operator: string) => {
    const operand = Number(display);

    if (pendingOperator && !waitingForOperand) {
      const newValue = calculate(pendingValue, operand, pendingOperator);
      setDisplay(String(newValue));
      setPendingValue(newValue);
    } else {
      setPendingValue(operand);
    }

    setWaitingForOperand(true);
    setPendingOperator(operator);
    setComputed(false);
  };

  const handleEqualsButtonClick = () => {
    if (!pendingOperator) return;

    const operand = Number(display);
    const newValue = calculate(pendingValue, operand, pendingOperator);
    
    setDisplay(String(newValue));
    setPendingValue(newValue);
    setPendingOperator('');
    setWaitingForOperand(true);
    setComputed(true);
  };

  const handleClearButtonClick = () => {
    setDisplay('0');
    setWaitingForOperand(false);
    setPendingOperator('');
    setPendingValue(0);
    setComputed(false);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string): number => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return secondOperand !== 0 ? firstOperand / secondOperand : NaN;
      default:
        return secondOperand;
    }
  };

  // Custom calculator button component
  const CalcButton: React.FC<{
    label: string;
    onClick: () => void;
    className?: string;
  }> = ({ label, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center font-bebas text-2xl p-4 rounded-lg 
                 transition-all duration-200 hover:scale-105 ${className}`}
    >
      {label}
    </button>
  );

  return (
    <ToolLayout
      title="CONTA PRA MIM"
      emoji="🧮"
      description="Calculadora com visual estiloso para resolver qualquer conta básica. Simples, direta e sem enrolação!"
    >
      <div className="max-w-xs mx-auto">
        <div className="bg-[#0A0A0A] p-4 rounded-t-lg border-2 border-neon-red mb-4">
          <div className="font-vt323 text-4xl text-radioactive-yellow text-right min-h-[48px] overflow-x-auto">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <CalcButton 
            label="C" 
            onClick={handleClearButtonClick} 
            className="bg-neon-red text-deep-black hover:bg-radioactive-yellow"
          />
          <CalcButton 
            label="±" 
            onClick={() => setDisplay(String(-parseFloat(display)))} 
            className="bg-[#333333] text-white hover:bg-[#444444]"
          />
          <CalcButton 
            label="%" 
            onClick={() => setDisplay(String(parseFloat(display) / 100))} 
            className="bg-[#333333] text-white hover:bg-[#444444]"
          />
          <CalcButton 
            label="÷" 
            onClick={() => handleOperatorButtonClick('/')} 
            className="bg-radioactive-yellow text-deep-black hover:bg-[#FFFFAA]"
          />
          
          <CalcButton 
            label="7" 
            onClick={() => handleDigitButtonClick('7')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="8" 
            onClick={() => handleDigitButtonClick('8')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="9" 
            onClick={() => handleDigitButtonClick('9')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="×" 
            onClick={() => handleOperatorButtonClick('*')} 
            className="bg-radioactive-yellow text-deep-black hover:bg-[#FFFFAA]"
          />
          
          <CalcButton 
            label="4" 
            onClick={() => handleDigitButtonClick('4')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="5" 
            onClick={() => handleDigitButtonClick('5')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="6" 
            onClick={() => handleDigitButtonClick('6')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="−" 
            onClick={() => handleOperatorButtonClick('-')} 
            className="bg-radioactive-yellow text-deep-black hover:bg-[#FFFFAA]"
          />
          
          <CalcButton 
            label="1" 
            onClick={() => handleDigitButtonClick('1')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="2" 
            onClick={() => handleDigitButtonClick('2')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="3" 
            onClick={() => handleDigitButtonClick('3')} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="+" 
            onClick={() => handleOperatorButtonClick('+')} 
            className="bg-radioactive-yellow text-deep-black hover:bg-[#FFFFAA]"
          />
          
          <CalcButton 
            label="0" 
            onClick={() => handleDigitButtonClick('0')} 
            className="col-span-2 bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="." 
            onClick={handlePointButtonClick} 
            className="bg-[#222222] text-white hover:bg-[#333333]"
          />
          <CalcButton 
            label="=" 
            onClick={handleEqualsButtonClick} 
            className="bg-neon-red text-white hover:bg-[#FF3060]"
          />
        </div>
      </div>
    </ToolLayout>
  );
};

export default Calculator;