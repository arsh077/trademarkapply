import React from 'react';
import { cn } from '../../utils';
import { Moon, Sun } from 'lucide-react';

interface SwitchProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export const Switch = ({ checked, onChange, className }: SwitchProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <label className="rocker rocker-small">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="switch-left">
            <Moon size={14} strokeWidth={2.5} />
        </span>
        <span className="switch-right">
            <Sun size={14} strokeWidth={2.5} />
        </span>
      </label>
    </div>
  );
};