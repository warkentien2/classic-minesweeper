import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ControlsSettings } from "./ControlsSettings";
import type { ControlsSettingsProps } from "./ControlsSettings";

export default {
  title: "Settings/ControlsSettings",
  component: ControlsSettings,
} as Meta;

const Template: Story<ControlsSettingsProps> = (args) => (
  <ControlsSettings {...args} />
);

export const Default = Template.bind({});
Default.args = {};
