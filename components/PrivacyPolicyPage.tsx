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
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            Welcome to TrademarkApply, owned and operated by Legal Success India. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our trademark registration services.
          </p>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this policy, please do not use our services.
          </p>
        </div>
      ),
    },
    {
      title: "2. Info Collected",
      content: (
        <div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            We collect various types of information to provide and improve our trademark registration services:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900"><User size={16} className="text-primary"/> Contact Info</h4>
              <ul className="list-disc pl-4 text-sm text-gray-600">
                <li>Full name and business name</li>
                <li>Email address and phone number</li>
                <li>Mailing address and business address</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900"><FileText size={16} className="text-primary"/> Business Info</h4>
              <ul className="list-disc pl-4 text-sm text-gray-600">
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
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            We use the collected information for specific purposes related to our legal services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex gap-3 items-start">
                <Shield className="text-primary mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900">Legal Services</span>
                    <span className="text-xs text-gray-600">Providing trademark registration & legal consultation.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Lock className="text-primary mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900">Payment Processing</span>
                    <span className="text-xs text-gray-600">Secure processing of payments and billing.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Globe className="text-primary mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900">Communication</span>
                    <span className="text-xs text-gray-600">Responding to inquiries & providing case updates.</span>
                </div>
            </div>
            <div className="flex gap-3 items-start">
                <Eye className="text-primary mt-1" size={20} />
                <div>
                    <span className="font-bold block text-sm text-slate-900">Improvement</span>
                    <span className="text-xs text-gray-600">Analyzing usage to improve service quality.</span>
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
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            We implement robust security measures to protect your personal information:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 items-center">
                <Lock className="text-green-600" size={20} />
                <span className="text-sm text-gray-700"><strong>Encryption:</strong> Data encrypted in transit and at rest.</span>
            </li>
            <li className="flex gap-3 items-center">
                <Shield className="text-green-600" size={20} />
                <span className="text-sm text-gray-700"><strong>Secure Storage:</strong> Professionally managed secure facilities.</span>
            </li>
            <li className="flex gap-3 items-center">
                <Database className="text-green-600" size={20} />
                <span className="text-sm text-gray-700"><strong>Access Controls:</strong> Strict personnel access limits.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. Contact",
      content: (
        <div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-4">
            If you have any questions about this Privacy Policy, please contact our Data Protection Officer:
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <User className="text-primary" size={20} />
                    <div>
                        <div className="font-bold text-sm text-slate-900">Legal Success India</div>
                        <div className="text-xs text-gray-500">Legal Firm</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <a href="mailto:trademark.legal.01@gmail.com" className="text-sm hover:underline text-slate-700">trademark.legal.01@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <a href="tel:+917605890360" className="text-sm hover:underline text-slate-700">+91 7605890360</a>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="text-primary" size={20} />
                    <span className="text-sm text-slate-700">8/5 mominpore road, kolkata 700023</span>
                </div>
             </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <button onClick={() => onNavigate('home')} className="hover:text-primary transition-colors">Home</button>
            <span className="mx-2">â†’</span>
            <span className="font-semibold text-primary">Privacy Policy</span>
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
