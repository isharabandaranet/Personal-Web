import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import ScrollReveal from '../components/ui/ScrollReveal';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Design', 'Business'];

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === 'All') return true;
    return post.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
      
      {/* Title */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <ScrollReveal direction="down">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400">Idea Gallery</h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
            Insights, thoughts & design principles
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-zinc-400">
            A archive of design knowledge, branding guidelines, and freelance career tips.
          </p>
        </ScrollReveal>
      </section>

      {/* Category Sorting Tabs */}
      <div className="flex justify-center">
        <ScrollReveal direction="none" delay={0.3}>
          <div className="flex bg-zinc-900/60 border border-zinc-800 p-1 rounded-xl space-x-1.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-6">
        {filteredPosts.map((post, index) => (
          <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
            <Card className="h-full border border-zinc-850 hover:border-zinc-700 p-0 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Unsplash fallback
                    e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                <span className="absolute top-3 right-3 text-[10px] bg-zinc-950/90 border border-zinc-800 text-indigo-400 px-3 py-1.5 rounded-full uppercase tracking-wider font-bold backdrop-blur-md">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 font-semibold flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    {post.tags.join(', ')}
                  </span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-xs text-indigo-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
