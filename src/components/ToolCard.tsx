import React from 'react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  title: string;
  description: string;
  path: string;
  emoji: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, path, emoji }) => {
  return (
    <Link to={path} className="block">
      <div className="tool-card h-full">
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-2xl font-bebas text-radioactive-yellow mb-2">{title}</h3>
        <p className="text-gray-300 font-vt323 text-lg mb-4">{description}</p>
        <div className="text-neon-red font-bebas text-lg flex items-center justify-end">
          USA ESSA PORRA →
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;