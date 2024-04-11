import { cn } from "../lib/utils"
import { Button } from "./ui/button"

const CustomLink = ({
  children,
  text = "",
  isLink = false,
  isNotAvailable = false,
  className = "",
}: {
  children?: React.ReactNode
  text?: string
  isLink?: boolean
  isNotAvailable?: boolean
  className?: string
}) => {
  const textStyles = "max-w-full text-wrap overflow-wrap break-all"

  return (
    <div
      className={cn(
        "flex items-center gap-4 text-[0.9375rem] font-medium text-cool-blue dark:text-white sm:items-start",
        isNotAvailable ? "opacity-50" : "",
        className,
      )}
    >
      {children}
      {isNotAvailable ? (
        <span className={textStyles}>Not available</span>
      ) : isLink ? (
        <a href={text} className={cn("hover:underline", textStyles)}>
          {text}
        </a> // Ensure to use href for links
      ) : (
        <span className={textStyles}>{text}</span>
      )}
    </div>
  )
}

export default CustomLink
