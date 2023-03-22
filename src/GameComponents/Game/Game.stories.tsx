import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Game } from "./Game";
import type { GameProps } from "./Game";

export default {
  title: "GameSections/Game",
  component: Game,
} as Meta;

const Template: Story<GameProps> = (args) => <Game {...args} />;

export const Default = Template.bind({});
Default.args = {};
