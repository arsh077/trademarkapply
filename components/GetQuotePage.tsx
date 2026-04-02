import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, CheckCircle2, Clock, DollarSign,
  User, Mail, Phone, Building2, ArrowRight
} from 'lucide-react';
import { GlassButton } from './ui/liquid-glass';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

interface GetQuotePageProps {
  onNavigate: (page: string) => void;
}

const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const lead = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        service: 'Quote Request',
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      
      await addDoc(collection(db, 'leads'), lead);
      
      const localLead = {
        id: Date.now().toString(),
        ...lead,
        date: lead.createdAt
      };
      
      const existingLeads = JSON.parse(localStorage.getItem('trademarkLeads') || '[]');
      existingLeads.push(localLead);
      localStorage.setItem('trademarkLeads', JSON.stringify(existingLeads));
      
      alert("Quote request received! We will send you a personalized quote shortly.");
      if (onNavigate) onNavigate('thank-you');
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Error submitting quote request. Please try again.');
    }
  };

  const services = [
    { title: "Trademark Registration", price: "Ã¢â€šÂ¹699", desc: "Comprehensive Search + Filing" },
    { title: "Logo Design", price: "Ã¢â€šÂ¹7,999", desc: "3 Concepts + TM Check" },
    { title: "Consultation", price: "FREE", desc: "Initial Strategy Session" },
    { title: "Opposition", price: "Ã¢â€šÂ¹15k", desc: "Legal Defense Per Case" }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <div className="pt-32 pb-12 px-4 border-b border-gray-100 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Instant <span className="text-outline">Quote</span></h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg font-light">
            Transparent pricing for your intellectual property needs. No hidden fees.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Quote Form */}
          <div ref={formRef} className="lg:w-1/2">
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Calculator size={120} />
              </div>
              <h2 className="text-2xl font-bold mb-8">Request Estimate</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <input type="text" name="fullName" required className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="Full Name" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <input type="email" name="email" required className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="email@address.com" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <input type="tel" name="phone" required className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="+91" onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase">Company (Optional)</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-3.5 text-gray-400" size={18} />
                    <input type="text" name="businessName" className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="Company Name" onChange={handleChange} />
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
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all cursor-default group">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-secondary transition-colors">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                  <div className="text-xl font-mono font-bold text-gray-900">{s.price}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-blue-900/10 border border-blue-500/20">
              <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} /> What's Included
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3"><span className="text-blue-500">Ã¢Å“â€œ</span> Professional legal assessment</li>
                <li className="flex gap-3"><span className="text-blue-500">Ã¢Å“â€œ</span> Government fee calculation</li>
                <li className="flex gap-3"><span className="text-blue-500">Ã¢Å“â€œ</span> Timeline estimation</li>
                <li className="flex gap-3"><span className="text-blue-500">Ã¢Å“â€œ</span> Strategy recommendation</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;
