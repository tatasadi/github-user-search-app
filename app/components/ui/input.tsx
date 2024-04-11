import * as React from "react"

import { cn } from "@/app/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[4.3125rem] w-full rounded-[0.9375rem] bg-off-white px-3 py-2 text-[0.8125rem] text-dark shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-cool-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-deep-blue dark:text-white dark:placeholder-white dark:shadow-none dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 sm:text-lg",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = "Input"

export { Input }
