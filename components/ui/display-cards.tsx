"use client";

import React from "react";
import { cn } from "../../utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-32 w-[16rem] sm:h-48 sm:w-[24rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-white/90 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[12rem] sm:after:w-[20rem] after:bg-gradient-to-l after:from-slate-50 after:to-transparent after:content-[''] hover:border-blue-200 hover:bg-white shadow-lg [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-100 p-1 sm:p-2 shadow-sm">
          {icon}
        </span>
        <p className={cn("text-sm sm:text-lg font-bold text-slate-900 dark:text-white", titleClassName)}>{title}</p>
      </div>
      <p className="text-slate-700 dark:text-slate-200 text-[10px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4 font-medium">{description}</p>
      <p className="text-slate-500 dark:text-slate-400 text-[8px] sm:text-xs font-mono uppercase tracking-wider">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-200 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-xl",
    },
    {
      className: "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-gray-200 before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 shadow-xl",
    },
    {
      className: "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-8 shadow-xl bg-white",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 py-10">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
