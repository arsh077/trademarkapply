import React, { useState } from 'react';
import { 
  RefreshCw, CheckCircle2, ClipboardList, Activity, FileText, 
  Calendar, User, Building2, Mail, Phone, MapPin, ArrowRight,
  Clock, Shield, Bell, Check, TrendingUp
} from 'lucide-react';
import ProgressIndicator from './ui/progress-indicator';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface RenewalServicesPageProps {
  onNavigate: (page: string) => void;
}

const RenewalServicesPage: React.FC<RenewalServicesPageProps> = ({ onNavigate }) => {
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
      alert("Renewal request submitted! We will contact you shortly.");
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
            <span className="font-semibold text-primary dark:text-blue-400">Renewal Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 to-amber-700 dark:from-orange-950 dark:to-amber-900 text-white py-12 lg:py-20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-3 py-1 rounded-full text-orange-100 text-sm font-bold mb-4">
                <RefreshCw size={16} /> Renewal Services
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Ensure continuous protection of your trademark rights
              </h1>
              <p className="text-lg text-orange-100 mb-8">
                We handle all renewal formalities and government procedures to maintain your IP protection.
              </p>
              
              <div className="grid grid-cols-3 gap-4 max-w-lg mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">₹3,999+</div>
                  <div className="text-xs text-gray-200">Govt. fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">2-3</div>
                  <div className="text-xs text-gray-200">Months Timeline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">10 Yrs</div>
                  <div className="text-xs text-gray-200">Extension</div>
                </div>
              </div>

              <GlassButton onClick={() => document.getElementById('renewal-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-lg gap-2">
                <RefreshCw size={20} /> Renew Now
              </GlassButton>
            </div>

            <div className="grid gap-4">
               {[
                 { title: "Eligibility Verification", desc: "Complete renewal eligibility assessment", icon: <CheckCircle2 /> },
                 { title: "Application Preparation", desc: "Professional application review and preparation", icon: <ClipboardList /> },
                 { title: "Status Monitoring", desc: "Continuous tracking and portfolio management", icon: <Activity /> }
               ].map((item, i) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 flex items-center gap-4">
                   <div className="bg-white/20 p-3 rounded-lg text-secondary">
                     {item.icon}
                   </div>
                   <div>
                     <h3 className="font-bold text-lg">{item.title}</h3>
                     <p className="text-sm text-gray-200">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Renewal Services */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Comprehensive Renewal Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Our expert team provides end-to-end trademark renewal assistance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle2 size={32} />, title: "Renewal Eligibility Verification", desc: "Comprehensive verification of renewal eligibility, assessment of trademark status, review of registration records, and evaluation of compliance requirements." },
              { icon: <ClipboardList size={32} />, title: "Application Preparation & Review", desc: "Professional preparation of renewal applications, thorough review of all documentation, accuracy verification, and compliance checking." },
              { icon: <Building2 size={32} />, title: "Government Filing & Submission", desc: "Expert handling of all government filing procedures, official submission of renewal applications, payment of government fees, and coordination." },
              { icon: <Activity size={32} />, title: "Status Monitoring & Tracking", desc: "Continuous monitoring of renewal application status, real-time tracking of government processing, proactive follow-up on pending applications." },
              { icon: <FileText size={32} />, title: "Certificate Delivery & Docs", desc: "Secure delivery of renewed trademark certificates, organized documentation management, digital copies provision, and maintenance." },
              { icon: <Calendar size={32} />, title: "Portfolio Management", desc: "Comprehensive trademark portfolio management, automated renewal reminders, deadline tracking systems, and strategic renewal planning." },
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
                <div className="h-full p-8 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 hover:shadow-lg transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-orange-200 dark:hover:border-orange-700 group relative">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
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
      <section id="renewal-form" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Renewal Handling Request</h2>
            <p className="text-gray-600 dark:text-gray-400">Please provide complete details about yourself or your business</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
                
                <form onSubmit={handleNext} className="space-y-6">
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right duration-300">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Client Information</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Enter your contact details</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Full Name *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="fullName" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter your full legal name" value={formData.fullName} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business/Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="businessName" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter business name" value={formData.businessName} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="+91 6290634766" value={formData.phone} onChange={handleChange} />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                         <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Complete Address *</label>
                         <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="text" name="address" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter your complete address" value={formData.address} onChange={handleChange} />
                         </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">City *</label>
                          <input type="text" name="city" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter city name" value={formData.city} onChange={handleChange} />
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
                          <input type="text" name="pinCode" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="123456" value={formData.pinCode} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                     <div className="animate-in fade-in slide-in-from-right duration-300">
                       <div className="mb-6">
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white">Trademark Details</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400">Provide info about the trademark to be renewed</p>
                       </div>
                       <div className="grid md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Application No.</label>
                             <input type="text" className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" placeholder="e.g. 1234567" />
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Current Expiry Date</label>
                             <input type="date" className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 outline-none" />
                          </div>
                       </div>
                     </div>
                  )}

                  {step === 3 && (
                     <div className="animate-in fade-in slide-in-from-right duration-300">
                       <div className="mb-6">
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white">Requirements</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400">Review details</p>
                       </div>
                       <p className="text-gray-600 dark:text-gray-400">Please confirm your details. Upon submission, our team will review the trademark status and contact you for the next steps.</p>
                     </div>
                  )}

                  <div className="pt-6 border-t border-gray-100 dark:border-slate-700 mt-6">
                    <ProgressIndicator 
                        currentStep={step} 
                        totalSteps={3} 
                        onNext={handleNext} 
                        onBack={handleBack}
                        buttonClassName="bg-orange-500 hover:bg-orange-600"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-t-4 border-orange-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-bold text-xl">KA</div>
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">KHURSHID ANWAR</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Trademark Renewal Specialist</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> 7+ Years Experience</div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> Thousands of renewals processed</div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> High Success Rate</div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> Portfolio Expert</div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                   <h4 className="font-bold text-sm mb-2 text-orange-800 dark:text-orange-300">Specializations:</h4>
                   <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-300 list-disc pl-4">
                     <li>Standard Trademark Renewals</li>
                     <li>Expedited Processing</li>
                     <li>Grace Period Restorations</li>
                     <li>Portfolio Management</li>
                   </ul>
                </div>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Renewal Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="font-bold text-secondary">💰</div>
                    <div>
                      <div className="font-bold text-sm text-secondary">Service Fee</div>
                      <div className="text-sm">₹3,999+ Government fees</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Timeline</div>
                      <div className="text-sm">2-3 months standard</div>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <RefreshCw className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Extension Period</div>
                      <div className="text-sm">10 years from renewal</div>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <TrendingUp className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Success Rate</div>
                      <div className="text-sm">99% successful renewals</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <Bell className="text-orange-500" size={20} /> Automated reminders
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Automated reminders 6 months before</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> Calendar integration</li>
                  <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5" /> SMS & email notifications</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700 text-xs text-gray-500 dark:text-gray-400">
                   <strong>Renewal Timeline:</strong><br/>
                   Year 10: First renewal due<br/>
                   Year 20: Second renewal due
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewalServicesPage;