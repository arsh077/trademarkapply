import React, { useState } from 'react';
import { 
  Calculator, CheckCircle2, Clock, DollarSign,
  User, Mail, Phone, Building2, ArrowRight
} from 'lucide-react';
import { GlassButton } from './ui/liquid-glass';

interface GetQuotePageProps {
  onNavigate: (page: string) => void;
}

const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request received! We will send you a personalized quote shortly.");
  };

  const services = [
    { title: "Trademark Registration", price: "₹4,999", desc: "Comprehensive Search + Filing" },
    { title: "Logo Design", price: "₹7,999", desc: "3 Concepts + TM Check" },
    { title: "Consultation", price: "FREE", desc: "Initial Strategy Session" },
    { title: "Opposition", price: "₹15k", desc: "Legal Defense Per Case" }
  ];

  return (
    <div className="bg-[#020202] min-h-screen text-white">
      {/* Header */}
      <div className="pt-32 pb-12 px-4 border-b border-white/5 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Instant <span className="text-outline">Quote</span></h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-light">
            Transparent pricing for your intellectual property needs. No hidden fees.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Quote Form */}
          <div className="lg:w-1/2">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Calculator size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-8">Request Estimate</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input type="text" name="fullName" required className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-secondary/50 focus:outline-none transition-colors" placeholder="Full Name" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-secondary/50 focus:outline-none transition-colors" placeholder="email@address.com" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input type="tel" name="phone" required className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-secondary/50 focus:outline-none transition-colors" placeholder="+91" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase">Company (Optional)</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input type="text" name="businessName" className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-secondary/50 focus:outline-none transition-colors" placeholder="Company Name" onChange={handleChange} />
                  </div>
                </div>

                <GlassButton type="submit" className="w-full bg-secondary text-black font-bold mt-4 hover:bg-yellow-400">
                  Get My Quote
                </GlassButton>
              </form>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-2xl font-bold">Standard Pricing</h2>
            <div className="grid gap-4">
              {services.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all cursor-default group">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-secondary transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                  </div>
                  <div className="text-xl font-mono font-bold text-white">{s.price}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-blue-900/10 border border-blue-500/20">
              <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} /> What's Included
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Professional legal assessment</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Government fee calculation</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Timeline estimation</li>
                <li className="flex gap-3"><span className="text-blue-500">✓</span> Strategy recommendation</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;