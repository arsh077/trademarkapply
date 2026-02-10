import React from 'react';
import { 
  ClipboardCheck, Clock, Shield, Target, Zap, Lock, Headphones, 
  BookOpen, Palette, Gavel, RefreshCw, FileText, CheckCircle2, ArrowRight,
  Scale, Copyright, Repeat
} from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface ServicePageProps {
  onNavigate: (page: string) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#020202] text-white min-h-screen">
      {/* Breadcrumb & Header */}
      <div className="border-b border-white/5 bg-black/50 backdrop-blur-sm pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
            <span className="mx-2">/</span>
            <span className="text-secondary">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Legal <span className="text-outline">Expertise</span></h1>
          <p className="text-lg text-slate-400 max-w-3xl font-light leading-relaxed">
            Comprehensive intellectual property protection services tailored for modern businesses. We combine legal expertise with digital efficiency.
          </p>
        </div>
      </div>

      {/* Service Stats Hero */}
      <div className="border-b border-white/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "1k+", label: "Applications" },
              { val: "7+", label: "Years Exp." },
              { val: "99%", label: "Success Rate" },
              { val: "45", label: "Classes" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">{stat.val}</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            
            {/* Service Item 1 */}
            <div className="glass-panel p-1 rounded-3xl">
              <div className="bg-[#050505] rounded-[22px] overflow-hidden">
                <div className="grid md:grid-cols-3 min-h-[300px]">
                  <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <ClipboardCheck size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Trademark Registration</h3>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                      Secure your brand identity with our comprehensive registration service. We handle everything from search to certification.
                    </p>
                    <div className="flex gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Clock size={14} className="text-secondary" /> 12-18 Months</span>
                      <span className="flex items-center gap-2"><Shield size={14} className="text-secondary" /> 10 Year Protection</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border-l border-white/5 p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-white mb-2">₹1,999</div>
                    <div className="text-xs text-slate-500 mb-8 uppercase tracking-widest">+ Govt Fees</div>
                    <GlassButton onClick={() => onNavigate('trademark-registration')} className="bg-white text-black hover:bg-slate-200 w-full">
                      Start Filing
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Item 2 */}
            <div className="glass-panel p-1 rounded-3xl">
              <div className="bg-[#050505] rounded-[22px] overflow-hidden">
                <div className="grid md:grid-cols-3 min-h-[300px]">
                  <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                        <Palette size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Logo Design</h3>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                      Professional, trademark-ready logo design services. Create a unique visual identity that is legally protectable.
                    </p>
                    <div className="flex gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Clock size={14} className="text-purple-400" /> 5-7 Days</span>
                      <span className="flex items-center gap-2"><Target size={14} className="text-purple-400" /> Full Ownership</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border-l border-white/5 p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-white mb-2">₹999</div>
                    <div className="text-xs text-slate-500 mb-8 uppercase tracking-widest">Starting Price</div>
                    <GlassButton onClick={() => onNavigate('logo-design')} className="bg-transparent border border-white/20 text-white hover:bg-white/10 w-full">
                      View Packages
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Item 3 */}
            <div className="glass-panel p-1 rounded-3xl">
              <div className="bg-[#050505] rounded-[22px] overflow-hidden">
                <div className="grid md:grid-cols-3 min-h-[300px]">
                  <div className="p-8 md:p-12 md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
                        <Gavel size={24} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Legal Consultation</h3>
                    </div>
                    <p className="text-slate-400 mb-8 leading-relaxed max-w-2xl">
                      Expert advice on IP strategy, infringement issues, and brand protection. Get clarity on complex legal matters.
                    </p>
                    <div className="flex gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><Clock size={14} className="text-green-400" /> 30 Minutes</span>
                      <span className="flex items-center gap-2"><Zap size={14} className="text-green-400" /> Immediate</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border-l border-white/5 p-8 flex flex-col justify-center items-center text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">FREE</div>
                    <div className="text-xs text-slate-500 mb-8 uppercase tracking-widest">First Session</div>
                    <GlassButton onClick={() => onNavigate('legal-consultation')} className="bg-green-500 text-black hover:bg-green-400 w-full">
                      Book Now
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of Other Services */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Specialized Services</h2>
            <p className="text-slate-400 font-mono text-sm">Covering all aspects of Intellectual Property</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Shield, 
                title: "Opposition Handling", 
                desc: "Defense against trademark oppositions and objections.", 
                price: "₹5,999", 
                link: "opposition-handling" 
              },
              { 
                icon: RefreshCw, 
                title: "Renewal Services", 
                desc: "Timely renewal of your trademark for continued protection.", 
                price: "₹3,999", 
                link: "renewal-services" 
              },
              { 
                icon: Copyright, 
                title: "Copyright Registration", 
                desc: "Protect literary, artistic, and musical works.", 
                price: "₹3,999", 
                link: "copyright-registration" 
              }
            ].map((item, i) => (
              <div key={i} className="group relative p-1 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="h-full p-8 border border-white/5 rounded-xl bg-[#0a0a0a] hover:border-white/10 transition-colors flex flex-col">
                  <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-slate-300 mb-6 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 flex-1">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-secondary font-bold font-mono">{item.price}</span>
                    <button onClick={() => onNavigate(item.link)} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Secure Your Brand?</h2>
          <div className="flex justify-center gap-6">
            <GlassButton onClick={() => onNavigate('contact')} className="bg-secondary text-black font-bold">
              Get Started
            </GlassButton>
            <GlassButton href="tel:+916290634766" className="border border-white/20 text-white">
              <Headphones size={18} className="mr-2" /> Talk to Expert
            </GlassButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;