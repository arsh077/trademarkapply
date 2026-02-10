import React from 'react';
import { Award, Briefcase, Smile, UserCheck } from 'lucide-react';

const AboutExpert: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="md:w-1/2 relative">
             {/* Abstract background blobs */}
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-64 h-64 bg-primary/20 dark:bg-white/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-40 h-40 bg-secondary/20 dark:bg-white/5 rounded-full blur-3xl opacity-50"></div>
            
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="KHURSHID ANWAR - Trademark Expert" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px] border border-gray-100 dark:border-white/10"
            />
            
            <div className="absolute bottom-8 right-8 z-20 bg-white dark:bg-[#0a0a0a]/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-100 dark:border-white/10 max-w-xs transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <UserCheck className="text-primary dark:text-white" size={24} />
                <h4 className="font-bold text-lg dark:text-white">KHURSHID ANWAR</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">Senior Trademark Attorney</p>
            </div>
          </div>

          <div className="md:w-1/2">
            <span className="text-primary dark:text-white/60 font-mono font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Meet The Expert</span>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">Expertise You Can Trust</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              With over <span className="font-semibold text-primary dark:text-white">7 years of experience</span> in intellectual property law, KHURSHID ANWAR has helped thousands of businesses protect their brands through professional trademark registration services.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              Based in Kolkata, our team specializes in Indian trademark law and has successfully handled complex cases ranging from simple registrations to opposition proceedings.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 dark:border-white/10 pt-8">
              <div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">7+</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono uppercase tracking-widest">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">10k+</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono uppercase tracking-widest">Cases</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">99%</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 font-mono uppercase tracking-widest">Success</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutExpert;