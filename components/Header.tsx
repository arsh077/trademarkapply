import React, { useState, useEffect } from 'react';
import { Mail, Phone, Menu, X, ShieldCheck, Home, Briefcase, User, MessageSquare } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';
import { Switch } from './ui/switch';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (currentPage === 'home') setActiveTab('Home');
    else if (currentPage.includes('services') || 
             ['trademark-registration', 'logo-design', 'legal-consultation', 'opposition-handling', 'renewal-services', 'copyright-registration'].includes(currentPage)) {
      setActiveTab('Services');
    }
    else if (currentPage === 'about-us') setActiveTab('About');
    else if (currentPage === 'contact') setActiveTab('Contact');
    else setActiveTab('');
  }, [currentPage]);

  const navItems = [
    { name: 'Home', url: 'home', icon: Home },
    { name: 'Services', url: 'services', icon: Briefcase },
    { name: 'About', url: 'about-us', icon: User },
    { name: 'Contact', url: 'contact', icon: MessageSquare }
  ];

  const handleNavClick = (e: React.MouseEvent | null, page: string) => {
    if (e) e.preventDefault();
    if (page !== currentPage) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Navbar - Glass Effect */}
      <nav className="bg-white/80 dark:bg-[#020202]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center gap-2">
              <ShieldCheck size={32} className="text-primary dark:text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">TrademarkApply</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-widest uppercase">Legal Services</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavBar 
                items={navItems} 
                activeTab={activeTab} 
                onTabChange={(tab) => {
                   const item = navItems.find(i => i.name === tab);
                   if (item) handleNavClick(null, item.url);
                }}
                className="mb-0" 
              />
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Switch checked={isDark} onChange={toggleTheme} />
              <button
                onClick={() => handleNavClick(null, 'admin')}
                className="text-slate-700 dark:text-white/60 hover:text-primary dark:hover:text-secondary transition-colors font-mono text-[10px] uppercase tracking-[0.2em]"
              >
                Admin
              </button>
              <a 
                href="#consultation" 
                onClick={(e) => { e.preventDefault(); handleNavClick(null, 'get-quote'); }}
                className="bg-primary hover:bg-blue-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 px-6 py-2 rounded-full transition-all duration-300 shadow-lg font-mono text-xs font-bold uppercase tracking-wider"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Switch checked={isDark} onChange={toggleTheme} />
              <button 
                className="text-slate-900 dark:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-6 border-t border-gray-200 dark:border-white/10 pt-4 space-y-4 bg-white dark:bg-[#020202]">
               {navItems.map(item => (
                 <a 
                   key={item.name}
                   href="#" 
                   onClick={(e) => handleNavClick(e, item.url)} 
                   className="block text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-mono uppercase tracking-widest text-sm"
                 >
                   {item.name}
                 </a>
               ))}
              <a href="#" onClick={(e) => handleNavClick(e, 'admin')} className="block text-slate-700 dark:text-gray-300 hover:text-primary dark:hover:text-white font-mono uppercase tracking-widest text-sm">Admin</a>
              <a href="#" onClick={(e) => handleNavClick(e, 'get-quote')} className="block text-primary dark:text-secondary font-bold mt-4">Get Quote</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;