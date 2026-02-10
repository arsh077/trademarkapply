import { cn } from "../../utils";
import * as React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectPropsNative extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

const SelectNative = React.forwardRef<HTMLSelectElement, SelectPropsNative>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "peer inline-flex w-full cursor-pointer appearance-none items-center rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 shadow-sm shadow-black/5 transition-shadow focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-[option[disabled]:checked]:text-gray-400",
            props.multiple
              ? "py-1 [&>*]:px-3 [&>*]:py-1 [&_option:checked]:bg-blue-50 dark:[&_option:checked]:bg-blue-900"
              : "h-11 pl-4 pr-10 py-2", // Adjusted height/padding for better touch target
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {!props.multiple && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex h-full w-9 items-center justify-center text-gray-400 peer-disabled:opacity-50 px-2">
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </span>
        )}
      </div>
    );
  },
);
SelectNative.displayName = "SelectNative";

export { SelectNative };