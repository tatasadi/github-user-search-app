import type { Meta, StoryObj } from "@storybook/react"
import CustomLink from "./custom-link"

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

export const Link: Story = {
  args: {
    link: "www.link.com",
  },
}

export const NotAvailable: Story = {
  args: {
    isNotAvailable: true,
  },
}
