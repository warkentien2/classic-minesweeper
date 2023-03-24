import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { GameSettings } from "./GameSettings";
import type { GameSettingsProps } from "./GameSettings";

export default {
  title: "Settings/GameSettings",
  component: GameSettings,
} as Meta;

const Template: Story<GameSettingsProps> = (args) => <GameSettings {...args} />;

export const Default = Template.bind({});
Default.args = {};
