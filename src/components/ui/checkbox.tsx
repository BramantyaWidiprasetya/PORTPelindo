import * as React from "react";
import { cn } from "../../lib/utils";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "h-4 w-4 appearance-none rounded border border-gray-400 transition-colors outline-none",
          "checked:border-[#0475bc] checked:bg-[#0475bc]",
          className
        )}
        {...props}
      />
    );
  }
);
Checkbox.displayName = "Checkbox";
