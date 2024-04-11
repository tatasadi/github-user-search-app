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
  return (
    <Button
      variant="link"
      size="link"
      className={cn(
        "flex items-center gap-4 text-[0.9375rem] font-medium text-cool-blue dark:text-white",
        isNotAvailable ? "opacity-50" : "",
        className,
      )}
    >
      {children}
      {isNotAvailable ? (
        <span>Not available</span>
      ) : isLink ? (
        <a className="hover:underline">{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </Button>
  )
}

export default CustomLink
