import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Digit } from "./Digit";
import type { DigitProps } from "./Digit";

export default {
  title: "Digit",
  component: Digit,
} as Meta;

const Template: Story<DigitProps> = (args) => <Digit {...args} />;

export const Default = Template.bind({});
Default.args = {};
