import React from 'react';

// Custom inline SVG icons to avoid missing brand icons in newer lucide-react versions
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'Facebook', url: 'https://www.facebook.com/isharabandaranet', icon: FacebookIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/isharabandaranet', icon: InstagramIcon },
    { name: 'GitHub', url: 'https://github.com/isharabandaranet', icon: GithubIcon }
  ];

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 rounded-md overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <img src="/img/logo.png" alt="IB" className="w-4 h-4 object-contain" />
          </div>
          <span className="text-sm font-medium text-zinc-400">
            © {currentYear} Ishara Bandara. All rights reserved.
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
