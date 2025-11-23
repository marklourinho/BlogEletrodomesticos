import React, { useState } from 'react';
import { ViewState, BlogPost } from './types';
import { blogPosts } from './data';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import { LayoutGrid, Menu, Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.HOME);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setViewState(ViewState.ARTICLE);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setViewState(ViewState.HOME);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={handleBack}
            >
              <LayoutGrid className="text-teal-600 mr-2" size={28} />
              <span className="font-bold text-xl tracking-tight text-gray-900">Tech<span className="text-teal-600">Home</span></span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button onClick={handleBack} className={`text-sm font-medium transition-colors ${viewState === ViewState.HOME ? 'text-teal-600' : 'text-gray-500 hover:text-gray-900'}`}>Início</button>
              <button className="text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium">Categorias</button>
              <button className="text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium">Reviews</button>
              <button className="text-gray-500 hover:text-teal-600 transition-colors text-sm font-medium">Guia de Compra</button>
            </nav>

            <div className="hidden md:flex items-center">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Search size={20} />
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="px-2 space-y-1">
              <button onClick={() => { handleBack(); setMobileMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Início</button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Categorias</button>
              <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Reviews</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {viewState === ViewState.HOME ? (
          <>
            <Hero />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Destaques da Semana</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Fique por dentro das novidades do mundo dos eletrodomésticos inteligentes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <ArticleCard key={post.id} post={post} onClick={handlePostClick} />
                ))}
              </div>
            </div>
          </>
        ) : (
          selectedPost && <ArticleView post={selectedPost} onBack={handleBack} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <LayoutGrid className="text-teal-400 mr-2" size={24} />
                <span className="font-bold text-xl tracking-tight">Tech<span className="text-teal-400">Home</span></span>
              </div>
              <p className="text-gray-400 text-sm">
                Seu guia definitivo para a casa do futuro. Análises, dicas e tendências sobre eletrodomésticos e automação residencial.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teal-400 tracking-wider uppercase mb-4">Tópicos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Cozinhas Inteligentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Robôs Aspiradores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Economia de Energia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casas Pequenas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-teal-400 tracking-wider uppercase mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Receba as novidades no seu e-mail.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="bg-slate-800 border-none text-white px-4 py-2 rounded-l-md focus:ring-2 focus:ring-teal-500 outline-none w-full"
                />
                <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-md font-medium transition-colors">
                  Assinar
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
            &copy; 2023 TechHome. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;