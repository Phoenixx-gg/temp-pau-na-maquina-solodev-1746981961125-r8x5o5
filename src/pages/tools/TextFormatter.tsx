import React, { useState } from 'react';
import { Copy, ArrowDownUp } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const TextFormatter: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);

  const formatText = () => {
    if (!inputText.trim()) {
      alert('COLOCA ALGUM TEXTO, CARALHO!');
      return;
    }
    
    let formatted = inputText;
    
    // Fix multiple spaces and line breaks
    formatted = formatted.replace(/[\s\n]+/g, ' ').trim();
    
    // Fix spacing after punctuation
    formatted = formatted.replace(/([.,!?;:])\s*/g, '$1 ');
    
    // Remove spaces before punctuation
    formatted = formatted.replace(/\s+([.,!?;:])/g, '$1');
    
    // Fix multiple punctuation
    formatted = formatted.replace(/([.,!?;:])+/g, '$1');
    
    // Fix capitalization after sentence endings
    formatted = formatted.replace(/([.!?])\s+([a-z])/g, (match, p1, p2) => 
      `${p1} ${p2.toUpperCase()}`
    );
    
    // Capitalize first letter of the text
    formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    
    // Fix quotes spacing
    formatted = formatted.replace(/"\s+/g, '" ');
    formatted = formatted.replace(/\s+"/g, ' "');
    
    // Fix parentheses spacing
    formatted = formatted.replace(/\(\s+/g, '(');
    formatted = formatted.replace(/\s+\)/g, ')');
    
    // Fix em-dash spacing
    formatted = formatted.replace(/\s*—\s*/g, ' — ');
    
    // Fix ellipsis
    formatted = formatted.replace(/\.{3,}/g, '...');
    
    // Fix multiple exclamation/question marks
    formatted = formatted.replace(/([!?]){2,}/g, '$1');
    
    setOutputText(formatted);
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
      title="ARRUMA TEXTO TODO TORTO"
      emoji="📏"
      description="Formata e organiza textos bagunçados em segundos. Corrige espaços, pontuação e capitalização automaticamente!"
    >
      <div className="space-y-6">
        <div>
          <label className="form-label">Cola aqui seu texto todo ZOADO:</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="text0  T0d0   ZuA dO  aQu1,  cOm   MuiTO  e5p@ço e P0nTuaçã0  eRR@d@..."
            className="form-input h-48"
          />
        </div>
        
        <button
          onClick={formatText}
          className="crazy-button w-full flex items-center justify-center"
        >
          <ArrowDownUp className="w-5 h-5 mr-2" />
          <span>ARRUMA ESSA MERDA</span>
        </button>
        
        {outputText && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <label className="form-label">TEXTO ARRUMADO:</label>
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

export default TextFormatter;