// components/ui/Button.tsx
import * as React from "react";
// import { cn } from "@/lib/utils"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "default" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"} ${
        size === "icon" ? "btn-icon" : "btn-default"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
