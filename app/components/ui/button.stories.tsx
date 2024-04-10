import type { Meta, StoryObj } from "@storybook/react"
import Image from "next/image"
import iconSearch from "../../../public/icon-search.svg"

import { Button } from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {
    variant: "default",
    children: "Search",
  },
}

export const Icon: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: <Image src={iconSearch} alt="Search" />,
  },
}
