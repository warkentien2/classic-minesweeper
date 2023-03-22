import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { LinkGroup, Link } from "../../MinesweeperUI";
import type { LinkGroupProps } from "../../MinesweeperUI/types";

export default {
  title: "Components/LinkGroup",
  component: LinkGroup,
} as Meta;

const Template: Story<LinkGroupProps> = (args) => (
  <LinkGroup {...args}>
    <Link>testing</Link>
    <Link>these</Link>
    <Link>links</Link>
  </LinkGroup>
);

export const Default = Template.bind({});
Default.args = {};
