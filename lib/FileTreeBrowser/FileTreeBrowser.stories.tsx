import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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
            onClick: action("redirect to prop1"),
          },
          {
            value: "prop2",
            title: "prop2",
            onClick: action("redirect to prop2"),
          },
          {
            value: "prop3",
            title: "prop3",
            onClick: action("redirect to prop3"),
            children: [
              {
                value: "deepprop1",
                title: "deepprop1",
                onClick: action("redirect to prop1"),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: "base",
    title: "base",
    children: [
      { value: "leaf1", title: "leaf1" },
      { value: "leaf2", title: "leaf2" },
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
    onChange: action("onChange"),
    data: defaultData,
  },
} satisfies Meta<typeof FileTreeBrowser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: action("onChange"),
    data: defaultData,
  },
};
