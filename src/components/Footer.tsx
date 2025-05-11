import React from 'react';
import { Github, Twitter, Instagram, RefreshCw } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-black border-t-2 border-neon-red mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bebas flex items-center mb-6">
            <RefreshCw className="w-5 h-5 mr-2 text-radioactive-yellow animate-spin" />
            <span className="flicker-text">Se der ruim, reinicia o mundo. PAU NA MÁQUINA 🔥</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-8">
            <div>
              <h3 className="text-xl font-bebas text-radioactive-yellow mb-4">SOBRE ESSA LOUCURA</h3>
              <p className="text-gray-300 font-vt323 text-lg">
                PAU NA MÁQUINA é um projeto de utilitários online GRATUITOS com ZERO burocracia.
                Criamos ferramentas úteis para quem não tem paciência para frescuras.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bebas text-radioactive-yellow mb-4">LINKS MANEIROS</h3>
              <ul className="space-y-2 font-vt323 text-lg">
                <li>
                  <a href="#" className="text-gray-300 hover:text-neon-red transition-colors">
                    ⚡ Política de Privacidade (quase nenhuma)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-neon-red transition-colors">
                    🔥 Termos de Uso (usa aí, é grátis)
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-neon-red transition-colors">
                    💬 Contato (se quiser reclamar)
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bebas text-radioactive-yellow mb-4">SIGANOS NA ZUEIRA</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neon-red flex items-center justify-center hover:bg-radioactive-yellow transition-colors"
                  aria-label="Github"
                >
                  <Github className="w-6 h-6 text-deep-black" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neon-red flex items-center justify-center hover:bg-radioactive-yellow transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-deep-black" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neon-red flex items-center justify-center hover:bg-radioactive-yellow transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-deep-black" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 font-vt323 text-sm border-t border-neon-red/30 pt-6 w-full">
            <p>© 2025 PAU NA MÁQUINA - Feito com 🖤 e muita cafeína</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;