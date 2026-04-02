import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, Clock, Calendar, FileText, Search, Shield, 
  Award, Globe, Layers, Box, Phone, Mail, User, ArrowRight,
  ClipboardCheck, PenTool, Scale, Briefcase
} from 'lucide-react';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

interface TrademarkRegistrationPageProps {
  onNavigate: (page: string) => void;
}

const TrademarkRegistrationPage: React.FC<TrademarkRegistrationPageProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    state: '',
    agreed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const lead = {
        name: formData.fullName,
        phone: formData.phone,
        state: formData.state,
        service: 'Trademark Registration',
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
      
      alert('Thank you! We will contact you shortly.');
      if (onNavigate) onNavigate('thank-you');
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Error submitting request. Please try again.');
    }
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Other"
  ];

  return (
    <div className="bg-white transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button>
            <span className="mx-2">â†’</span>
            <button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Services</button>
            <span className="mx-2">â†’</span>
            <span className="font-semibold text-primary">Trademark Registration</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Form */}
      <section className="bg-gradient-to-br from-slate-900 to-primary text-white py-12 lg:py-20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Professional Trademark Registration Services in India
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Secure your brand with expert trademark registration services. Government-compliant process with end-to-end support from filing to approval.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                  <div className="text-xs text-blue-100">Successful Applications</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">7+</div>
                  <div className="text-xs text-blue-100">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">12-18</div>
                  <div className="text-xs text-blue-100">Months Process</div>
                </div>
              </div>

              <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-400/30">
                 <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                   <Shield className="text-secondary" /> Need Expert Help?
                 </h3>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-primary font-bold text-lg">LS</div>
                    <div>
                      <div className="font-bold text-white uppercase">Legal Success India</div>
                      <div className="text-sm text-blue-200 font-mono tracking-wider">Expert Legal Firm</div>
                    </div>
                 </div>
                 <div className="flex gap-4 mt-6">
                    <a href="tel:+917605890360" className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                      <Phone size={16} /> Call Now
                    </a>
                    <a href="mailto:trademark.legal.01@gmail.com" className="flex items-center gap-2 border border-white text-white px-4 py-2 rounded-lg font-bold hover:bg-white/10 transition-colors">
                      <Mail size={16} /> Email
                    </a>
                 </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div ref={formRef} className="bg-white text-slate-800 rounded-2xl shadow-2xl p-6 lg:p-8 transition-colors">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 flex items-start gap-3">
                <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <div className="font-bold text-green-800 text-sm">Limited-Time Offer</div>
                  <div className="text-green-700 text-sm">Apply your 1st trademark only @<span className="font-bold">â‚¹699</span></div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-900">Secure your brand immediately</h3>
              <p className="text-sm text-gray-500 mb-6">Complete the form for expert guidance.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      name="fullName"
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1">State *</label>
                  <SelectNative 
                    name="state"
                    required
                    onChange={handleChange}
                    className="bg-gray-50"
                  >
                    <option value="">Select your state</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </SelectNative>
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input 
                    type="checkbox" 
                    name="agreed"
                    id="agreed"
                    required
                    className="mt-1"
                    onChange={handleChange}
                  />
                  <label htmlFor="agreed" className="text-xs text-gray-500">
                    I agree to the Terms & Conditions and Privacy Policy.
                  </label>
                </div>

                <GlassButton type="submit" className="w-full bg-secondary text-slate-900 font-bold shadow-md text-lg">
                  Get Started
                </GlassButton>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-semibold text-gray-600">Professional Fees</span>
                  <span className="text-xl font-bold text-primary">â‚¹699</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={12} /> Process Timeline: 12-18 months
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Horizontal Process Steps */}
      <section className="py-12 bg-slate-50 border-b border-gray-200 transition-colors">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Search & Analysis", time: "1-2 days" },
                { step: "2", title: "Application Filing", time: "2-3 days" },
                { step: "3", title: "Examination", time: "6-8 months" },
                { step: "4", title: "Publication", time: "4 months" },
                { step: "5", title: "Registration", time: "2-3 months" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center border border-gray-100 relative transition-colors">
                   {idx < 4 && <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300 z-10"></div>}
                   <div className="text-primary font-bold text-lg mb-1">{item.step}</div>
                   <div className="font-semibold text-sm mb-1 text-slate-800">{item.title}</div>
                   <div className="text-xs text-gray-500">{item.time}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Types of Trademark */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Types of Trademark Registration</h2>
            <p className="text-gray-600">Choose the right trademark type for your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FileText size={32} />, title: "Word Mark", desc: "Text-based trademark for brand names and slogans", sub: "All 45 classes available" },
              { icon: <PenTool size={32} />, title: "Device Mark", desc: "Logo, symbol, or design-based trademark", sub: "Design classifications" },
              { icon: <Layers size={32} />, title: "Combined Mark", desc: "Combination of text and design elements", sub: "Mixed classifications" },
              { icon: <Briefcase size={32} />, title: "Service Mark", desc: "For service-based businesses", sub: "Service classes 35-45" },
              { icon: <Globe size={32} />, title: "Collective Mark", desc: "For associations and groups", sub: "Collective classifications" },
              { icon: <Box size={32} />, title: "3D Mark", desc: "Three-dimensional shapes and forms", sub: "Shape-based classes" },
            ].map((item, i) => (
              <div key={i} className="relative rounded-xl p-0.5">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="h-full p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:border-blue-100 group bg-white relative">
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <div className="text-xs font-semibold text-primary bg-blue-50 py-1 px-2 rounded inline-block">
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Professional Process</h2>
              <p className="text-gray-600 mb-10">Step-by-step trademark registration with complete transparency</p>
              
              <div className="space-y-8">
                {[
                  { id: "01", title: "Trademark Search", desc: "Comprehensive search to ensure uniqueness", time: "1-2 days" },
                  { id: "02", title: "Application Filing", desc: "Professional preparation and submission", time: "2-3 days" },
                  { id: "03", title: "Examination", desc: "Government examination and objection handling", time: "6-8 months" },
                  { id: "04", title: "Publication", desc: "Publication in trademark journal", time: "4 months" },
                  { id: "05", title: "Registration", desc: "Final registration and certificate", time: "2-3 months" },
                ].map((step) => (
                  <div key={step.id} className="flex gap-6">
                    <div className="text-4xl font-bold text-gray-200">{step.id}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-primary">{step.title}</h4>
                      <p className="text-gray-600 mb-1">{step.desc}</p>
                      <div className="text-sm font-semibold text-secondary flex items-center gap-1">
                        <Clock size={14} /> {step.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">What's Included in Our Service</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Search size={24} />, title: "Comprehensive Trademark Search", desc: "Detailed search across all databases" },
                    { icon: <ClipboardCheck size={24} />, title: "Application Preparation", desc: "Professional application drafting" },
                    { icon: <Scale size={24} />, title: "Government Fee Handling", desc: "All official fees included" },
                    { icon: <Activity size={24} />, title: "Status Monitoring", desc: "Regular progress updates" },
                    { icon: <Award size={24} />, title: "Certificate Delivery", desc: "Final registration certificate" },
                    { icon: <Shield size={24} />, title: "Legal Compliance", desc: "Expert legal advice throughout" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                       <div className="mt-1 text-primary">{item.icon}</div>
                       <div>
                         <h5 className="font-bold text-sm mb-1 text-slate-900">{item.title}</h5>
                         <p className="text-xs text-gray-500">{item.desc}</p>
                       </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-dashed border-gray-300 text-center">
                  <p className="text-gray-600 mb-4">Ready to start your trademark journey?</p>
                  <GlassButton onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-primary text-white font-bold hover:bg-blue-800 transition-colors w-full sm:w-auto">
                    Start Application Now
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper component for the included services icon
const Activity = ({size}: {size: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
);

export default TrademarkRegistrationPage;
