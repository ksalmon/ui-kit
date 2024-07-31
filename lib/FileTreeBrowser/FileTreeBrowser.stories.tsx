import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import FileTreeBrowser from ".";

const defaultData = [
  {
    value: "root",
    title: "root",
    children: [
      { value: "leaf1", title: <i>leaf1</i> },
      {
        value: "leaf2",
        title: "leaf2",
        children: [
          {
            value: "prop1",
            title: "prop1",
            onClick: () => console.log("redirect to leaf2"),
          },
        ],
      },
    ],
  },
];

const meta = {
  title: "recipes/FileTreeBrowser",
  component: FileTreeBrowser,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onChange: (value: string) => console.log("Interacted with: ", value),
    data: defaultData,
  },
} satisfies Meta<typeof FileTreeBrowser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (value: string) => console.log("Interacted with: ", value),
    data: defaultData,
  },
};
