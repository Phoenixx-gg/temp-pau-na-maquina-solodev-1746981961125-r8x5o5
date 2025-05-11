import React from 'react';
import { ArrowBigDown, Zap, Bomb, Sparkles } from 'lucide-react';
import ToolCard from '../components/ToolCard';

const tools = [
  // Original tools
  {
    title: "CRIA SENHA CABULOSA",
    description: "Gera senhas tão seguras que nem o FBI vai conseguir quebrar.",
    path: "/senha-cabulosa",
    emoji: "🔐"
  },
  {
    title: "FAZ QR NA FAIXA",
    description: "Cria QR codes em segundos para seus links ou textos.",
    path: "/faz-qr-na-faixa",
    emoji: "📱"
  },
  {
    title: "DESFAZ QR PRA MIM",
    description: "Lê QR codes de imagens e descobre o que tem dentro.",
    path: "/desfaz-qr-pra-mim",
    emoji: "🔍"
  },
  {
    title: "ARRUMA TEXTO TODO TORTO",
    description: "Formata e organiza textos malucos em segundos.",
    path: "/arruma-texto-todo-torto",
    emoji: "📏"
  },
  {
    title: "CONVERTE TUDO PRA CAPS LOCK",
    description: "TRANSFORMA qualquer texto em GRITARIA TOTAL.",
    path: "/converte-tudo-pra-caps-lock",
    emoji: "⬆️"
  },
  {
    title: "JOGA PRO LIMBO",
    description: "Remove linhas duplicadas de texto sem dó nem piedade.",
    path: "/joga-pro-limbo",
    emoji: "🗑️"
  },
  {
    title: "CONTA PRA MIM",
    description: "Calculadora zueira mas que resolve qualquer conta.",
    path: "/conta-pra-mim",
    emoji: "🧮"
  },
  {
    title: "ZIPA ESSA MERDA",
    description: "Compacta arquivos pra caber onde você quiser.",
    path: "/zipa-essa-merda",
    emoji: "🗜️"
  },
  {
    title: "DESCOBRE CPF FAKE",
    description: "Gera CPFs válidos para testes (sem golpe, é claro).",
    path: "/descobre-cpf-fake",
    emoji: "🔢"
  },
  {
    title: "GERADOR DE NICK INSANO",
    description: "Cria usernames perfeitos para games ou redes sociais.",
    path: "/gerador-de-nick-insano",
    emoji: "🦹"
  },
  
  // New tools
  {
    title: "PEGA COR NA MÃO",
    description: "Seletor de cores INSANO com todos os formatos possíveis!",
    path: "/pega-cor-na-mao",
    emoji: "🎨"
  },
  {
    title: "CODIFICA ESSA MERDA",
    description: "Converte textos pra Base64 e vice-versa na velocidade da luz!",
    path: "/codifica-essa-merda",
    emoji: "🔄"
  },
  {
    title: "ARRUMA JSON ZUADO",
    description: "Formata aquele JSON todo fodido que ninguém entende!",
    path: "/arruma-json-zuado",
    emoji: "📝"
  },
  {
    title: "LOREM IPSUM INSANO",
    description: "Gera texto aleatório com MUITO MAIS ESTILO que o normal!",
    path: "/lorem-ipsum-insano",
    emoji: "📚"
  },
  {
    title: "REGEX DO CAPETA",
    description: "Testa expressões regulares com exemplos prontos e explicações!",
    path: "/regex-do-capeta",
    emoji: "😈"
  },
  {
    title: "MARKDOWN NA VEIA",
    description: "Preview de Markdown em tempo real com todos os paranauê!",
    path: "/markdown-na-veia",
    emoji: "📋"
  },
  {
    title: "ESCAPA HTML MALUCO",
    description: "Codifica e decodifica caracteres HTML sem erro!",
    path: "/escapa-html-maluco",
    emoji: "🏃"
  },
  {
    title: "URL SAFE PORRA",
    description: "Deixa qualquer URL segura pra usar em qualquer lugar!",
    path: "/url-safe-porra",
    emoji: "🔒"
  },
  {
    title: "MUDA CASE NA HORA",
    description: "Converte texto pra camelCase, snake_case, kebab-case e mais!",
    path: "/muda-case-na-hora",
    emoji: "🔡"
  },
  {
    title: "CONTA PALAVRA CARAI",
    description: "Conta palavras, caracteres e até o tempo de leitura!",
    path: "/conta-palavra-carai",
    emoji: "📊"
  },
  {
    title: "COMPARA TEXTO PORRA",
    description: "Mostra a diferença entre dois textos na hora!",
    path: "/compara-texto-porra",
    emoji: "👀"
  },
  {
    title: "HASH NA HORA",
    description: "Gera hash MD5, SHA-1, SHA-256 e mais na velocidade da luz!",
    path: "/hash-na-hora",
    emoji: "🔏"
  },
  {
    title: "UUID INSANO",
    description: "Gera UUIDs v4 únicos pra caralho!",
    path: "/uuid-insano",
    emoji: "🎲"
  },
  {
    title: "CONVERTE IMAGEM RAPIDO",
    description: "Converte imagens entre formatos sem perder qualidade!",
    path: "/converte-imagem-rapido",
    emoji: "🖼️"
  },
  {
    title: "RGB HEX HSL FODA",
    description: "Converte cores entre RGB, HEX, HSL e mais!",
    path: "/rgb-hex-hsl-foda",
    emoji: "🌈"
  },
  {
    title: "MINIFICA CSS",
    description: "Deixa seu CSS pequeno pra caralho sem perder nada!",
    path: "/minifica-css",
    emoji: "📐"
  },
  {
    title: "MINIFICA JS",
    description: "Comprime JavaScript até não poder mais!",
    path: "/minifica-js",
    emoji: "📦"
  },
  {
    title: "FORMATA SQL LOKO",
    description: "Deixa aquele SQL todo zuado bonito e legível!",
    path: "/formata-sql-loko",
    emoji: "💾"
  },
  {
    title: "XML NA MORAL",
    description: "Formata XML e valida se tá tudo nos conformes!",
    path: "/xml-na-moral",
    emoji: "📰"
  },
  {
    title: "CRON GENERATOR CARAI",
    description: "Cria expressões cron sem quebrar a cabeça!",
    path: "/cron-generator-carai",
    emoji: "⏰"
  },
  {
    title: "SENHA FORTE PORRA",
    description: "Testa se sua senha é forte ou fraca pra caralho!",
    path: "/senha-forte-porra",
    emoji: "💪"
  },
  {
    title: "IP LOOKUP MALUCO",
    description: "Descobre tudo sobre um IP em segundos!",
    path: "/ip-lookup-maluco",
    emoji: "🌍"
  },
  {
    title: "DNS LOOKUP INSANO",
    description: "Consulta registros DNS de qualquer domínio!",
    path: "/dns-lookup-insano",
    emoji: "🔍"
  },
  {
    title: "WHOIS NA HORA",
    description: "Informações WHOIS de domínios na velocidade da luz!",
    path: "/whois-na-hora",
    emoji: "📡"
  },
  {
    title: "PORT SCANNER DOIDO",
    description: "Verifica portas abertas em qualquer servidor!",
    path: "/port-scanner-doido",
    emoji: "🔌"
  },
  {
    title: "SSL CHECKER FODA",
    description: "Analisa certificados SSL sem complicação!",
    path: "/ssl-checker-foda",
    emoji: "🔒"
  },
  {
    title: "META TAGS NA MÃO",
    description: "Gera meta tags SEO perfeitas pro seu site!",
    path: "/meta-tags-na-mao",
    emoji: "🎯"
  },
  {
    title: "ROBOTS TXT GENERATOR",
    description: "Cria arquivo robots.txt sem dor de cabeça!",
    path: "/robots-txt-generator",
    emoji: "🤖"
  },
  {
    title: "HTACCESS NA HORA",
    description: "Gera regras .htaccess pra qualquer situação!",
    path: "/htaccess-na-hora",
    emoji: "⚡"
  },
  {
    title: "NGINX CONF INSANO",
    description: "Configurações nginx prontas pra usar!",
    path: "/nginx-conf-insano",
    emoji: "🚀"
  }
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl neon-text mb-4">
            BEM-VINDO AO <span className="text-radioactive-yellow yellow-neon-text">CAOS ÚTIL</span> DA INTERNET
          </h1>
          
          <p className="font-vt323 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            <span className="bg-neon-red text-deep-black px-2">40 FERRAMENTAS ONLINE GRATUITAS</span> com visual 
            insano e sem frescura. Todas funcionando perfeitamente e SEM CADASTRO!
          </p>
          
          <div className="flex justify-center mb-12">
            <button className="crazy-button flex items-center">
              <Bomb className="w-5 h-5 mr-2" />
              <span>BORA EXPLODIR TUDO</span>
            </button>
          </div>
          
          <div className="animate-bounce">
            <ArrowBigDown className="w-10 h-10 text-radioactive-yellow mx-auto" />
          </div>
        </div>
      </section>
      
      {/* Tools section */}
      <section className="py-16">
        <div className="flex items-center mb-12">
          <div className="h-1 bg-neon-red flex-grow"></div>
          <h2 className="font-bebas text-4xl px-4 flex items-center">
            <Zap className="w-8 h-8 text-radioactive-yellow mr-2" />
            <span>FERRAMENTAS INSANAS</span>
          </h2>
          <div className="h-1 bg-neon-red flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <ToolCard 
              key={tool.path}
              title={tool.title}
              description={tool.description}
              path={tool.path}
              emoji={tool.emoji}
            />
          ))}
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16">
        <div className="flex items-center mb-12">
          <div className="h-1 bg-neon-red flex-grow"></div>
          <h2 className="font-bebas text-4xl px-4 flex items-center">
            <Sparkles className="w-8 h-8 text-radioactive-yellow mr-2" />
            <span>POR QUE ESSA PORRA É FODA?</span>
          </h2>
          <div className="h-1 bg-neon-red flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-neon-red hover:border-radioactive-yellow transition-colors">
            <div className="text-4xl mb-3">💯</div>
            <h3 className="text-2xl font-bebas text-radioactive-yellow mb-2">TUDO FUNCIONA</h3>
            <p className="text-gray-300 font-vt323 text-lg">
              Cada ferramenta aqui realmente funciona, sem enrolação ou bugs idiotas. É prático e direto ao ponto!
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-neon-red hover:border-radioactive-yellow transition-colors">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="text-2xl font-bebas text-radioactive-yellow mb-2">NADA É SALVO</h3>
            <p className="text-gray-300 font-vt323 text-lg">
              A gente não salva absolutamente NADA do que você faz aqui. Privacidade total, zero rastreamento.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-neon-red hover:border-radioactive-yellow transition-colors">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-2xl font-bebas text-radioactive-yellow mb-2">RÁPIDO PRA CARALHO</h3>
            <p className="text-gray-300 font-vt323 text-lg">
              Todas as ferramentas são leves e rodam no seu navegador. Sem espera, sem upload lento, sem sofrimento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;