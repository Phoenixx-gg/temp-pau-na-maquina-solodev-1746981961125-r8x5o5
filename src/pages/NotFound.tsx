import React from 'react';
import { Link } from 'react-router-dom';
import { Ban, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="mb-8">
        <Ban className="w-24 h-24 text-neon-red mx-auto mb-4" />
        <h1 className="font-bebas text-5xl md:text-7xl neon-text mb-4">
          PÁGINA NÃO <span className="text-radioactive-yellow yellow-neon-text">ENCONTRADA</span>
        </h1>
        <p className="font-vt323 text-2xl max-w-2xl mx-auto mb-8">
          CARALHO, VOCÊ SE PERDEU! Essa página não existe ou foi deletada da existência.
        </p>
      </div>
      
      <Link to="/" className="crazy-button flex items-center">
        <Home className="w-5 h-5 mr-2" />
        <span>VOLTA PRO INÍCIO, CACETE</span>
      </Link>
    </div>
  );
};

export default NotFound;