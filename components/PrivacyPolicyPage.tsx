import React from 'react';
import { Timeline } from './ui/timeline';
import { Shield, Lock, Eye, FileText, Database, Globe, User, Phone, Mail, MapPin } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const timelineData = [
    {
      title: "1. Introduction",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            Welcome to TrademarkApply, owned and operated by KHURSHID ANWAR. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our trademark registration services.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
            By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this policy, please do not use our services.
          </p>
        </div>
      ),
    },
    {
      title: "2. Info Collected",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            We collect various types of information to provide and improve our trademark registration services:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900 dark:text-white"><User size={16} className="text-primary dark:text-blue-400"/> Contact Info</h4>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
                <li>Full name and business name</li>
                <li>Email address and phone number</li>
                <li>Mailing address and business address</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900 dark:text-white"><FileText size={16} className="text-primary dark:text-blue-400"/> Business Info</h4>
              <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
                <li>Company registration details</li>
                <li>Business type and industry</li>
                <li>Trademark details and intellectual property</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "3. Usage",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            We use the collected information for specific purposes related to our legal services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 items-start">
                <Shield className="text-primary dark:text-blue-400 mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Legal Services</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Providing trademark registration & legal consultation.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Lock className="text-primary dark:text-blue-400 mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Payment Processing</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Secure processing of payments and billing.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Globe className="text-primary dark:text-blue-400 mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Communication</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Responding to inquiries & providing case updates.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Eye className="text-primary dark:text-blue-400 mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900 dark:text-white">Improvement</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Analyzing usage to improve service quality.</span>
                </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "4. Security",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            We implement robust security measures to protect your personal information:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 items-center">
                <Lock className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Encryption:</strong> Data encrypted in transit and at rest.</span>
            </li>
            <li className="flex gap-3 items-center">
                <Shield className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Secure Storage:</strong> Professionally managed secure facilities.</span>
            </li>
            <li className="flex gap-3 items-center">
                <Database className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-sm text-gray-700 dark:text-gray-300"><strong>Access Controls:</strong> Strict personnel access limits.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Contact",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
            If you have any questions about this Privacy Policy, please contact our Data Protection Officer:
          </p>
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-6 shadow-sm mb-8">
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <User className="text-primary dark:text-blue-400" size={20} />
                    <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">KHURSHID ANWAR</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Data Protection Officer</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="text-primary dark:text-blue-400" size={20} />
                    <a href="mailto:trademark.legal.01@gmail.com" className="text-sm hover:underline text-slate-700 dark:text-slate-300">trademark.legal.01@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-primary dark:text-blue-400" size={20} />
                    <a href="tel:+916290634766" className="text-sm hover:underline text-slate-700 dark:text-slate-300">+91 6290634766</a>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="text-primary dark:text-blue-400" size={20} />
                    <span className="text-sm text-slate-700 dark:text-slate-300">22/1 Momiinpore Road, Kolkata 700023</span>
                </div>
             </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <button onClick={() => onNavigate('home')} className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</button>
            <span className="mx-2">→</span>
            <span className="font-semibold text-primary dark:text-blue-400">Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;