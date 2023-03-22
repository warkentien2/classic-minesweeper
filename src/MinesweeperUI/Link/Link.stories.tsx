import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Link } from "./Link";
import type { LinkProps } from "./Link";

export default {
  title: "Components/Link",
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
