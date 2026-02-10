import React, { useState } from 'react';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';
import { SelectNative } from './ui/select-native';
import { GlassButton } from './ui/liquid-glass';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

interface ConsultationFormProps {
  onNavigate?: (page: string) => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    businessName: '',
    brandName: '',
    fullName: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Save to Firestore
      const lead = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        brandName: formData.brandName,
        businessType: formData.businessType,
        service: 'Free Consultation',
        message: formData.message,
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      
      await addDoc(collection(db, 'leads'), lead);
      
      // Also save to localStorage for offline access
      const localLead = {
        id: Date.now().toString(),
        ...lead,
        date: lead.createdAt
      };
      
      const existingLeads = JSON.parse(localStorage.getItem('trademarkLeads') || '[]');
      existingLeads.push(localLead);
      localStorage.setItem('trademarkLeads', JSON.stringify(existingLeads));
      
      // Navigate to thank you page
      if (onNavigate) {
        onNavigate('thank-you');
      }
      
      // Reset form
      setFormData({
        businessName: '',
        brandName: '',
        fullName: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  const benefits = [
    "Free trademark availability search",
    "Expert advice on registration process",
    "Personalized strategy for your brand",
    "No obligation consultation"
  ];

  return (
    <section id="consultation" className="py-24 relative overflow-hidden bg-[#020202]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side Info */}
          <div className="lg:w-1/2 pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-mono uppercase tracking-widest mb-6">
              <Sparkles size={12} /> Free Consultation
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Protect Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Legacy</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md font-sans">
              Speak with our trademark experts to understand the best strategy for protecting your brand.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all duration-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-lg text-slate-300 font-sans">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 glass-panel rounded-xl">
               <p className="text-sm text-slate-400 font-mono">"Protecting your brand identity is the first step towards building a lasting business legacy."</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:w-1/2 w-full">
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
              <h3 className="text-2xl font-bold mb-8 text-white font-sans flex items-center gap-3">
                Request Consultation <span className="h-px flex-1 bg-white/10"></span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                      placeholder="e.g. Acme Corp"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Brand Name</label>
                    <input 
                      type="text" 
                      name="brandName"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                      placeholder="e.g. Acme"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Your Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                      placeholder="john@example.com"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                      placeholder="+91 6290634766"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Business Type</label>
                  <SelectNative 
                    name="businessType"
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white w-full h-12"
                  >
                    <option value="" className="bg-slate-900 text-slate-400">Select Business Type</option>
                    <option value="Proprietorship" className="bg-slate-900 text-white">Proprietorship</option>
                    <option value="Partnership" className="bg-slate-900 text-white">Partnership</option>
                    <option value="LLP" className="bg-slate-900 text-white">LLP</option>
                    <option value="Private Limited" className="bg-slate-900 text-white">Private Limited</option>
                    <option value="Individual" className="bg-slate-900 text-white">Individual</option>
                  </SelectNative>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                    placeholder="Tell us about your requirements..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <GlassButton 
                  type="submit" 
                  className="w-full bg-secondary text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] mt-6 group"
                >
                  <span className="flex items-center gap-2">
                    Get Free Consultation <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassButton>
                
                <p className="text-[10px] text-slate-600 text-center font-mono">
                  Secure & Confidential. We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;