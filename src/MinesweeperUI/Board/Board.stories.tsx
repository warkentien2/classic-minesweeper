import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Board } from "./Board";
import type { BoardProps } from "./Board";

export default {
  title: "Components/Board",
  component: Board,
} as Meta;

const Template: Story<BoardProps> = (args) => <Board {...args} />;

export const Default = Template.bind({});
Default.args = {};
