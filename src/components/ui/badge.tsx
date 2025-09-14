import * as React from "react";
import { cn } from "../../lib/utils";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "warning";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-transparent bg-[#005489] text-white",
  secondary: "border-transparent bg-gray-100 text-gray-900",
  destructive: "border-transparent bg-red-600 text-white",
  outline: "border-gray-300 text-gray-700",
  success: "border-transparent bg-[#1ca52c] text-white",
  warning: "border-transparent bg-[#d6900f] text-white",
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
