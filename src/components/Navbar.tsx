import  { useState, useEffect } from 'react';
import { FiMenu, FiX , FiMoon, FiSun} from 'react-icons/fi';

export  default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isDark, setIsDark] = useState<boolean>(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        }else {
            document.documentElement.classList.remove('dark');
        } 
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur z-40">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg">Pantong Sanonok</a>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:underline">{l.label}</a>
          ))}
          <button
            onClick={() => setIsDark(v => !v)}
            className="p-2 rounded"
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsDark(v => !v)} className="mr-2 p-2 rounded">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(v => !v)} aria-label="Open menu" className="p-2">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col px-6 pb-6 space-y-4">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};