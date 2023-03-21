import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input } from "./Input";
import type { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};
