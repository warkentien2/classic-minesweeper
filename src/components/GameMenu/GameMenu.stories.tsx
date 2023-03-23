import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GameMenu } from "./GameMenu";
import type { GameMenuProps } from "./GameMenu";

export default {
  title: "GameSections/GameMenu",
  component: GameMenu,
} as Meta;

const Template: Story<GameMenuProps> = (args) => <GameMenu {...args} />;

export const Default = Template.bind({});
Default.args = {};
