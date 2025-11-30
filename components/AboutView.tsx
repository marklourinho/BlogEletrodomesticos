import React from 'react';
import { ArrowLeft, Cpu, Globe, Heart } from 'lucide-react';

interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-gray-500 hover:text-teal-600 mb-6 transition-colors font-medium"
      >
        <ArrowLeft size={20} className="mr-2" />
        Voltar para o Início
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-64">
           <img 
            src="https://image.pollinations.ai/prompt/futuristic%20human%20interacting%20with%20holographic%20technology%20warm%20lighting%20friendly%20atmosphere?width=1200&height=400&nologo=true" 
            alt="Tecnologia e Humanidade" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex items-end">
            <h1 className="text-4xl md:text-5xl font-bold text-white p-8">Sobre Nós</h1>
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-8">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Bem-vindo ao TechHome - Mark Lourinho</h2>
            <p className="text-lg leading-relaxed mb-6">
              Seja muito bem-vindo! O <strong>TechHome - Mark Lourinho</strong> nasceu de uma paixão por inovação e de um desejo genuíno de conectar pessoas ao futuro. Mais do que um blog sobre eletrodomésticos, somos um espaço dedicado a entender como a revolução digital impacta o seu lugar mais sagrado: o seu lar.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Cpu className="mr-2 text-teal-500" />
              Nossa Missão: Esclarecer a Tecnologia
            </h3>
            <p className="leading-relaxed mb-6">
              Vivemos em um momento histórico onde a tecnologia avança em uma velocidade vertiginosa. Inteligência Artificial, Internet das Coisas (IoT) e automação deixaram de ser conceitos de ficção científica para se tornarem parte da nossa rotina diária.
            </p>
            <p className="leading-relaxed mb-6">
              Nosso objetivo principal é <strong>desmistificar essa tecnologia</strong>. Queremos tirar o "technobabble" (o jargão técnico complicado) do caminho e explicar, de forma clara e humana, como essas inovações funcionam e, o mais importante, como elas podem melhorar a sua vida.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Heart className="mr-2 text-red-500" />
              Tecnologia a Serviço do Bem-Estar
            </h3>
            <p className="leading-relaxed mb-6">
              Acreditamos que a tecnologia não deve ser um fim em si mesma, mas uma ferramenta para proporcionar <strong>qualidade de vida</strong>. Seja uma máquina de lavar que economiza água e tempo, ou um assistente virtual que ajuda a organizar seu dia, o foco é sempre o ser humano.
            </p>
            <p className="leading-relaxed">
              Queremos ajudar você a navegar por esse novo mundo, fazendo escolhas conscientes que tragam mais conforto, economia e sustentabilidade para sua família. O futuro é brilhante, e ele começa na sua casa.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mt-8">
            <p className="text-center text-slate-600 italic font-medium">
              "A tecnologia só é verdadeiramente inteligente quando ela simplifica a vida humana."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;