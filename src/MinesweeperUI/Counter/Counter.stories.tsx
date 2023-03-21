import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Counter } from "./Counter";
import type { CounterProps } from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
} as Meta;

const Template: Story<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {};
