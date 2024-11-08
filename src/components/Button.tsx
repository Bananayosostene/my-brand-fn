import React, { forwardRef, ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline'| 'signUp' | 'text';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className = 'text-sm ', variant = 'primary', ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center  font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variantStyles = {
      primary:
        'bg-primary dark:bg-primary bg-primary-500  px-4 py-2 rounded-md w-[20rem] text-sm  text-white hover:bg-primary-600 focus-visible:ring-primary',
      secondary:
        'text-primary border border-primary  px-4 py-2 rounded-md w-[20rem] hover:bg-btn-hover focus-visible:ring-secondary-500',
      outline:
        ' border-2 border-primary text-light-text  dark:text-dark-text rounded-md px-5 py-1 skew-x-[-20deg]',
      signUp:
        ' border-2 border-primary  text-light-text  dark:text-dark-text rounded-full h-[2.5rem] px-5',
      text: ' text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500',
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