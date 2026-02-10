import React from 'react';
import { 
  UserCheck, MapPin, Mail, Award, CheckCircle2, TrendingUp, 
  Users, Rocket, Wallet, Shield, Phone
} from 'lucide-react';
import { GlassButton } from './ui/liquid-glass';

interface AboutUsPageProps {
  onNavigate: (page: string) => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#020202] text-white min-h-screen">
      {/* Header */}
      <div className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="text-secondary font-mono text-xs uppercase tracking-[0.2em] mb-4">About The Firm</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-none">
                Legal <br/><span className="text-outline">Excellence</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed font-light">
                TrademarkApply is a premier intellectual property firm dedicated to protecting the innovations and brands that drive the future.
              </p>
              
              <div className="flex gap-12 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">10k+</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">7+</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">Success</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
               <div className="glass-panel p-1 rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="bg-[#0a0a0a] p-8 rounded-[20px] relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Award size={120} />
                   </div>
                   <div className="flex items-center gap-6 mb-8">
                     <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                        <UserCheck size={32} className="text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-white">KHURSHID ANWAR</h3>
                       <p className="text-secondary font-mono text-xs uppercase tracking-widest">Founder & Lead Attorney</p>
                     </div>
                   </div>
                   <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                     "Our mission is to democratize legal protection for businesses of all sizes. We believe every brand deserves professional safeguarding against infringement."
                   </p>
                   <div className="flex flex-col gap-3 text-sm text-slate-300">
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                         <MapPin size={16} className="text-secondary" /> Kolkata, West Bengal
                      </div>
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                         <Mail size={16} className="text-secondary" /> trademark.legal.01@gmail.com
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Protection", desc: "Iron-clad legal defense for your intellectual assets." },
              { icon: Rocket, title: "Velocity", desc: "Expedited filing processes to secure priority dates." },
              { icon: Users, title: "Partnership", desc: "We act as your dedicated in-house legal counsel." },
              { icon: Wallet, title: "Transparency", desc: "Clear, flat-fee pricing structure with no surprises." },
              { icon: TrendingUp, title: "Growth", desc: "Strategic IP planning to increase your valuation." },
              { icon: CheckCircle2, title: "Compliance", desc: "Strict adherence to government regulations." }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 mb-6 group-hover:text-white group-hover:scale-110 transition-all">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
          <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12 pl-8 md:pl-0">
             {[
               { year: "2018", title: "Inception", desc: "Founded with a vision to simplify IP law." },
               { year: "2020", title: "Digital Shift", desc: "Launched full digital filing platform." },
               { year: "2023", title: "10k Milestone", desc: "Celebrated 10,000 successful registrations." },
               { year: "2025", title: "Expansion", desc: "Incorporating AI-driven trademark search tools." }
             ].map((item, i) => (
               <div key={i} className={`relative md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
                  <div className={`absolute top-0 w-4 h-4 bg-black border-2 border-secondary rounded-full ${i % 2 === 0 ? '-left-[41px] md:-left-[9px]' : '-left-[41px] md:-right-[9px]'}`}></div>
                  <div className="text-4xl font-bold text-white/10 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Work With Experts</h2>
        <GlassButton onClick={() => onNavigate('contact')} className="bg-white text-black font-bold hover:bg-slate-200">
          Contact Us
        </GlassButton>
      </section>
    </div>
  );
};

export default AboutUsPage;