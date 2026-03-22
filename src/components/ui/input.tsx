import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
      <input
        className={`w-full rounded-md border-2 border-transparent bg-muted px-4 py-3 text-foreground outline-none transition-all duration-200 focus:border-primary focus:bg-white ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-rose-600">{error}</p>}
    </div>
  );
}
