import React from 'react';
import DisplayCards from './ui/display-cards';
import { Star, Quote, UserCheck, CheckCircle2 } from 'lucide-react';

const Reviews: React.FC = () => {
  const reviewCards = [
    {
      icon: <Quote className="size-4 text-secondary" />,
      title: "Rajesh K.",
      description: "Exceptional service for my company's trademark registration in Kolkata. Mr. Anwar is very knowledgeable and guided us through the entire objection process smoothly. Highly recommended for professionalism.",
      date: "3 days ago",
      iconClassName: "text-secondary",
      titleClassName: "text-slate-900",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-200 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-xl z-10",
    },
    {
      icon: <CheckCircle2 className="size-4 text-secondary" />,
      title: "Priya S.",
      description: "I was worried about the trademark hearing, but the team at Legal Success India handled it perfectly. We got our certificate within the expected timeline. Very transparent with fees.",
      date: "1 week ago",
      iconClassName: "text-secondary",
      titleClassName: "text-slate-900",
      className:
        "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-200 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-xl z-20",
    },
    {
      icon: <UserCheck className="size-4 text-secondary" />,
      title: "Amit Verma",
      description: "Best trademark attorney in town. The consultation was free and very detailed. They didn't push for unnecessary services. Trustworthy and efficient legal partner for my startup.",
      date: "2 weeks ago",
      iconClassName: "text-secondary",
      titleClassName: "text-slate-900",
      className:
        "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-8 shadow-xl bg-white z-30",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <span className="text-secondary font-bold tracking-wide uppercase text-sm mb-2 block">Client Reviews</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Businesses Across India</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Our commitment to excellence and legal expertise has earned us the trust of thousands of clients. We pride ourselves on clear communication, successful outcomes, and professional integrity.
            </p>
            <div className="flex items-center gap-2 mb-2">
               <div className="flex text-secondary">
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
                 <Star fill="currentColor" size={20} />
               </div>
               <span className="font-bold text-xl">4.9/5</span>
            </div>
            <p className="text-sm text-slate-400">Based on Google Reviews</p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center py-10 lg:py-0">
            <DisplayCards cards={reviewCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;