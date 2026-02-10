import React, { useState } from 'react';
import { 
  Copyright, BookOpen, Laptop, Palette, Music, Video, 
  Home as HomeIcon, CheckCircle2, User, Building2, Mail, 
  Phone, MapPin, ArrowRight, Shield, Clock, FileCheck
} from 'lucide-react';
import { SelectNative } from './ui/select-native';

interface CopyrightRegistrationPageProps {
  onNavigate: (page: string) => void;
}

const CopyrightRegistrationPage: React.FC<CopyrightRegistrationPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    authorName: '',
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
    alert("Copyright registration request submitted! We will guide you through the next steps.");
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
            <span className="font-semibold text-primary dark:text-blue-400">Copyright Registration</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 to-cyan-700 dark:from-teal-950 dark:to-cyan-900 text-white py-12 lg:py-20 relative overflow-hidden transition-colors">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 px-3 py-1 rounded-full text-teal-100 text-sm font-bold mb-4">
                <Copyright size={16} /> Copyright Registration
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Protect your creative works and intellectual property
              </h1>
              <p className="text-lg text-teal-100 mb-8">
                Secure legal protection for literary content, software, artistic creations, music, and more.
              </p>
              
              <div className="grid grid-cols-3 gap-4 max-w-lg mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">₹2,999+</div>
                  <div className="text-xs text-gray-200">Govt. fees</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">3-6</div>
                  <div className="text-xs text-gray-200">Months Timeline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">60+ Yrs</div>
                  <div className="text-xs text-gray-200">Protection</div>
                </div>
              </div>

              <button onClick={() => document.getElementById('copyright-form')?.scrollIntoView({ behavior: 'smooth' })} className="bg-teal-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors shadow-lg flex items-center gap-2">
                <Copyright size={20} /> Register Work
              </button>
            </div>

            <div className="grid gap-4">
               {[
                 { title: "Literary Works", desc: "Books, publications, and written content", icon: <BookOpen /> },
                 { title: "Software & Code", desc: "Applications, source code, and digital works", icon: <Laptop /> },
                 { title: "Artistic Works", desc: "Designs, graphics, and visual creations", icon: <Palette /> }
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

      {/* Comprehensive Services */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Comprehensive Copyright Services</h2>
            <p className="text-gray-600 dark:text-gray-400">Professional copyright registration for all types of creative works</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BookOpen size={32} />, title: "Literary Works", desc: "Complete copyright protection for novels, stories, poetry, articles, research papers, manuals, guides, essays, blogs, and all forms of written creative content." },
              { icon: <Laptop size={32} />, title: "Software & Source Code", desc: "Comprehensive protection for computer software, mobile applications, websites, source code, databases, algorithms, and all digital creative works." },
              { icon: <Palette size={32} />, title: "Artistic Works & Designs", desc: "Professional copyright services for paintings, drawings, graphic designs, logos, illustrations, photography, digital art, and all visual creative works." },
              { icon: <Music size={32} />, title: "Musical Compositions", desc: "Expert registration for songs, instrumental music, lyrics, sound recordings, podcasts, audio content, jingles, and all musical creative works." },
              { icon: <Video size={32} />, title: "Cinematographic Works", desc: "Complete protection for movies, documentaries, video content, animations, commercials, educational videos, and all cinematographic works." },
              { icon: <HomeIcon size={32} />, title: "Architectural Plans", desc: "Specialized copyright services for building plans, architectural designs, interior layouts, landscape designs, technical drawings, and blueprints." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-teal-50/50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 hover:shadow-lg transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-teal-200 dark:hover:border-teal-700 group">
                <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="copyright-form" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Copyright Registration Request</h2>
            <p className="text-gray-600 dark:text-gray-400">Complete the comprehensive form below to register your creative work</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-slate-700">
                
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Author Information</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell us about the creator and contact details</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Author/Creator Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="text" name="authorName" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Enter full name" value={formData.authorName} onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Business/Organization Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="text" name="businessName" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Enter business name" value={formData.businessName} onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="email" name="email" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="tel" name="phone" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="+91 6290634766" value={formData.phone} onChange={handleChange} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Complete Address *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="text" name="address" required className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Enter your complete address" value={formData.address} onChange={handleChange} />
                      </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">City *</label>
                      <input type="text" name="city" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="Enter city name" value={formData.city} onChange={handleChange} />
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
                      <input type="text" name="pinCode" required className="w-full px-4 py-2.5 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="123456" value={formData.pinCode} onChange={handleChange} />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-teal-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors shadow-lg flex items-center justify-center gap-2 mt-6">
                    Continue to Work Details <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border-t-4 border-teal-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-slate-600 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-bold text-xl">KA</div>
                  <div>
                    <h3 className="font-bold text-lg dark:text-white">KHURSHID ANWAR</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Copyright Registration Specialist</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> 7+ Years Experience</div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> Thousands of registrations</div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-green-500" /> High Success Rate</div>
                </div>

                <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                   <h4 className="font-bold text-sm mb-2 text-teal-800 dark:text-teal-300">Specializations:</h4>
                   <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-300 list-disc pl-4">
                     <li>Literary & Written Works</li>
                     <li>Software & Digital Content</li>
                     <li>Artistic & Visual Works</li>
                     <li>Musical & Audio Works</li>
                   </ul>
                </div>
              </div>

              <div className="bg-slate-800 text-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold mb-4 border-b border-gray-700 pb-2">Registration Info</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="font-bold text-secondary">💰</div>
                    <div>
                      <div className="font-bold text-sm text-secondary">Service Fee</div>
                      <div className="text-sm">₹2,999+ Government fees</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Timeline</div>
                      <div className="text-sm">3-6 months standard</div>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <Shield className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Protection Period</div>
                      <div className="text-sm">60+ years from creation</div>
                    </div>
                  </div>
                   <div className="flex gap-4">
                    <FileCheck className="text-secondary shrink-0" size={20} />
                    <div>
                      <div className="font-bold text-sm text-secondary">Success Rate</div>
                      <div className="text-sm">98% successful registrations</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-slate-700">
                <h3 className="font-bold mb-4 dark:text-white">Copyright Protection</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Legal ownership proof</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Infringement protection</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5" /> Commercial usage rights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopyrightRegistrationPage;