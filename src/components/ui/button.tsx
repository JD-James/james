import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonSize = 'default' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClass = {
  primary:
    'bg-primary text-white hover:bg-blue-600',
  secondary:
    'bg-muted text-foreground hover:bg-gray-200',
  outline:
    'bg-transparent text-primary border-4 border-primary hover:bg-primary hover:text-white',
};

const sizeClass = {
  default: 'h-14 text-sm',
  lg: 'h-16 text-base',
};

export function Button({ variant = 'primary', size = 'default', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 transform rounded-md uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    />
  );
}
