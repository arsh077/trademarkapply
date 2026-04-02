import React from 'react';
import { ShieldCheck, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-slate-800 transition-colors duration-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 text-2xl font-bold text-gray-900 mb-6">
              <ShieldCheck className="text-primary" size={32} />
              <span className="tracking-tight">TrademarkApply</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-600">
              Professional trademark registration services in India. We help businesses protect their brands with expert legal guidance.
            </p>
            <div className="space-y-3 text-[10px] font-mono text-gray-900/60 uppercase tracking-wider">
               <p className="flex items-center gap-3"><span className="text-secondary">EMAIL</span> trademark.legal.01@gmail.com</p>
               <p className="flex items-center gap-3"><span className="text-secondary">PHONE</span> +91 7605890360</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-mono font-bold text-sm uppercase tracking-widest mb-8">Services</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'trademark-registration')} className="hover:text-gray-900 transition-colors">Trademark Registration</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'logo-design')} className="hover:text-gray-900 transition-colors">Logo Design</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'legal-consultation')} className="hover:text-gray-900 transition-colors">Legal Consultation</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'opposition-handling')} className="hover:text-gray-900 transition-colors">Opposition Handling</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'renewal-services')} className="hover:text-gray-900 transition-colors">Renewal Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-mono font-bold text-sm uppercase tracking-widest mb-8">Company</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about-us')} className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#consultation" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-900 transition-colors">Free Consultation</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'privacy-policy')} className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, 'terms-of-service')} className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Socials & CTA */}
          <div>
            <h3 className="text-gray-900 font-mono font-bold text-sm uppercase tracking-widest mb-8">Connect</h3>
            <div className="flex gap-4 mb-8">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:text-black text-gray-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2025 TrademarkApply. All rights reserved.</p>
          <p>Designed by ARSHED ANWAR</p>
        </div>
        
        <p className="mt-8 text-[10px] text-slate-600 text-justify leading-relaxed">
          Disclaimer: TrademarkApply is not affiliated with the Government of India. We are an independent legal service provider. All trademark registrations are subject to Trademark Registry approval.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
