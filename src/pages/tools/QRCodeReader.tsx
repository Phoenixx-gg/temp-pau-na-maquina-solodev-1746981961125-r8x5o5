import React, { useState, useRef } from 'react';
import QrScanner from 'qr-scanner';
import { Upload, Copy } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const QRCodeReader: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      const result = await QrScanner.scanImage(file);
      setResult(result);
      setError(null);
    } catch (err) {
      setError('CARALHO, NÃO ACHEI QR CODE NENHUM NESSA IMAGEM!');
      setResult(null);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    
    try {
      const result = await QrScanner.scanImage(file);
      setResult(result);
      setError(null);
    } catch (err) {
      setError('CARALHO, NÃO ACHEI QR CODE NENHUM NESSA IMAGEM!');
      setResult(null);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolLayout
      title="DESFAZ QR PRA MIM"
      emoji="🔍"
      description="Lê QR codes de imagens e descobre o que tem dentro. Só arrastar e soltar a imagem, ou escolher um arquivo do seu computador!"
    >
      <div className="space-y-6">
        <div
          className="border-2 border-dashed border-neon-red rounded-lg p-8 text-center cursor-pointer hover:border-radioactive-yellow transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 text-neon-red mx-auto mb-4" />
          <p className="font-vt323 text-xl mb-4">
            ARRASTA E SOLTA uma imagem com QR code aqui<br />
            OU<br />
            CLICA PARA ESCOLHER um arquivo
          </p>
          <p className="text-gray-400 font-vt323">
            Formatos suportados: JPG, PNG, GIF, WEBP
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </div>
        
        {error && (
          <div className="bg-neon-red/20 border border-neon-red rounded-lg p-4 text-neon-red font-vt323 text-xl">
            {error}
          </div>
        )}
        
        {result && (
          <div className="mt-8">
            <h3 className="form-label">CONTEÚDO ENCONTRADO:</h3>
            <div className="bg-[#0A0A0A] p-4 rounded-lg border border-radioactive-yellow relative">
              <div className="font-vt323 text-xl text-white break-all pr-12">
                {result}
              </div>
              
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 w-10 h-10 rounded-full bg-neon-red hover:bg-radioactive-yellow transition-colors flex items-center justify-center"
              >
                <Copy className="w-5 h-5 text-deep-black" />
              </button>
            </div>
            
            {copied && (
              <div className="mt-2 text-radioactive-yellow font-vt323 text-center">
                COPIADO PRA CARALHO! ✓
              </div>
            )}
            
            {result.startsWith('http') && (
              <div className="mt-4 text-center">
                <a
                  href={result}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crazy-button inline-flex"
                >
                  <span>ABRE ESSE LINK</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default QRCodeReader;