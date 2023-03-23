import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GameHeader } from "./GameHeader";
import type { GameHeaderProps } from "./GameHeader";

export default {
  title: "GameSections/GameHeader",
  component: GameHeader,
} as Meta;

const Template: Story<GameHeaderProps> = (args) => <GameHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
