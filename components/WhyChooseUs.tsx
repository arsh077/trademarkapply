import React from 'react';
import { Briefcase, Rocket, Coins, PhoneCall } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors duration-300 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:invert"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">Why Choose TrademarkApply?</h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            Experience the difference with our professional trademark services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Briefcase, title: "Experienced", desc: "Attorneys with deep knowledge of Indian IP law.", color: "green" },
            { icon: Rocket, title: "Fast Processing", desc: "Quick application filing with regular status updates.", color: "blue" },
            { icon: Coins, title: "Transparent", desc: "Clear, upfront pricing with no hidden costs.", color: "yellow" },
            { icon: PhoneCall, title: "24/7 Support", desc: "Dedicated customer support to assist you.", color: "purple" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 text-center hover:-translate-y-2 transition-all duration-300 group">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${item.color}-50 dark:bg-white/5 text-${item.color}-600 dark:text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;