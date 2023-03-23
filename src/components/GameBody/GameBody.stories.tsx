import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GameBody } from "./GameBody";
import type { GameBodyProps } from "./GameBody";

export default {
  title: "GameSections/GameBody",
  component: GameBody,
} as Meta;

const Template: Story<GameBodyProps> = (args) => <GameBody {...args} />;

export const Default = Template.bind({});
Default.args = {};
