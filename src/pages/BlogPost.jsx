import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/ScrollReveal';
import { blogPosts } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 text-center py-20 space-y-6">
        <h2 className="text-3xl font-extrabold text-white">Article Not Found</h2>
        <p className="text-zinc-400">The article you are looking for does not exist or has been moved.</p>
        <Button to="/blog" variant="primary">
          Return to Blog
        </Button>
      </div>
    );
  }

  // Calculate generic read time based on word count
  const wordCount = post.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 space-y-8">
      
      {/* Back Button */}
      <ScrollReveal direction="down">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-xs font-semibold text-zinc-400 hover:text-indigo-400 transition-colors group py-2"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </ScrollReveal>

      {/* Meta Headers */}
      <ScrollReveal direction="up" className="space-y-4">
        <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 px-3 py-1.5 rounded-full uppercase tracking-wider font-bold inline-block">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-semibold pt-2 border-b border-zinc-900 pb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-zinc-400" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-zinc-400" />
            {readTime} Min Read
          </span>
        </div>
      </ScrollReveal>

      {/* Hero Image */}
      <ScrollReveal direction="up" delay={0.1}>
        <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-850 bg-zinc-950">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
            }}
          />
        </div>
      </ScrollReveal>

      {/* Article Content Body */}
      <ScrollReveal direction="up" delay={0.2}>
        <div 
          className="text-zinc-300 leading-relaxed text-sm md:text-base space-y-6 pt-4 
            prose prose-invert prose-indigo max-w-none
            [&_h6]:text-zinc-200 [&_h6]:font-bold [&_h6]:text-lg [&_h6]:mt-6 [&_h6]:mb-2
            [&_p]:text-zinc-300 [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </ScrollReveal>

      {/* Footer Tags & CTA */}
      <ScrollReveal direction="up" className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1.5">
          <Tag className="w-4 h-4 text-zinc-400" />
          Tags: {post.tags.join(', ')}
        </span>
        <Button to="/contact" variant="secondary" size="sm">
          Discuss this topic with us
        </Button>
      </ScrollReveal>

    </article>
  );
}
