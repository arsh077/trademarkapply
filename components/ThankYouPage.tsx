import React, { useEffect, useState } from 'react';
import { CheckCircle, Home, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';

interface ThankYouPageProps {
  onNavigate: (page: string) => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className={`relative z-10 max-w-2xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-secondary to-yellow-600 rounded-full flex items-center justify-center animate-bounce-slow">
              <CheckCircle className="text-black" size={48} strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-panel p-8 md:p-12 rounded-2xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles size={14} /> Success
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Thank You!
          </h1>
          
          <p className="text-xl text-white/80 mb-6">
            Your request has been received successfully
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-white/70 text-sm leading-relaxed">
              Our team will review your information and get back to you within <span className="text-secondary font-bold">24 hours</span>. 
              We're excited to help you protect your brand!
            </p>
          </div>

          {/* What's Next */}
          <div className="text-left mb-8">
            <h3 className="text-lg font-bold text-white mb-4 font-mono uppercase tracking-wider">What Happens Next?</h3>
            <div className="space-y-3">
              {[
                { step: '1', text: 'Our expert will review your submission' },
                { step: '2', text: 'We\'ll conduct a preliminary trademark search' },
                { step: '3', text: 'You\'ll receive a detailed consultation call' },
                { step: '4', text: 'We\'ll guide you through the registration process' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm flex-shrink-0 group-hover:bg-secondary group-hover:text-black transition-all">
                    {item.step}
                  </div>
                  <p className="text-white/70 text-sm pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a href="tel:+916290634766" className="glass-panel p-4 rounded-xl hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all">
                  <Phone className="text-secondary group-hover:text-black transition-all" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-xs font-mono uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-bold text-sm">+91 6290634766</p>
                </div>
              </div>
            </a>

            <a href="mailto:trademark.legal.01@gmail.com" className="glass-panel p-4 rounded-xl hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center group-hover:bg-secondary transition-all">
                  <Mail className="text-secondary group-hover:text-black transition-all" size={18} />
                </div>
                <div className="text-left">
                  <p className="text-white/60 text-xs font-mono uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-bold text-sm">trademark.legal.01@gmail.com</p>
                </div>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 group"
            >
              <Home size={18} />
              Back to Home
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all duration-300"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;
