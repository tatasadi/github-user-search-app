import type { Meta, StoryObj } from "@storybook/react"

import Search from "./search"

const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const InputSearch: Story = {
  args: {},
}

export const InputSearchWithError: Story = {
  args: {
    error: "No results",
    username: "octocat",
  },
}
