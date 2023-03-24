import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ImportSettings } from "./ImportSettings";
import type { ImportSettingsProps } from "./ImportSettings";

export default {
  title: "GameSections/ImportSettings",
  component: ImportSettings,
} as Meta;

const Template: Story<ImportSettingsProps> = (args) => (
  <ImportSettings {...args} />
);

export const Default = Template.bind({});
Default.args = {};
