import React from 'react';
import { CheckCircle, Shield, Award, Users, Star } from 'lucide-react';
import { GlassButton } from './ui/liquid-glass';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-primary to-slate-900 dark:from-black dark:via-blue-950 dark:to-slate-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-24 overflow-hidden transition-colors duration-500">
      {/* Overlay Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-1"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-secondary font-semibold text-sm backdrop-blur-md border border-white/10 mx-auto lg:mx-0">
              <CheckCircle size={16} /> <span className="tracking-wide">ISO Certified Legal Firm</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              Build Your Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Confidence</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              India's trusted trademark registration partner. We simplify legal complexities so you can focus on building your business empire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <GlassButton 
                onClick={() => onNavigate('trademark-registration')} 
                className="bg-secondary text-slate-900 font-bold hover:bg-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
              >
                Start Application
              </GlassButton>
              <GlassButton 
                onClick={() => onNavigate('services')} 
                className="bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/10"
              >
                Explore Services
              </GlassButton>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span>20k+ Trusted Clients</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
                <span className="text-white font-bold">4.9/5</span> Rating
              </div>
            </div>
          </div>

          {/* Right Cards / Visuals */}
          <div className="lg:w-1/2 w-full">
            <div className="relative max-w-lg mx-auto lg:ml-auto">
              <div className="grid grid-cols-2 gap-4">
                
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors transform translate-y-8">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-300">
                    <Shield size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-slate-300">Success Rate</div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-300">
                    <Award size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">Expert</div>
                  <div className="text-sm text-slate-300">Legal Consultation</div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors transform translate-y-8">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-300">
                    <Users size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">10k+</div>
                  <div className="text-sm text-slate-300">Happy Clients</div>
                </div>

                 {/* Card 4 - Feature Highlight */}
                <div className="bg-gradient-to-br from-secondary to-yellow-600 p-6 rounded-2xl shadow-lg flex flex-col justify-center text-slate-900">
                   <div className="font-bold text-lg leading-tight mb-2">Fast Track Application</div>
                   <p className="text-xs opacity-80 mb-4">Get your acknowledgment within 24 hours</p>
                   <div className="mt-auto bg-white/20 rounded-full h-1 w-full">
                     <div className="bg-slate-900/50 h-1 rounded-full w-3/4"></div>
                   </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;