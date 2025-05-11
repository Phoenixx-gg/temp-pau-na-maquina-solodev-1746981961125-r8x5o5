import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import ToolLayout from '../../components/ToolLayout';

const QRCodeGenerator: React.FC = () => {
  const [value, setValue] = useState('');
  const [qrSize, setQrSize] = useState(256);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');
  const [qrVisible, setQrVisible] = useState(false);

  const handleGenerate = () => {
    if (!value.trim()) {
      alert('COLOCA ALGUMA COISA, CACETE!');
      return;
    }
    setQrVisible(true);
  };

  const handleDownload = () => {
    const svg = document.getElementById('qrcode');
    if (!svg) return;
    
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = qrSize;
      canvas.height = qrSize;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.download = 'qrcode_pau_na_maquina.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <ToolLayout
      title="FAZ QR NA FAIXA"
      emoji="📱"
      description="Gera QR codes em segundos para seus links ou textos. Customize as cores e baixe em PNG para usar onde quiser!"
    >
      <div className="space-y-6">
        <div>
          <label className="form-label">O que tu quer no QR Code?</label>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="URL, texto, contato... qualquer porra aqui"
            className="form-input h-32"
          />
        </div>
        
        <div>
          <label className="form-label">Tamanho (100-400px):</label>
          <input
            type="range"
            min="100"
            max="400"
            value={qrSize}
            onChange={(e) => setQrSize(parseInt(e.target.value))}
            className="w-full h-2 bg-deep-black rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1 text-radioactive-yellow font-vt323">
            <span>100px</span>
            <span>{qrSize}px</span>
            <span>400px</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Cor do Fundo:</label>
            <div className="flex space-x-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-12 w-12 border-2 border-neon-red rounded"
              />
              <input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          
          <div>
            <label className="form-label">Cor do QR:</label>
            <div className="flex space-x-2">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-12 w-12 border-2 border-neon-red rounded"
              />
              <input
                type="text"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleGenerate}
          className="crazy-button w-full flex items-center justify-center"
        >
          <span>GERA O QR CODE AGORA</span>
        </button>
        
        {qrVisible && (
          <div className="mt-8 flex flex-col items-center">
            <div 
              className="p-4 rounded-lg shadow-lg mb-4"
              style={{ backgroundColor: bgColor }}
            >
              <QRCode
                id="qrcode"
                value={value}
                size={qrSize}
                bgColor={bgColor}
                fgColor={fgColor}
              />
            </div>
            
            <button
              onClick={handleDownload}
              className="crazy-button"
            >
              <span>BAIXA ESSA PORRA</span>
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default QRCodeGenerator;