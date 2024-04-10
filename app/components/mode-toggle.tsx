"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import IconSun from "./icon-sun"
import IconMoon from "./icon-moon"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          variant="ghost"
          className="flex items-center gap-4"
        >
          <span>Light</span>
          <span className="h-5 w-5">
            <IconSun />
          </span>
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          variant="ghost"
          className="flex items-center gap-4"
        >
          <span>Dark</span>
          <span className="h-5 w-5">
            <IconMoon />
          </span>
        </Button>
      )}
    </>
  )
}
