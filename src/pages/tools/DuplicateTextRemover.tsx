import React, { useState } from 'react';
import { Copy, Trash2 } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const DuplicateTextRemover: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState(false);
  const [stats, setStats] = useState<{ original: number; unique: number } | null>(null);

  const removeDuplicates = () => {
    if (!inputText.trim()) {
      alert('COLOCA ALGUM TEXTO, CARALHO!');
      return;
    }
    
    const lines = inputText.split('\n');
    const uniqueLines = [...new Set(lines.filter(line => line.trim()))];
    const result = uniqueLines.join('\n');
    
    setOutputText(result);
    setStats({
      original: lines.length,
      unique: uniqueLines.length
    });
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
      title="JOGA PRO LIMBO"
      emoji="🗑️"
      description="Remove linhas duplicadas de texto sem dó nem piedade. Ótimo para listas, e-mails, dados e qualquer texto que tenha repetições!"
    >
      <div className="space-y-6">
        <div>
          <label className="form-label">Cola aqui seu texto com repetições:</label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Cole aqui seu texto com linhas repetidas.
Cada linha em uma linha separada.
Cada linha em uma linha separada.
Uma linha repetida de exemplo.
Uma linha repetida de exemplo."
            className="form-input h-48"
          />
        </div>
        
        <button
          onClick={removeDuplicates}
          className="crazy-button w-full flex items-center justify-center"
        >
          <Trash2 className="w-5 h-5 mr-2" />
          <span>MANDA AS DUPLICADAS PRO CARALHO</span>
        </button>
        
        {outputText && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-2">
              <label className="form-label">TEXTO SEM REPETIÇÕES:</label>
              <button
                onClick={copyToClipboard}
                className="text-radioactive-yellow hover:text-neon-red transition-colors flex items-center font-vt323"
              >
                <Copy className="w-4 h-4 mr-1" />
                <span>COPIA</span>
              </button>
            </div>
            
            {stats && (
              <div className="bg-neon-red/10 p-2 rounded-t-lg border-t border-x border-neon-red flex justify-center space-x-8 font-vt323">
                <div>Linhas originais: <span className="text-radioactive-yellow">{stats.original}</span></div>
                <div>Linhas únicas: <span className="text-radioactive-yellow">{stats.unique}</span></div>
                <div>Removidas: <span className="text-neon-red">{stats.original - stats.unique}</span></div>
              </div>
            )}
            
            <div className={`bg-[#0A0A0A] p-4 rounded-lg ${stats ? 'rounded-t-none' : ''} border border-radioactive-yellow`}>
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

export default DuplicateTextRemover;