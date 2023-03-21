import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Clock } from "./Clock";
import type { ClockProps } from "./Clock";

export default {
  title: "Clock",
  component: Clock,
} as Meta;

const Template: Story<ClockProps> = (args) => <Clock {...args} />;

export const Default = Template.bind({});
Default.args = {};
