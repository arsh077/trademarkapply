import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary dark:text-blue-400 font-bold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl font-bold mt-2 dark:text-white">Ready to protect your brand?</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Contact us today for expert trademark services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent dark:border-slate-700">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">
              22/1 Momiinpore Road<br />
              Kolkata 700023<br />
              West Bengal, India
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent dark:border-slate-700">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">trademark.legal.01@gmail.com</p>
            <a href="mailto:trademark.legal.01@gmail.com" className="text-primary dark:text-blue-400 text-sm font-semibold hover:underline">Send an email</a>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent dark:border-slate-700">
            <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">Phone</h3>
            <p className="text-white/60 mb-2 text-sm">+91 6290634766</p>
            <a href="tel:+916290634766" className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider hover:underline">Call now</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;