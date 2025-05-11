import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let chars = '';
    if (useUppercase) chars += uppercaseChars;
    if (useLowercase) chars += lowercaseChars;
    if (useNumbers) chars += numberChars;
    if (useSymbols) chars += symbolChars;
    
    if (chars === '') {
      setPassword('SELECIONA ALGUMA OPÇÃO, PORRA!');
      return;
    }
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    
    setPassword(generatedPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!password || password === 'SELECIONA ALGUMA OPÇÃO, PORRA!') return;
    
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolLayout
      title="CRIA SENHA CABULOSA"
      emoji="🔐"
      description="Gera senhas tão seguras que nem o FBI vai conseguir quebrar. Escolha o tamanho e os caracteres que você quer usar!"
    >
      <div className="space-y-6">
        <div>
          <label className="form-label">Tamanho da Senha (8-64):</label>
          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-2 bg-deep-black rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1 text-radioactive-yellow font-vt323">
            <span>8</span>
            <span>{length}</span>
            <span>64</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="uppercase"
              checked={useUppercase}
              onChange={() => setUseUppercase(!useUppercase)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="uppercase" className="ml-2 text-xl font-vt323">
              LETRAS MAIÚSCULAS (A-Z)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="lowercase"
              checked={useLowercase}
              onChange={() => setUseLowercase(!useLowercase)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="lowercase" className="ml-2 text-xl font-vt323">
              letras minúsculas (a-z)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="numbers"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="numbers" className="ml-2 text-xl font-vt323">
              NÚMEROS (0-9)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="symbols"
              checked={useSymbols}
              onChange={() => setUseSymbols(!useSymbols)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="symbols" className="ml-2 text-xl font-vt323">
              SÍMBOLOS (!@#$%&*)
            </label>
          </div>
        </div>
        
        <button
          onClick={generatePassword}
          className="crazy-button w-full flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          <span>GERA ESSA PORRA</span>
        </button>
        
        {password && (
          <div className="mt-8">
            <div className="bg-[#0A0A0A] p-4 rounded-lg border border-radioactive-yellow relative">
              <div className="font-vt323 text-2xl text-white break-all">
                {password}
              </div>
              
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 w-10 h-10 rounded-full bg-neon-red hover:bg-radioactive-yellow transition-colors flex items-center justify-center"
                disabled={password === 'SELECIONA ALGUMA OPÇÃO, PORRA!'}
              >
                <Copy className="w-5 h-5 text-deep-black" />
              </button>
            </div>
            
            {copied && (
              <div className="mt-2 text-radioactive-yellow font-vt323 text-center">
                COPIADO PRA CARALHO! ✓
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default PasswordGenerator;