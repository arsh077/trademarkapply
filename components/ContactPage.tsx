import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle, 
  Car, Train, Map, Send, User, MessageSquare
} from 'lucide-react';
import { SelectNative } from './ui/select-native';
import { GlowingEffect } from './ui/glowing-effect';
import { GlassButton } from './ui/liquid-glass';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
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
    service: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const lead = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service || 'General Inquiry',
        message: formData.message,
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
      
      alert("Message sent! We will contact you shortly.");
      if (onNavigate) onNavigate('thank-you');
    } catch (error) {
      console.error('Error saving lead:', error);
      alert('Error sending message. Please try again.');
    }
  };

  const faqs = [
    { q: "Trademark cost?", a: "From Ã¢â€šÂ¹699 + Govt fees." },
    { q: "Time required?", a: "12-18 months typically." },
    { q: "Free consultation?", a: "Yes, first 30 mins free." },
    { q: "Status tracking?", a: "Yes, regular updates." }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <div className="pt-32 pb-12 px-4 border-b border-gray-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Get in <span className="text-outline">Touch</span></h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg font-light">
            Expert legal advice is just a message away. Reach out to our team for immediate assistance with your intellectual property needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Sidebar */}
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Phone", val: "+91 7605890360", sub: "Mon-Sat, 9am-7pm", link: "tel:+917605890360" },
              { icon: Mail, title: "Email", val: "trademark.legal.01@gmail.com", sub: "24h Response Time", link: "mailto:trademark.legal.01@gmail.com" },
              { icon: MapPin, title: "Office", val: "Kolkata, West Bengal", sub: "8/5 mominpore road", link: "#" }
            ].map((item, i) => (
              <a key={i} href={item.link} className="block glass-panel p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 group-hover:text-secondary transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-600 text-xs uppercase tracking-widest font-mono mb-1">{item.title}</h3>
                    <p className="text-gray-900 font-bold text-lg mb-1 break-all">{item.val}</p>
                    <p className="text-gray-400 text-xs">{item.sub}</p>
                  </div>
                </div>
              </a>
            ))}

            <div className="glass-panel p-6 rounded-2xl bg-green-900/10 border-green-500/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="text-green-400 font-bold">WhatsApp Us</h3>
                  <p className="text-gray-600 text-xs">Fastest way to chat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="lg:col-span-2">
            <div className="glass-panel p-8 md:p-10 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase">Full Name</label>
                    <input type="text" name="fullName" required className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="John Doe" onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase">Email Address</label>
                    <input type="email" name="email" required className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="john@example.com" onChange={handleChange} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase">Phone</label>
                    <input type="tel" name="phone" required className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="+91 7605890360" onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase">Service</label>
                    <SelectNative name="service" required onChange={handleChange} className="w-full bg-gray-100 border border-gray-200 text-gray-900 h-[50px]">
                      <option value="" className="bg-white">Select Service</option>
                      <option value="Trademark" className="bg-white">Trademark Registration</option>
                      <option value="Logo" className="bg-white">Logo Design</option>
                      <option value="Consultation" className="bg-white">Legal Consultation</option>
                    </SelectNative>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-400 uppercase">Message</label>
                  <textarea name="message" required rows={5} className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-secondary/50 focus:outline-none transition-colors" placeholder="How can we help you?" onChange={handleChange}></textarea>
                </div>

                <GlassButton type="submit" className="w-full bg-white text-black font-bold hover:bg-slate-200">
                  Send Message
                </GlassButton>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Grid */}
        <div className="mt-24 pt-12 border-t border-gray-100">
          <h3 className="text-xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">{f.q}</h4>
                <p className="text-gray-400 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
