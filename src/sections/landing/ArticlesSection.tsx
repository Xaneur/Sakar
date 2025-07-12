import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trendingArticles, Article } from '@/data/articles';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="flex flex-col w-[418.67px] flex-shrink-0">
      <div className="relative w-full h-[280px] rounded-lg overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-medium leading-7">
          {article.title}
        </h3>
        <p className="text-white text-sm mt-2 underline">
          {article.date}
        </p>
      </div>
    </div>
  );
};

const ArticlesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-white">
            Top 10 Trending Articles This Week
          </h2>
          <Link 
            href="/articles"
            className="flex items-center text-white text-sm font-['Bricolage_Grotesque'] hover:opacity-80 transition-opacity underline"
          >
            See All
          </Link>
        </div>
        
        <div className="flex gap-7 overflow-x-auto pb-6 scrollbar-hide">
          {trendingArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
