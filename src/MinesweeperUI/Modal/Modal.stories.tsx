import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Modal } from "./Modal";
import type { ModalProps } from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {};
