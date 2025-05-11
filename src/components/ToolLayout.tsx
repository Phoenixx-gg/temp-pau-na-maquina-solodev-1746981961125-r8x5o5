import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ToolLayoutProps {
  title: string;
  emoji: string;
  description: string;
  children: ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ 
  title, 
  emoji, 
  description, 
  children 
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-radioactive-yellow hover:text-neon-red transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-vt323 text-lg">VOLTA PRO COMEÇO</span>
      </Link>
      
      <div className="bg-deep-black border-2 border-neon-red rounded-lg overflow-hidden mb-12">
        <div className="bg-neon-red p-4">
          <div className="flex items-center">
            <div className="text-4xl mr-3">{emoji}</div>
            <h1 className="font-bebas text-3xl md:text-4xl text-deep-black">{title}</h1>
          </div>
        </div>
        
        <div className="p-6">
          <p className="font-vt323 text-xl text-gray-300 mb-8">{description}</p>
          
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-radioactive-yellow/30">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;