import React from 'react';
import { Tag, PenTool, Scale, ShieldAlert, RefreshCw, FileText, BadgeCheck, ArrowRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, onClick }) => (
  <div onClick={onClick} className="relative h-full rounded-2xl p-0.5 cursor-pointer transition-transform duration-300 hover:-translate-y-2 group">
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
      borderWidth={3}
    />
    {/* Glass Panel Style */}
    <div className="relative h-full bg-white dark:bg-[#0a0a0a]/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 hover:shadow-2xl transition-all flex flex-col">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
          {icon}
        </div>
        <div className="bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          ISO 9001
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-sans tracking-tight">{title}</h3>
      <p className="text-slate-500 dark:text-gray-400 mb-8 text-sm leading-relaxed line-clamp-3 font-sans">{description}</p>
      
      <div className="mt-auto flex justify-between items-end pt-6 border-t border-slate-100 dark:border-white/10">
        <div className="flex flex-col">
           <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest mb-1">Starting from</span>
           <span className="text-primary dark:text-white font-bold text-2xl">{price}</span>
        </div>
        <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    { icon: <Tag size={28} />, title: "Trademark Registration", description: "Complete trademark registration process from search to approval with government compliance.", price: "₹1,999", link: "trademark-registration" },
    { icon: <PenTool size={28} />, title: "Logo Design", description: "Professional logo design services that complement your trademark registration.", price: "₹999", link: "logo-design" },
    { icon: <Scale size={28} />, title: "Legal Consultation", description: "Expert legal advice on trademark law, disputes, and intellectual property protection.", price: "₹1,500/hr", link: "legal-consultation" },
    { icon: <ShieldAlert size={28} />, title: "Opposition Handling", description: "Professional handling of trademark opposition cases with expert legal representation.", price: "₹5,999", link: "opposition-handling" },
    { icon: <RefreshCw size={28} />, title: "Renewal Services", description: "Timely trademark renewal services to maintain your intellectual property rights.", price: "₹1,999", link: "renewal-services" },
    { icon: <FileText size={28} />, title: "Copyright Registration", description: "Protect your creative works, literary content, and artistic creations.", price: "₹3,999", link: "copyright-registration" }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary dark:text-white/60 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Comprehensive Legal Solutions</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            Professional trademark services for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service}
              onClick={() => onNavigate(service.link)} 
            />
          ))}
        </div>

        <div className="mt-16 text-center">
           <GlassButton onClick={() => onNavigate('services')} className="inline-flex items-center gap-3 text-primary dark:text-white font-mono text-sm uppercase tracking-widest hover:text-opacity-80">
             View All Services <ArrowRight size={16} />
           </GlassButton>
           <div className="flex justify-center gap-8 mt-8 text-[10px] font-mono text-slate-400 dark:text-white/40 uppercase tracking-widest">
             <span className="flex items-center gap-2"><BadgeCheck size={14} className="text-green-500" /> MSME Approved</span>
             <span className="flex items-center gap-2"><BadgeCheck size={14} className="text-green-500" /> ISO Certified</span>
             <span className="flex items-center gap-2"><BadgeCheck size={14} className="text-green-500" /> Secure Process</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;