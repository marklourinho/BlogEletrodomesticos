import React, { useState } from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Share2, Sparkles, CheckCircle, ShoppingCart } from 'lucide-react';
import { generateSummary } from '../services/aiService';

interface ArticleViewProps {
  post: BlogPost;
  onBack: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ post, onBack }) => {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setLoading(true);
    // Combine intro and first section for context
    const context = `${post.content.intro} ${post.content.sections.map(s => s.title + ': ' + s.items.join(' ')).join(' ')}`;
    const summary = await generateSummary(context);
    setAiSummary(summary);
    setLoading(false);
  };

  const AmazonButton = ({ link }: { link: string }) => (
    <div className="my-8 flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300"
      >
        <ShoppingCart size={24} />
        Ver Ofertas na Amazon
      </a>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-teal-600 mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={20} className="mr-2" />
        Voltar para o Blog
      </button>

      <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-64 md:h-96 w-full relative">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide w-fit mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light">
              {post.subtitle}
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12">
          {/* AI Feature */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center text-teal-700 font-bold text-lg">
                <Sparkles size={20} className="mr-2" />
                Destaque Inteligente
              </h3>
              {!aiSummary && (
                <button 
                  onClick={handleGenerateSummary}
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    loading 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-md'
                  }`}
                >
                  {loading ? 'Gerando...' : 'Gerar Resumo com IA'}
                </button>
              )}
            </div>
            
            {loading && (
               <div className="animate-pulse flex space-x-4">
                 <div className="flex-1 space-y-2 py-1">
                   <div className="h-2 bg-slate-200 rounded"></div>
                   <div className="h-2 bg-slate-200 rounded"></div>
                   <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                 </div>
               </div>
            )}

            {aiSummary && (
              <div className="text-slate-700 italic border-l-4 border-teal-500 pl-4 animate-fade-in">
                "{aiSummary}"
              </div>
            )}
            
            {!loading && !aiSummary && (
               <p className="text-slate-500 text-sm">
                 Clique no botão para usar a Inteligência Artificial Gemini para gerar um resumo rápido deste artigo.
               </p>
            )}
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            {/* CTA Button Top */}
            {post.content.amazonLink && (
              <AmazonButton link={post.content.amazonLink} />
            )}

            <p className="lead text-xl text-gray-600 mb-8 font-light">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <CheckCircle size={20} className="text-teal-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {post.content.conclusion && (
              <div className="bg-teal-50 p-6 rounded-xl mt-8 mb-8 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-900 mb-2">Conclusão</h3>
                <p className="text-teal-800">{post.content.conclusion}</p>
              </div>
            )}

            {/* CTA Button Bottom */}
            {post.content.amazonLink && (
              <AmazonButton link={post.content.amazonLink} />
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
             <div className="text-gray-500 text-sm">
               Publicado em {post.date} • Leitura de {post.readTime}
             </div>
             <button className="flex items-center text-teal-600 hover:text-teal-800 font-medium">
               <Share2 size={18} className="mr-2" />
               Compartilhar
             </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleView;