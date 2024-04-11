import type { Meta, StoryObj } from "@storybook/react"
import CustomLink from "./custom-link"
import IconLink from "./icons/icon-link"
import IconTwitter from "./icons/icon-twitter"

const meta = {
  title: "Components/CustomLink",
  component: CustomLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomLink>

export default meta
type Story = StoryObj<typeof meta>

export const Website: Story = {
  args: {
    text: "www.link.com",
    isLink: true,
    children: <IconLink />,
  },
}

export const TwitterNotAvailable: Story = {
  args: {
    isNotAvailable: true,
    children: <IconTwitter />,
  },
}
