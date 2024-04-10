import { cn } from "../lib/utils"
import IconLink from "./icon-link"
import { Button } from "./ui/button"

const CustomLink = ({
  link,
  isNotAvailable = false,
}: {
  link: string
  isNotAvailable: boolean
}) => {
  return (
    <Button
      variant="link"
      className={cn(
        "flex items-center gap-4",
        isNotAvailable ? "opacity-50" : "",
      )}
    >
      <IconLink />
      {isNotAvailable ? (
        <span>Not available</span>
      ) : (
        <a className="hover:underline">{link}</a>
      )}
    </Button>
  )
}

export default CustomLink
