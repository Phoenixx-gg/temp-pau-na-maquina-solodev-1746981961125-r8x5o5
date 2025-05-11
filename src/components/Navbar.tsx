import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bomb, PenTool as Tools, Zap } from 'lucide-react';

const toolCategories = [
  {
    title: "TEXTÃO 📝",
    tools: [
      { name: "ARRUMA TEXTO TODO TORTO", path: "/arruma-texto-todo-torto", emoji: "📏" },
      { name: "CONVERTE TUDO PRA CAPS LOCK", path: "/converte-tudo-pra-caps-lock", emoji: "⬆️" },
      { name: "JOGA PRO LIMBO", path: "/joga-pro-limbo", emoji: "🗑️" },
    ]
  },
  {
    title: "IDENTIDADE SECRETA 🕵️",
    tools: [
      { name: "DESCOBRE CPF FAKE", path: "/descobre-cpf-fake", emoji: "🔢" },
      { name: "GERADOR DE NICK INSANO", path: "/gerador-de-nick-insano", emoji: "🦹" },
      { name: "CRIA SENHA CABULOSA", path: "/senha-cabulosa", emoji: "🔐" },
    ]
  },
  {
    title: "TECNOMÁGICA 🧙",
    tools: [
      { name: "FAZ QR NA FAIXA", path: "/faz-qr-na-faixa", emoji: "📱" },
      { name: "DESFAZ QR PRA MIM", path: "/desfaz-qr-pra-mim", emoji: "🔍" },
      { name: "CONTA PRA MIM", path: "/conta-pra-mim", emoji: "🧮" },
      { name: "ZIPA ESSA MERDA", path: "/zipa-essa-merda", emoji: "🗜️" },
    ]
  }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMaintenanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('🚧 EM MANUTENÇÃO, CARAI! VOLTA DEPOIS! 🚧');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-black shadow-lg shadow-neon-red/30' : 'bg-transparent'
    }`}>
      <div className="overflow-hidden bg-neon-red py-1">
        <div className="marquee text-black font-bebas text-xl px-4">
          🔥 FERRAMENTAS INSANAS GRATUITAS 🔥 TECNOLOGIA ZUEIRA PARA QUALQUER UM 🔥 PAU NA MÁQUINA: TUDO EM UM SÓ LUGAR 🔥
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <Bomb className="w-8 h-8 text-neon-red mr-2 group-hover:animate-shake" />
          <h1 className="font-bebas text-3xl md:text-4xl neon-text">
            PAU NA <span className="text-radioactive-yellow yellow-neon-text">MÁQUINA</span>
          </h1>
        </Link>
        
        <div className="hidden lg:flex space-x-8 items-center">
          {toolCategories.map((category) => (
            <div key={category.title} className="group relative">
              <button className="navbar-link flex items-center font-bebas text-xl">
                <span>{category.title}</span>
                <span className="ml-1">▼</span>
              </button>
              
              <div className="absolute left-0 mt-2 w-80 bg-deep-black border-2 border-neon-red rounded-lg shadow-lg shadow-neon-red/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 z-10">
                <div className="grid gap-2">
                  {category.tools.map((tool) => (
                    <Link 
                      key={tool.path} 
                      to={tool.path} 
                      className="flex items-center px-4 py-2 hover:bg-neon-red/10 rounded-md transition-colors"
                    >
                      <span className="mr-2">{tool.emoji}</span>
                      <span className="font-vt323 text-lg">{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/" className="navbar-link font-bebas text-xl flex items-center">
            <Tools className="w-5 h-5 mr-1" />
            <span>TODAS</span>
          </Link>
          
          <button 
            onClick={handleMaintenanceClick}
            className="crazy-button flex items-center relative overflow-hidden group"
          >
            <Zap className="w-5 h-5 mr-2" />
            <span>DESCE A LENHA</span>
            <div className="absolute inset-0 bg-radioactive-yellow/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
        
        <button 
          className="lg:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-deep-black border-t-2 border-neon-red">
          <div className="container mx-auto px-4 py-6 space-y-6">
            {toolCategories.map((category) => (
              <div key={category.title} className="space-y-3">
                <h3 className="font-bebas text-xl text-radioactive-yellow">{category.title}</h3>
                <div className="grid gap-2 pl-4">
                  {category.tools.map((tool) => (
                    <Link 
                      key={tool.path} 
                      to={tool.path} 
                      className="flex items-center py-2 hover:text-neon-red transition-colors"
                    >
                      <span className="mr-2">{tool.emoji}</span>
                      <span className="font-vt323 text-lg">{tool.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-neon-red/30">
              <Link to="/" className="flex items-center py-2 hover:text-neon-red transition-colors">
                <Tools className="w-5 h-5 mr-2" />
                <span className="font-bebas text-xl">TODAS FERRAMENTAS</span>
              </Link>
            </div>
            
            <button 
              onClick={handleMaintenanceClick}
              className="crazy-button flex items-center justify-center w-full"
            >
              <Zap className="w-5 h-5 mr-2" />
              <span>DESCE A LENHA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;