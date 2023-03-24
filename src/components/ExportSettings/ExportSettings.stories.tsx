import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ExportSettings } from "./ExportSettings";
import type { ExportSettingsProps } from "./ExportSettings";

export default {
  title: "Settings/ExportSettings",
  component: ExportSettings,
} as Meta;

const Template: Story<ExportSettingsProps> = (args) => (
  <ExportSettings {...args} />
);

export const Default = Template.bind({});
Default.args = {};
