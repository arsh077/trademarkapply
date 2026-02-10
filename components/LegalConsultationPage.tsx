import React, { useState } from 'react';
import { 
  Scale, Shield, ClipboardList, Clock, Phone, Calendar, 
  CheckCircle2, User, Building2, Mail, MapPin, 
  FileText, MessageSquare, Briefcase, HelpCircle,
  AlertCircle
} from 'lucide-react';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';

interface LegalConsultationPageProps {
  onNavigate: (page: string) => void;
}

const LegalConsultationPage: React.FC<LegalConsultationPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    topics: [] as string[],
    date: '',
    time: '',
    mode: 'Video Call',
    description: '',
    questions: '',
    urgency: 'Normal',
    source: '',
    history: 'First time'
  });

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Other"
  ];

  const topicsList = [
    "Trademark Registration Process", "Brand Protection Strategy", "IP Infringement Issues",
    "Trademark Search & Analysis", "Trademark Opposition", "Trademark Renewal",
    "Copyright Protection", "Licensing & Agreements", "General IP Consultation", "Business Setup & IP"
  ];

  const handleTopicChange = (topic: string) => {
    setFormData(prev => {
      if (prev.topics.includes(topic)) {
        return { ...prev, topics: prev.topics.filter(t => t !== topic) };
      }
      return { ...prev, topics: [...prev.topics, topic] };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.topics.length === 0) {
      alert("Please select at least one consultation topic.");
      return;
    }
    alert("Consultation request submitted! We will confirm your slot shortly.");
  };

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
            <span className="font-semibold text-primary dark:text-blue-400">Legal Consultation</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-emerald-700 text-white py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Expert Legal Consultation
              </h1>
              <p className="text-lg text-green-100 mb-8">
                Expert legal advice on trademark law, brand protection strategies, and intellectual property matters from experienced trademark consultants. Get personalized guidance for your specific needs.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <GlassButton onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-secondary text-slate-900 font-bold hover:bg-yellow-400">
                  <Calendar size={20} /> Book Free Session
                </GlassButton>
                <GlassButton href="tel:+916290634766" className="bg-white/10 text-white border border-white/30 font-bold hover:bg-white/20">
                  <Phone size={20} /> Call Now
                </GlassButton>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Shield className="text-secondary mb-3" size={32} />
                <h3 className="font-bold mb-1">Brand Protection</h3>
                <p className="text-xs text-green-100">Strategy & Analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <Scale className="text-secondary mb-3" size={32} />
                <h3 className="font-bold mb-1">Risk Assessment</h3>
                <p className="text-xs text-green-100">Legal Compliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                <ClipboardList className="text-secondary mb-3" size={32} />
                <h3 className="font-bold mb-1">Strategic Planning</h3>
                <p className="text-xs text-green-100">Personalized Roadmap</p>
              </div>
              <div className="bg-secondary text-slate-900 p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-bold mb-1">FREE</div>
                <div className="text-sm font-semibold">30 Minutes</div>
                <div className="text-xs mt-2 opacity-80">Same Day Booking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">What You Get in Your Free Consultation</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Comprehensive legal guidance tailored to your specific business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={28} />, title: "Comprehensive Brand Protection Strategy", desc: "Complete analysis of your brand protection needs, identifying vulnerabilities and opportunities for strengthening your intellectual property portfolio." },
              { icon: <CheckCircle2 size={28} />, title: "Detailed Trademark Eligibility Review", desc: "Professional assessment of your trademark's registrability, including comprehensive search results and expert recommendations for success." },
              { icon: <Scale size={28} />, title: "Professional Risk Assessment Analysis", desc: "In-depth evaluation of potential legal risks, infringement issues, and compliance requirements specific to your business and industry." },
              { icon: <ClipboardList size={28} />, title: "Legal Requirements & Guidance", desc: "Clear explanation of all legal requirements, documentation needs, and compliance obligations for your specific intellectual property goals." },
              { icon: <FileText size={28} />, title: "Accurate Cost Estimation & Timeline", desc: "Transparent breakdown of all costs involved, realistic timelines for completion, and flexible payment options tailored to your budget." },
              { icon: <Briefcase size={28} />, title: "Strategic Planning & Next Steps", desc: "Personalized action plan with prioritized next steps, milestone tracking, and ongoing support recommendations for your IP journey." }
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-xl p-0.5">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="h-full p-6 rounded-xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-all hover:border-green-100 dark:hover:border-green-900 group relative">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Form */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
                <div className="mb-8 pb-6 border-b border-gray-100 dark:border-slate-700">
                  <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Book Your Free Legal Consultation</h2>
                  <p className="text-gray-600 dark:text-gray-400">Complete the form below to schedule your personalized consultation with KHURSHID ANWAR</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Personal Info */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Your Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-gray-400" size={18} />
                          <input type="text" name="fullName" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your full name" onChange={handleChange} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business/Company Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                          <input type="text" name="businessName" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your business name" onChange={handleChange} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                          <input type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="your.email@example.com" onChange={handleChange} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                          <input type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="+91 6290634766" onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                       <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Complete Address *</label>
                       <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                          <input type="text" name="address" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter your complete address" onChange={handleChange} />
                       </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">City *</label>
                        <input type="text" name="city" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Enter city name" onChange={handleChange} />
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
                        <input type="text" name="pinCode" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="123456" onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Consultation Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Consultation Details</h3>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Consultation Topics * (Select all that apply)</label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {topicsList.map((topic, i) => (
                          <div key={i} className={`border rounded-lg p-3 cursor-pointer transition-colors flex items-center gap-3 ${formData.topics.includes(topic) ? 'bg-blue-50 dark:bg-blue-900/30 border-primary dark:border-blue-500' : 'hover:bg-gray-50 dark:hover:bg-slate-700 border-gray-200 dark:border-slate-600'}`} onClick={() => handleTopicChange(topic)}>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${formData.topics.includes(topic) ? 'bg-primary dark:bg-blue-600 border-primary dark:border-blue-600 text-white' : 'border-gray-400'}`}>
                              {formData.topics.includes(topic) && <CheckCircle2 size={14} />}
                            </div>
                            <span className="text-sm dark:text-gray-300">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Preferred Date *</label>
                        <input type="date" name="date" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" onChange={handleChange} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Preferred Time *</label>
                        <SelectNative name="time" required value={formData.time} onChange={handleChange} className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                          <option value="">Select time slot</option>
                          <option value="morning">Morning (9 AM - 12 PM)</option>
                          <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                          <option value="evening">Evening (4 PM - 7 PM)</option>
                        </SelectNative>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Consultation Mode *</label>
                      <SelectNative name="mode" value={formData.mode} onChange={handleChange} className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                        <option value="Video Call">Video Call (Google Meet / Zoom - Recommended)</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="In-Person">In-Person Meeting (Kolkata Office)</option>
                      </SelectNative>
                    </div>
                  </div>

                  {/* Step 3: Business Needs */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary dark:bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Business & Consultation Needs</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business Description *</label>
                        <textarea name="description" required rows={3} className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Describe your business, products/services, and industry" onChange={handleChange}></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Specific Questions or Concerns</label>
                        <textarea name="questions" rows={3} className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="List any specific questions, concerns, or issues you'd like to discuss" onChange={handleChange}></textarea>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Urgency Level</label>
                          <SelectNative name="urgency" value={formData.urgency} onChange={handleChange} className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                            <option value="Normal">Normal</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                          </SelectNative>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">How did you hear about us?</label>
                          <SelectNative name="source" value={formData.source} onChange={handleChange} className="dark:bg-slate-700 dark:border-slate-600 dark:text-white">
                            <option value="">Select source</option>
                            <option value="Google">Google Search</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Referral">Referral</option>
                            <option value="Other">Other</option>
                          </SelectNative>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Previous Consultation</label>
                        <div className="flex gap-6">
                           <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300">
                             <input type="radio" name="history" value="First time" defaultChecked onChange={handleChange} />
                             <span className="text-sm">This is my first consultation</span>
                           </label>
                           <label className="flex items-center gap-2 cursor-pointer text-gray-700 dark:text-gray-300">
                             <input type="radio" name="history" value="Returning" onChange={handleChange} />
                             <span className="text-sm">I've had consultations before</span>
                           </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <GlassButton type="submit" className="w-full bg-secondary text-primary font-bold shadow-lg text-lg flex items-center justify-center gap-2">
                    <Calendar size={24} /> Book My Free Consultation
                  </GlassButton>
                  <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service. We'll contact you to confirm your consultation details.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-t-4 border-primary dark:border-blue-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-bold text-xl">KA</div>
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">KHURSHID ANWAR</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Senior Trademark Attorney</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> 7+ Years Experience
                  </div>
                  <div className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Hundreds of cases handled
                  </div>
                  <div className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> High success rate
                  </div>
                   <div className="flex items-center gap-3 text-sm dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" /> Government Certified
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic border-t dark:border-slate-700 pt-4">
                  Expert in trademark law, brand protection, and intellectual property matters. Specialized in helping businesses navigate complex IP challenges.
                </p>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Consultation Details</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Clock className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Duration</div>
                      <div className="text-sm">30 minutes (absolutely FREE)</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Calendar className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Availability</div>
                      <div className="text-sm">Same day booking available</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MessageSquare className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Format</div>
                      <div className="text-sm">Video call, phone, or in-person</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <FileText className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Follow-up</div>
                      <div className="text-sm">Detailed summary & action plan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white">
                  <AlertCircle className="text-red-500" size={20} /> Immediate Assistance
                </h3>
                <div className="space-y-4">
                  <a href="tel:+916290634766" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Call Now</div>
                      <div className="font-bold text-primary dark:text-blue-400">+91 6290634766</div>
                    </div>
                  </a>
                  <a href="mailto:trademark.legal.01@gmail.com" className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Email Us</div>
                      <div className="font-bold text-primary dark:text-blue-400 text-sm">trademark.legal.01@gmail.com</div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-700">
                  <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">Office Hours</div>
                  <div className="text-sm flex justify-between mb-1 dark:text-gray-300">
                    <span>Mon - Fri</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="text-sm flex justify-between mb-1 dark:text-gray-300">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="text-sm flex justify-between dark:text-gray-300">
                    <span>Sunday</span>
                    <span className="font-medium">By appointment only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalConsultationPage;