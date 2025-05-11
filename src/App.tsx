import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Import tool pages
import PasswordGenerator from './pages/tools/PasswordGenerator';
import QRCodeGenerator from './pages/tools/QRCodeGenerator';
import QRCodeReader from './pages/tools/QRCodeReader';
import TextFormatter from './pages/tools/TextFormatter';
import CapsLockConverter from './pages/tools/CapsLockConverter';
import DuplicateTextRemover from './pages/tools/DuplicateTextRemover';
import Calculator from './pages/tools/Calculator';
import FileCompressor from './pages/tools/FileCompressor';
import FakeCPFGenerator from './pages/tools/FakeCPFGenerator';
import UsernameGenerator from './pages/tools/UsernameGenerator';

import ColorPicker from './pages/tools/ColorPicker';
import Base64Converter from './pages/tools/Base64Converter';
import JsonFormatter from './pages/tools/JsonFormatter';
import LoremGenerator from './pages/tools/LoremGenerator';
import RegexTester from './pages/tools/RegexTester';
import MarkdownPreview from './pages/tools/MarkdownPreview';
import HtmlEncoder from './pages/tools/HtmlEncoder';
import UrlEncoder from './pages/tools/UrlEncoder';
import CaseConverter from './pages/tools/CaseConverter';
import WordCounter from './pages/tools/WordCounter';
import DiffChecker from './pages/tools/DiffChecker';
import HashGenerator from './pages/tools/HashGenerator';
import UuidGenerator from './pages/tools/UuidGenerator';
import ImageConverter from './pages/tools/ImageConverter';
import ColorConverter from './pages/tools/ColorConverter';
import CssMinifier from './pages/tools/CssMinifier';
import JsMinifier from './pages/tools/JsMinifier';
import SqlFormatter from './pages/tools/SqlFormatter';
import XmlFormatter from './pages/tools/XmlFormatter';
import CronGenerator from './pages/tools/CronGenerator';
import PasswordStrength from './pages/tools/PasswordStrength';
import IpLookup from './pages/tools/IpLookup';
import DnsLookup from './pages/tools/DnsLookup';
import WhoisLookup from './pages/tools/WhoisLookup';
import PortScanner from './pages/tools/PortScanner';
import SslChecker from './pages/tools/SslChecker';
import MetaTagGenerator from './pages/tools/MetaTagGenerator';
import RobotsTxtGenerator from './pages/tools/RobotsTxtGenerator';
import HtaccessGenerator from './pages/tools/HtaccessGenerator';
import NginxGenerator from './pages/tools/NginxGenerator';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Original tool routes */}
          <Route path="/senha-cabulosa" element={<PasswordGenerator />} />
          <Route path="/faz-qr-na-faixa" element={<QRCodeGenerator />} />
          <Route path="/desfaz-qr-pra-mim" element={<QRCodeReader />} />
          <Route path="/arruma-texto-todo-torto" element={<TextFormatter />} />
          <Route path="/converte-tudo-pra-caps-lock" element={<CapsLockConverter />} />
          <Route path="/joga-pro-limbo" element={<DuplicateTextRemover />} />
          <Route path="/conta-pra-mim" element={<Calculator />} />
          <Route path="/zipa-essa-merda" element={<FileCompressor />} />
          <Route path="/descobre-cpf-fake" element={<FakeCPFGenerator />} />
          <Route path="/gerador-de-nick-insano" element={<UsernameGenerator />} />
          
          {/* New tool routes */}
          <Route path="/pega-cor-na-mao" element={<ColorPicker />} />
          <Route path="/codifica-essa-merda" element={<Base64Converter />} />
          <Route path="/arruma-json-zuado" element={<JsonFormatter />} />
          <Route path="/lorem-ipsum-insano" element={<LoremGenerator />} />
          <Route path="/regex-do-capeta" element={<RegexTester />} />
          <Route path="/markdown-na-veia" element={<MarkdownPreview />} />
          <Route path="/escapa-html-maluco" element={<HtmlEncoder />} />
          <Route path="/url-safe-porra" element={<UrlEncoder />} />
          <Route path="/muda-case-na-hora" element={<CaseConverter />} />
          <Route path="/conta-palavra-carai" element={<WordCounter />} />
          <Route path="/compara-texto-porra" element={<DiffChecker />} />
          <Route path="/hash-na-hora" element={<HashGenerator />} />
          <Route path="/uuid-insano" element={<UuidGenerator />} />
          <Route path="/converte-imagem-rapido" element={<ImageConverter />} />
          <Route path="/rgb-hex-hsl-foda" element={<ColorConverter />} />
          <Route path="/minifica-css" element={<CssMinifier />} />
          <Route path="/minifica-js" element={<JsMinifier />} />
          <Route path="/formata-sql-loko" element={<SqlFormatter />} />
          <Route path="/xml-na-moral" element={<XmlFormatter />} />
          <Route path="/cron-generator-carai" element={<CronGenerator />} />
          <Route path="/senha-forte-porra" element={<PasswordStrength />} />
          <Route path="/ip-lookup-maluco" element={<IpLookup />} />
          <Route path="/dns-lookup-insano" element={<DnsLookup />} />
          <Route path="/whois-na-hora" element={<WhoisLookup />} />
          <Route path="/port-scanner-doido" element={<PortScanner />} />
          <Route path="/ssl-checker-foda" element={<SslChecker />} />
          <Route path="/meta-tags-na-mao" element={<MetaTagGenerator />} />
          <Route path="/robots-txt-generator" element={<RobotsTxtGenerator />} />
          <Route path="/htaccess-na-hora" element={<HtaccessGenerator />} />
          <Route path="/nginx-conf-insano" element={<NginxGenerator />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;