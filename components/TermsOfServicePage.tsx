import React from 'react';
import { Scale, FileText, CheckCircle2, AlertTriangle, ShieldCheck, Globe } from 'lucide-react';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</button>
            <span className="mx-2">→</span>
            <span className="font-semibold text-primary dark:text-blue-400">Terms of Service</span>
          </div>
        </div>
      </div>

      <section className="bg-slate-900 dark:bg-black text-white py-12 reveal">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 text-secondary">
            <Scale size={32} />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-slate-300 mb-6">Comprehensive terms and conditions governing the use of TrademarkApply services. Please read these terms carefully before using our professional trademark services.</p>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400 bg-white/5 p-4 rounded-lg border border-white/10">
            <span>📅 Last Updated: September 13, 2025</span>
            <span>⚖️ Legal Expert: KHURSHID ANWAR</span>
            <span>🏛️ Governed by Indian Law</span>
          </div>
        </div>
      </section>

      <section className="py-16 reveal delay-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Quick Nav */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm transition-colors">
                <h3 className="font-bold mb-4 text-slate-900 dark:text-white">Quick Navigation</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Acceptance of Terms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Service Description</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Payment Terms</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Intellectual Property</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Privacy & Data</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> User Obligations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Termination</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Governing Law</li>
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4 space-y-12">
              
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary dark:text-blue-400">
                  <FileText /> 1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  By accessing or using TrademarkApply services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 text-sm text-blue-800 dark:text-blue-200">
                  <strong>Agreement Formation:</strong> These terms constitute a legally binding agreement between you and TrademarkApply. Your use of our services constitutes acceptance of these terms.
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary dark:text-blue-400">
                  <Scale /> 2. Service Description
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  TrademarkApply provides comprehensive trademark registration and related legal services in India. Our services are delivered by qualified legal professionals under the supervision of KHURSHID ANWAR, Senior Trademark Attorney.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                    <h3 className="font-bold mb-1 text-slate-900 dark:text-white">Trademark Registration</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Complete search, application preparation, filing, and prosecution services.</p>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg">
                    <h3 className="font-bold mb-1 text-slate-900 dark:text-white">Legal Consultation</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Expert advice on trademark law, brand protection strategies, and risk assessment.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary dark:text-blue-400">
                  <Globe /> 10. Governing Law
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to Indian law and jurisdiction.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-900/30 text-sm text-yellow-900 dark:text-yellow-100">
                  <strong>Kolkata Jurisdiction:</strong> Any legal proceedings arising from these terms or our services shall be exclusively handled by the courts of Kolkata, West Bengal, India.
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary dark:text-blue-400">
                  <AlertTriangle /> 11. Google Ads Compliance
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  TrademarkApply maintains strict compliance with Google Ads policies and advertising standards to ensure transparent and ethical marketing practices.
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>All advertisements are truthful and not misleading</li>
                  <li>Service capabilities are accurately represented</li>
                  <li>Pricing information is clear and transparent</li>
                  <li>Professional credentials are accurately stated</li>
                </ul>
              </div>

              <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Need Legal Help?</h3>
                    <p className="text-slate-400 text-sm">Contact our Senior Trademark Attorney directly.</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="font-bold text-lg text-secondary">KHURSHID ANWAR</div>
                    <div className="text-sm mb-4">Senior Trademark Attorney</div>
                    <button onClick={() => onNavigate('contact')} className="bg-secondary text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                      Contact Expert
                    </button>
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

export default TermsOfServicePage;