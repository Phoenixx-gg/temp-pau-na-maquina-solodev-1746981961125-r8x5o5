import React, { useState } from 'react';
import { Copy, ArrowUp } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const CapsLockConverter: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const convertToCapsLock = () => {
    if (!inputText.trim()) {
      alert('COLOCA ALGUM TEXTO, CARALHO!');
      return;
    }
    
    setOutputText(inputText.toUpperCase());
  };

  const copyToClipboard = () => {
    if (!outputText) return;
    
    navigator.clipboard.writeText(outputText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolLayout
      title="CONVERTE TUDO PRA CAPS LOCK"
      emoji="⬆️"
      description="TRANSFORMA qualquer texto em GRITARIA TOTAL. Ideal para reclamações, momentos de raiva ou quando você quer parecer MUITO PUTO!"
    >
      <div className="space-y-6">
        <div>
          <label className="form-label">Cola aqui seu texto pacífico:</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Digite ou cole seu texto normal aqui e vamos transformar em GRITARIA TOTAL."
            className="form-input h-48"
          />
        </div>
        
        <button
          onClick={convertToCapsLock}
          className="crazy-button w-full flex items-center justify-center"
        >
          <ArrowUp className="w-5 h-5 mr-2" />
          <span>ATIVA ESSA PORRA DE CAPS LOCK</span>
        </button>
        
        {outputText && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <label className="form-label">TEXTO GRITANDO:</label>
              <button
                onClick={copyToClipboard}
                className="text-radioactive-yellow hover:text-neon-red transition-colors flex items-center font-vt323"
              >
                <Copy className="w-4 h-4 mr-1" />
                <span>COPIA</span>
              </button>
            </div>
            
            <div className="bg-[#0A0A0A] p-4 rounded-lg border border-radioactive-yellow">
              <div className="font-vt323 text-xl text-white whitespace-pre-wrap">
                {outputText}
              </div>
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

export default CapsLockConverter;