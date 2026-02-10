import React, { useState } from 'react';
import { 
  Shield, Scale, FileText, User, Building2, Mail, MapPin, Phone,
  CheckCircle2, AlertTriangle, Gavel, FileCheck, ArrowRight, Clock,
  MessageSquare, Briefcase
} from 'lucide-react';
import ProgressIndicator from './ui/progress-indicator';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface OppositionHandlingPageProps {
  onNavigate: (page: string) => void;
}

const OppositionHandlingPage: React.FC<OppositionHandlingPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
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

  const handleNext = (e: React.MouseEvent | React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert("Request submitted! We will analyze your opposition matter and contact you immediately.");
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
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
            <span className="font-semibold text-primary dark:text-blue-400">Opposition Handling</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-red-900 dark:from-black dark:to-red-950 text-white py-12 lg:py-20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-3 py-1 rounded-full text-red-200 text-sm font-bold mb-4">
                <Shield size={16} /> Opposition Handling
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Professional Trademark Opposition Services
              </h1>
              <p className="text-lg text-red-100 mb-8">
                Professional representation in trademark opposition proceedings, including filing oppositions against conflicting marks and defending your trademark applications from third-party challenges.
              </p>
              
              <div className="grid grid-cols-3 gap-4 max-w-lg mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">₹15k</div>
                  <div className="text-xs text-gray-300">Per Case</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">6-12</div>
                  <div className="text-xs text-gray-300">Months Timeline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">Case</div>
                  <div className="text-xs text-gray-300">Dependent Result</div>
                </div>
              </div>

              <GlassButton onClick={() => document.getElementById('opposition-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-red-600 text-white font-bold hover:bg-red-700 shadow-lg flex items-center gap-2">
                <Shield size={20} /> Get Help
              </GlassButton>
            </div>

            <div className="grid gap-4">
               {[
                 { title: "Notice Analysis", desc: "Complete evaluation of opposition notices", icon: <FileCheck /> },
                 { title: "Legal Strategy", desc: "Strategic approach development for best outcomes", icon: <Scale /> },
                 { title: "Expert Representation", desc: "Professional hearing representation & negotiation", icon: <Gavel /> }
               ].map((item, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 flex items-center gap-4">
                   <div className="bg-white/20 p-3 rounded-lg text-secondary">
                     {item.icon}
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">{item.title}</h3>
                     <p className="text-sm text-gray-300">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Comprehensive Opposition Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Complete legal support for all trademark opposition matters</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FileCheck size={32} />, title: "Opposition Notice Analysis & Evaluation", desc: "Thorough analysis of opposition notices, evaluation of claims, assessment of strengths and weaknesses, and detailed review of legal grounds for opposition." },
              { icon: <Briefcase size={32} />, title: "Strategic Legal Approach Development", desc: "Development of comprehensive legal strategy, identification of key arguments, preparation of defense tactics, and formulation of counter-attack strategies." },
              { icon: <FileText size={32} />, title: "Evidence Collection & Preparation", desc: "Systematic collection of supporting evidence, preparation of witness statements, compilation of documentary proof, and organization of legal precedents." },
              { icon: <Scale size={32} />, title: "Counter-statement Drafting & Filing", desc: "Professional drafting of counter-statements, preparation of legal responses, filing of necessary documents, and ensuring compliance with procedural requirements." },
              { icon: <Gavel size={32} />, title: "Professional Hearing Representation", desc: "Expert representation at trademark hearings, presentation of arguments, cross-examination of witnesses, and professional advocacy before trademark authorities." },
              { icon: <MessageSquare size={32} />, title: "Settlement Negotiation Assistance", desc: "Skilled negotiation for out-of-court settlements, mediation assistance, drafting of settlement agreements, and resolution of disputes through mutual consent." },
            ].map((item, i) => (
              <div key={i} className="relative rounded-2xl p-0.5">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="h-full p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-lg transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-red-100 dark:hover:border-red-900 group relative">
                  <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="opposition-form" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Opposition Handling Request</h2>
            <p className="text-gray-600 dark:text-gray-400">Get professional legal assistance for your trademark opposition matter</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
                
                <form onSubmit={handleNext} className="space-y-6">
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Client Information</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Please provide your personal and contact details</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="fullName" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your full legal name" value={formData.fullName} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business/Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="businessName" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter business name" value={formData.businessName} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91 6290634766" value={formData.phone} onChange={handleChange} />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                         <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Complete Address *</label>
                         <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="address" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your complete address" value={formData.address} onChange={handleChange} />
                         </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">City *</label>
                          <input type="text" name="city" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter city name" value={formData.city} onChange={handleChange} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">State *</label>
                          <SelectNative name="state" required value={formData.state} onChange={handleChange} className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                            <option value="">Select State</option>
                            {states.map(s => <option key={s} value={s}>{s}</option>)}
                          </SelectNative>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">PIN Code *</label>
                          <input type="text" name="pinCode" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="123456" value={formData.pinCode} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Opposition Details</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Provide details about the contested trademark</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Trademark Application No.</label>
                            <input type="text" className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. 1234567" />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Opponent Name</label>
                            <input type="text" className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Name of party opposing/being opposed" />
                         </div>
                      </div>
                      <div className="mt-6">
                         <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Brief Description of Conflict</label>
                         <textarea rows={4} className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Describe the core issue..."></textarea>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                     <div className="animate-in fade-in slide-in-from-right duration-300">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Case Information</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Final review and submission</p>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-100 dark:border-blue-800 mb-6">
                         <h4 className="font-bold text-primary dark:text-blue-400 mb-2">Notice Deadline</h4>
                         <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Have you received an official notice from the Trademark Registry? If yes, please specify the date received.</p>
                         <input type="date" className="w-full max-w-xs px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white" />
                      </div>
                      <div className="flex items-start gap-3">
                         <input type="checkbox" id="terms" className="mt-1" required />
                         <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">I confirm that the information provided is accurate and I agree to the terms of legal representation service.</label>
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-gray-100 dark:border-slate-700 mt-6">
                    <ProgressIndicator 
                       currentStep={step} 
                       totalSteps={3} 
                       onNext={handleNext} 
                       onBack={handleBack}
                       buttonClassName="bg-primary hover:bg-blue-800"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-t-4 border-red-600">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-bold text-xl">KA</div>
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">KHURSHID ANWAR</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Senior Trademark Attorney</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center justify-between border-b border-gray-50 dark:border-slate-700 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Experience</span>
                    <span className="font-bold dark:text-white">7+ Years</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 dark:border-slate-700 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Cases Handled</span>
                    <span className="font-bold dark:text-white">Hundreds</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-50 dark:border-slate-700 pb-2">
                    <span className="text-gray-600 dark:text-gray-400">Success Rate</span>
                    <span className="font-bold text-green-600 dark:text-green-400">95%</span>
                  </div>
                   <div className="flex items-center justify-between pt-2">
                    <span className="text-gray-600 dark:text-gray-400">Expertise</span>
                    <span className="font-bold dark:text-white">Negotiator</span>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded-lg">
                   <h4 className="font-bold text-sm mb-2 dark:text-white">Specializations:</h4>
                   <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-300 list-disc pl-4">
                     <li>Trademark Opposition Defense</li>
                     <li>Opposition Filing & Strategy</li>
                     <li>Hearing Representation</li>
                     <li>Settlement Negotiations</li>
                     <li>Infringement Actions</li>
                   </ul>
                </div>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Case Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-secondary font-bold">₹</div>
                    <div>
                      <div className="font-bold text-sm text-secondary">Standard Fee</div>
                      <div className="text-sm">₹15,000 per case (base fee)</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Timeline</div>
                      <div className="text-sm">6-12 months (case dependent)</div>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <FileText className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Case Review</div>
                      <div className="text-sm">typically within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Success Rate</div>
                      <div className="text-sm">95% favorable outcomes</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl shadow-lg p-6 border border-red-100 dark:border-red-900/30">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertTriangle size={20} /> Urgent Case?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  If your opposition has a critical deadline approaching, contact us immediately for emergency assistance.
                </p>
                
                <a href="tel:+916290634766" className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-md">
                   <Phone size={18} /> Emergency Contact
                </a>
                <p className="text-center text-xs text-red-400 mt-2">Emergency assistance available subject to attorney availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OppositionHandlingPage;