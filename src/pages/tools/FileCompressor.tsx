import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import { Upload, Download, FileArchive } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';

interface FileInfo {
  name: string;
  size: number;
  type: string;
}

const FileCompressor: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [fileInfos, setFileInfos] = useState<FileInfo[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);
  const [zipName, setZipName] = useState('arquivos_zipped.zip');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileArray = Array.from(e.target.files);
      setFiles(fileArray);
      
      const infos = fileArray.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type || 'unknown'
      }));
      
      setFileInfos(infos);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fileArray = Array.from(e.dataTransfer.files);
      setFiles(fileArray);
      
      const infos = fileArray.map(file => ({
        name: file.name,
        size: file.size,
        type: file.type || 'unknown'
      }));
      
      setFileInfos(infos);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const compressFiles = async () => {
    if (files.length === 0) {
      alert('SELECIONA ALGUM ARQUIVO, PORRA!');
      return;
    }
    
    setIsCompressing(true);
    
    try {
      const zip = new JSZip();
      
      files.forEach((file) => {
        zip.file(file.name, file);
      });
      
      const content = await zip.generateAsync({ type: 'blob' });
      
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = zipName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setIsCompressing(false);
    } catch (error) {
      console.error('Erro ao comprimir arquivos:', error);
      alert('DEU MERDA AO COMPRIMIR: ' + (error as Error).message);
      setIsCompressing(false);
    }
  };

  return (
    <ToolLayout
      title="ZIPA ESSA MERDA"
      emoji="🗜️"
      description="Compacta arquivos para caber onde você quiser. Só arrastar e soltar múltiplos arquivos, escolher um nome pro ZIP e baixar!"
    >
      <div className="space-y-6">
        <div
          className="border-2 border-dashed border-neon-red rounded-lg p-8 text-center cursor-pointer hover:border-radioactive-yellow transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 text-neon-red mx-auto mb-4" />
          <p className="font-vt323 text-xl mb-4">
            ARRASTA E SOLTA os arquivos que você quer zipar aqui<br />
            OU<br />
            CLICA PARA ESCOLHER arquivos
          </p>
          <p className="text-gray-400 font-vt323">
            Pode escolher vários arquivos ao mesmo tempo
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            multiple
          />
        </div>
        
        {fileInfos.length > 0 && (
          <div>
            <h3 className="form-label mb-4">ARQUIVOS SELECIONADOS:</h3>
            <div className="bg-[#0A0A0A] rounded-lg border border-radioactive-yellow p-4 max-h-48 overflow-y-auto">
              <ul className="divide-y divide-neon-red/20">
                {fileInfos.map((file, index) => (
                  <li key={index} className="py-2 font-vt323">
                    <div className="flex justify-between">
                      <span className="text-white truncate">{file.name}</span>
                      <span className="text-radioactive-yellow ml-2">{formatFileSize(file.size)}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{file.type || 'Tipo desconhecido'}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div>
          <label className="form-label">Nome do arquivo ZIP:</label>
          <input
            type="text"
            value={zipName}
            onChange={(e) => setZipName(e.target.value)}
            className="form-input"
          />
        </div>
        
        <button
          onClick={compressFiles}
          disabled={isCompressing}
          className="crazy-button w-full flex items-center justify-center"
        >
          {isCompressing ? (
            <>
              <FileArchive className="w-5 h-5 mr-2 animate-pulse" />
              <span>COMPRIMINDO, CALMA AÍ...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              <span>ZIPA E BAIXA ESSA PORRA</span>
            </>
          )}
        </button>
      </div>
    </ToolLayout>
  );
};

export default FileCompressor;