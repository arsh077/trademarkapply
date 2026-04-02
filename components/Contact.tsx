import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl font-bold mt-2">Ready to protect your brand?</h2>
          <p className="text-gray-600 mt-2">Contact us today for expert trademark services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p className="text-gray-600">
              8/5 mominpore road<br />
              Kolkata 700023<br />
              West Bengal, India
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-gray-600 mb-2">trademark.legal.01@gmail.com</p>
            <a href="mailto:trademark.legal.01@gmail.com" className="text-primary text-sm font-semibold hover:underline">Send an email</a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all border border-transparent">
            <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">Phone</h3>
            <p className="text-gray-900/60 mb-2 text-sm">+91 7605890360</p>
            <a href="tel:+917605890360" className="text-secondary text-[10px] font-mono font-bold uppercase tracking-wider hover:underline">Call now</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
