import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://image.pollinations.ai/prompt/wide%20panoramic%20view%20of%20a%20modern%20luxurious%20smart%20home%20living%20room%20technology%20lighting%20evening?width=1600&height=900&nologo=true" 
          alt="Smart Home" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block text-teal-400">Tecnologia &</span>
          <span className="block">Conforto em Casa</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl">
          Descubra como a automação, IA e eficiência energética estão transformando o mercado de eletrodomésticos e mudando a forma como vivemos.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-teal-500/30">
            Explorar Tendências
          </button>
          <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm">
            Sobre Nós
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;