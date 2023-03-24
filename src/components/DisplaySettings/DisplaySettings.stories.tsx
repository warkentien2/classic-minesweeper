import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DisplaySettings } from "./DisplaySettings";
import type { DisplaySettingsProps } from "./DisplaySettings";

export default {
  title: "Settings/DisplaySettings",
  component: DisplaySettings,
} as Meta;

const Template: Story<DisplaySettingsProps> = (args) => (
  <DisplaySettings {...args} />
);

export const Default = Template.bind({});
Default.args = {};
