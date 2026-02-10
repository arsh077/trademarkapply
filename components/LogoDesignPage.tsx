import React, { useState } from 'react';
import { 
  Palette, Scale, RefreshCw, Clock, Target, CheckCircle2, 
  User, Building2, Mail, Phone, MapPin, BadgeCheck, ShieldCheck,
  FileText, Layers, Download, PenTool
} from 'lucide-react';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface LogoDesignPageProps {
  onNavigate: (page: string) => void;
}

const LogoDesignPage: React.FC<LogoDesignPageProps> = ({ onNavigate }) => {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Order placed for ${selectedPackage} package! We will contact you shortly.`);
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Other"
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</button>
            <span className="mx-2">→</span>
            <button onClick={() => onNavigate('services')} className="hover:text-primary dark:hover:text-blue-400 transition-colors">Services</button>
            <span className="mx-2">→</span>
            <span className="font-semibold text-primary dark:text-blue-400">Logo Design</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-primary text-white py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Professional Logo Design Services
            </h1>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Professional logo design with trademark clearance to ensure your brand identity is unique, memorable, and legally protectable. Get a distinctive logo that stands out in the marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Palette size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Professional Design</h3>
              <p className="text-sm text-purple-100">3-5 unique concepts by expert designers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <Scale size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Trademark Cleared</h3>
              <p className="text-sm text-purple-100">Comprehensive legal clearance included</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                <RefreshCw size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Unlimited Revisions</h3>
              <p className="text-sm text-purple-100">Perfect your logo until 100% satisfied</p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
              <span className="text-2xl font-bold text-secondary">₹7,999</span> <span className="text-sm">All Inclusive</span>
            </div>
            <div className="flex justify-center gap-8 text-sm font-semibold text-purple-200">
              <span className="flex items-center gap-2"><Clock size={16} /> Timeline: 5-7 business days</span>
              <span className="flex items-center gap-2"><Target size={16} /> Ownership: Lifetime rights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Choose Your Logo Design Package</h2>
            <p className="text-gray-600 dark:text-gray-400">Select the perfect package for your business needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Package */}
            <div 
              className={`relative rounded-2xl p-0.5 cursor-pointer transition-all ${selectedPackage === 'basic' ? 'ring-2 ring-primary/20' : ''}`}
              onClick={() => setSelectedPackage('basic')}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className={`relative h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all ${selectedPackage === 'basic' ? 'border-primary shadow-xl' : 'border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl'}`}>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Basic Logo Package</h3>
                <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">₹4,999</div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 font-medium bg-gray-100 dark:bg-slate-700 inline-block px-3 py-1 rounded">3-5 business days</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "2-3 unique logo concepts",
                    "3 rounds of revisions",
                    "Basic trademark clearance",
                    "High-resolution PNG & JPG files",
                    "Basic usage guidelines",
                    "Commercial usage rights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${selectedPackage === 'basic' ? 'bg-primary text-white' : 'bg-gray-100 text-slate-800 dark:bg-slate-700 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'}`}>
                  Select Package
                </button>
              </div>
            </div>

            {/* Professional Package */}
            <div 
              className={`relative rounded-2xl p-0.5 cursor-pointer transition-all transform lg:-translate-y-4 ${selectedPackage === 'professional' ? 'ring-2 ring-secondary/20' : ''}`}
              onClick={() => setSelectedPackage('professional')}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className={`relative h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all ${selectedPackage === 'professional' ? 'border-secondary shadow-2xl' : 'border-gray-100 dark:border-slate-700 shadow-xl'}`}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Professional Logo Package</h3>
                <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">₹7,999</div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 font-medium bg-gray-100 dark:bg-slate-700 inline-block px-3 py-1 rounded">5-7 business days</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "3-5 unique professional logo concepts",
                    "Multiple revisions included satisfaction",
                    "Comprehensive trademark clearance check",
                    "High-resolution files in all formats",
                    "Complete brand style guidelines",
                    "Full commercial usage rights"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200 font-medium">
                      <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${selectedPackage === 'professional' ? 'bg-secondary text-primary' : 'bg-gray-100 text-slate-800 dark:bg-slate-700 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'}`}>
                  Select Package
                </button>
              </div>
            </div>

            {/* Premium Package */}
            <div 
              className={`relative rounded-2xl p-0.5 cursor-pointer transition-all ${selectedPackage === 'premium' ? 'ring-2 ring-purple-600/20' : ''}`}
              onClick={() => setSelectedPackage('premium')}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className={`relative h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 transition-all ${selectedPackage === 'premium' ? 'border-purple-600 shadow-xl' : 'border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl'}`}>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Premium Brand Package</h3>
                <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-4">₹12,999</div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 font-medium bg-gray-100 dark:bg-slate-700 inline-block px-3 py-1 rounded">7-10 business days</p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "5-7 unique premium logo concepts",
                    "Multiple revisions included satisfaction",
                    "Comprehensive trademark clearance + Registration",
                    "Complete brand identity package",
                    "Business card & letterhead designs",
                    "Brand guidelines manual",
                    "Full commercial usage rights",
                    "Priority support & fast delivery"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-purple-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition-colors ${selectedPackage === 'premium' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-slate-800 dark:bg-slate-700 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600'}`}>
                  Select Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Our 5-Step Design Process</h2>
            <p className="text-gray-600 dark:text-gray-400">From concept to completion, we ensure every logo is perfect</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { num: "1", title: "Discovery & Brief", desc: "Complete detailed questionnaire about your business, target audience, and design preferences.", icon: <FileText size={24} /> },
              { num: "2", title: "Trademark Research", desc: "Comprehensive trademark clearance check to ensure your logo is unique and legally protectable.", icon: <ShieldCheck size={24} /> },
              { num: "3", title: "Concept Creation", desc: "Our expert designers create 3-5 unique logo concepts based on your brief and research findings.", icon: <PenTool size={24} /> },
              { num: "4", title: "Revision & Refinement", desc: "Unlimited revisions to perfect your chosen concept until you're completely satisfied.", icon: <RefreshCw size={24} /> },
              { num: "5", title: "Final Delivery", desc: "Complete brand package with high-resolution files, style guidelines, and commercial usage rights.", icon: <Download size={24} /> }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 h-full border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-gray-300 dark:bg-slate-700 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form & Summary */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors" id="order-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Order Your Logo Design</h2>
            <p className="text-gray-600 dark:text-gray-400">Complete the form below to get started with your professional logo design</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-slate-700">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Client Information</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell us about yourself and your business</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="fullName"
                          required
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business/Company Name *</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input 
                          type="text"
                          name="businessName"
                          required
                          placeholder="Enter your business name"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input 
                          type="email"
                          name="email"
                          required
                          placeholder="your.email@example.com"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input 
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 6290634766"
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business Address *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                      <input 
                        type="text"
                        name="address"
                        required
                        placeholder="Enter complete business address"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">City *</label>
                      <input 
                        type="text"
                        name="city"
                        required
                        placeholder="Enter city name"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">State *</label>
                      <SelectNative 
                        name="state" 
                        required 
                        value={formData.state} 
                        onChange={handleChange}
                        className="dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                      >
                        <option value="">Select State</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </SelectNative>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">PIN Code *</label>
                      <input 
                        type="text"
                        name="pinCode"
                        required
                        placeholder="123456"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <GlassButton 
                    type="submit" 
                    className="w-full bg-secondary text-primary font-bold shadow-md text-lg mt-4"
                  >
                    Continue to Package Selection
                  </GlassButton>
                </form>
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-4 pb-4 border-b border-gray-100 dark:border-slate-700 text-slate-900 dark:text-white">Order Summary</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-bold text-primary dark:text-blue-400">
                      {selectedPackage === 'basic' && "Basic Logo Package"}
                      {selectedPackage === 'professional' && "Professional Logo Package"}
                      {selectedPackage === 'premium' && "Premium Brand Package"}
                    </span>
                    <span className="font-bold text-secondary text-lg">
                      {selectedPackage === 'basic' && "₹4,999"}
                      {selectedPackage === 'professional' && "₹7,999"}
                      {selectedPackage === 'premium' && "₹12,999"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-700 inline-block px-2 py-1 rounded">
                    {selectedPackage === 'basic' && "3-5 business days"}
                    {selectedPackage === 'professional' && "5-7 business days"}
                    {selectedPackage === 'premium' && "7-10 business days"}
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> {selectedPackage === 'basic' ? '2-3 unique concepts' : selectedPackage === 'premium' ? '5-7 unique concepts' : '3-5 unique concepts'}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> {selectedPackage === 'basic' ? '3 rounds revisions' : 'Unlimited revisions'}</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Trademark clearance</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> All file formats</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Style guidelines</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Commercial rights</li>
                  {selectedPackage === 'premium' && <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Business card & letterhead</li>}
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary dark:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">KA</div>
                  <div>
                    <div className="text-xs font-bold text-primary dark:text-blue-300 uppercase">Expert Design Team</div>
                    <div className="text-sm font-bold dark:text-white">Led by KHURSHID ANWAR</div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="bg-gray-50 dark:bg-slate-700 px-2 py-1 rounded">Hundreds of logos created</div>
                  <div className="bg-gray-50 dark:bg-slate-700 px-2 py-1 rounded">High satisfaction rate</div>
                </div>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4">Our Guarantees</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3"><RefreshCw size={18} className="text-secondary" /> Unlimited revisions until satisfaction</li>
                  <li className="flex items-center gap-3"><Scale size={18} className="text-secondary" /> Comprehensive trademark clearance</li>
                  <li className="flex items-center gap-3"><Layers size={18} className="text-secondary" /> All file formats included</li>
                  <li className="flex items-center gap-3"><Target size={18} className="text-secondary" /> 100% ownership rights</li>
                  <li className="flex items-center gap-3"><Clock size={18} className="text-secondary" /> Timely delivery</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-l-4 border-secondary">
                 <h3 className="font-bold mb-2 dark:text-white">Need Help?</h3>
                 <div className="space-y-2">
                   <a href="tel:+916290634766" className="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline">
                     <Phone size={16} /> +91 6290634766
                   </a>
                   <a href="mailto:trademark.legal.01@gmail.com" className="flex items-center gap-2 text-primary dark:text-blue-400 hover:underline">
                     <Mail size={16} /> trademark.legal.01@gmail.com
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesignPage;