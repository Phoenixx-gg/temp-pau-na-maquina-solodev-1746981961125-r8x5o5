import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const FakeCPFGenerator: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [formattedCpf, setFormattedCpf] = useState('');
  const [copied, setCopied] = useState(false);

  // Calculate the verification digit
  const calculateDigit = (digits: number[]): number => {
    const sum = digits.reduce((acc, curr, idx) => acc + curr * (digits.length + 1 - idx), 0);
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  // Generate a valid CPF
  const generateCPF = () => {
    // Generate the first 9 digits randomly
    const digits: number[] = [];
    for (let i = 0; i < 9; i++) {
      digits.push(Math.floor(Math.random() * 10));
    }
    
    // Calculate first verification digit
    const digit1 = calculateDigit(digits);
    digits.push(digit1);
    
    // Calculate second verification digit
    const digit2 = calculateDigit(digits);
    digits.push(digit2);
    
    // Convert array to string
    const rawCpf = digits.join('');
    
    // Format CPF
    const formattedCpf = `${rawCpf.slice(0, 3)}.${rawCpf.slice(3, 6)}.${rawCpf.slice(6, 9)}-${rawCpf.slice(9)}`;
    
    setCpf(rawCpf);
    setFormattedCpf(formattedCpf);
    setCopied(false);
  };

  const copyToClipboard = (formatted: boolean) => {
    const textToCopy = formatted ? formattedCpf : cpf;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolLayout
      title="DESCOBRE CPF FAKE"
      emoji="🔢"
      description="Gera CPFs válidos para testes (sem golpe, é claro). Útil para desenvolvedores, testers e formulários que precisam de um CPF válido!"
    >
      <div className="space-y-6">
        <div className="bg-[#1A1A1A] p-6 border border-radioactive-yellow rounded-lg">
          <p className="font-vt323 text-lg text-gray-300 mb-4">
            ⚠️ <span className="text-radioactive-yellow">AVISO LEGAL:</span> Esses CPFs são <span className="text-neon-red">APENAS PARA TESTES</span>! 
            Usar dados falsos para fraudes é crime. Não seja otário. Esta ferramenta é para desenvolvedores testarem sistemas, não pra você tentar golpes.
          </p>
        </div>
        
        <button
          onClick={generateCPF}
          className="crazy-button w-full flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          <span>GERA UM CPF AÍ</span>
        </button>
        
        {cpf && (
          <div className="mt-8">
            <h3 className="form-label mb-4">SEU CPF FALSO:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0A0A0A] p-4 rounded-lg border border-radioactive-yellow relative">
                <h4 className="font-vt323 text-lg text-gray-400 mb-2">SEM FORMATAÇÃO:</h4>
                <div className="font-vt323 text-3xl text-white break-all mb-2">
                  {cpf}
                </div>
                <button
                  onClick={() => copyToClipboard(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-red hover:bg-radioactive-yellow transition-colors flex items-center justify-center"
                >
                  <Copy className="w-5 h-5 text-deep-black" />
                </button>
              </div>
              
              <div className="bg-[#0A0A0A] p-4 rounded-lg border border-radioactive-yellow relative">
                <h4 className="font-vt323 text-lg text-gray-400 mb-2">COM FORMATAÇÃO:</h4>
                <div className="font-vt323 text-3xl text-white break-all mb-2">
                  {formattedCpf}
                </div>
                <button
                  onClick={() => copyToClipboard(true)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-red hover:bg-radioactive-yellow transition-colors flex items-center justify-center"
                >
                  <Copy className="w-5 h-5 text-deep-black" />
                </button>
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

export default FakeCPFGenerator;