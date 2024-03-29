import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Tile } from "./Tile";
import type { TileProps } from "./Tile";

export default {
  title: "Components/Tile",
  component: Tile,
} as Meta;

const Template: Story<TileProps> = (args) => <Tile {...args} />;

export const Default = Template.bind({});
Default.args = {};
