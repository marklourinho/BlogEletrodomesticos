import React from 'react';
import { BlogPost } from '../types';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface ArticleCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
      onClick={() => onClick(post)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {post.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.subtitle}
        </p>
        
        <div className="flex items-center text-gray-400 text-xs mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center mr-4">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
          <div className="flex items-center mr-auto">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
          <div className="text-teal-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
            Ler mais <ArrowRight size={14} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;