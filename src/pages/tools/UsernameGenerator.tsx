import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

const UsernameGenerator: React.FC = () => {
  const [username, setUsername] = useState('');
  const [usernameHistory, setUsernameHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  
  const [useAdjectives, setUseAdjectives] = useState(true);
  const [useNouns, setUseNouns] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecialChars, setUseSpecialChars] = useState(false);
  const [useGaming, setUseGaming] = useState(false);

  const adjectives = [
    'Crazy', 'Epic', 'Mega', 'Super', 'Ultra', 'Wild', 'Dark', 'Fire', 'Ghost',
    'Ice', 'Toxic', 'Shadow', 'Thunder', 'Neon', 'Pixel', 'Cyber', 'Hyper', 'Laser',
    'Pro', 'Elite', 'Legend', 'Master', 'Ninja', 'Savage', 'Brutal', 'Extreme', 'Fatal'
  ];

  const nouns = [
    'Ninja', 'Dragon', 'Wolf', 'Hawk', 'Tiger', 'Viper', 'Phoenix', 'Cobra', 'Falcon',
    'Hunter', 'Warrior', 'Sniper', 'Assassin', 'Knight', 'Samurai', 'Titan', 'Wizard',
    'Demon', 'Ghost', 'Zombie', 'Pirate', 'Monster', 'Robot', 'Cyborg', 'Guardian', 'Reaper'
  ];

  const gamingTerms = [
    'Frag', 'Headshot', 'Noob', 'Owned', 'Pwned', 'GG', 'AFK', 'Ace', 'Boss',
    'Raid', 'Loot', 'Grind', 'Tank', 'DPS', 'Healer', 'MVP', 'Clutch', 'Lag',
    'Buff', 'Nerf', 'OP', 'XP', 'Spawn', 'Crit', 'Hack', 'Mod', 'Admin'
  ];

  const specialChars = ['_', '.', 'x', 'X', '-', '8', '88', '99', '777'];

  const generateUsername = () => {
    let parts: string[] = [];
    
    if (!useAdjectives && !useNouns && !useGaming) {
      alert('SELECIONA PELO MENOS UMA OPÇÃO, CARALHO!');
      return;
    }
    
    if (useAdjectives) {
      parts.push(adjectives[Math.floor(Math.random() * adjectives.length)]);
    }
    
    if (useNouns) {
      parts.push(nouns[Math.floor(Math.random() * nouns.length)]);
    }
    
    if (useGaming) {
      parts.push(gamingTerms[Math.floor(Math.random() * gamingTerms.length)]);
    }
    
    // Shuffle parts
    for (let i = parts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [parts[i], parts[j]] = [parts[j], parts[i]];
    }
    
    let result = parts.join('');
    
    if (useSpecialChars && Math.random() > 0.5) {
      const char = specialChars[Math.floor(Math.random() * specialChars.length)];
      const position = Math.random() > 0.5 ? 'start' : 'end';
      result = position === 'start' ? char + result : result + char;
    }
    
    if (useNumbers && Math.random() > 0.3) {
      const num = Math.floor(Math.random() * 1000);
      result += num;
    }
    
    setUsername(result);
    setUsernameHistory(prev => [result, ...prev].slice(0, 5));
    setCopied(false);
  };

  const copyToClipboard = (text = username) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <ToolLayout
      title="GERADOR DE NICK INSANO"
      emoji="🦹"
      description="Cria usernames perfeitos para games ou redes sociais. Gere nicks únicos e estilosos com um clique!"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="adjectives"
              checked={useAdjectives}
              onChange={() => setUseAdjectives(!useAdjectives)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="adjectives" className="ml-2 text-xl font-vt323">
              ADJETIVOS ÉPICOS (Epic, Mega)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="nouns"
              checked={useNouns}
              onChange={() => setUseNouns(!useNouns)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="nouns" className="ml-2 text-xl font-vt323">
              SUBSTANTIVOS FODA (Ninja, Dragon)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="gaming"
              checked={useGaming}
              onChange={() => setUseGaming(!useGaming)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="gaming" className="ml-2 text-xl font-vt323">
              TERMOS GAMER (Frag, Noob)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="numbers"
              checked={useNumbers}
              onChange={() => setUseNumbers(!useNumbers)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="numbers" className="ml-2 text-xl font-vt323">
              NÚMEROS (ex: 420, 69, 1337)
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="specialChars"
              checked={useSpecialChars}
              onChange={() => setUseSpecialChars(!useSpecialChars)}
              className="w-5 h-5 rounded border-neon-red bg-deep-black text-neon-red focus:ring-radioactive-yellow"
            />
            <label htmlFor="specialChars" className="ml-2 text-xl font-vt323">
              CARACTERES ESPECIAIS (_, x, .)
            </label>
          </div>
        </div>
        
        <button
          onClick={generateUsername}
          className="crazy-button w-full flex items-center justify-center"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          <span>GERA UM NICK FODA</span>
        </button>
        
        {username && (
          <div className="mt-8">
            <h3 className="form-label mb-4">SEU NICK INSANO:</h3>
            
            <div className="bg-[#0A0A0A] p-6 rounded-lg border border-radioactive-yellow relative mb-6">
              <div className="font-vt323 text-4xl text-radioactive-yellow text-center break-all mb-2">
                {username}
              </div>
              
              <button
                onClick={() => copyToClipboard()}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neon-red hover:bg-radioactive-yellow transition-colors flex items-center justify-center"
              >
                <Copy className="w-5 h-5 text-deep-black" />
              </button>
              
              {copied && (
                <div className="text-neon-red font-vt323 text-center">
                  COPIADO PRA CARALHO! ✓
                </div>
              )}
            </div>
            
            {usernameHistory.length > 1 && (
              <div>
                <h3 className="form-label mb-2">OUTRAS OPÇÕES:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {usernameHistory.slice(1).map((name, index) => (
                    <div key={index} className="bg-[#0A0A0A] p-2 rounded-lg flex justify-between items-center">
                      <span className="font-vt323 text-lg text-white">{name}</span>
                      <button
                        onClick={() => copyToClipboard(name)}
                        className="text-radioactive-yellow hover:text-neon-red transition-colors"
                        aria-label="Copy"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default UsernameGenerator;