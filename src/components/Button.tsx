import React, { forwardRef, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className = '', variant = 'primary', ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-md w-[20rem] px-4 py-2 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variantStyles = {
      primary:
        'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500',
      secondary:
        'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500',
      outline:
        'border border-primary-500 text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
      text: 'text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;